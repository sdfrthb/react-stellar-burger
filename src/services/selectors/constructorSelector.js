export const bunSelector = (store) => store.burgerConstructor.bun;

export const fillingsSelector = (store) => store.burgerConstructor.fillings;

export const priceSelector = (store) => {
  if (store.burgerConstructor.bun) {
    return store.burgerConstructor.fillings.reduce(
      (sum, currPrice) => (sum += currPrice.price),
      2 * store.burgerConstructor.bun.price
    );
  } else {
    return 0;
  }
};

export const allIdSelector = (store) => {
  if (store.burgerConstructor.bun) {
    if (store.burgerConstructor.fillings) {
      const fillingsId = store.burgerConstructor.fillings.map(
        (item) => item._id
      );
      return [...fillingsId, store.burgerConstructor.bun._id];
    }
  }
};

// export const countSelector = (store) =>
//   if (store.burgerConstructor.bun) {
//     if (store.burgerConstructor.fillings) {
//       const choosenIngredients = [store.burgerConstructor.bun, store.burgerConstructor.fillings]
//       return choosenIngredients.filter((item) => item?._id === id).length || false
//     }
//     else {
//       return false
//     }
//   }
//   else {
//     return false
//   }
// }
