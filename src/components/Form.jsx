import React, { useEffect, useState } from 'react'
import { postData } from '../api/PostApi';

const Form = ({data, setData, updateDataApi, setUpdateDataApi}) => {
  const [addData, setAddData] = useState({
    title:"",
    body:"",
  });


  useEffect(()=>{
    updateDataApi &&
    setAddData({
      title: updateDataApi.title || "",
      body: updateDataApi.body || "",
    })
  },[updateDataApi])

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setAddData((prev)=>{
      // console.log(prev);
      return{
         ...prev,
      [name]:value
      }
    });
  };


  const addPostData =async() =>{
  const res = await  postData(addData);
  console.log("res",res);
  if((res.status === 201)){
    setData([...data, res.data ]);
    setAddData({title:"" ,body: ""});
  }
  
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  // setAddData(()=> {
  //   console.log(prev);
  // });
  return (
   <form className='flex gap-[1.2rem]  ' onSubmit={handleFormSubmit} >
    <div>
        <label htmlFor="title"></label>
        <input className='w-[15rem] h-[2.5rem] text-[#212f3d] border-gray-200 outline-none rounded-md  p-[0.8rem 1.2rem]' type="text"
        autoComplete='off'
        id='title'
        name='title'
        placeholder='Add Title'
        value={addData.title}
        onChange={handleInputChange}
        />
    </div>
    <div>
        <label htmlFor="body"></label>
        <input className='w-[15rem] h-[2.5rem] text-[#212f3d] border-gray-200 outline-none rounded-md  p-[0.8rem 1.2rem]' type="text" autoComplete='off' placeholder='Add Post' id='body' name='body'
        value={addData.body}
        onChange={handleInputChange}
        />
    </div>
    <button  className='bg-green-500 w-[8rem]' type='submit'>Add</button>
   </form>
  )
}

export default Form