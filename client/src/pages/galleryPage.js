import React from "react";
import Gallery from "../components/gallery/gallery.js";
import "./styles/galleryPage.css";
export default function GalleryPage(props) {
    return (
        <div className='gallery-main'>
            <h1 className='gallery-main-title'>Explore the Worlds</h1>
            <p className='gallery-p-title'>
                Select a game room you would like to visit
            </p>
            <Gallery />
        </div>
    );
}
