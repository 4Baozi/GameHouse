import React from "react";
import { galleryData } from "../../fixtures/gallerypage";

import "./styles/gallery.css";

function Gallery(props) {
  return (
    <div>
      {galleryData.map((data, key) => {
        return (
          <div class="gallery-container people-gallery" key={key}>
            <div class="gallery-card">
              <img src={data.image} />
              <p class="gallery-card__head">{data.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;