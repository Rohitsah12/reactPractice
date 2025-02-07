import {  useState,useEffect } from "react";
import {useParams} from "react-router"

export default function Github(){
    const {name}=useParams();
    // console.log(name);

    const [profile,setProfile] =useState(null);
    
    async function fethcUser() {
        const response= await fetch(`https://api.github.com/users/${name}`);
        const data=await response.json();
        setProfile(data);
    }
    useEffect(()=>{
        fethcUser();
    },[])
    
    return (
        <>
            <h1>My Github Profile</h1>
            {/* Display user data */}

            <div>
                <img src={profile?.avatar_url}></img>
                <h2>{profile?.login}</h2>

            </div>

        </>
    )
}