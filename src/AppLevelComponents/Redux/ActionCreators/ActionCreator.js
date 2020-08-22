const { decreaseFoodQty, increaseFoodQty, clearFood, } = require("../Actions/ActionTypes");

export const clearFoodFunction = (obj) => {
    return {
        type : clearFood,
        payload:obj
    }
}

export const decreaseFoodQtyFunction = (obj) => {
    return {
        type : decreaseFoodQty,
        payload:obj
    }
}

export const increaseFoodQtyFunction = (obj) => {
    return {
        type : increaseFoodQty,
        payload:obj
    }
}
