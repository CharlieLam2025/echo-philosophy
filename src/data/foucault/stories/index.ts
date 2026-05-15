import type { Story } from '../../types';

import { story as discourse } from './discourse';
import { story as powerKnowledge } from './power-knowledge';
import { story as archaeology } from './archaeology';
import { story as normalization } from './normalization';
import { story as panopticon } from './panopticon';
import { story as biopower } from './biopower';
import { story as governmentality } from './governmentality';
import { story as technologiesOfSelf } from './technologies-of-self';
import { story as parrhesia } from './parrhesia';
import { story as heterotopia } from './heterotopia';

export const stories: Story[] = [
  discourse,
  powerKnowledge,
  archaeology,
  normalization,
  panopticon,
  biopower,
  governmentality,
  technologiesOfSelf,
  parrhesia,
  heterotopia,
];

export const storyMap = new Map<string, Story>(
  stories.map((s) => [s.conceptId, s]),
);
