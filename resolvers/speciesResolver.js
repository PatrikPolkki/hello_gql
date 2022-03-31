import Species from '../models/speciesModel';

export default {
  Animal: {
    species(parent) {
      console.log('species', parent);
      return Species.findById(parent.id);
    },
  },
  Mutation: {
    addSpecies: (parent, args) => {
      console.log('speciesResolver, addSpecies', args);
      const newSpecies = new Species(args);
      return newSpecies.save();
    },
  },
};
