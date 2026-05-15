// src/data/camus/skillTree.ts
var concepts = [
  {
    id: "absurd",
    name: "\u8352\u8BDE",
    original: "L'Absurde",
    dependencies: [],
    brief: "\u4EBA\u62FC\u547D\u60F3\u8981\u610F\u4E49\uFF0C\u4E16\u754C\u62FC\u547D\u4E0D\u7ED9\u2014\u2014\u8FD9\u79CD\u51B2\u649E\u5C31\u662F\u8352\u8BDE"
  },
  {
    id: "philosophical-suicide",
    name: "\u54F2\u5B66\u81EA\u6740",
    original: "Le suicide philosophique",
    dependencies: ["absurd"],
    brief: "\u7528\u5B97\u6559\u6216\u4F53\u7CFB\u6765\u6D88\u706D\u8352\u8BDE\u2014\u2014\u4E0D\u662F\u89E3\u51B3\u95EE\u9898\uFF0C\u662F\u5047\u88C5\u95EE\u9898\u4E0D\u5B58\u5728"
  },
  {
    id: "lucidity",
    name: "\u6E05\u9192",
    original: "La lucidit\xE9",
    dependencies: ["absurd"],
    brief: "\u770B\u6E05\u4E86\u8352\u8BDE\u8FD8\u4E0D\u95ED\u773C\u2014\u2014\u8FD9\u79CD\u6E05\u9192\u672C\u8EAB\u5C31\u662F\u4E00\u79CD\u82F1\u96C4\u884C\u4E3A"
  },
  {
    id: "revolt",
    name: "\u53CD\u6297",
    original: "La r\xE9volte",
    dependencies: ["lucidity"],
    brief: "\u4E0D\u662F\u53BB\u63A8\u7FFB\u4EC0\u4E48\u2014\u2014\u662F\u5728\u660E\u77E5\u65E0\u610F\u4E49\u7684\u524D\u63D0\u4E0B\uFF0C\u4F9D\u7136\u884C\u52A8"
  },
  {
    id: "sisyphus",
    name: "\u897F\u897F\u5F17\u65AF",
    original: "Sisyphe",
    dependencies: ["revolt", "absurd"],
    brief: "\u77F3\u5934\u6C38\u8FDC\u4F1A\u6EDA\u4E0B\u6765\u2014\u2014\u4F46\u6211\u4EEC\u5FC5\u987B\u60F3\u8C61\u897F\u897F\u5F17\u65AF\u662F\u5E78\u798F\u7684"
  },
  {
    id: "indifference-of-world",
    name: "\u4E16\u754C\u7684\u51B7\u6F20",
    original: "L'indiff\xE9rence du monde",
    dependencies: ["absurd"],
    brief: "\u4E16\u754C\u5BF9\u4F60\u6CA1\u6709\u6076\u610F\uFF0C\u4E5F\u6CA1\u6709\u5584\u610F\u2014\u2014\u5B83\u53EA\u662F\u4E0D\u5728\u4E4E\u4F60"
  },
  {
    id: "freedom-without-hope",
    name: "\u65E0\u671B\u7684\u81EA\u7531",
    original: "La libert\xE9 absurde",
    dependencies: ["lucidity", "indifference-of-world"],
    brief: "\u6CA1\u6709\u6765\u4E16\u3001\u6CA1\u6709\u8865\u507F\u3001\u6CA1\u6709\u610F\u4E49\u2014\u2014\u6240\u4EE5\u4F60\u73B0\u5728\u5F7B\u5E95\u81EA\u7531\u4E86"
  },
  {
    id: "passion-quantity",
    name: "\u6FC0\u60C5\u4E0E\u6570\u91CF",
    original: "La passion et la quantit\xE9",
    dependencies: ["freedom-without-hope"],
    brief: '\u4E0D\u662F\u6D3B\u5F97"\u6709\u610F\u4E49"\uFF0C\u662F\u6D3B\u5F97"\u66F4\u591A"\u2014\u2014\u4F53\u9A8C\u7684\u5E7F\u5EA6\u5C31\u662F\u5BF9\u8352\u8BDE\u7684\u56DE\u7B54'
  },
  {
    id: "creation-absurd",
    name: "\u8352\u8BDE\u7684\u521B\u9020",
    original: "La cr\xE9ation absurde",
    dependencies: ["revolt", "passion-quantity"],
    brief: "\u521B\u9020\u4E0D\u662F\u4E3A\u4E86\u7559\u4E0B\u4EC0\u4E48\u2014\u2014\u662F\u5728\u865A\u65E0\u9762\u524D\u505A\u51FA\u4E00\u4E2A\u59FF\u6001"
  },
  {
    id: "solidarity",
    name: "\u56E2\u7ED3",
    original: "La solidarit\xE9",
    dependencies: ["revolt", "sisyphus"],
    brief: "\u6211\u53CD\u6297\uFF0C\u6240\u4EE5\u6211\u4EEC\u5B58\u5728\u2014\u2014\u4E2A\u4EBA\u7684\u53CD\u6297\u6700\u7EC8\u6307\u5411\u5171\u540C\u7684\u547D\u8FD0"
  }
];
export {
  concepts
};
