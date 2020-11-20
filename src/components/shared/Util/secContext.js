import {createContext} from 'react'

export const SecContext=createContext({user:'',isLoggedIn:false,logIn:()=>{},logOut:()=>{}})
