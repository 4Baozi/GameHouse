import React from "react"
import Message from "./message"
import messageData from "./messageData"

export default function MessageList() {
    const messageComponents = messageData.map(message => <Message key={message.id} message={message} />)
    // TODO: sort message components by time (if not sorted?)
    return (
        <>
            {messageComponents}
        </>
    )
}