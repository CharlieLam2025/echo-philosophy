export interface Protagonist {
  name: string;
  age: number | string;
  occupation: string;
  gender: 'M' | 'F';
}

export interface Layers {
  concept: string;
  now: string;
  deeper: string;
  links: { pre: string[]; post: string[] };
}

export interface Story {
  id: string;
  conceptId: string;
  conceptName: string;
  title: string;
  protagonist: Protagonist;
  body: string;
  layers: Layers;
}

export interface Concept {
  id: string;
  name: string;
  original?: string;
  dependencies: string[];
  brief: string;
}
