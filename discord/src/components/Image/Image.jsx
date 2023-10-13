function Image({className, link, title}) {

    return (
      <div className="image-container">
        <img style={{borderRadius:'150px', width:'75px'}} className="image" src={link} alt={title}/>
      </div>
    )
  }
  
  export default Image