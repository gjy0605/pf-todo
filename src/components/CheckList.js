import React, { useState } from 'react';
import styled from 'styled-components';

const StyleCheckList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`


const CheckList = () => {

  return (
    <StyleCheckList className="App">
      <h2>아직 작업 안했어요 🥲</h2>
    </StyleCheckList>
  );
};

export default CheckList;