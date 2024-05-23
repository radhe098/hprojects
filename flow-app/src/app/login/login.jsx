"use client"
import {React, useEffect, useState} from 'react';
import * as fcl from "@/onflow/fcl";
// import * as t from "@/onflow/types";
// import { access } from 'fs';
// import { authenticate } from '@/lib/actions';
fcl.confing(
  {
    "accessNode" : "http://127.0.0.1:8888",
   "discoveryNode" : "http://localhost:8701/fcl/authn"
    }
)
const login = () => {
  const [user, setUser] = React.useState({ addr: "", loggedIn: null });
  useEffect(()=>{
    fcl.currentUser.subscribe(setUser);
  },[])
  const getlogin =()=>{
    fcl.authenticate();
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">    
      <div className="bg-slate-800 h-auto  cursor-pointer m-6 rounded-xl p-2 ">
          <div className="space-y-6 p-4 rounded-lg bg-green-200" onClick={getlogin} >
            <div className="sm:mx-auto sm:w-full items-center sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login Yourself
              </h2>
            </div>     
             </div>
        </div>
      </div>
    </>
  );
};
export default login;