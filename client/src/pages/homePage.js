import React from "react";
import { Frame, Footer } from "../components";
import landingData from "../fixtures/landingpage.json";
import "../../src/components/globe/styles/globe.css";
import Globe from "../../src/components/globe/globe.js";
import Portal from "../images/portal.gif";
import "./styles/homePage.css";

export default function HomePage() {
    return (
        <div>
            {landingData.map((data, index) => {
                if (index % 2 === 0)
                    return <Frame key={index} data={data} reverse={true} />;

                return <Frame key={index} data={data} reverse={false} />;
            })}
            <div className='globe'>
                <Globe />
            </div>

            <section>
                <div className='align-center'>
                    <p className=' title-margin-home-page'>
                        Ready to get started?
                    </p>
                    <button className='navbar__button center-button'>
                        Join Game House
                    </button>
                </div>
            </section>
            <img className='full-background' src={Portal} />
            <Footer />
        </div>
    );
}
