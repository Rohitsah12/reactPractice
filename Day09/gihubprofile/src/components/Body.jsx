import { useEffect } from "react";
import { useState } from "react";

export default function Body(){
    const [profile,setProfile]=useState([]);
    const [numberOfProfile,setnumberOfProfile]=useState("");

    async function generateProfile(count){
        let ran=Math.floor(1+Math.random()*10000)
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data= await response.json();

        setProfile(data);
    }


    useEffect(()=>{
        generateProfile(10);
    },[]);

    return(
        <div className="but">
        <input type="text" className="inpu" placeholder="Search Here" value={numberOfProfile} onChange={()=>setnumberOfProfile(event.target.value)}></input>
        <button onClick={()=>{generateProfile(Number(numberOfProfile))}}>Search Profile</button>
        <div className="profile">
            {
                profile.map((value)=>{
                    return (<div key={value.id} className="card">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>)
                })
            }
        </div>
        </div>
    )
}

//try catch
//useCallback
//Search button:Name ke basis: User profile exist, display kara dena