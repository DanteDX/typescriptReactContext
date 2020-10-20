import React,{useEffect} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {PostAction} from '../actions/PostAction';

interface PostActionType{
    PostAction:()=>void;
    postData:{userId:number,id:number,title:string,completed:boolean}[];
}

const News = (props:PostActionType) => {
    const {postData,PostAction} = props;
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                return response.data;
            }catch(err){
                console.log(err);
            }
        }
    fetchData().then(data => console.log(data));
    console.log("Before post action calling");
    PostAction();
    console.log('After post action calling');
    },[]);
    return (
        
        <div>
            <p>News Compoenent</p>
            {postData.map(each => <p key={Math.random()}>{each.title}</p>)}
        </div>
    )
}

interface stateInterface{
    PostReducer:{postData:{userId:number,id:number,title:string,completed:boolean}[]};
}
const mapStateToProps = (state:stateInterface) =>({
    postData:state.PostReducer.postData
})

export default connect(mapStateToProps,{PostAction})(News);
