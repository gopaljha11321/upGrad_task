const Slider = (props) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{width:"100%",height:"100%",textAlign:"right"}}
      >
        <ol className="carousel-indicators">
          {props?.images
            ? props?.images.map((item, index) => {
                return (
                  <li key={index}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className="active"
                  ></li>
                );
              })
            : ""}
        </ol>
        <div className="carousel-inner"  style={{width:"100%",height:"100%",boxShadow:"1px  1px 1px 2px white"}}>
          <div className="carousel-item active">
            <img
            style={{width:"100%",height:"70vh"}}
              className="d-block w-100"
              src={props?.images?props?.images[0] : ""}
              alt="First slide"
            />
          </div>
          {props?.images?props.images.map((item,index)=>{
            if(index+1!=props.images.length)
            {
                return(
                    <div className="carousel-item" key={index}   > 
                       <img
                        style={{width:"100%",height:"70vh"}}
                         className="d-block  w-100"
                         src={props?.images ? props?.images[index+1] : ""}
                         alt="Second slide"
                       />
                     </div>
                   )
            }
    }):""}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};
export default Slider;
