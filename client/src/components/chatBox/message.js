import React from "react"
import "./styles/message.css"

export default function Message(props) {
    let styles;
    if (props.message.id == 0) {
        styles = {
            backgroundColor: "#fff"
        }
    }
    // const styles = {
    //     color: "#FF8C00", 
    //     backgroundColor: "#FF2D00",
    //     fontSize: 200
    // }
    return (
        <div>
            <div className={`message__username ${props.message.id == 1 ? " message__username--self" : ""}`}>{props.message.username}</div>
            <div className={`message__container ${props.message.id == 0 ? " message__container--system" : ""} ${props.message.id == 1 ? " message__container--self" : ""}`}>
                <div className={`message__text ${props.message.id == 0 ? " message__text--system" : ""} ${props.message.id == 1 ? " message__text--self" : ""}`}>
                    {props.message.text}
                </div>
                <div className="message__timestamp">{props.message.id == 0 ? "" : props.message.timestamp}</div>
            </div>
        </div>
    )
}