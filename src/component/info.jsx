import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Info = (props) => {
  const { id } = useParams();
  const [index, setindex] = useState(id);
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
      )
      .then((res) => {
        setData(res.data[id]?res.data[id]:[]);
      });
  }, []);
  return (
    <>
      <div className="container" style={{textAlign:"center"}}>
        <h1>Info Page</h1>
        <div>Title: {data.Title}</div>
        <div>Type: {data.Type}</div>
        <div>Runtime: {data?.Runtime}</div>
        <div>Writer: {data.Writer}</div>
        <div>Actors: {data.Actors}</div>
        <div>Director: {data.Director}</div>
      </div>
    </>
  );
};
export default Info;
