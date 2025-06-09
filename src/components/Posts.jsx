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

    //   function sum(a,b){
    //     return a+b;
    //   }
    //   let result = sum(5,5)
    //   console.log(result)
    //   console.log(sum(29,30))


    // var result = (function (a,b){
    //     console.log(a+b);
    //     // return a-b;
    //     return a+b;

    // })(5,55);

    // console.log("the sum of the number " + result);
    // console.log( "ym h hm" + result);
    // console.log("tum kya kr rhe ho" + result)


    // const sum = (a,b) => console.log(`The sum of ${a} and ${b} is ${a+b}.`);
    // sum(5,52)
    // sum(20,30 )

    // const sum = (a,b) =>{
    //     let result = `THE sum of ${a} and ${b} is ${a+b}`;
    //     console.log(result)
    // };
    // sum(10,3)

    // const greet =()=> console.log("plz like and share")
    // greet()


    // const isReverce = (str) =>{
    //     for(let index=0; index <= str.length; index++){
    //         console.log(str[index])
    //     }
    // }
    //         isReverce("vinod thapa")



    // const isReverce = (str)=>{
    //     for(let index=0; index<= str.length; index++){
    //         console.log(str[index])
    //     }
    // }
    // isReverce("Hasnain Bhai")




    // const isPalindrome = (str)=>{
    //     let reverse = ""
    //     for(let index=str.length - 1; index >= 0 ; index--){
    //         reverse = reverse + str[index]
    //     }
    //        return str === reverse ? true : false;
 
    // };

    // console.log(isPalindrome("hariom"));



    let fruites = ["apple", "orange","mango","grapes","banana"];
    // for(let item of fruits){
    //     console.log(item);
    // }

    // for(let item in fruits){
    //     console.log(item)
    // }

    // const   myMapArr = fruites.map((curElem,index,arr)=>{
    //     return `my fav fruit is  ${curElem}`;
    // });
    // console.log(myMapArr)
    // console.log(fruites)

    fruites.forEach((curElem)=>{
        console.log(`i am a ${curElem}`)
    });





    
    


     
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
                            <p className='text-red-300'>{description}</p>
                            <p className='text-red-500'>{description}</p>
                            <p className='text-red-900'>{description}</p>

                            

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