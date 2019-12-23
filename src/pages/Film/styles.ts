import styled from 'styled-components';
import { motion } from 'framer-motion';

import background from '~/assets/background.jpg';

export const StyledFilm = styled.div`
  background-image: ${`url(${background})`};
  height: 100%;
`;

export const FilmWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  position: relative;
`;

export const AnimatedFilm = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export const Logo = styled.img`
  width: 250px;
  margin: 0 auto;
`;

export const Content = styled(motion.div).attrs(() => ({
  variants: {
    open: {
      height: '100%',
      padding: '15px',
      transition: {
        ease: 'easeIn',
        delay: 0.3,
      },
    },
    closed: {
      height: 0,
    },
  },
}))`
  background-color: rgba(48, 48, 48, 0.85);
  border-radius: 15px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  overflow: auto;
`;

export const TimelineWrapper = styled.div`
  padding: 15px;
  margin-top: auto;
`;
