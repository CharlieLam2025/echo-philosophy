// src/data/skillTree.ts
var concepts = [
  {
    id: "god-is-dead",
    name: "\u4E0A\u5E1D\u4E4B\u6B7B",
    original: "Gott ist tot",
    dependencies: [],
    brief: '\u6240\u6709"\u4E0A\u9762\u6709\u4EC0\u4E48\u4E1C\u897F\u5728\u8BC4\u5224\u6211"\u7684\u6574\u4F53\u5D29\u584C'
  },
  {
    id: "perspectivism",
    name: "\u89C6\u89D2\u4E3B\u4E49",
    original: "Perspektivismus",
    dependencies: ["god-is-dead"],
    brief: '\u6CA1\u6709"\u4E0A\u5E1D\u4E4B\u773C"\uFF0C\u6240\u6709\u8BA4\u8BC6\u90FD\u4ECE\u67D0\u4E2A\u4F4D\u7F6E\u51FA\u53D1'
  },
  {
    id: "truth-as-fiction",
    name: "\u771F\u7406\u7684\u865A\u6784\u6027",
    dependencies: ["perspectivism"],
    brief: "\u771F\u7406\u4E0D\u662F\u53D1\u73B0\uFF0C\u662F\u53D1\u660E\u2014\u2014\u662F\u6D3B\u4E0B\u53BB\u6240\u9700\u7684\u90A3\u7C7B\u9519\u8BEF"
  },
  {
    id: "ressentiment",
    name: "\u6028\u6068",
    original: "Ressentiment",
    dependencies: ["god-is-dead"],
    brief: '\u65E0\u529B\u884C\u52A8\u7684\u4EBA\u628A"\u4E0D\u80FD"\u7FFB\u8BD1\u6210"\u4E0D\u5E94\u8BE5"'
  },
  {
    id: "slave-morality",
    name: "\u5974\u96B6\u9053\u5FB7",
    original: "Sklavenmoral",
    dependencies: ["ressentiment"],
    brief: "\u5F31\u8005\u53D1\u660E\u9053\u5FB7\u4F53\u7CFB\uFF0C\u628A\u5F3A\u8005\u7684\u7F8E\u5FB7\u91CD\u65B0\u5B9A\u4E49\u4E3A\u6076"
  },
  {
    id: "will-to-power",
    name: "\u6743\u529B\u610F\u5FD7",
    original: "Wille zur Macht",
    dependencies: ["slave-morality", "truth-as-fiction"],
    brief: "\u751F\u547D\u6700\u6839\u672C\u7684\u9A71\u529B\uFF1A\u4E0D\u65AD\u81EA\u6211\u8D85\u51FA\u3001\u81EA\u6211\u514B\u670D"
  },
  {
    id: "apollonian-dionysian",
    name: "\u963F\u6CE2\u7F57\u4E0E\u72C4\u5965\u5C3C\u7D22\u65AF",
    original: "Apollinisch und Dionysisch",
    dependencies: ["will-to-power"],
    brief: "\u79E9\u5E8F\u4E4B\u68A6\u4E0E\u751F\u547D\u4E4B\u9189\u2014\u2014\u4E24\u79CD\u827A\u672F\u7CBE\u795E\u7684\u6C38\u6052\u5F20\u529B"
  },
  {
    id: "three-metamorphoses",
    name: "\u4E09\u79CD\u53D8\u5F62",
    original: "Drei Verwandlungen",
    dependencies: ["will-to-power", "slave-morality"],
    brief: "\u9A86\u9A7C\u2192\u72EE\u5B50\u2192\u5B69\u5B50\uFF1A\u7CBE\u795E\u6210\u719F\u7684\u4E09\u4E2A\u9636\u6BB5"
  },
  {
    id: "free-spirit",
    name: "\u81EA\u7531\u7CBE\u795E",
    original: "Freigeist",
    dependencies: ["three-metamorphoses"],
    brief: '\u4ECE\u6240\u6709"\u4F60\u5E94\u5F53"\u4E2D\u6323\u8131\uFF0C\u5F00\u59CB\u4E3A\u81EA\u5DF1\u7ACB\u6CD5'
  },
  {
    id: "amor-fati",
    name: "\u547D\u8FD0\u4E4B\u7231",
    original: "Amor fati",
    dependencies: ["free-spirit", "apollonian-dionysian"],
    brief: "\u4E0D\u4EC5\u63A5\u53D7\u547D\u8FD0\uFF0C\u800C\u4E14\u70ED\u7231\u5B83\u2014\u2014\u5305\u62EC\u6240\u6709\u7684\u75DB"
  },
  {
    id: "ubermensch",
    name: "\u8D85\u4EBA",
    original: "\xDCbermensch",
    dependencies: ["three-metamorphoses", "amor-fati"],
    brief: "\u4E0D\u5026\u4E8E\u81EA\u6211\u8D85\u8D8A\u3001\u4EE5\u521B\u9020\u4E3A\u751F\u547D\u65B9\u5F0F\u7684\u4EBA"
  },
  {
    id: "last-man",
    name: "\u672B\u4EBA",
    original: "Letzter Mensch",
    dependencies: ["god-is-dead"],
    brief: "\u653E\u5F03\u81EA\u6211\u8D85\u8D8A\u3001\u53EA\u8FFD\u6C42\u8212\u9002\u7684\u6700\u540E\u7684\u4EBA"
  },
  {
    id: "herd-animal",
    name: "\u7FA4\u5C45\u52A8\u7269",
    original: "Herdentier",
    dependencies: ["last-man", "slave-morality"],
    brief: '\u7528"\u5927\u5BB6\u90FD\u8FD9\u6837"\u6D88\u89E3\u4E2A\u4F53\u5224\u65AD\u7684\u96C6\u4F53\u672C\u80FD'
  },
  {
    id: "pity-danger",
    name: "\u540C\u60C5\u7684\u5371\u9669",
    original: "Mitleid",
    dependencies: ["herd-animal", "will-to-power"],
    brief: "\u540C\u60C5\u524A\u5F31\u53D7\u82E6\u8005\u7684\u81EA\u6211\u8D85\u8D8A\u80FD\u529B"
  },
  {
    id: "eternal-return",
    name: "\u6C38\u6052\u8F6E\u56DE",
    original: "Ewige Wiederkunft",
    dependencies: ["amor-fati", "ubermensch"],
    brief: "\u5982\u679C\u8FD9\u4E00\u5207\u5C06\u65E0\u9650\u91CD\u590D\u2014\u2014\u4F60\u8FD8\u613F\u610F\u5417\uFF1F"
  },
  // ── 新增概念 ──
  {
    id: "nihilism",
    name: "\u865A\u65E0\u4E3B\u4E49",
    original: "Nihilismus",
    dependencies: ["god-is-dead"],
    brief: "\u4E0A\u5E1D\u6B7B\u540E\u7684\u771F\u7A7A\u2014\u2014\u5F53\u6240\u6709\u610F\u4E49\u6846\u67B6\u574D\u584C\uFF0C\u4EBA\u7AD9\u5728\u65E0\u5E95\u7684\u6DF1\u6E0A\u524D"
  },
  {
    id: "bad-conscience",
    name: "\u574F\u826F\u5FC3",
    original: "Schlechtes Gewissen",
    dependencies: ["ressentiment", "slave-morality"],
    brief: "\u653B\u51FB\u6027\u65E0\u5904\u91CA\u653E\uFF0C\u4E8E\u662F\u8F6C\u5411\u81EA\u8EAB\u2014\u2014\u5185\u759A\u7684\u771F\u6B63\u8D77\u6E90"
  },
  {
    id: "ascetic-ideal",
    name: "\u7981\u6B32\u7406\u60F3",
    original: "Asketisches Ideal",
    dependencies: ["bad-conscience"],
    brief: "\u81EA\u6211\u5426\u5B9A\u5982\u4F55\u88AB\u5305\u88C5\u6210\u7F8E\u5FB7\u2014\u2014\u5B81\u53EF\u8FFD\u6C42\u865A\u65E0\uFF0C\u4E5F\u4E0D\u80FD\u65E0\u6240\u8FFD\u6C42"
  },
  {
    id: "master-morality",
    name: "\u4E3B\u4EBA\u9053\u5FB7",
    original: "Herrenmoral",
    dependencies: ["slave-morality"],
    brief: '\u5148\u80AF\u5B9A\u81EA\u5DF1\uFF0C\u518D\u5B9A\u4E49\u4E16\u754C\u2014\u2014"\u597D"\u4E0D\u662F\u88AB\u89C4\u5B9A\u7684\uFF0C\u662F\u4ECE\u81EA\u8EAB\u6EA2\u51FA\u7684'
  },
  {
    id: "genealogy",
    name: "\u8C31\u7CFB\u5B66",
    original: "Genealogie",
    dependencies: ["perspectivism"],
    brief: '\u4E0D\u95EE"\u8FD9\u662F\u4EC0\u4E48"\uFF0C\u800C\u95EE"\u8FD9\u4ECE\u54EA\u91CC\u6765\u3001\u4E3A\u8C01\u670D\u52A1"'
  },
  {
    id: "revaluation",
    name: "\u91CD\u4F30\u4E00\u5207\u4EF7\u503C",
    original: "Umwertung aller Werte",
    dependencies: ["genealogy", "nihilism"],
    brief: '\u4E0D\u5728\u65E7\u6846\u67B6\u91CC\u4FEE\u8865\uFF0C\u800C\u662F\u8FFD\u95EE\u6BCF\u4E00\u4E2A"\u7406\u6240\u5F53\u7136"\u7684\u6765\u5386'
  },
  {
    id: "pathos-of-distance",
    name: "\u8DDD\u79BB\u7684\u6FC0\u60C5",
    original: "Pathos der Distanz",
    dependencies: ["master-morality", "free-spirit"],
    brief: "\u4E0D\u662F\u50B2\u6162\uFF0C\u662F\u62D2\u7EDD\u8BA9\u5916\u754C\u7684\u6807\u51C6\u66FF\u4EE3\u81EA\u5DF1\u7684\u5C3A\u5EA6"
  },
  {
    id: "gay-science",
    name: "\u5FEB\u4E50\u7684\u79D1\u5B66",
    original: "Die fr\xF6hliche Wissenschaft",
    dependencies: ["god-is-dead", "truth-as-fiction"],
    brief: "\u77E5\u8BC6\u4E0D\u662F\u6C89\u91CD\u7684\u4E49\u52A1\uFF0C\u662F\u8DF3\u7740\u821E\u53BB\u8BA4\u8BC6\u4E16\u754C"
  },
  {
    id: "creator-solitude",
    name: "\u521B\u9020\u8005\u7684\u5B64\u72EC",
    original: "Einsamkeit des Schaffenden",
    dependencies: ["free-spirit", "will-to-power"],
    brief: "\u521B\u9020\u5FC5\u7136\u610F\u5473\u7740\u79BB\u5F00\u4EBA\u7FA4\u2014\u2014\u4E0D\u662F\u88AB\u5B64\u7ACB\uFF0C\u662F\u4E3B\u52A8\u8D70\u5165\u65F7\u91CE"
  },
  {
    id: "abyss",
    name: "\u6DF1\u6E0A",
    original: "Abgrund",
    dependencies: ["nihilism"],
    brief: "\u5F53\u4F60\u51DD\u89C6\u6DF1\u6E0A\u65F6\uFF0C\u6DF1\u6E0A\u4E5F\u5728\u51DD\u89C6\u4F60\u2014\u2014\u76F4\u9762\u865A\u65E0\u7684\u52C7\u6C14\u4E0E\u4EE3\u4EF7"
  }
];
export {
  concepts
};
