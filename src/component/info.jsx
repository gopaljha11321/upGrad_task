import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../component/Slider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const history = useNavigate();
  const { id } = useParams();
  const [index, setindex] = useState(id);
  const [data, setData] = useState({});
  const [Images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/movie")
      .then((res) => {
        setData(res.data[id] ? res.data[id] : {});
        if (!res.data[id]) {
          history("/");
        }
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
      <Slider images={Images} />
      <div className="container" style={{ textAlign: "center" }}>
        <br></br>
        <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>
          {data.title}
        </h1>
        <div>Title: {data.title}</div>
        <div>Type: {data.type}</div>
        <div>Runtime: {data.runtime}</div>
        <div>Writer: {data.writer}</div>
        <div>Actors: {data.actors}</div>
        <div>Director: {data.director}</div>
      </div>
    </>
  );
};
export default Info;
