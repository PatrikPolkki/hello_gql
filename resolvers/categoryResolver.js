const categoryData = [
  {
    id: "1",
    categoryName: "Mammal",
  },
];

export default {
  Species: {
    category(parent) {
      console.log("species", parent);
      return categoryData
        .filter((category) => category.id === parent.category)
        .pop();
    },
  },
};
