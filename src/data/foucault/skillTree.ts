import { Concept } from '../types';

export const concepts: Concept[] = [
  {
    id: 'discourse',
    name: '话语',
    original: 'Le discours',
    dependencies: [],
    brief: '语言不只是描述世界——它在制造世界、制造你、制造"正常"',
  },
  {
    id: 'power-knowledge',
    name: '权力-知识',
    original: 'Pouvoir-savoir',
    dependencies: [],
    brief: '知识不是中立的——每一种"真理"背后都站着一种权力',
  },
  {
    id: 'archaeology',
    name: '知识考古学',
    original: 'L\'archéologie du savoir',
    dependencies: ['discourse'],
    brief: '不问"这是不是真的"，问"这在什么条件下被当成真的"',
  },
  {
    id: 'normalization',
    name: '规训',
    original: 'La normalisation',
    dependencies: ['power-knowledge'],
    brief: '不需要暴力——考试、排名、标准就能把你塑造成"正常人"',
  },
  {
    id: 'panopticon',
    name: '全景监狱',
    original: 'Le panoptique',
    dependencies: ['normalization'],
    brief: '你不知道有没有人在看你——所以你自己看管自己',
  },
  {
    id: 'biopower',
    name: '生命权力',
    original: 'Le biopouvoir',
    dependencies: ['power-knowledge'],
    brief: '现代权力不杀你——它管理你的生育、健康、寿命、人口',
  },
  {
    id: 'governmentality',
    name: '治理术',
    original: 'La gouvernementalité',
    dependencies: ['biopower'],
    brief: '权力不只是国家机器——它渗透在你管理自己的每一种方式里',
  },
  {
    id: 'technologies-of-self',
    name: '自我的技术',
    original: 'Technologies de soi',
    dependencies: ['discourse', 'normalization'],
    brief: '日记、冥想、健身、心理咨询——你用来"改善自己"的工具，也在塑造你',
  },
  {
    id: 'parrhesia',
    name: '直言',
    original: 'Parrhēsia',
    dependencies: ['technologies-of-self'],
    brief: '对权力说真话——不是因为安全，恰恰是因为危险',
  },
  {
    id: 'heterotopia',
    name: '异托邦',
    original: 'Hétérotopie',
    dependencies: ['discourse', 'panopticon'],
    brief: '在正常秩序的缝隙中，存在着另一种空间的可能',
  },
];
