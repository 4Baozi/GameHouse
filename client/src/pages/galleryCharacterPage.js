import React from "react";
import Characters from "../components/gallery/galleryCharacter.js";
import './styles/galleryPage.css'

function GalleryCharacterPage() {
  return (
    <div className="gallery-main">
      <h1 className="gallery-main-title">Select Your Character</h1>
      <p className="gallery-p-title">Choose a character that represents your personality</p>
      <Characters/>
    </div>
  );
}

export default GalleryCharacterPage;