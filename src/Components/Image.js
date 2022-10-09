// import Content from "../assets/images/image-tanya.jpg";

function Image(props) {
  return (
    <div className="img-container">
      <img src={props.src} alt="avatar" />
      <div className="prev" onClick={props.prevHandler}></div>
      <div className="next" onClick={props.nextHandler}></div>
    </div>
  );
}

export default Image;
