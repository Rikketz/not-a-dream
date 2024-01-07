import { useContext } from "react"
import "./Menu.scss"
import {Contexto} from "../../App"

export default function Menu(){

    const {setCurrentCursor} = useContext(Contexto);

    const tocar = function(){
        setCurrentCursor("touch");
        console.log('tocando');
    }
    const mirar = function(){
        setCurrentCursor("look");
        console.log('mirando');
    }
    const normal = function(){
        setCurrentCursor("normal");
        console.log('normaleando');
    }

    return <>
        <div className="menu">
            <h2 onClick={tocar}>Tocar</h2>
            <h2 onClick={mirar}>Mirar</h2>
            <h2 onClick={normal}>Normal</h2>
        </div>
    </>
}