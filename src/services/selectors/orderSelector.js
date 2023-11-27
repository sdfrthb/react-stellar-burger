export const selectOrderNumber = (store) => store.order.order;

export const orderLoadSelector = (store) => store.order.isLoading;

export const oderIdSelector = (store) => store.order.order.number;
