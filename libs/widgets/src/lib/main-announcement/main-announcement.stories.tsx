import type { Meta } from '@storybook/react';
import { MainAnnouncement } from './main-announcement';

const Story: Meta<typeof MainAnnouncement> = {
  component: MainAnnouncement,
  title: 'MainAnnouncement',
};
export default Story;

export const Primary = {
  args: {},
};
