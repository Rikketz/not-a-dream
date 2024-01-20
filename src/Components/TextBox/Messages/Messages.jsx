import { useEffect, useState } from "react";
import letterSound from "../../../public/assets/Sounds/tic.wav"
import "./Messages.scss";

export default function Messages({ message, name }) {
    const [textoVisible, setTextoVisible] = useState('');
    const [instantShow, setInstantShow] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let index = 0;

    const mostrarTextoDeFormaAnimada = () => {
        if (!isMounted) return;

        if (index < message.length && !instantShow) {
            setTextoVisible((prevText) => prevText + message[index]);
            const audio = new Audio(letterSound);
            audio.play();
            index += 1;

        if (index < message.length) {
            setTimeout(mostrarTextoDeFormaAnimada, 50);
        }
        } else {
            setTextoVisible(message);
        }
    };

    mostrarTextoDeFormaAnimada();

    return () => {
        isMounted = false;
    };
    }, [message, instantShow]);

    const handleTextboxClick = () => {
        setInstantShow(true);
    };

    return (
    <>
        <p className="message__name">{name}</p>
        <p className="message__message" onClick={handleTextboxClick}>
            {textoVisible}
        </p>
    </>
    );
}