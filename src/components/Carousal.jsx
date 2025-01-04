import React from "react";

const ThreeBoxesPage = () => {
  const boxes = [
    {
      image: "src/assets/pexels-cottonbro-4973821.jpg",
      text: "This is the first achievement",
    },
    {
      image: "src/assets/pexels-recalmedia-42070.jpg",
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, maxime ex dignissimos vel alias facilis numquam nesciunt suscipit animi accusamus.',
    },
    {
      image: "src/assets/pexels-vlada-karpovich-6114992.jpg",
      text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, totam. Sit sapiente magni nisi quaerat autem nihil dolorem animi rem, laborum tenetur dolores, quisquam labore accusantium repellendus rerum voluptas illum blanditiis aliquam facere! Molestias!',
    },
  ];

  return (
    <div className="container">
      <h1 className="heading">Our Achievement</h1>
      <div className="boxes">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <img src={box.image} alt={`Achievement ${index + 1}`} />
            <p>{box.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeBoxesPage;
