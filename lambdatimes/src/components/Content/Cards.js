import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      { props.cards.map(card => { <Card card= {card} /> })};
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: Proptypes.object
};

export default Cards;