import { useEffect, useState } from "react";
import letterSound from "../../../public/assets/Sounds/tic.wav"
import "./Messages.scss";

export default function Messages({message, name}){

    const [textoVisible, setTextoVisible] = useState('');

    useEffect(() => {
        let isMounted = true;
        let index = 0;
    
        const mostrarTextoDeFormaAnimada = () => {
            if (!isMounted) return;

            if (index < message.length) {
                setTextoVisible((prevText) => prevText + message[index]);
                const audio = new Audio(letterSound);
                audio.play();
                index += 1;

                if (index < message.length) {
                    setTimeout(mostrarTextoDeFormaAnimada, 50);
                } 
            }
        };

        mostrarTextoDeFormaAnimada();

        // Limpia el intervalo cuando el componente se desmonta
        return () => {
            isMounted = false;
        };
    }, [message]);

    return <>
        <p className="message__name">{name}</p>
        <p className="message__message">{textoVisible}</p>
    </>
}
