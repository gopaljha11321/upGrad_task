import axios from "axios";
import Card from "./component/card"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
let val=""
const App=()=> {
  const [movie, setMovie] = useState([]);
  const [search,setSearch]=useState([]);
  useEffect(()=>
  {
    axios
    .get(
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
    )
    .then((res) => {
      setMovie(res.data);
      setSearch(res.data);
    });
  },[])
  const find=(a)=>
  {
    return a.Title.toLowerCase().search(val.toLowerCase())>-1;
  }
  return (
    <>
    
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Movie Data</h1>
        &nbsp; &nbsp; &nbsp; <input type="text" name="" id="" placeholder="Enter name" onChange={(evt)=>
        {
          val=evt.target.value;
          let old_data=(movie.filter(find))
          setSearch(old_data);
        }}/>
        <div style={{ width:"100%", height:"auto" }}>
        
          {search.map((item, index) => {
            return (
              <>
                <Link to={`info/${index}`} style={{display:"inline-block",margin:"20px",textDecoration:"none"}} key={index}><Card movie={item}/></Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
