import React from 'react'
import styled from 'styled-components'


const HistoricDatesContainer = styled.section`
  position: relative;
  min-height: 1080px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  position: relative;
  margin: 0;
  padding-top: 170px;
  padding-left: 80px;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #42567A;
  max-width: 353px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 120px;
    background: linear-gradient(180deg, #3877EE, #EF5DA8);
    bottom: 10px;
    left: -1px;
  }
`;

const HistoricDates: React.FC = () => {

  return (
    <HistoricDatesContainer>
      <Heading>Исторические даты</Heading>
    </HistoricDatesContainer>
  );
};

export default HistoricDates;