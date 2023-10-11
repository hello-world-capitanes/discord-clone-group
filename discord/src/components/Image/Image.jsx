function Image({className, link, title}) {

    return (
      <div>
        <img src={link} alt={title}/>
      </div>
    )
  }
  
  export default Image