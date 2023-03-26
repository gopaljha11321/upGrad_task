import axios from "axios";
import Card from "./component/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
let val = "";
const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState([]);
  const [status, setStatus] = useState(true);
  const [Images, setImages] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3001/movie")
      .then((res) => {
        setMovie(res.data);
        setSearch(res.data);
      })
      .catch(() => {
        console.log("Server not found!!");
      });
    axios.get(`http://localhost:3001/get`).then((res) => {
      let temp={}
      let data=res.data;
      for(let i=0;i<data.length;i++)
      {
        if(data[i].user_id in temp)
        {
          let y=temp[data[i].user_id];
          y.push(data[i].path)
          temp[data[i].user_id]=y;
        
        }
        else{
          let x=[];
          x.push(data[i].path);
          temp[data[i].user_id]=x;
        }
      }  
      setImages(temp); 
    });

  }, []);
  const find = (a) => {
    return a.title.toLowerCase().search(val.toLowerCase()) > -1;
  };
  const throttling = () => {
    if (status === true) {
      setStatus(false);
      setTimeout(() => {
        setStatus(true);
        val = document.getElementById("in1").value;
        let old_data = movie.filter(find);
        setSearch(old_data);
      }, 1000);
    }
  };
  return (
    <>
      <div className="container1">
        <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>Movies</h1>
        <Input
          type="text"
          name=""
          id="in1"
          placeholder="Enter name"
          onChange={throttling}
          style={{
            marginLeft: "80px",
          }}
        />
        <div style={{ width: "100%", height: "auto", paddingLeft: "60px" }}>
          {search.map((item, index) => {
            return (
              <>
                <Link
                  to={`info/${index}`}
                  style={{
                    display: "inline-block",
                    margin: "20px",
                    textDecoration: "none",
                  }}
                  key={index}
                >
                  <Card movie={item} Images={Images[item.id]} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
