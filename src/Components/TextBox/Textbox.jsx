import { useState } from "react";
import textbox from "../../public/assets/pictures/textbox.PNG";

import "./Textbox.scss"
import "animate.css"
import Messages from "./Messages/Messages";

export default function TextBox({mensaje}){
    const [hideMessageBox, setHideMessageBox] = useState(false);

    function exitMessageBox(){
        let $textbox = document.body.querySelector(".textbox");
        $textbox.classList.add("animate__fadeOutDown");
        setTimeout(() => {
            setHideMessageBox(true);
        }, 800);
    }


    return <>
    {!hideMessageBox && 
        <div className="textbox animate__animated animate__fadeInUp">
            <img 
                onClick={exitMessageBox} 
                className="textbox__textbox" 
                src={textbox} 
                alt="textbox" 
            />
            <Messages name={"Player"} message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} />
            <p className="textbox__texto">{mensaje}</p>
    </div>}
        {hideMessageBox && null}
    </>

}