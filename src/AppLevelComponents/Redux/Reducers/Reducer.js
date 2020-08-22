const {
  addService,
} = require("../Actions/ActionTypes");

var _ = require("lodash");

const initalState = {
};

export const addRemoveServiceReducer = (state = initalState, action) => {
  switch (action.type) {
    case addService:
      return {
        ...initalState,
        selectedServices: [...state.selectedServices, action.payload],
      };

    default:
      return { ...initalState };
  }
};
