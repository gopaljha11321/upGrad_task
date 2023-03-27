import { Link } from "react-router-dom";
const Breadcrumb=()=>
{
    const pathname = window.location.pathname;
    const arr=pathname.split("/");
    arr.splice(0,1);
    return (<>
    <div style={{background:"whitesmoke"}}>
    You are here:&nbsp; 
    {arr.map((item,index)=>
    {
        <span key={index}></span>
        if(isNaN(item))
        {
            if(index>arr.length-3)
            {
                return (<span >{` ${item} `}</span>)
            }
            else{
                return (<><Link style={{textDecoration:"underline"}} to ={`${item}`} >{`${item}`} </Link><span>{" >"}</span></>)
            }
            
        }
    })}
    </div>
    </>)
}
export default Breadcrumb;