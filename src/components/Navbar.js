import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import { NavLink } from 'react-router-dom'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import cover1 from '../components/cover.jpg'
import Logo from '../components/assets/Group 27.png'


const Navbar = () => {
  return (
    <div className=''>


     
        <img src="cover1" alt='' />
    <div className='nav flex justify-between text-white  h-18'>
        <div className='navpart1 mx-6 my-2'>
            <div className=''>
                <img className='h-10' src={Logo} alt=''/>

            </div>
           

        </div>
        <div className='navprt1.5 my-3 '>
        <div className='ns1  '>
            
            <ul className='flex justify-around space-x-5 font-semibold text-center '>
            <li className='hover:text-[#FEE715]'><NavLink exact to='/'>Home</NavLink></li>
            <li className='hover:text-[#FEE715]'><NavLink exact to='/Store'>Store</NavLink></li>
            <li className='hover:text-[#FEE715]'><NavLink exact to='/Blog'>Blog</NavLink></li>
           </ul>
   

           </div>

        </div>
        <div className='navpart2 flex space-x-9 my-3 mx-4'>
        
            <div className='ns2 '>
                <input className='border bg-[#FFFFFF] rounded-full mix-blend-screen' type='text'></input>
             <FontAwesomeIcon icon={faSearchengin} className='h-6 text-[#FEE715]'/>
             

            </div>
            <div className='ns3'>
                <button className='bg-[#777472] rounded-full h-8 w-8 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          
                </button>

            </div>

        </div>
    </div>
 
   </div>
  )
}

export default Navbar
