import React from 'react';
import styled from 'styled-components';

const Author = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
`;

const Quote = ({ author, quote }) => {
  return (
    <div>
      <Author>{author}:</Author>
      <Text>{quote}</Text>
    </div>
  );
};

export default Quote;
