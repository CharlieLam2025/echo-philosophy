// src/data/stoic/skillTree.ts
var concepts = [
  {
    id: "dichotomy-of-control",
    name: "\u63A7\u5236\u7684\u4E8C\u5206\u6CD5",
    original: "Dikhotomia",
    dependencies: [],
    brief: "\u4E16\u754C\u5206\u4E24\u534A\uFF1A\u4F60\u80FD\u63A7\u5236\u7684\uFF0C\u548C\u4F60\u4E0D\u80FD\u63A7\u5236\u7684\u2014\u2014\u53EA\u5728\u524D\u8005\u4E0A\u7528\u529B"
  },
  {
    id: "logos",
    name: "\u903B\u5404\u65AF",
    original: "Logos",
    dependencies: [],
    brief: "\u5B87\u5B99\u6709\u4E00\u5957\u7406\u6027\u79E9\u5E8F\u2014\u2014\u4F60\u662F\u5B83\u7684\u4E00\u90E8\u5206\uFF0C\u4E0D\u662F\u5B83\u7684\u5BF9\u624B"
  },
  {
    id: "virtue-as-sole-good",
    name: "\u552F\u5FB7\u662F\u5584",
    original: "Aret\u0113",
    dependencies: ["logos"],
    brief: '\u8D22\u5BCC\u3001\u5065\u5EB7\u3001\u540D\u58F0\u90FD\u662F"\u65E0\u5173\u7D27\u8981\u7684\u4E8B"\u2014\u2014\u552F\u6709\u54C1\u5FB7\u662F\u771F\u6B63\u7684\u597D'
  },
  {
    id: "apatheia",
    name: "\u4E0D\u52A8\u5FC3",
    original: "Apatheia",
    dependencies: ["dichotomy-of-control"],
    brief: "\u4E0D\u662F\u6CA1\u6709\u611F\u60C5\uFF0C\u662F\u4E0D\u88AB\u611F\u60C5\u62D6\u7740\u8D70\u2014\u2014\u4ECE\u88AB\u52A8\u53CD\u5E94\u53D8\u6210\u4E3B\u52A8\u9009\u62E9"
  },
  {
    id: "premeditatio-malorum",
    name: "\u9884\u60F3\u707E\u96BE",
    original: "Praemeditatio malorum",
    dependencies: ["dichotomy-of-control"],
    brief: "\u63D0\u524D\u60F3\u8C61\u6700\u574F\u7684\u7ED3\u679C\u2014\u2014\u4E0D\u662F\u60B2\u89C2\uFF0C\u662F\u8BA9\u6050\u60E7\u5728\u60F3\u8C61\u4E2D\u5148\u6B7B\u4E00\u6B21"
  },
  {
    id: "memento-mori",
    name: "\u52FF\u5FD8\u6709\u6B7B",
    original: "Memento mori",
    dependencies: ["premeditatio-malorum"],
    brief: "\u4F60\u4F1A\u6B7B\u2014\u2014\u8FD9\u4E0D\u662F\u8BC5\u5492\uFF0C\u662F\u8BA9\u4F60\u4ECA\u5929\u5C31\u5F00\u59CB\u8BA4\u771F\u6D3B\u7684\u552F\u4E00\u7406\u7531"
  },
  {
    id: "present-moment",
    name: "\u6D3B\u5728\u6B64\u523B",
    original: "Hic et nunc",
    dependencies: ["memento-mori"],
    brief: "\u8FC7\u53BB\u5DF2\u4E0D\u53EF\u6539\uFF0C\u672A\u6765\u5C1A\u4E0D\u5B58\u5728\u2014\u2014\u4F60\u552F\u4E00\u62E5\u6709\u7684\u5C31\u662F\u73B0\u5728\u8FD9\u4E00\u523B"
  },
  {
    id: "amor-fati-stoic",
    name: "\u547D\u8FD0\u4E4B\u7231\xB7\u65AF\u591A\u845B",
    original: "Amor fati",
    dependencies: ["dichotomy-of-control", "logos"],
    brief: "\u4E0D\u53EA\u662F\u63A5\u53D7\u53D1\u751F\u7684\u4E8B\u2014\u2014\u800C\u662F\u70ED\u7231\u5B83\uFF0C\u56E0\u4E3A\u5B83\u662F\u5B87\u5B99\u79E9\u5E8F\u7684\u4E00\u90E8\u5206"
  },
  {
    id: "inner-citadel",
    name: "\u5185\u5728\u5821\u5792",
    original: "Hegemonikon",
    dependencies: ["apatheia", "virtue-as-sole-good"],
    brief: "\u4F60\u7684\u5185\u5FC3\u662F\u4E00\u5EA7\u57CE\u5821\u2014\u2014\u5916\u9762\u7684\u4E00\u5207\u53EA\u6709\u4F60\u5141\u8BB8\u624D\u80FD\u8FDB\u6765"
  },
  {
    id: "cosmopolitan",
    name: "\u4E16\u754C\u516C\u6C11",
    original: "Kosmopolit\u0113s",
    dependencies: ["logos"],
    brief: "\u4F60\u4E0D\u53EA\u5C5E\u4E8E\u4F60\u7684\u57CE\u5E02\u3001\u4F60\u7684\u56FD\u5BB6\u2014\u2014\u4F60\u5C5E\u4E8E\u6574\u4E2A\u4EBA\u7C7B\u5171\u540C\u4F53"
  },
  {
    id: "obstacle-is-way",
    name: "\u969C\u788D\u5373\u9053\u8DEF",
    original: "Impedimentum via est",
    dependencies: ["amor-fati-stoic", "inner-citadel"],
    brief: "\u6321\u4F4F\u4F60\u7684\u4E1C\u897F\u4E0D\u662F\u7ED5\u9053\u7684\u7406\u7531\u2014\u2014\u5B83\u672C\u8EAB\u5C31\u662F\u4F60\u8981\u8D70\u7684\u8DEF"
  },
  {
    id: "voluntary-discomfort",
    name: "\u81EA\u613F\u53D7\u82E6",
    original: "Ask\u0113sis",
    dependencies: ["premeditatio-malorum", "apatheia"],
    brief: "\u4E3B\u52A8\u8D70\u8FDB\u4E0D\u8212\u670D\u2014\u2014\u4E0D\u662F\u81EA\u8650\uFF0C\u662F\u7ED9\u81EA\u5DF1\u7684\u97E7\u6027\u505A\u538B\u529B\u6D4B\u8BD5"
  }
];
export {
  concepts
};
