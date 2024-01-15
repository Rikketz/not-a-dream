import "./Crematorium.scss";
import tableTest from "../../../public/assets/pictures/mesaTest.png";
import { useState } from "react";
import TextBox from "../../TextBox/Textbox";
import Key from "../../../items/Reception__ToolboxKey(Locker).png"

export default function Crematorium({addToInventory}){

    let message = ""
    let numMensaje = 0;

    const [textBox, setTextBox] = useState(false);

    const tableInteraction = function(){
        console.log('funciono bien');
        setTextBox(!textBox);
    }

    const nextmessage = function(){
        if (numMensaje === 0) {
            message = "test 1"
            numMensaje += 1;
        } else if (numMensaje === 1){
            message = "test 2"
        }
        
        
    }

    return <>
        <div className="crematorium_background">
            <img onClick={()=> {tableInteraction(); nextmessage();}} className="crematorium_background__tableTest" src={tableTest} alt="tableTest"/>
            {textBox ? (<TextBox mensaje={message}/>) : null}
            <img onClick={() => {addToInventory(Key)}} className="llave" src={Key} alt="Key"/>
        </div>
    </>
}