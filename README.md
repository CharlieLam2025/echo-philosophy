# zarathustra-echo

不教尼采、用尼采的方式刺穿日常的反 app。

## 当前阶段：第一步（V1 of MVP）

题库静态显示 + 输入 + 本地存储 + 回声集页面。
推送（第二步）和 AI 介入（V1.1）尚未实现。

## 本地运行

```
cd projects\zarathustra-echo
npm install
npm run start
```

然后用手机的 Expo Go 扫描终端二维码。

## 全部"导航"（无可见菜单）

| 在哪 | 做什么 | 去哪 |
|---|---|---|
| Cut（刺问页） | 点 "留下" | 1秒淡出 → 5秒不可中断黑屏 → Void |
| Void（持续黑屏） | 长按 1.5 秒 | Echoes（回声集） |
| Echoes 右上角 "echo" | 短按 | Void |
| Echoes 右上角 "echo" | 长按 1.5 秒 | Settings |
| Settings | "清空所有回声" / "返回" | — |

打开 app = 看到一条随机刺问。
不写也可以"留下"——沉默也是回应。

## 故意不写的代码

- 没有 onboarding / WelcomeScreen / AppIntro
- 没有 EmptyState 组件 / 空插画 / "暂无内容" 文案
- 没有 Toast / Snackbar / SuccessFeedback
- 没有 StreakCounter / Achievement / ProgressBar
- 没有 User schema / preferences 持久化
- 没有 friendly error message
- 没有第三种颜色

如果发现以上任何一项被偷偷加回来了，说明设计原则被侵蚀。

## V1 验收

- [ ] 关掉网络仍可用（完全本地）
- [ ] 主界面打开 < 1s
- [ ] 写完留下 → 6 秒(1淡出+5黑屏)不可中断 → Void
- [ ] 长按 Void 1.5 秒 → Echoes，看到刚才那条
- [ ] 关闭 app 重开 → 历史回声仍在
- [ ] 题库 5 条占位 prompt 能随机出现
