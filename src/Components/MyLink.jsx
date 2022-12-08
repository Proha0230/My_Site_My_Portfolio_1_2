import github from "../assets/github-icon.ico";
import vk from "../assets/vk-icon.ico";
import gmail from "../assets/gmail-icon.ico";
import fb from "../assets/fb-icon.ico";

export function MyLink () {
  return (
    <div>

      <div className="h2MyLink">
        <h4>Для связи со мной:</h4>
      </div>
    
    <div className="MylinkList">

        <div className="Mylink">
        <img className="imgLink" src={gmail} alt="gmail"/>
          <div className="hrefLink">
            <a href="PROHA0230@yandex.ru" className="links">PROHA0230@yandex.ru</a>
          </div>
        </div>

        <div className="Mylink">
        <img className="imgLink" src={fb} alt="vk"/>
            <div className="hrefLink">
              <a href="https://www.facebook.com/Proha0230/" className="links">facebook.com/Proha0230/</a>
            </div>
        </div>

        <div className="Mylink">
        <img className="imgLink" src={github} alt="github"/>
            <div className="hrefLink">
               <a href="https://github.com/Proha0230" className="links">github.com/Proha0230</a>
            </div>
        </div>
        
        <div className="Mylink">
        <img className="imgLink" src={vk} alt="vk"/>
            <div className="hrefLink">
              <a href="https://vk.com/ivan_furashov" className="links">vk.com/ivan_furashov</a>
            </div>
        </div>
        
    </div>
         <div className="h2MyLink">
           <h4>Мои проекты загруженные на GitHub Pages:</h4>
         </div>
</div>
  )
}