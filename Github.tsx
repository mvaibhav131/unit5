import axios from "axios";
import { useState } from "react";

const URL="https://api.github.com/search/users";

type User={
    id:number;
    login:string;
    avatar_url:string;
};

export const Github=()=>{
    const [text,setText]=useState("");
    const [data,setData]=useState<User[]>([]);
    return(
        <div className="App">
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>{
               axios.get(URL,{
                   params:{
                       per_page:11,
                       q:text
                   }
               }).then(({data})=>{
                   setData(data.items);
               })
            }}  
            >Search</button>
            {data.map(user =>
                 <div>{user.login} <div> <img width={200} height={200} src={user.avatar_url} alt="" /> </div></div>)}
        </div>
    )
}