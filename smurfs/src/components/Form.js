import React from 'react'; 
import { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import cuid from 'cuid';
export const Form = () =>{
    const { newSmurf, setNewSmurf,smurf, Add } = useContext(FormContext);
    const handleChanges= event=>{
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
        console.log({[event.target.name]:event.target.value})
    }
    const handleSubmit = event=>{
        event.preventDefault();
        Add(newSmurf);
    }

    return (
    <div className="formCard">
        <form onSubmit={event=>handleSubmit(event)}>
           <label htmlFor="name"><span>Add Smurf Name: </span></label>  
           <input type="text" value={newSmurf.name} name="name" id="name" onChange={event=>handleChanges(event)}/>
           <label htmlFor="age"><span>Add Smurf Age: </span></label>  
           <input type="text" value={newSmurf.age} name="age" id="age" onChange={event=>handleChanges(event)}/>
           <label htmlFor="height"><span>Add Smurf Height: </span></label>  
           <input type="text" value={newSmurf.height} name="height" id="height" onChange={event=>handleChanges(event)}/>
        </form> 
        <button type="submit" onClick={event=>handleSubmit(event)}>Submit</button>

    </div>)}; 