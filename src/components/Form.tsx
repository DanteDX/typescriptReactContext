import React, { FormEvent } from 'react';

interface Forming{
    propForm:(str:string)=>void;
}

const Form:React.FC<Forming> = props => {
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const currentTask  = e.currentTarget.task.value;
        props.propForm(currentTask);
        e.currentTarget.task.value = "";
    }
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="task">Enter Your current task: </label>
            <input type="text" id="task" name="task" /><br/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;