<<<<<<< HEAD
import React from 'react';
import './styles/gallery.css';
const roomImage1 =
    'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/77fc93e7-8947-4cee-8053-9fe6e8f85930_scaled.jpg';

export default function Gallery() {
    return (
        <div>
            <div class='gallery-container people-gallery'>
                <div class='gallery-card'>
                    <img src={roomImage1} />
                    <p class='gallery-card__head'>World 1</p>
                </div>

                <div class='gallery-card'>
                    <img src={roomImage1} />
                    <p class='gallery-card__head'>World 1</p>
                </div>
            </div>
            <div class='gallery-container people-gallery'>
                <div class='gallery-card'>
                    <img src={roomImage1} />
                    <p class='gallery-card__head'>World 1</p>
                </div>

                <div class='gallery-card'>
                    <img src={roomImage1} />
                    <p class='gallery-card__head'>World 1</p>
                </div>
            </div>
        </div>
    );
=======
import React from "react";
import "./styles/gallery.css";
const roomImage1 =
  "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/77fc93e7-8947-4cee-8053-9fe6e8f85930_scaled.jpg";

export default function Gallery() {
  return (
    <div>
      <div class="gallery-container people-gallery">
        <div class="gallery-card">
          <img src={roomImage1} />
          <p class="gallery-card__head">World 1</p>
        </div>

        <div class="gallery-card">
          <img src={roomImage1} />
          <p class="gallery-card__head">World 1</p>
        </div>
      </div>
      <div class="gallery-container people-gallery">
        <div class="gallery-card">
          <img src={roomImage1} />
          <p class="gallery-card__head">World 1</p>
        </div>

        <div class="gallery-card">
          <img src={roomImage1} />
          <p class="gallery-card__head">World 1</p>
        </div>
      </div>
    </div>
  );
>>>>>>> 419f9eee7de3a2c8a4b48e7cba620d65ec28f6c4
}
