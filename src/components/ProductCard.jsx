import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProductCard({ images, title, description, price, whatsappLink, instagramLink }) {
  return (
    <div className="product">
      <Carousel showThumbs={false} autoPlay={true} interval={3000}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={title} />
          </div>
        ))}
      </Carousel>
      <div className="product-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Precio: {price}</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          <i className="fa fa-whatsapp"></i>
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="instagram-button">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
