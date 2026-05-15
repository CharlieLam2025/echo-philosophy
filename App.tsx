import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Animated,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROMPTS } from './src/prompts';
import { palette, type as typo } from './src/theme';

// 命名说明:
// - Cut: 被刺中的瞬间(主页面)
// - Void: 留下之后的虚无(持续黑屏)
// - Echo: 用户写下的一条回应
// 没用 Card / Item / Entry 这些硅谷标准词,因为语言塑造产品。

type Phase = 'cut' | 'fading' | 'void' | 'echoes' | 'settings';

interface Echo {
  id: string;
  prompt: string;
  response: string;
  timestamp: number;
}

const STORAGE_KEY = '@zarathustra/echoes';

function pickPrompt(): string {
  return PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('cut');
  const [currentPrompt] = useState<string>(pickPrompt());
  const [response, setResponse] = useState<string>('');
  const [echoes, setEchoes] = useState<Echo[]>([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((s) => {
      if (s) setEchoes(JSON.parse(s) as Echo[]);
    });
  }, []);

  // 写完留下:存储 → 1秒淡出 → 5秒不可中断黑屏 → Void。
  // 整个 6 秒过程中 fading 视图 pointerEvents='none',无法被打断。
  // 这是设计:逼用户坐在自己刚说的话的回响里。
  const onLeave = async () => {
    const newEcho: Echo = {
      id: String(Date.now()),
      prompt: currentPrompt,
      response: response,
      timestamp: Date.now(),
    };
    const next = [newEcho, ...echoes];
    setEchoes(next);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setResponse('');
    setPhase('fading');
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        setPhase('void');
        fadeAnim.setValue(1);
      }, 5000);
    });
  };

  const onClearAll = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setEchoes([]);
    setPhase('void');
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={palette.bg} />
      {phase === 'cut' && (
        <Cut
          prompt={currentPrompt}
          response={response}
          setResponse={setResponse}
          onLeave={onLeave}
        />
      )}
      {phase === 'fading' && (
        <Animated.View
          style={[styles.fill, { opacity: fadeAnim }]}
          pointerEvents="none"
        >
          <View style={styles.cutInner}>
            <Text style={styles.promptText}>{currentPrompt}</Text>
          </View>
        </Animated.View>
      )}
      {phase === 'void' && <Void onEnterEchoes={() => setPhase('echoes')} />}
      {phase === 'echoes' && (
        <Echoes
          echoes={echoes}
          onLeave={() => setPhase('void')}
          onSettings={() => setPhase('settings')}
        />
      )}
      {phase === 'settings' && (
        <Settings onClearAll={onClearAll} onBack={() => setPhase('echoes')} />
      )}
    </View>
  );
}

type CutProps = {
  prompt: string;
  response: string;
  setResponse: (s: string) => void;
  onLeave: () => void;
};

function Cut({ prompt, response, setResponse, onLeave }: CutProps) {
  // 注意:
  // - 没有"返回"或"跳过"按钮。用户只能写或不写。
  // - 输入框无 placeholder。任何 placeholder 都是引导。
  // - 没有 autoFocus。让用户自己决定是否打开键盘。
  // - 留空也能"留下"——沉默也是回应。
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.fill}
    >
      <View style={styles.cutInner}>
        <Text style={styles.promptText}>{prompt}</Text>
        <TextInput
          style={styles.input}
          value={response}
          onChangeText={setResponse}
          multiline
          autoFocus={false}
          selectionColor={palette.fg}
        />
        <Pressable onPress={onLeave} style={styles.leaveButton} hitSlop={20}>
          <Text style={styles.leaveText}>留下</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

type VoidProps = {
  onEnterEchoes: () => void;
};

function Void({ onEnterEchoes }: VoidProps) {
  // 持续黑屏。除了长按 1.5 秒进入回声集,没有任何动作。
  // 用户应该 home 键退出 app——app 不导航你离开。
  return (
    <Pressable
      onLongPress={onEnterEchoes}
      delayLongPress={1500}
      style={styles.fill}
    >
      <View style={styles.fill} />
    </Pressable>
  );
}

type EchoesProps = {
  echoes: Echo[];
  onLeave: () => void;
  onSettings: () => void;
};

function Echoes({ echoes, onLeave, onSettings }: EchoesProps) {
  // 回声为空时,FlatList 渲染空。不写 ListEmptyComponent。
  // 空就是真的空——这是尼采想让你面对的。
  return (
    <View style={styles.fill}>
      <Pressable
        onPress={onLeave}
        onLongPress={onSettings}
        delayLongPress={1500}
        style={styles.echoLogo}
        hitSlop={20}
      >
        <Text style={styles.echoLogoText}>echo</Text>
      </Pressable>
      <FlatList
        data={echoes}
        keyExtractor={(e) => e.id}
        contentContainerStyle={styles.echoList}
        renderItem={({ item }) => (
          <View style={styles.echoItem}>
            <Text style={styles.echoPrompt}>{item.prompt}</Text>
            {item.response.trim().length > 0 && (
              <Text style={styles.echoResponse}>{item.response}</Text>
            )}
            <Text style={styles.echoTime}>{formatTime(item.timestamp)}</Text>
          </View>
        )}
      />
    </View>
  );
}

type SettingsProps = {
  onClearAll: () => void;
  onBack: () => void;
};

function Settings({ onClearAll, onBack }: SettingsProps) {
  // V1 设置只有两项:清空所有回声 / 返回。
  // 不做"暂停推送"——V1 还没有推送可暂停。
  // 不写"确认要清空吗?"——尼采不问。
  return (
    <View style={styles.fill}>
      <View style={styles.settingsInner}>
        <Pressable onPress={onClearAll} style={styles.settingsRow}>
          <Text style={styles.settingsText}>清空所有回声</Text>
        </Pressable>
        <Pressable onPress={onBack} style={styles.settingsRow}>
          <Text style={styles.settingsText}>返回</Text>
        </Pressable>
      </View>
    </View>
  );
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  const hr = String(d.getHours()).padStart(2, '0');
  const mn = String(d.getMinutes()).padStart(2, '0');
  return `${yr}.${mo}.${da}  ${hr}:${mn}`;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  fill: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  cutInner: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 100,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  promptText: {
    fontFamily: typo.serif,
    fontSize: 26,
    lineHeight: 42,
    color: palette.fg,
  },
  input: {
    fontFamily: typo.serif,
    fontSize: 18,
    lineHeight: 30,
    color: palette.fg,
    flex: 1,
    marginVertical: 40,
    textAlignVertical: 'top',
  },
  leaveButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
  },
  leaveText: {
    fontFamily: typo.serif,
    fontSize: 18,
    color: palette.fg,
  },
  echoLogo: {
    position: 'absolute',
    top: 60,
    right: 28,
    zIndex: 10,
    padding: 8,
  },
  echoLogoText: {
    fontFamily: typo.serif,
    fontSize: 13,
    color: palette.fg,
    opacity: 0.4,
  },
  echoList: {
    paddingTop: 100,
    paddingBottom: 60,
  },
  echoItem: {
    paddingHorizontal: 32,
    paddingVertical: 28,
  },
  echoPrompt: {
    fontFamily: typo.serif,
    fontSize: 17,
    lineHeight: 28,
    color: palette.fg,
    marginBottom: 10,
  },
  echoResponse: {
    fontFamily: typo.serif,
    fontSize: 16,
    lineHeight: 28,
    color: palette.fg,
    opacity: 0.7,
    marginBottom: 10,
  },
  echoTime: {
    fontFamily: typo.serif,
    fontSize: 11,
    color: palette.fg,
    opacity: 0.3,
  },
  settingsInner: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 32,
  },
  settingsRow: {
    paddingVertical: 24,
  },
  settingsText: {
    fontFamily: typo.serif,
    fontSize: 17,
    color: palette.fg,
  },
});
