import { useState } from "react";
import "./ReceptionN.scss"
import TextBox from "../../../TextBox/Textbox";
import tableTest from "../../../../public/assets/pictures/mesaTest.png";


export default function ReceptionN(){
    const [textBox, setTextBox] = useState(false);


    const tableInteraction = function(){
        console.log('funciono bien');
        setTextBox(!textBox);
        console.log(textBox);
    }

    return <>
    <div className="ReceptionN_background">
        <img onClick={()=> {tableInteraction();}} className="ReceptionN_background__tableTest" src={tableTest} alt="tableTest"/>
            {textBox ? (<TextBox speaker={"Paula"}  mensaje={"Hola Caracola"}/>) : null}
    </div>

    </>
}