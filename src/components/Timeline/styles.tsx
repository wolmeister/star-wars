import styled from 'styled-components';
import { motion } from 'framer-motion';

type TimelineBarProps = {
  color: string;
};

type CustomTimelineBarProps = {
  width: number;
};

type TimelinePointProps = {
  color: string;
};

type TimelineButtonProps = {
  position: 'left' | 'right';
};

export const StyledTimeline = styled.div`
  position: relative;
  overflow: hidden;
  height: 92px;
`;

export const ProgressTimelineBar = styled(motion.div)<TimelineBarProps>`
  height: 10px;
  position: absolute;
  background-color: ${props => props.color};
  top: calc(50% - 5px);
  transition: all 0.5s;
  pointer-events: none;
  border-radius: 10px;
`;

export const TimelineBar = styled(ProgressTimelineBar).attrs({
  variants: {
    open(props: CustomTimelineBarProps) {
      return {
        width: `${props.width}%`,
      };
    },
    closed: {
      width: 0,
    },
  },
})``;

export const TimelineItems = styled(motion.div)`
  display: flex;
  width: 100%;
`;

export const TimelineItem = styled.div`
  flex: 0 0 25%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const TimelinePoint = styled(motion.div).attrs({
  variants: {
    open: {
      height: '50px',
    },
    closed: {
      height: 0,
    },
  },
})<TimelinePointProps>`
  background-color: ${props => props.color};
  width: 15px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 2;
`;

export const TimelineText = styled(motion.span).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  },
})``;

export const TimelineButtons = styled(motion.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  },
})``;

export const TimelineButton = styled(motion.button).attrs({
  variants: {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  },
})<TimelineButtonProps>`
  height: 40px;
  width: 40px;
  position: absolute;
  right: ${props => (props.position === 'right' ? 0 : '')};
  left: ${props => (props.position === 'left' ? 0 : '')};
  top: calc(50% - 20px);
  transition: all 0.5s;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  z-index: 1;
`;
