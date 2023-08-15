const initialState = [];

const addItems = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITEM":
            if (!state.some((item) => item.id === action.payload.id)) {
                return [...state, action.payload];
            }
            return state;

        case "DELITEM":
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};

export default addItems;
