import React, { useState } from 'react';

import { TimelineProps } from './types';
import {
  StyledTimeline,
  TimelineText,
  ProgressTimelineBar,
  TimelineBar,
  TimelinePoint,
  TimelineButton,
  TimelineItem,
  TimelineItems,
  TimelineButtons,
} from './styles';

import previousArrow from '~/assets/previous-arrow.svg';
import nextArrow from '~/assets/next-arrow.svg';

export default function Timeline({
  items,
  currentItem,
  onChange,
}: TimelineProps) {
  const [lastFilmIndex, setLastFilmIndex] = useState(3);
  const [scrollPosition, setScrollPosition] = useState(0);

  const currentIndex = currentItem ? items.indexOf(currentItem) : -1;

  function handleNext() {
    let newIndex = lastFilmIndex + 4;
    if (newIndex >= items.length) {
      newIndex = items.length;
    }
    setLastFilmIndex(newIndex);
    setScrollPosition(-(newIndex - 4) * 0.25 * 100);
  }

  function handlePrevious() {
    let newIndex = lastFilmIndex - 4;
    if (newIndex < 4) {
      newIndex = 4;
    }
    setLastFilmIndex(newIndex - 1);
    setScrollPosition((newIndex - 4) * 0.25 * 100);
  }

  return (
    <StyledTimeline>
      <TimelineItems animate={{ x: `${scrollPosition}%` }}>
        <TimelineBar custom={{ width: items.length * 25 }} color="#C4C4C4" />
        <ProgressTimelineBar
          animate={{
            width: `${currentIndex * 25 + 12.5}%`,
            transition: { delay: 0.1 },
          }}
          color="#FFE81F"
        />
        {items.map((film, index) => {
          return (
            <TimelineItem key={film.title}>
              <TimelineText onClick={() => onChange(film)}>
                {film.title}
              </TimelineText>
              <TimelinePoint
                onClick={() => onChange(film)}
                color={currentIndex >= index ? '#FFE81F' : '#C4C4C4'}
              />
              <TimelineText onClick={() => onChange(film)}>
                {new Date(film.release_date).getFullYear()}
              </TimelineText>
            </TimelineItem>
          );
        })}
      </TimelineItems>
      <TimelineButtons>
        <TimelineButton
          onClick={handlePrevious}
          position="left"
          animate={lastFilmIndex > 3 ? 'open' : 'closed'}
        >
          <img src={previousArrow} alt="previous-items" />
        </TimelineButton>
        <TimelineButton
          onClick={handleNext}
          position="right"
          animate={lastFilmIndex < items.length ? 'open' : 'closed'}
        >
          <img src={nextArrow} alt="next-items" />
        </TimelineButton>
      </TimelineButtons>
    </StyledTimeline>
  );
}
