import Film from '~/models/Film';

export type TimelineProps = {
  items: Film[];
  onChange: (item: Film) => void;
  currentItem?: Film | null;
};
