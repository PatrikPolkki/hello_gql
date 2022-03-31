// resolvers/animalResolver.js
import Animal from '../models/animalModel';

export default {
  Query: {
    animals: async (parent, args) => {
      return await Animal.find();
    },
  },
  Mutation: {
    addAnimal: async (parent, args) => {
      console.log('animalResolver, addAnimal', args);
      const newAnimal = new Animal(args);
      return await newAnimal.save();
    },
  },
};
