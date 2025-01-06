import React from "react";
import { useEffect } from "react";
import Image1 from "../assets/pexels-cottonbro-4973821.jpg";
import Image2 from "../assets/pexels-recalmedia-42070.jpg";
import Image3 from "../assets/pexels-vlada-karpovich-6114992.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'

const ThreeBoxesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  const boxes = [
    {
      image: Image1,
      text: "This is the first achievement",
    },
    {
      image: Image2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, maxime ex dignissimos vel alias facilis numquam nesciunt suscipit animi accusamus.",
    },
    {
      image: Image3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, totam. Sit sapiente magni nisi quaerat autem nihil dolorem animi rem, laborum tenetur dolores, quisquam labore accusantium repellendus rerum voluptas illum blanditiis aliquam facere! Molestias!",
    },
  ];
  const aosAnimations = ["fade-right", "slide-up", "fade-left"];


  return (
    <div className="container">
      <h1 className="heading" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Our Achievement</h1>
      <div className="boxes">
        {boxes.map((box, index) => (
          <div className="box" data-aos={aosAnimations[index]} key={index}>
            <img src={box.image} alt={`Achievement ${index + 1}`} />
            <p>{box.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeBoxesPage;
