import React from "react";
import { galleryData } from "../../fixtures/gallerypage";

import "./styles/gallery.css";

function Gallery(props) {
  return (
    <div>
      {galleryData.map((data, key) => {
        return (
          <div class="gallery-container people-gallery fix-margin" key={key}>
            <div class="gallery-card ">
              <img src={data.image} />
              <p class="gallery-card__head"><a href="http://localhost:3000/characters"><button className="select-button">{data.title}</button></a></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
