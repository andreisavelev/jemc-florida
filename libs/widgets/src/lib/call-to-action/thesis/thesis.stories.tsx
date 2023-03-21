import type { Meta } from '@storybook/react';
import { Thesis } from './thesis';

const Story: Meta<typeof Thesis> = {
  component: Thesis,
  title: 'Thesis',
};
export default Story;

export const Primary = {
  args: {
    icon: "PIN",
    children: "Какой-то очень длинный текст, чтобы посмотреть, как он будет выглядеть на разных разрешениях"
  },
};
