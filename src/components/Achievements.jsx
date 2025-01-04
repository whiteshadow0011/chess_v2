import React, { useRef } from 'react';

const Achievements = () => {
  const cards = [
    { id: 1, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 2, text: '', image: 'https://static.vecteezy.com/system/resources/previews/031/597/116/large_2x/a-skilled-hand-deftly-slides-a-chess-piece-marked-chess-across-vertical-mobile-wallpaper-ai-generated-free-photo.jpg' },
    { id: 3, text: '', image: 'https://static.vecteezy.com/system/resources/previews/031/597/116/large_2x/a-skilled-hand-deftly-slides-a-chess-piece-marked-chess-across-vertical-mobile-wallpaper-ai-generated-free-photo.jpg' },
    { id: 4, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 5, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 6, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 7, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 8, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 9, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
    { id: 10, text: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/800px-Chess_pieces_close_up.jpg' },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="achieve-container">
      <div className="achieve-slider" ref={sliderRef}>
        <button className="slider-arrow left-arrow" onClick={scrollLeft}>&lt;</button>
        {cards.map((card) => (
          <div
            key={card.id}
            className="achieve-card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="card-text">
              {card.text}
            </div>
          </div>
        ))}
        <button className="slider-arrow right-arrow" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Achievements;