import textbox from "../../public/assets/pictures/textbox.PNG";
import "./Textbox.scss"

export default function TextBox({mensaje}){




    return <>
    <div className="textbox animate__animated animate__fadeInUpBig">
        <p className="textbox__texto">{mensaje}</p>
    </div>
    
    </>

}