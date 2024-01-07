import "./Crematorium.scss";
import tableTest from "../../../public/assets/pictures/mesaTest.png";
import { useState } from "react";

export default function Crematorium(){
    const [textBox, setTextBox] = useState(false);

    const tableInteraction = function(){
        console.log('funciono bien');
        setTextBox(!textBox);
    }

    return <>
        <div className="crematorium_background">
            <img onClick={tableInteraction} className="crematorium_background__tableTest" src={tableTest} alt="tableTest"/>
            <div className="textBox">
                {textBox ? (<p>¡Buenos días!</p>) : null}
            </div>
        </div>
    </>
}