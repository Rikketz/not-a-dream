import { useContext } from "react";
import "./Scene.scss"
import {Contexto} from "../../App"
import ReceptionN from "./Reception/ReceptionN/ReceptionN";

export default function Scene(){
    const {currentCursor} = useContext(Contexto);

    




    return <>
        <div className={`scene ${currentCursor==="look" ? 'cursorMirar' : currentCursor==="touch" ? 'cursorTocar' : 'cursorNormal'}`}>
        
            <ReceptionN/>
        </div>
    </>
}