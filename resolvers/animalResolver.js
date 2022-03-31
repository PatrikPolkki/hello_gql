// resolvers/animalResolver.js
import Animal from '../models/animalModel';

export default {
  Query: {
    animals: (parent, args) => {
      return Animal;
    },
  },
  Mutation: {
    addAnimal: (parent, args) => {
      console.log('animalResolver, addAnimal', args);
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
  },
};
