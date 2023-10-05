

import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Users } from './data'
export default function Login() {

  return (
  
      <div className="flex min-h-full items-center justify-center py-32 px-4 sm:px-6 lg:px-8" style={{marginTop:"105px",marginLeft:"-100px"}}>
        <div className="w-full max-w-md space-y-8">
          <div style={{marginLeft:"50px"}}>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
              LS ONE
            </h2>
            <p className="mt-2 text-center text-3x1 text-gray-600">
              {' '}
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in your account
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-5x1"
                  placeholder="Email address"
                 style={{width:"450px",height:"40px",marginLeft:"-60px"}}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-5x1"
                  placeholder="Password"
                  style={{width:"450px",height:"40px",marginLeft:"-60px"}}
              
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  style={{marginBottom:"10px"}}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text- text-gray-900" style={{marginRight:"10px"}}>
                  Remember me
                </label>
              </div>

              <div className="text-5x1" >
                <Link to='/forget' className="font-medium text-indigo-600 hover:text-indigo-500" >
                Forgot your password?
                </Link>
              </div>
            </div>

            <div>
             <Link to='/table'>
             <button
           
             type="submit"
             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             style={{width:"450px",height:"40px",marginLeft:"-60px"}}
           >
             <span className="absolute inset-y-0 left-0 flex items-center pl-3" >
             
                  </span>
             <p style={{marginLeft:"1px",fontSize:"18px",marginTop:"7px"}}>Sign in</p>
           </button>
             
             </Link>
            </div>
          </form>
        </div>
      </div>

  )
}
