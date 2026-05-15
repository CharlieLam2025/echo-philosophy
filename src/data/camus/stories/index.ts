import type { Story } from '../../types';

import { story as absurd } from './absurd';
import { story as philosophicalSuicide } from './philosophical-suicide';
import { story as lucidity } from './lucidity';
import { story as revolt } from './revolt';
import { story as sisyphus } from './sisyphus';
import { story as indifferenceOfWorld } from './indifference-of-world';
import { story as freedomWithoutHope } from './freedom-without-hope';
import { story as passionQuantity } from './passion-quantity';
import { story as creationAbsurd } from './creation-absurd';
import { story as solidarity } from './solidarity';

export const stories: Story[] = [
  absurd,
  philosophicalSuicide,
  lucidity,
  revolt,
  sisyphus,
  indifferenceOfWorld,
  freedomWithoutHope,
  passionQuantity,
  creationAbsurd,
  solidarity,
];

export const storyMap = new Map<string, Story>(
  stories.map((s) => [s.conceptId, s]),
);
