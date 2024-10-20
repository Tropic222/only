import React from 'react'
import styled from 'styled-components'
import HistoricDates from '../HistoricDates/HistoricDates'

const MainContainer = styled.main`
  font-family: 'PT Sans', sans-serif;
  margin: 0 auto;
  max-width: 1440px;
  min-width: 300px;
  border-left: 1px solid #E3E6ED;
  border-right: 1px solid #E3E6ED;
  background: linear-gradient(#E3E6ED, #E3E6ED) no-repeat center/1px 100%;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
       <HistoricDates />
    </MainContainer>
  );
};

export default Main;