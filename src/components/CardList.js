import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  return (  
    cards.map(card => (
      <Card key={card.id} id={card.id} name={card.name} email={card.email} />
    ))
  );
}
 
export default CardList;