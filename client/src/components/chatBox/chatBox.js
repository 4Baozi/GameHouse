import React from "react"
import MessageList from "./messageList"
import SendMessageForm from "./sendMessageForm"
import "./styles/chatBox.css"

export default function ChatBox() {
    return (
        <div className="app">
            <header className="chatbox__header">Chat</header>
            <div className="chatbox__box"><MessageList /></div>
            <div className="chatbox__sendmessage"><SendMessageForm /></div>            
        </div>
    )
}