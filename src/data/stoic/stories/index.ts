import type { Story } from '../../types';

import { story as dichotomyOfControl } from './dichotomy-of-control';
import { story as logos } from './logos';
import { story as virtueAsSoleGood } from './virtue-as-sole-good';
import { story as apatheia } from './apatheia';
import { story as premeditatioMalorum } from './premeditatio-malorum';
import { story as mementoMori } from './memento-mori';
import { story as presentMoment } from './present-moment';
import { story as amorFatiStoic } from './amor-fati-stoic';
import { story as innerCitadel } from './inner-citadel';
import { story as cosmopolitan } from './cosmopolitan';
import { story as obstacleIsWay } from './obstacle-is-way';
import { story as voluntaryDiscomfort } from './voluntary-discomfort';

export const stories: Story[] = [
  dichotomyOfControl,
  logos,
  virtueAsSoleGood,
  apatheia,
  premeditatioMalorum,
  mementoMori,
  presentMoment,
  amorFatiStoic,
  innerCitadel,
  cosmopolitan,
  obstacleIsWay,
  voluntaryDiscomfort,
];

export const storyMap = new Map<string, Story>(
  stories.map((s) => [s.conceptId, s]),
);
