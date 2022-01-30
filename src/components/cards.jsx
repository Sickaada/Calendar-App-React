import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import parseDate from '../utils/parsedDate';

function CardComponent({ events }) {
  console.log(events[0]);

  const renderCard = (card, index) => (

    <Card border="primary" style={{ width: '18rem', margin: '2rem' }} key={index}>
      <Card.Header>{card.Header}</Card.Header>
      <Card.Body>
        {parseDate(card.start.dateTime)}

        <p style={{ opacity: '0.6', margin: '12px 0px' }}> to </p>
        {parseDate(card.end.dateTime)}

        <Card.Text style={{ opacity: '0.5', fontSize: '14px', marginTop: '1.5rem' }}>
          {card.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
  return (
    <div>
      {events.map(renderCard)}
    </div>
  );
}
CardComponent.propTypes = {
  events: PropTypes.func.isRequired,
};

export default CardComponent;
