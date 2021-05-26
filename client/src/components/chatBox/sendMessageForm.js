import React from "react"
import "./styles/sendMessage.css"

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
        // console.log(e.target.value)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            message: ""
        })
        // console.log("submitted");
    }

    render() {
        return (
            <form className="sendMessageForm__container" onSubmit={this.handleSubmit}>
                <input className="sendMessageForm__box"
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Send a message"
                    type="text"/>
                <input className="sendMessageForm__button" type="submit" value="Send"/>
            </form>
        )
    }
}

export default SendMessageForm