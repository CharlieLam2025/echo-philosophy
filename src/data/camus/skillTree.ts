import { Concept } from '../types';

export const concepts: Concept[] = [
  {
    id: 'absurd',
    name: '荒诞',
    original: 'L\'Absurde',
    dependencies: [],
    brief: '人拼命想要意义，世界拼命不给——这种冲撞就是荒诞',
  },
  {
    id: 'philosophical-suicide',
    name: '哲学自杀',
    original: 'Le suicide philosophique',
    dependencies: ['absurd'],
    brief: '用宗教或体系来消灭荒诞——不是解决问题，是假装问题不存在',
  },
  {
    id: 'lucidity',
    name: '清醒',
    original: 'La lucidité',
    dependencies: ['absurd'],
    brief: '看清了荒诞还不闭眼——这种清醒本身就是一种英雄行为',
  },
  {
    id: 'revolt',
    name: '反抗',
    original: 'La révolte',
    dependencies: ['lucidity'],
    brief: '不是去推翻什么——是在明知无意义的前提下，依然行动',
  },
  {
    id: 'sisyphus',
    name: '西西弗斯',
    original: 'Sisyphe',
    dependencies: ['revolt', 'absurd'],
    brief: '石头永远会滚下来——但我们必须想象西西弗斯是幸福的',
  },
  {
    id: 'indifference-of-world',
    name: '世界的冷漠',
    original: 'L\'indifférence du monde',
    dependencies: ['absurd'],
    brief: '世界对你没有恶意，也没有善意——它只是不在乎你',
  },
  {
    id: 'freedom-without-hope',
    name: '无望的自由',
    original: 'La liberté absurde',
    dependencies: ['lucidity', 'indifference-of-world'],
    brief: '没有来世、没有补偿、没有意义——所以你现在彻底自由了',
  },
  {
    id: 'passion-quantity',
    name: '激情与数量',
    original: 'La passion et la quantité',
    dependencies: ['freedom-without-hope'],
    brief: '不是活得"有意义"，是活得"更多"——体验的广度就是对荒诞的回答',
  },
  {
    id: 'creation-absurd',
    name: '荒诞的创造',
    original: 'La création absurde',
    dependencies: ['revolt', 'passion-quantity'],
    brief: '创造不是为了留下什么——是在虚无面前做出一个姿态',
  },
  {
    id: 'solidarity',
    name: '团结',
    original: 'La solidarité',
    dependencies: ['revolt', 'sisyphus'],
    brief: '我反抗，所以我们存在——个人的反抗最终指向共同的命运',
  },
];
