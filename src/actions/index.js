import {
    ADD_TO_SHOP,
    EDIT_SHOP,
    DELETE_SHOP
} from './action-types/shop-actions';

export const addToShop = (message) => {
    return {

        type: ADD_TO_SHOP,
        message,
        id: Math.random()

    }
}

//edit shop action
export const editShop = (id) => {
    return {
        type: EDIT_SHOP,
        id
    }
}
//remove shop action
export const deleteShop = (id) => {
    return {
        type: DELETE_SHOP,
        id
    }
}








