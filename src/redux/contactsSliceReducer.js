export const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

export const addContactsFulfilledReducer = (state, action) => {
  state.items.unshift(action.payload);
};

export const deleteContactsFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

export const editContactsFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

export const anyPendingReducer = state => {
  state.isLoading = true;
};
export const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
