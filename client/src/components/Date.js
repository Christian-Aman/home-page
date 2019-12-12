import React from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
// import useInterval from '../utils/useInterval';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  filter: drop-shadow(0 0 20px #000);
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const Text = styled.h3`
  margin: 0.2em;
  text-transform: capitalize;
`;

const Date = () => {
  const date = DateTime.local();
  // .toLocaleString(DateTime.DATETIME_FULL);

  return (
    <Wrapper>
      <Section>
        <Text>{date.weekdayLong}</Text>
        <Text>{date.day}</Text>
        <Text>{date.monthLong}</Text>
        <Text>{date.year}</Text>
      </Section>
      <Section>
        <Text>{date.toFormat('HH:mm')}</Text>
      </Section>
    </Wrapper>
  );
};

export default Date;
