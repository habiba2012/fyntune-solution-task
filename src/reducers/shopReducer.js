const initialState = {
    data: [],
};

const shop = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_SHOP":
            return {
                ...state,
                data: [...state.data, action.message]
            };
        case "EDIT_SHOP":
            return {}
        default:
            return state;
    }
};

export default shop;