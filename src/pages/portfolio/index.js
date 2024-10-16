import React, { useState } from "react";
import "./style.css";
import loginomda from "../../projet/loginomda.png";
import membre from "../../projet/membre.png";
import oeuvre from "../../projet/oeuvre.png";
import login from "../../projet/login.png";
import vatany from '../../projet/vatany.png';
import voyage1 from '../../projet/voyage1.png';
import reser from '../../projet/reser.png';
import som from '../../projet/som.png';
import somaco from '../../projet/somaco.png';

export const Portfolio = () => {
  const images = {
    concours: [reser, voyage1],
    memoire: [login, vatany],
    omda: [loginomda, membre, oeuvre],
    somaca: [som, somaco]
  };

  const [hoveredImage, setHoveredImage] = useState({
    concours: images.concours[0],
    memoire: images.memoire[0],
    omdaIndex: 0,
    somacaIndex: 0
  });

  const handleMouseOver = (category) => {
    if (category === 'omda') {
      setHoveredImage(prev => ({
        ...prev,
        omdaIndex: (prev.omdaIndex + 1) % images.omda.length // Faire défiler entre les 3 images
      }));
    } else if (category === 'somaca') {
      setHoveredImage(prev => ({
        ...prev,
        somacaIndex: (prev.somacaIndex + 1) % images.somaca.length
      }));
    }
  };

  return (
    <div style={{ paddingTop: '60px' }} className='sary'>
      <h4 className="explication">Concours du projet</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('concours')}
           onMouseOut={() => setHoveredImage(prev => ({ ...prev, concours: images.concours[0] }))}>
        <img src={hoveredImage.concours} alt="Concours" />
      </div>

      <h4 className="explication">Projet mémoire</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('memoire')}
           onMouseOut={() => setHoveredImage(prev => ({ ...prev, memoire: images.memoire[0] }))}>
        <img src={hoveredImage.memoire} alt="Mémoire" />
      </div>

      <h4 className="explication">Stage OMDA</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('omda')}
           onMouseOut={() => setHoveredImage(prev => ({ ...prev, omdaIndex: 1 }))}>
        <img src={images.omda[hoveredImage.omdaIndex]} alt="OMDA" />
      </div>

      <h4 className="explication">Création de site web SOMACOU</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('somaca')}
           onMouseOut={() => setHoveredImage(prev => ({ ...prev, somacaIndex: 0 }))}>
        <img src={images.somaca[hoveredImage.somacaIndex]} alt="SOMACOU" />
      </div>
    </div>
  );
}

export default Portfolio;
