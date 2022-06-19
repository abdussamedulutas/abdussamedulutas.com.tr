import axios from "axios";


// example not using apis

export async function login(email:string, password:string)
{
    let {data} = await axios.post("/api/login",{email,password});
    return data;
}

export async function register(username:string,usersurname,email:string, password:string, age:string)
{
    let {data} = await axios.post("/api/register",{username,email,password,age});
    return data;
}