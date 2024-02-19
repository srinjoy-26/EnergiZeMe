import { FaEyeSlash } from "react-icons/fa6";
import {account} from '../lib/appwrite'
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () =>{
  let [isTrue , isTrueup] = useState(true)
  let [inptype , setinptype] = useState('password')
  let [email , setemail] = useState('')
  let [password , setpassword] = useState('')

  const Navigate = useNavigate()

  const togfun = () =>{
    inptype == 'password'? setinptype('text') : setinptype('password')
  }

  const handleLogin = (e) =>{
    e.preventDefault()
    if(email == '' || password == ''){
     alert('please fill all the fields')
    }else{
     login()
    }
  }

  const login = async() =>{
    try{
      var x = await account.createEmailSession(email,password);
      Navigate('/home')
    }catch(e){
      alert('Invalid credentials')
    }
    
  }

  return(
    <div className="login bg-black h-screen flex justify-center items-center px-5 relative" >

         <div id="logo" className="absolute w-16 h-16 top-1 left-1"></div>

         <form className="bg-transparent border-2 border-red-400 flex flex-col text-center rounded-lg py-5 px-10 gap-4" onSubmit={handleLogin}>
        <span className="text-4xl text-red-500 font-bold font-mono">EnergizeMe</span>
        <span className="text-blue-400 text-[18px]">Login</span>

        <input type="email" placeholder="enter email"
          className="block  py-2 placeholder:text-sm px-2 shadow-md rounded-md focus:outline-none bg-slate-700 text-white w-[14rem] sm:w-[16.8rem] " onChange={(e) => {setemail(e.target.value)}}/>

         <div className="flex items-center  shadow-md bg-slate-700 rounded-md">
          <input  type={inptype} placeholder="enter password"
          className="block  py-2 placeholder:text-sm px-2 focus:outline-none rounded-md bg-slate-700 text-slate-300" 
          onChange={(event) => {event.target.value == ''? isTrueup(true) : isTrueup(false) ; setpassword(event.target.value)}}/>
          <FaEyeSlash className= {`text-blue-400 text-xl mx-auto ${isTrue && 'hidden'}`} onClick={togfun}/>
         </div>

        <button className="border border-blue-500 bg-blue-500 block py-1 rounded-md text-white"  type="submit">Login</button>
       

        <p className="text-blue-400 text-[12px] ">Don't have an account? <span className="font-semibold">Signup</span></p>
      </form>
    </div>
  )
}

export default Login