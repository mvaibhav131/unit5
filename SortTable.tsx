
import { useState } from "react";
import data from '../data.json';
type Data=typeof data

export const SortTable=({data}:{data:Data})=>{
    // const [sortKey,setSortKey]=useState();
    // const [sortOrder,setSortOrder]=useState();
    const headers=[
        
        {key:"id",label:"ID"},
        {key:"model",label:"Model"},
        {key:"make_year",label:"Make Year"},
        {key:"operating_system",label:"Operating System"},
        {key:"screen_height",label:"Screen Height"},
        {key:"screen_width",label:"Screen Width"},
        {key:"price",label:"Price"},

    ];
    return(
        <table>
            <thead>
                <tr>
                    {headers.map((row)=>{
                        return <td key={row.key}>{row.label}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((elem:any)=>{
                    return(
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.model}</td>
                            <td>{elem.make_year}</td>
                            <td>{elem.operating_system}</td>
                            <td>{elem.screen_height}</td>
                            <td>{elem.screen_width}</td>
                            <td>{elem.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}