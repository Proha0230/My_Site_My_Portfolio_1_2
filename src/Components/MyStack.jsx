import js from "../assets/js-icon.ico";
import html from "../assets/html-icon.ico";
import css from "../assets/css-icon.ico";
import ts from "../assets/ts-icon.ico";
import react from "../assets/react-icon.ico";
import sass from "../assets/sass-icon.ico";
import git from "../assets/git-icon.ico";
import wp from "../assets/webpack-icon.ico";

export function MyStack () {
    return (

      <div>
      <div className="h2MyLink">
        <h4>Мой стек который я изучал и использую:</h4>
      </div>

      <div className="MyStackList"> 

          <div className="StackItem">
          <img className="imgStack" src={js} alt="js"/>
            <div className="StackInfo">
              <h4>JavaScript</h4>
            </div>
          </div>
  
          <div className="StackItem">
          <img className="imgStack" src={html} alt="html"/>
            <div className="StackInfo">
              <h4>HTML</h4>
            </div>
          </div>
          
          <div className="StackItem">
          <img className="imgStack" src={css} alt="css"/>
            <div className="StackInfo">
              <h4>CSS</h4>
            </div>
          </div>

          <div className="StackItem">
          <img className="imgStack" src={ts} alt="ts"/>
            <div className="StackInfo">
              <h4>TypeScript</h4>
            </div>
          </div>

          <div className="StackItem">
          <img className="imgStack" src={react} alt="react"/>
            <div className="StackInfo">
              <h4> React </h4>
            </div>
          </div>

          <div className="StackItem">
          <img className="imgStack" src={sass} alt="SASS"/>
            <div className="StackInfo">
              <h4>SASS</h4>
            </div>
          </div>

          <div className="StackItem">
          <img className="imgStack" src={git} alt="git"/>
            <div className="StackInfo">
              <h4>GIT</h4>
            </div>
          </div>

          <div className="StackItem">
          <img className="imgStack" src={wp} alt="WebPack"/>
            <div className="StackInfo">
              <h4>WebPack</h4>
            </div>
          </div>
          
      </div>
      </div>
    )
  }