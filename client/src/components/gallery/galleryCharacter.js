import React from "react";
import "./styles/gallery.css";
import Wizard from "../../../src/images/wizard.gif";
import Girl from "../../../src/images/girl.gif";
import * as ROUTES from "../../constants/routes";
import { NavLink } from "react-router-dom";
function CharacterGallery() {
    return (
        <div>
            <div class='fix-margin gallery-container people-gallery'>
                <div class='gallery-card'>
                    <img src={Wizard} />
                    <p class='gallery-card__head'>
                        <button className='select-button'>
                            <NavLink
                                className='select-button'
                                exact
                                to={ROUTES.ROOM}
                            >
                                Wizard Abe
                            </NavLink>
                        </button>
                    </p>
                </div>
                <div class='gallery-card'>
                    <img src={Girl} />
                    <p class='gallery-card__head'>
                        <button className='select-button'>
                            <NavLink exact to={ROUTES.ROOM}>
                                Exo Michelle
                            </NavLink>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CharacterGallery;
