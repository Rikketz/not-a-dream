import { useContext } from "react";
import Crematorium from "./Crematorium/Crematorium"
import "./Scene.scss"
import {Contexto} from "../../App"

export default function Scene(){
    const {currentCursor, addToInventory} = useContext(Contexto);

    




    return <>
        <div className={`scene ${currentCursor==="look" ? 'cursorMirar' : currentCursor==="touch" ? 'cursorTocar' : 'cursorNormal'}`}>
        
            <Crematorium addToInventory={addToInventory}/>
        </div>
    </>
}