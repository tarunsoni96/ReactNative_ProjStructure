const { addService,removeService,decreaseServiceQty, increaseServiceQty, clearService, changeUserType, setTierPurchaseData } = require("../Actions/ActionTypes");

export const addServiceFunction = (obj) => {
    return {
        type : addService,
        payload:obj
    }
}



export const removeServiceFunction = (obj) => {
    return {
        type : removeService,
        payload:obj
    }
}

export const clearServiceFunction = (obj) => {
    return {
        type : clearService,
        payload:obj
    }
}

export const decreaseServiceQtyFunction = (obj) => {
    return {
        type : decreaseServiceQty,
        payload:obj
    }
}

export const increaseServiceQtyFunction = (obj) => {
    return {
        type : increaseServiceQty,
        payload:obj
    }
}
export const changeUserTypeFunction = (obj) => {
    return {
        type : changeUserType,
        payload:obj
    }
}

export const setTierPurchaseDataFunction = (obj) => {
    return {
        type : setTierPurchaseData,
        payload:obj
    }
}
