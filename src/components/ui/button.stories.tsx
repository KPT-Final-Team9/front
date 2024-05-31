import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'ui/Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'ghost', 'link', 'none', 'icon', 'outline', 'primary', 'secondary', 'orange'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    variant: 'default',
    size: 'sm',
    colors: 'default',
    children: '로그아웃',
  },
};

export const AllSizeButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button size="default">Default (Medium)</Button>
      <Button size="icon">icon</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium (Default)</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariantButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button variant="default">Default (Primary)</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="icon">Icon</Button>
      <Button variant="link">Link</Button>
      <Button variant="none">None</Button>
      <Button variant="orange">Orange</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary">Primary (Default)</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};
