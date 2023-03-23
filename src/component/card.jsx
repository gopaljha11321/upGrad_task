import "./App.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.movie.Images[0]}
          width="200px"
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
          <div>{props.movie.Title}</div>
          <div>{props.movie.Year}</div>
          <div>{props.movie.imdbRating}</div>
          <div>{props.movie.Runtime}</div>
        </div>
      </div>
    </>
  );
};
export default Card;
