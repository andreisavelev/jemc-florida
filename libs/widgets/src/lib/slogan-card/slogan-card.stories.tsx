import type { Meta } from '@storybook/react';
import { SloganCard } from './slogan-card';

const Story: Meta<typeof SloganCard> = {
  component: SloganCard,
  title: 'SloganCard',
};
export default Story;

export const Primary = {
  args: {
    title: 'Наше видение',
    children: <ul><li>test</li></ul>
  },
};
