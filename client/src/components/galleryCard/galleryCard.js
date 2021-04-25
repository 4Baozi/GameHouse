import React from 'react';

export default function GalleryCard({ roomImage }) {
    return (
        <div class='gallery-container'>
            <div class='gallery-card'>
                <img src={roomImage1} />
                <p class='gallery-card__head'>World 1</p>
            </div>
        </div>
    );
}
