import React from "react";
import Project from './Projects';
import cabin from './assets/cabin.png';
import cake from './assets/cake.png';
import circus from './assets/circus.png';
import game from './assets/game.png';
import safe from './assets/safe.png';
import submarine from './assets/submarine.png';

const Portfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <Project source={cabin} />
                    <Project source={cake} />
                    <Project source={circus} />
                    <Project source={game} />
                    <Project source={safe} />
                    <Project source={submarine} />
                </div>
            </div>
        </section>
    )
}

export default Portfolio