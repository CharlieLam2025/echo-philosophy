import type { Story } from '../types';

import { story as godIsDead } from './god-is-dead';
import { story as perspectivism } from './perspectivism';
import { story as truthAsFiction } from './truth-as-fiction';
import { story as ressentiment } from './ressentiment';
import { story as slaveMorality } from './slave-morality';
import { story as willToPower } from './will-to-power';
import { story as apollonianDionysian } from './apollonian-dionysian';
import { story as threeMetamorphoses } from './three-metamorphoses';
import { story as freeSpirit } from './free-spirit';
import { story as amorFati } from './amor-fati';
import { story as ubermensch } from './ubermensch';
import { story as lastMan } from './last-man';
import { story as herdAnimal } from './herd-animal';
import { story as pityDanger } from './pity-danger';
import { story as eternalReturn } from './eternal-return';
import { story as badConscience } from './bad-conscience';
import { story as asceticIdeal } from './ascetic-ideal';
import { story as nihilism } from './nihilism';
import { story as abyss } from './abyss';
import { story as masterMorality } from './master-morality';
import { story as genealogy } from './genealogy';
import { story as revaluation } from './revaluation';
import { story as pathosOfDistance } from './pathos-of-distance';
import { story as gayScience } from './gay-science';
import { story as creatorSolitude } from './creator-solitude';

export const stories: Story[] = [
  godIsDead,
  perspectivism,
  truthAsFiction,
  ressentiment,
  slaveMorality,
  willToPower,
  apollonianDionysian,
  threeMetamorphoses,
  freeSpirit,
  amorFati,
  ubermensch,
  lastMan,
  herdAnimal,
  pityDanger,
  eternalReturn,
  badConscience,
  asceticIdeal,
  nihilism,
  abyss,
  masterMorality,
  genealogy,
  revaluation,
  pathosOfDistance,
  gayScience,
  creatorSolitude,
];

export const storyMap = new Map<string, Story>(
  stories.map((s) => [s.conceptId, s]),
);
