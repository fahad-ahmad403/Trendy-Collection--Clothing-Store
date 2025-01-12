import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    border: 3px solid rgba(29, 40, 86);
    border-left-color: transparent;
    border-radius: 50%;
  }

  .loader {
    border: 3px solid rgba(29, 40, 86);
    border-left-color: transparent;
    width: 18px;
    height: 18px;
  }

  .loader {
    border: 3px solid rgba(29, 40, 86);
    border-left-color: transparent;
    width: 18px;
    height: 18px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Loading;
