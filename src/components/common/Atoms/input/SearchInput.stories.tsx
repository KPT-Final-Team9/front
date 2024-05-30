import { Meta, StoryObj } from '@storybook/react';
import SearchInputComp from './SearchInput';

const meta: Meta = {
  title: 'Atoms/Input/SearchInput',
  component: SearchInputComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const SearchInput: StoryObj<typeof SearchInputComp> = {
  args: {
    placeholder: 'placeholder custom test',
  },
  render: ({ ...args }) => <SearchInputComp {...args} />,
};
