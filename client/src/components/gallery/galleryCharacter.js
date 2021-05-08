import React from "react";
import "./styles/gallery.css";
import Wizard from "../../../src/images/wizard.gif"
import Girl from "../../../src/images/girl.gif"

function CharacterGallery() {
  return (
    <div>
        <div class="fix-margin gallery-container people-gallery" >
            <div class="gallery-card">
              <img src={Wizard}/>
              <p class="gallery-card__head"><button className="select-button">Wizard Abe</button></p>
            </div>
             <div class="gallery-card">
              <img src={Girl} />
              <p class="gallery-card__head"> <button className="select-button">Exo Michelle</button></p>
            </div>
          </div>
    </div>
  );
}

export default CharacterGallery;
