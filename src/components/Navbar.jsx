   import React, { useState } from 'react'
   import { IoMdClose } from "react-icons/io";
   import { MdOutlineMenu } from "react-icons/md";
   import { IoIosCloseCircle } from "react-icons/io";


   
   const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {name: 'Home', href: '#'},
        {name:'About', href: '#'},
        {name:'Service', href: '#'},
        {name:'Contact', href:'#'},
    ];
     return (
       <nav className='bg-white shadow-md fixed  top-0 left-0 right-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
            <div className='text-2xl font-bold text-blue-600'>My Logo </div>
                <div className='hidden md:flex space-x-6'>
                    {links.map((link)=>(
                        <a 
                        key={link.name}
                        href={link.href}
                        className='text-gray-700 hover:text-blue-600 transition'>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className='md:hidden'>
                    <button onClick={()=> setIsOpen (!isOpen)}>
                        {isOpen ? <IoMdClose size={24} />:<MdOutlineMenu size={24}/>}
                    </button>
                </div>
        </div>

        {isOpen && (
            <div className='md:hidden bg-white px-4 pb-4 space-y-2'>
                {links.map((link)=>(
                   <a 
                   key={link.name}
                   href={link.href}
                   className='block text-gray-700 hover:text-blue-600 transition '>
                    {link.name}
                   </a> 
                ))}
            </div>
        )}
       </nav>
     )
   }
   export default Navbar



