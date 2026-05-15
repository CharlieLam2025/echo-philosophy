// src/data/foucault/skillTree.ts
var concepts = [
  {
    id: "discourse",
    name: "\u8BDD\u8BED",
    original: "Le discours",
    dependencies: [],
    brief: '\u8BED\u8A00\u4E0D\u53EA\u662F\u63CF\u8FF0\u4E16\u754C\u2014\u2014\u5B83\u5728\u5236\u9020\u4E16\u754C\u3001\u5236\u9020\u4F60\u3001\u5236\u9020"\u6B63\u5E38"'
  },
  {
    id: "power-knowledge",
    name: "\u6743\u529B-\u77E5\u8BC6",
    original: "Pouvoir-savoir",
    dependencies: [],
    brief: '\u77E5\u8BC6\u4E0D\u662F\u4E2D\u7ACB\u7684\u2014\u2014\u6BCF\u4E00\u79CD"\u771F\u7406"\u80CC\u540E\u90FD\u7AD9\u7740\u4E00\u79CD\u6743\u529B'
  },
  {
    id: "archaeology",
    name: "\u77E5\u8BC6\u8003\u53E4\u5B66",
    original: "L'arch\xE9ologie du savoir",
    dependencies: ["discourse"],
    brief: '\u4E0D\u95EE"\u8FD9\u662F\u4E0D\u662F\u771F\u7684"\uFF0C\u95EE"\u8FD9\u5728\u4EC0\u4E48\u6761\u4EF6\u4E0B\u88AB\u5F53\u6210\u771F\u7684"'
  },
  {
    id: "normalization",
    name: "\u89C4\u8BAD",
    original: "La normalisation",
    dependencies: ["power-knowledge"],
    brief: '\u4E0D\u9700\u8981\u66B4\u529B\u2014\u2014\u8003\u8BD5\u3001\u6392\u540D\u3001\u6807\u51C6\u5C31\u80FD\u628A\u4F60\u5851\u9020\u6210"\u6B63\u5E38\u4EBA"'
  },
  {
    id: "panopticon",
    name: "\u5168\u666F\u76D1\u72F1",
    original: "Le panoptique",
    dependencies: ["normalization"],
    brief: "\u4F60\u4E0D\u77E5\u9053\u6709\u6CA1\u6709\u4EBA\u5728\u770B\u4F60\u2014\u2014\u6240\u4EE5\u4F60\u81EA\u5DF1\u770B\u7BA1\u81EA\u5DF1"
  },
  {
    id: "biopower",
    name: "\u751F\u547D\u6743\u529B",
    original: "Le biopouvoir",
    dependencies: ["power-knowledge"],
    brief: "\u73B0\u4EE3\u6743\u529B\u4E0D\u6740\u4F60\u2014\u2014\u5B83\u7BA1\u7406\u4F60\u7684\u751F\u80B2\u3001\u5065\u5EB7\u3001\u5BFF\u547D\u3001\u4EBA\u53E3"
  },
  {
    id: "governmentality",
    name: "\u6CBB\u7406\u672F",
    original: "La gouvernementalit\xE9",
    dependencies: ["biopower"],
    brief: "\u6743\u529B\u4E0D\u53EA\u662F\u56FD\u5BB6\u673A\u5668\u2014\u2014\u5B83\u6E17\u900F\u5728\u4F60\u7BA1\u7406\u81EA\u5DF1\u7684\u6BCF\u4E00\u79CD\u65B9\u5F0F\u91CC"
  },
  {
    id: "technologies-of-self",
    name: "\u81EA\u6211\u7684\u6280\u672F",
    original: "Technologies de soi",
    dependencies: ["discourse", "normalization"],
    brief: '\u65E5\u8BB0\u3001\u51A5\u60F3\u3001\u5065\u8EAB\u3001\u5FC3\u7406\u54A8\u8BE2\u2014\u2014\u4F60\u7528\u6765"\u6539\u5584\u81EA\u5DF1"\u7684\u5DE5\u5177\uFF0C\u4E5F\u5728\u5851\u9020\u4F60'
  },
  {
    id: "parrhesia",
    name: "\u76F4\u8A00",
    original: "Parrh\u0113sia",
    dependencies: ["technologies-of-self"],
    brief: "\u5BF9\u6743\u529B\u8BF4\u771F\u8BDD\u2014\u2014\u4E0D\u662F\u56E0\u4E3A\u5B89\u5168\uFF0C\u6070\u6070\u662F\u56E0\u4E3A\u5371\u9669"
  },
  {
    id: "heterotopia",
    name: "\u5F02\u6258\u90A6",
    original: "H\xE9t\xE9rotopie",
    dependencies: ["discourse", "panopticon"],
    brief: "\u5728\u6B63\u5E38\u79E9\u5E8F\u7684\u7F1D\u9699\u4E2D\uFF0C\u5B58\u5728\u7740\u53E6\u4E00\u79CD\u7A7A\u95F4\u7684\u53EF\u80FD"
  }
];
export {
  concepts
};
