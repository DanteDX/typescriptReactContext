import React,{useContext} from 'react';
import {PostContext} from '../contexts/PostContext';

const Form:React.FC = () =>{

    const submitHandler = (e:React.FormEvent) =>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const username = form.username as HTMLInputElement;
        const email = form.email as HTMLInputElement;
        console.log(username.value,email.value);
    }
    const value = useContext(PostContext);
    value!.posts.map(x => console.log(x.postContent));
    value!.postDummy();
    return(
        <form className="registerForm" onSubmit={e => submitHandler(e)}>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="email">Emailv: </label>
            <input type="email" id="email" name="email" />
            <br />
            <input type="submit" value="Register"/>
        </form>
    )
}

export default Form;