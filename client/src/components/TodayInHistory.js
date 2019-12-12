import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Event from './Event';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  max-width: 40%;
  filter: drop-shadow(0 0 20px #000);
`;

const TodayInHistory = () => {
  const [event, setEvent] = useState();

  const getHistoricData = async () => {
    const { data } = await axios('/getTodayInHistory');
    console.log(data);
    setEvent(data);
  };

  useEffect(() => {
    getHistoricData();
  }, []);

  return <Wrapper>{event !== undefined ? <Event year={event.year} text={event.text} /> : null}</Wrapper>;
};

export default TodayInHistory;
