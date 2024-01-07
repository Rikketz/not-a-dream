import { useContext } from "react";
import Crematorium from "./Crematorium/Crematorium"
import "./Scene.scss"
import {Contexto} from "../../App"

export default function Scene(){
    const {currentCursor} = useContext(Contexto);

    




    return <>
        <div className={`scene ${currentCursor==="look" ? 'cursorMirar' : currentCursor==="touch" ? 'cursorTocar' : 'cursorNormal'}`}>
        
            <Crematorium/>
        </div>
    </>
}