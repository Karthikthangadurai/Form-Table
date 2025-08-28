import React from 'react'
import App from '../App';

const Form = ({formData, handleFormDataChange, handleSubmit, editIndex}) => {
  return (
    <>
    <h1 className="text-3xl text-purple-800 font-semibold mb-4 text-center">FORM TABLE</h1>
    <form className="border rounded-lg p-4" onSubmit={handleSubmit}>
       <div className="flex gap-2 items-center "><p className="text-blue-800 font-semibold">NAME: </p> < input className="w-full p-2 border rounded-lg mb-2" type="name" placeholder="Enter your name"
         onChange={(event) =>{const {value} = event.target; handleFormDataChange("name", value);}} required value={formData.name} /></div>
        <div className="flex gap-2 items-center "><p className="text-blue-800 font-semibold">EMAIL: </p><input className="w-full p-2 border rounded-lg mb-2" type="email" placeholder="Enter your email"
         onChange={(event) =>{const {value} = event.target; handleFormDataChange("email", value);}} required value={formData.email} /> </div>
        <div className="flex justify-center"> <button className="bg-green-500 w-60 text-white px-4 py-2 rounded " type="Submit">{editIndex === null ? "Submit" : "Edit"}</button></div>
    </form>
    </>
  );
};

export default Form;