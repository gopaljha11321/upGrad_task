import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../component/Slider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import serverImg from "./serverFail.gif";
import Breadcrumb from "./Breadcrumb";

const Info = (props) => {
  const history = useNavigate();
  const { id } = useParams();
  const [index, setindex] = useState(id);
  const [data, setData] = useState({});
  const [Images, setImages] = useState([]);
  const[server, serverStatus]=useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/movie")
      .then((res) => {
        setData(res.data[id] ? res.data[id] : {});
        if (!res.data[id]) {
          history("/home");
          
        }
        serverStatus(true);
      })
      .catch(() => {
        console.log("server not found!!");
      });
    axios.get(`http://localhost:3001/get`).then((res) => {
      let temp = [];
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].user_id == Number(id) + 1) {
          temp.push(data[i].path);
        }
      }
      setImages(temp);
    });
   
  }, []);
  return (
    <>
    <Breadcrumb/>
    {
      server?
      <>
      <div style={{background:"black", height:"97vh"}}>
      <div className="container1" style={{display:"flex",background:"black",color:"white"}} >
         <div style={{width:"50%",marginTop:"20px",marginLeft:"20px",height:"500px"}} >
      <Slider images={Images} />
      </div>
      <div style={{"marginLeft":"20px",}}>
        <h3 style={{  fontFamily: "Arial",fontSize:"2vw", marginTop:"10px" }}>
        {data.title} &nbsp;<span style={{fontSize:"1vw",border:"1px grey solid",position:"relative",top:"-2px",textTransform:"capitalize",padding:"1px 10px 3px 10px",borderRadius:"15px"}}>{data.type}</span>
        </h3>
        <br/>
        <div><img src="https://pngimg.com/d/star_PNG41474.png" width="18px"></img><span style={{paddingTop:"90px",fontWeight:"700",fontSize:"18px"}}> {data.imdbRating}</span><span style={{fontSize:"14px",color:"gray"}}>/10</span></div>
        <br/>
        <div><img src="https://www.pngall.com/wp-content/uploads/12/Graph-PNG-Images-HD.png" width="18px"></img> {data.runtime}</div>
        <br/>
        <div><img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1795151/writer-clipart-md.png" width="18px"></img> {data.writer}</div>
        <br/>
        <div><img src="https://cdn-icons-png.flaticon.com/512/3873/3873997.png" width="18px"></img> {data.actors}</div>
        <br/>
        <div><img src="https://e7.pngegg.com/pngimages/651/12/png-clipart-clapperboard-film-director-cinematography-claquete-photography-scene-thumbnail.png" width={"18px"}></img> {data.director}</div>
        </div>
      </div>
      </div>
      </>
      :<>
      <div className="container1" style={{margin:"auto", "height":"100vh",textAlign:"center",paddingTop:"25vh"}}><img src={serverImg} style={{"width":"auto","height":"auto"}}></img>
      </div>
      </>}
    </>
  );
};
export default Info;
