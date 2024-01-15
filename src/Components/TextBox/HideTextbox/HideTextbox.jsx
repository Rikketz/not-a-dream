import "./HideTextbox.scss";

export default function HideTextbox(){

    let $textbox = document.querySelector(".textbox");

    $textbox.classList.remove("animate__fadeInUpBig")
    $textbox.classList.add("animate__fadeOutDown");


    return <>



    </>
}