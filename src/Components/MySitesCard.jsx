
function MySitesCard (props) {
    const {id, name, img, description, link, ghlink} = props;

    return  <div className="card sitecard" id={id}>
    <div className="card-image waves-effect waves-block waves-light mySitesListItem">
      <img className="activator" src={img} alt = {name}/>
    </div>
    <div className="descText">
        <p>{description}</p>
    </div>
    <div className="card-content btncard">
      <button className="btn btnlink"><a style={{color:"black"}} href={link}>Перейти на сайт</a></button>
    </div>
    <div className="card-content btncard">     
      <button className="btn btnlink"><a style={{color:"black"}} href={ghlink}>GitHub</a></button>
    </div>
  </div>
}

export {MySitesCard};