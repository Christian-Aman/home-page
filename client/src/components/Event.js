import React from 'react';
import styled from 'styled-components';

const Year = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
`;

const Event = ({ year, text }) => {
  return (
    <div>
      <Year>This day in year {year}</Year>
      <Text>{text}</Text>
    </div>
  );
};

export default Event;
