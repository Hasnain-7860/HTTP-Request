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



    // let fruites = ["apple", "orange","mango","grapes","banana"];
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

    // fruites.forEach((curElem)=>{
    //     console.log(`i am a ${curElem}`)
    // });

    // const myMapArr = fruites.map((curElem,index,arr)=>{
    //     return `My fav fruit is ${curElem} and ${index}`
    // });
    // console.log( myMapArr)

//    fruites.forEach((value)=>{
//     return value*2;
//    })

//    console.log(fruites);

//  fruites.forEach((value)=>{
//     return `$(value)`;
// })
// console.log(fruites)




// let number = [10, 20, 30 ,40, 50, 60]

// let Divide = number.map((curElem,index,arr)=>{
//     return `The number is ${curElem*2}`
// })
// console.log(Divide);



// const num = [1,2,3,4,5,6,7,8,2,6,9,]


// const result = num.lastIndexOf(6,9)
// console.log(result); 

// const result = num.includes(20)
// console.log(result);



// const months = ["Jan", "march", "April", "June", "July"]
 
// months.splice(months.length, 0, "Dec");
// console.log(months)

// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1 ,"March");
// console.log(months);


// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1)
// console.log(months)


// const Numbers = [1,2,3,,4,5,6,7,8,9];
// const result =Numbers.find((curElem)=>{
//     return curElem>6
// })
// console.log( result)




// const result = Numbers.map((curElem)=>
//     curElem * 5 
// )
// console.log(result)

// const result2 =result.findIndex((curElem)=>{
//     return curElem>25
// })
// console.log( result2)


// const result = Numbers.filter((curElem)=>{
//     return curElem>5
// })
// console.log(result)



// let value =6;
// const Nom = [2,3,4,1,2,3,5,6,4,3,7,6,2,3,4]

// let updateCart = Nom.filter((curElem)=>{
//     return curElem !== value;
// })
// console.log(updateCart)






// const products = [
//     {name:"Phone", price:800},
//     {name:"Remote", price:1000},
//     {name:"Lunch Box" , price:500},
//     {name:"Window AC", price:5000}
// ]

// const Shop = products.filter((curElem)=>{
//     return curElem.price <=500
// })
// console.log(Shop)


//filter unique value


const Numbers = [1,2,3,4,5,6,7,8,9];
let uniqeValue= Numbers.filter((curElem, index,arr)=>{
    // console.log(index)
    // console.log(arr.indexOf(curElem))
    return arr.indexOf(curElem)=== index
})
console.log(uniqeValue)


const Arr=[2,4,6,8,10,12,14,16,37];
let unique = Arr.filter((curElem,index,arr)=>{
    return arr.indexOf(curElem)
})
console.log(Arr);



const fruites = ["Banana","Apple","Mango","Grapes"];
fruites.sort();
console.log(fruites)



const Number =[1,2,3,4,5,4,7,8,9,];
Number.sort((a,b)=>{
    if(a > b) return -1;
    if(b>a ) return 1;

});
console.log(Numbers)


const  productprice = [2,3,4,5,6,7,8,900]

const totalPrice = productprice.reduce((accum,curElem)=>{
    return accum + curElem;
},0);
console.log(totalPrice)


let text = "Hello Hasnain, welcome to my  javascript course  this is a good javascript course"

let result = text.match(/javascript/gi)
console.log(result)



let passage = "hello i am Prakash i am learning programing Prakash"
let matchresult = passage.matchAll("Prakash")
console.log(...matchresult)
// for(let item of matchresult){
//     console.log(item)
// }



let name = "Java learning and JavaScript learning"
let coding = name.matchAll("learning")
console.log(...coding)
// for(let item of coding){
//     console.log(item)
// }



let string = "Hello bhaiyo kese ho"
let include = string.includes('Hello')
let inc = string.includes('ji')
console.log(include,inc) 

const strin = "i am learning a react"
const ince = strin.includes('learning')
console.log(ince)


let numbers = "1,2,3,4,5,6,7,7"
let results = numbers.includes(10)
console.log(results)


let heading = "Hello JavaScript Welcome the world best JavaScript course";
let resultss = heading.startsWith("Hello");
console.log(resultss)


let head = "i have learn react"
const resu = head.startsWith("i")
console.log(resu) 



let endwith = "i am learning english becouse i need thatswhy"
let res = endwith.endsWith("thatswhy")
console.log(res)

    //Slice mehtad last index number not includeing


    let slice = "Now i am working i have completed my graduation"
    let re = slice.slice(15,47)
    console.log(re)


    let Slice = "Now I am working i have complete my fraduation"
    let ress = Slice.slice()
    console.log(ress)




    let caracter = "what is topic about"
    let resultsss = caracter.charCodeAt(3)
    console.log(resultsss)


    //trim  remove space
     
    let trim = "    Hello world    "
    console.log(trim.length)
    let answer =trim.trim();
    console.log(answer)
    console.log(answer.length)

    //string to arry change

    let stringg = "Hasnain, prakash, Mustafa"
    let Array = stringg.split(",").reverse().join()
    console.log(Array)

    let split = "Azad, Prince, suraj"
    let Arrays = split.split(",").reverse().join()
    console.group(Arrays)
    
// for(let char = 97; char<=122; char++){
//     console.log(String.fromCharCode(char))
// }


for(let char=97; char<=122; char++){
    console.log(String.fromCharCode(char))
}



// const checkAll = (str)=>{
// const vowels = "aeiou";
// for(let char of vowels){
//     console.log(char);
//     console.log(str.includes)
// };
// };


// console.log(checkAll("my name is Hasnain"));



// let str = "me name is Hasnain"
// console.log( str.includes('a'))

const comment = (str)=>{
    const vowels = "aeiou";
    for(let index of vowels){
        console.log(index);
        console.log(str.includes(index))
    }
}
console.log(comment("i have to go market"))

const network = (str)=>{
    const vowels = "aeiou";
    for(let index of vowels){
        console.log(index);
        console.log(str.includes(index))
    }
}
console.log(network("automatic work"))
   

const check =(str)=>{
    const vowels = "aeiou"
    for( let index of vowels){
        console.log(index);
        console.log(str.includes(index))
    }

}
console.log(check("what happend"))

const greet =(str)=>{
    const vowels = "aeiou"
    for(let index of vowels){
        console.log(index)
        console.log(str.includes(index));
    }
}
console.log(greet("i am hearou"))

const greete =(str)=>{
    const vowels = "aeiou"
    for(let index of vowels){
        console.log(index)
        console.log(str.includes(index));
    }
}
console.log(greete("where are you form"))



const letter=(str)=>{
    const letter = "aeiou"
    for(let index of letter){
        console.log(index)
        console.log(str.includes(index))
    }
}
console.log(letter("mustafa"))


const User=(str)=>{
    const Letter = "aeiou"
    for(let index of Letter){
        console.log(index)
        console.log(str.includes(index))
    }
}
console.log(User("include your name"))



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