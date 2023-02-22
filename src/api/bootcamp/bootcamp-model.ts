export interface Bootcamp {
  id: string;
  signatures: string[];
}

const cosasQueYaSe: Bootcamp[] = [];

export const findAll = () => cosasQueYaSe;

export const findById = (id: string) =>
  cosasQueYaSe.find(cosas => cosas.id === id);

export const createThing = (newThing: Bootcamp) => {
  if (cosasQueYaSe.some(cosas => cosas.id === newThing.id)) {
    throw new Error('The signature exist');
  }

  cosasQueYaSe.push(newThing);
};
