const initialState = {
    postData:[]
}

type actionType = {type:string,payload:string[]};
export default function PostReducer(state=initialState,action:actionType){
    const {type,payload} = action;
    switch(type){
        case 'FETCH_TITLE_DATA':
            return{
                ...state,
                postData:[...state.postData,...payload]
            }
        case 'CLEAR_POST_DATA':
            return{
                postData:[]
            }
        default:
            return state;
    }
}