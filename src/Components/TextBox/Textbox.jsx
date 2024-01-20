import { useState } from "react";
import textbox from "../../public/assets/pictures/textbox.PNG";

import "./Textbox.scss"
import "animate.css"
import Messages from "./Messages/Messages";

export default function TextBox({speaker ,mensaje}){
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
        <div onClick={exitMessageBox} className="textbox animate__animated animate__fadeInUp">
            {/* <img 
                onClick={exitMessageBox} 
                className="textbox__textbox" 
                src={textbox} 
                alt="textbox" 
            /> */}
            <Messages name={speaker} message={mensaje} />
    </div>}
        {hideMessageBox && null}
    </>

}