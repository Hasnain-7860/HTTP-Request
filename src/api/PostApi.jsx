import axios from "axios";

const api = axios.create({
     baseURL: "https://fakestoreapi.com",
});

 //get method

export const getPost = () => {
    return api.get("/products")
 };

 //Delete method

 export const deletePost = (id) => {
    return api.delete(`/products/${id}`)
 }

 //Post method

 export const  postData = (post) =>{
    return api.post("/products", post)
  };

  //put method

//   export const putPost =() =>{
//    return api.put(`/posts/${id}`)
//   }

  