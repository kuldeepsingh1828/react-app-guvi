import axios from "axios";
let intial = { data: [], error: false };
export default function reducer(state = intial, action) {
    console.log(state);
    switch (action.type) {
        case 'GET_DATA':
            axios.get("https://jsonplaceholder.typicode.com/todos/1").
                then((respone) => {
                    state = { data: respone.data };
                    console.log(state);
                })
                .catch();
            break;
        case 'DELETE':
            let data = state.data.filter((e, index) => action.index != index);
            state = { ...state, data: [...data] };
            break;
        case 'UPDATE_TEXT':
            state.data[action.Index] = { text: action.value };
            state = { ...state };
            break;
        case 'ADD_TEXT':
            state = { ...state, data: [...state.data, { text: action.value }] };
            break;
        // case 'GET_DATA':
        //     state = { ...state, data: [{ text: 'text text 1' }, { text: 'text text 2' }] }
        //     break;
        default:
    }
    return state;
}