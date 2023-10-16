import "./index.css"
function Image({link, title}) {

    return (
      <div className="image-container">
        <img className="image" src={link} alt={title}/>
      </div>
    )
  }
  
  export default Image