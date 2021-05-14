import React from 'react'

import AppLogo from "../../images/gamehouse_logo.svg"
import TeamLogo from "../../images/4baozi_logo.svg"
import "./styles/footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img className="footer__appLogo footer__logoImg" src={AppLogo}/>
                <hr></hr>
                <img className="footer__teamLogo footer__logoImg" src={TeamLogo}/>
                <div className="footer__copyright">&copy; 2021 - Powered by Four Baozi</div>
            </div>
        </div>
    )
}
