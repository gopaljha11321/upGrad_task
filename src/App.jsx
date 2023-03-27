import axios from "axios";
import Card from "./component/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
import Breadcrumb from "./component/Breadcrumb";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
let val = "";
const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState([]);
  const [status, setStatus] = useState(true);
  const [Images, setImages] = useState({});
  const [server, serverStatus] = useState(false);
  const [filetrType,setFilterType]=useState("title");
  useEffect(() => {
    axios
      .get("http://localhost:3001/movie")
      .then((res) => {
        setMovie(res.data);
        setSearch(res.data);
        serverStatus(true);
      })
      .catch(() => {
        console.log("Server not found!!");
      });
    axios.get(`http://localhost:3001/get`).then((res) => {
      let temp = {};
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].user_id in temp) {
          let y = temp[data[i].user_id];
          y.push(data[i].path);
          temp[data[i].user_id] = y;
        } else {
          let x = [];
          x.push(data[i].path);
          temp[data[i].user_id] = x;
        }
      }
      setImages(temp);
    });
  }, []);
  const find = (a) => {
    let dic={
      "title":a.title,
      "year":a.year,
      "rating":a.imdbRating,
      "time":a.runtime
    }

    return dic[filetrType].toLowerCase().search(val.toLowerCase()) > -1;
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
      {server ? (
        <>
          <Breadcrumb />
          <div className="container1">
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Arial",
                fontWeight: "700",
              }}
            >
              Movies
            </h1>
            <div style={{ display: "flex" }}>
              <Input
                type="text"
                name=""
                id="in1"
                placeholder="Please Enter"
                onChange={throttling}
                style={{
                  marginLeft: "80px",
                }}
              />
              <FormControl style={{ marginLeft: "10px", width: "200px" }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Filter
                </InputLabel>
                
                <NativeSelect
                onChange={(evt)=>
                {
                  setFilterType(evt.target.value);
                }}
                  defaultValue={"Title"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }
                }
                >
                  <option value={"title"}>Title</option>
                  <option value={"year"}>Year</option>
                  <option value={"rating"}>Rating</option>
                  <option value={"time"}>Time</option>
                </NativeSelect>
              </FormControl>
            </div>

            <div style={{ width: "100%", height: "auto", paddingLeft: "60px" }}>
              {search.map((item, index) => {
                return (
                  <>
                    <Link
                      to={`/home/info/${index}`}
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
      ) : (
        <>
          <div
            className="container1"
            style={{
              margin: "auto",
              height: "100vh",
              textAlign: "center",
              paddingTop: "25vh",
            }}
          >
            <img
              src="serverFail.gif"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default App;
