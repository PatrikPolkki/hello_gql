// schema/animalSchema.js
import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    animals: [Animal]
  }

  type Animal {
    id: ID
    animalName: String
    species: Species
  }
  
    extend type Mutation {
    addAnimal(animalName: String, species: ID): Animal
  }
`;
