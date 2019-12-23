import styled, { keyframes } from 'styled-components';

// css by https://tobiasahlin.com/spinkit/

const bounceKeyframes = keyframes`
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

export const StyledLoading = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;

  position: relative;
`;

export const BounceA = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  animation: ${bounceKeyframes} 2s infinite ease-in-out;
`;

export const BounceB = styled(BounceA)`
  animation-delay: -1s;
`;
