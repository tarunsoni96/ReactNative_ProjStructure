const {
  increaseFoodQty,
  decreaseFoodQty
} = require("../Actions/ActionTypes");

var _ = require("lodash");

const initalState = {
  selectedFoodItems:[],

};

export const addRemoveServiceReducer = (state = initalState, action) => {
  switch (action.type) {
     case increaseFoodQty:
       let index = state.selectedFoodItems.findIndex(v => v.name === action.payload.name)
       if(index == -1 ){
         action.payload.qty +=1
      return {
        selectedFoodItems:[...state.selectedFoodItems,action.payload]
      }
       } else {
         
        let arr = [...state.selectedFoodItems] 
      return {
        ...state,
        selectedFoodItems: state.selectedFoodItems.map((item, i) => {
         if(item.name == action.payload.name){
           item.qty +=1
         }
         return item
     })
       }

      };

    case decreaseFoodQty:
      let arrIndex = state.selectedFoodItems.findIndex(v => v.name === action.payload.name)
      if(state.selectedFoodItems[arrIndex].qty == 0){
        return {
            selectedFoodItems:state.selectedFoodItems
          };
      }
      if(state.selectedFoodItems[arrIndex].qty == 1){
        return {
          ...initalState,
          selectedFoodItems: state.selectedFoodItems.filter((item, i) => {
            return item.name !== action.payload.name
        })
        };
      } else {

        return {
          ...initalState,
          selectedFoodItems: state.selectedFoodItems.map((item, i) => {
            if(item.name == action.payload.name){
              item.qty -=1
            }
            return item
          })
        };
      }
        
    default:
      return { ...state };
  }
};
