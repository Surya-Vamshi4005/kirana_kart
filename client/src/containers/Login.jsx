import React, { useState } from 'react'
import {LoginBgg} from "../assets"
import {Logo} from "../assets"
import {LoginInput} from "../components"
import {FaEnvelope, FcGoogle} from "../assets/icons"
import { FaLock } from "../assets/icons"
import {motion} from "framer-motion"
import { buttonClcik } from '../animations'

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {app} from "../config/firebase.config"

const Login = () => {

  const [userEmail, setUserEmail] = useState("")
  const [isSingUp, setIsSingUp] = useState(false)
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_password] = useState("")

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then(userCred =>{
      firebaseAuth.onAuthStateChanged(cred => {
        if(cred){
          cred.getIdToken().then( token => {
            console.log(token)
          })
        }
      })

    } 
  )

  }

  return (
  <div className =" w-screen h-screen relative overflow-hidden flex" >

    {/* background image */}
    <img 
      src = {LoginBgg} 
      className="w-full h-full object-cover absolute top-0 left-0 " 
      alt="" 
    />

    {/* content box */}

      <div className = "flex flex-col items-center bg-gray-900 w-[25%] md:w-1000 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-5" >
      {/* top logo section */}
      <div className="flex items-center gap-4 w-full -my-2 justify-start " >
        <img src={Logo} className = "w-12" alt="" />
        <p className=" font-bold text-xl text-slate-200 my-2 ">KiranaKart</p>

      </div>

      {/* welcome text*/}
      <p className = "text-xl font-bold text-white py-1">Welcome Back</p>
      <p className="text-.5xl text-gray-300 font-semibold -mt-7" >{isSingUp ? "Sign Up" : "Sign in"} with following</p>


      {/* input section */}
      <div className="w-full felx flex-col items-center justify-center gap-6 px-4 md:px-12 py-4 -my-2 ">
        <div className="my-0" ><LoginInput placeHolder={"Email Here"} icon={<FaEnvelope className="text-xl text-textColor" />} inputState={userEmail} inputStateFunction={setUserEmail} type="email" isSingUp={isSingUp} /></div> 
        <div className="my-4" ><LoginInput placeHolder={"Password Here"} icon={<FaLock className="text-xl text-textColor" />} inputState={password} inputStateFunction={setPassword} type="password" isSingUp={isSingUp} /></div> 
        
        { isSingUp && (
          <div><LoginInput placeHolder={"Confirm Password Here"} icon={<FaLock className="text-xl text-textColor" />} inputState={confirm_password} inputStateFunction={setConfirm_password} type="password" isSingUp={isSingUp} /></div> 
        ) }

        {!isSingUp ? (<p className="-my-1 text-gray-300" >Don't have an account :{""} <motion.button {...buttonClcik} className="text-red-400 cursor-pointer bg-transparent hover:underline " onClick={() => setIsSingUp(true)}>Create</motion.button> </p>
        ) : ( <p className=" text-gray-300 my-3 " >Already have an Account :{" "} <motion.button {...buttonClcik} className="text-red-400 hover:underline cursor-pointer bg-transparent " onClick={() => setIsSingUp(false)}>Sign-in here</motion.button> </p> )}
        
        {/* button section */}
        {isSingUp ? <motion.button {...buttonClcik} className="w-full px-4 py-2 my-3 rounded-md bg-red-500 cursor-pointer text-white text-xl capitalize hover:bg-red-700 transition-all duration-150" >Sign Up</motion.button> : <motion.button {...buttonClcik} className="w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer my-4 text-white text-xl capitalize hover:bg-red-700 transition-all duration-150 " >Sign in</motion.button>}
      </div>

        <div className="flex-items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white -my-3"></div>
          {/* Need to add or in between but removed due to its odd display */}
        </div>

        <motion.div {...buttonClcik} className="flex items-center justify-center px-20 py-2 hover:bg-gray-300 bg-gray-50 backdrop-blur-md cursor-pointer rounded-3xl gap-4"
        onClick={loginWithGoogle}>
          <FcGoogle className="text-3xl"/>
            <p className="captalize text-base text-headingColor font-semibold ">Sign in with Google</p>
        </motion.div>

    </div>

  </div>
  )
}

export default Login