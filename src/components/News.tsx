import React,{useEffect} from 'react'
import axios from 'axios';
const News = () => {
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
    },[]);
    return (
        <div>
            <p>News Compoenent</p>
        </div>
    )
}

export default News;
