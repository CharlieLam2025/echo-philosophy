// 整个 app 只有这两个颜色。无第三色。
// 添加任何新颜色前请重新阅读"反系统"原则。
export const palette = {
  bg: '#000000',
  fg: '#f5f1e8',
} as const;

// React Native 跨平台衬线 fallback。
// V1.1 之后再考虑 expo-font 加载 Cormorant Garamond。
export const type = {
  serif: 'serif',
} as const;
