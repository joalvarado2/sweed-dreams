import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import 'font-awesome/css/font-awesome.min.css';
import image1 from "./assets/pijama1.jpg";
import image2 from "./assets/pijama3.jpg";
import image3 from "./assets/pijama4.jpg";

function App() {
  const products = [
    {
      images: [image1, image2, image3], // Aquí debes tener un array de imágenes
      title: "Pijama de Algodón",
      description: "Pijama suave y cómoda de algodón.",
      price: "$29.99",
      whatsappLink: "https://api.whatsapp.com/send?phone=3504677423",
      instagramLink: "https://www.instagram.com/TUINSTAGRAM"
    },
    {
      images: [image1, image2, image3], // Aquí debes tener un array de imágenes
      title: "Pijama de Algodón",
      description: "Pijama suave y cómoda de algodón.",
      price: "$29.99",
      whatsappLink: "https://api.whatsapp.com/send?phone=3504677423",
      instagramLink: "https://www.instagram.com/TUINSTAGRAM"
    },
    {
      images: [image1, image2, image3], // Aquí debes tener un array de imágenes
      title: "Pijama de Algodón",
      description: "Pijama suave y cómoda de algodón.",
      price: "$29.99",
      whatsappLink: "https://api.whatsapp.com/send?phone=3504677423",
      instagramLink: "https://www.instagram.com/TUINSTAGRAM"
    },
    {
      images: [image1, image2, image3], // Aquí debes tener un array de imágenes
      title: "Pijama de Algodón",
      description: "Pijama suave y cómoda de algodón.",
      price: "$29.99",
      whatsappLink: "https://api.whatsapp.com/send?phone=3504677423",
      instagramLink: "https://www.instagram.com/TUINSTAGRAM"
    },
    {
      images: [image1, image2, image3], // Aquí debes tener un array de imágenes
      title: "Pijama de Algodón",
      description: "Pijama suave y cómoda de algodón.",
      price: "$29.99",
      whatsappLink: "https://api.whatsapp.com/send?phone=3504677423",
      instagramLink: "https://www.instagram.com/TUINSTAGRAM"
    },
    // Agrega más productos aquí
  ];

  return (
    <div>
      <Header />
      <div className="container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            images={product.images} // Debes pasar images en lugar de image
            title={product.title}
            description={product.description}
            price={product.price}
            whatsappLink={product.whatsappLink}
            instagramLink={product.instagramLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
