import discover from './discover.tsx';
import chevronLeft from './chevronLeft.tsx';
import label from './label.tsx';
import profile from './profile.tsx';
import home from './home.tsx';
import dot from './dot.tsx';
import search from './search.tsx';
import chevronRight from './chevronRight.tsx';

export const icons = {
  discover,
  chevronLeft,
  label,
  profile,
  home,
  dot,
  search,
  chevronRight,
};

export type IconTypes = keyof typeof icons;
