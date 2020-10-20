import axios from 'axios';
import {Dispatch} from 'redux';

export const PostAction = () => async (dispatch:Dispatch) =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = response.data;
        dispatch({
            type:'FETCH_TITLE_DATA',
            payload:data
        })
    }catch(err){
        console.log(err)
    }
}
