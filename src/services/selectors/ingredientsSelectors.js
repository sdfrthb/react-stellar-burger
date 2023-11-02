export const ingredientsSelector = (store) =>
  store.ingredients.ingredientsArray;

export const loadingSelector = (store) =>
  store.ingredients.isLoading;

export const errorSelector = (store) =>
  store.ingredients.error;

export const currentIngredientSelector = (store) =>
  store.ingredients.currentIngredient
