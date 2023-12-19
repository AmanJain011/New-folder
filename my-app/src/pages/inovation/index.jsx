import React from 'react';
// import './style.css';

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="title">{title}</div>
        <div className="price"></div>
        <div className="description">{description}</div>
      </div>
      <button>{buttonText}</button>
    </div>
  );
};

const MyCards = ({ cards }) => {
  return <div className="mycards">{cards.map((card, index) => <Card key={index} {...card} />)}</div>;
};

const Inovation = () => {
  const handleClick = () => {
    // Handle button click (e.g., redirect to another page)
  };

  const cards1 = [
    { title: 'Leafy-Decoction VendingMachine', description: 'Vending machine that dispenses herbal or leaf-based drinks, like teas or decoctions.', buttonText: 'Show More...' },
    // Add other cards as needed
  ];

  const cards2 = [
    // Add cards for the second section
  ];

  const cards3 = [
    // Add cards for the third section
  ];

  return (
    <div>
      <MyCards cards={cards1} />
      <MyCards cards={cards2} />
      <MyCards cards={cards3} />
    </div>
  );
};

export default Inovation;
