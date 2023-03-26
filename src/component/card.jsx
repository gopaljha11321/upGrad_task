import "./App.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.Images?props.Images[0]:""}
          width="100%"
          height="200px"
        ></img>
        <div
          id="info"
          style={{
            color: "skyblue",
            font: "skyblue",
            textAlign: "center",
            fontFamily: "arial",
            fontSize: "2vh",
            padding:"20px",
            height:"100px"
          }}
        >
          <div>{props.movie.title}</div>
          <div>{props.movie.year}</div>
          <div>{props.movie.imdbRating}</div>
          <div>{props.movie.runtime}</div>
        </div>
      </div>
    </>
  );
};
export default Card;
