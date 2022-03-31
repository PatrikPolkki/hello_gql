import Category from '../models/categoryModel';

export default {
  Species: {
    category(parent, args) {
      console.log('category', parent);
      return Category.findById(parent.id);
    },
  },
  Mutation: {
    addCategory: (parent, args) => {
      console.log('categoryResolver, addCategory', args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};

