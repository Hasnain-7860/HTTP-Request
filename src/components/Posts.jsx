import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi';
import Form from './Form';
import toast from 'react-hot-toast';



const Posts = () => {

    const [data , setData] = useState([])
    const [updateDataApi, setUpdateDataApi] = useState({})

     const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
      }
    
      useEffect(()=>{
        getPostData();
            
      },[])

      //function to delete Post 


      const handleDeletePost = async (id) => {
        try {
             const res = await deletePost(id);
         if(res.status===200  || res.status === 204){
            const newUpdatedPosts = data.filter((curPost)=>{
                return curPost.id !== id;
            });
            setData(newUpdatedPosts);
            toast.success("Post delete successfully")
         }
        } catch (error) {
            console.log(error)
        } 
      };

      const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);
     
  return (
    <>
    <section className='p-[1.6rem] bg-[#212f3d] rounded-md m-auto mb-8'>
        <Form data = {data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
    </section>
    <section className='w-[90%]'>
        <ol className='grid grid-cols-3 gap-[3.2rem]'>
            {
                data.map((curElem)=>{
                    const {id, body, title, image, category,description,price} = curElem;
                    return(
                        <li className=' p-[1.6rem] rounded-[0.3rem] bg-[#212f3c] border-l-4 border-' key={id}>
                            {/* <h1>{title}</h1> */}
                            <img src={image} alt="" />
                            <h1 className='text-white text-[25px]'> {title}</h1>
                            <p className='text-red-400'>Price:{price}</p>
                            <p className='text-white'>category:{category}</p>
                            <p className='text-white'>{description}</p>
                            

                            <button className='bg-green-400 text-[21px] w-[5rem] rounded-md ' onClick={()=>handleUpdatePost(curElem)}>Edit</button>
                            <button className='bg-red-600 hover:text-white shadow-lg text-[21px] w-[5rem] rounded-md ml-3' onClick={()=>handleDeletePost (id)}>Delete</button>

                        </li>
                    )
                })
            }
        </ol>
    </section>
    </>
  )
}

export default Posts