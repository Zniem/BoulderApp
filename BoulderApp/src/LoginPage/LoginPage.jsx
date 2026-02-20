import {useState} from "react"
import supabase from "./supabaseClient.js"
import {Link} from "react-router-dom"

function LoginPage(){

    return(
        <>
        <h1>This is the login page</h1>
        <textarea placeholder="Username"></textarea>
        <textarea placeholder="Password"></textarea>
        <button>Login</button>
        </>
    );
}

export default LoginPage