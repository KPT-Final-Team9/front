import type { Meta, StoryObj } from '@storybook/react';
import CommonTextField from './CommonTextField';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const User = z.object({
  firstName: z.string().min(1, { message: '이름은 필수' }).min(6, { message: '6이상' }).max(12, { message: '12이하' }),
});

const CommonTextFieldStory = ({ placeholder }: { placeholder: string }) => {
  const {
    register,
    watch,
    resetField,
    setFocus,
    formState: { errors },
  } = useForm<FormInput>({
    criteriaMode: 'all',
    resolver: zodResolver(User),
    mode: 'onBlur',
  });
  return (
    <form action="">
      <CommonTextField
        errorMessage={errors}
        placeholder={placeholder}
        IsError={Object.keys(errors).length !== 0}
        register={register}
        id={'firstName'}
        watch={watch}
        resetField={resetField}
        setFocus={setFocus}
      />
    </form>
  );
};

const meta = {
  title: 'Monocles/TextField/CommonTextField',
  component: CommonTextFieldStory,
  argTypes: {
    placeholder: { type: 'string', description: 'Placeholder' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommonTextFieldStory>;

export default meta;
type Story = StoryObj<typeof meta>;

interface FormInput {
  inputField: string;
}

export const Primary2: Story = {
  args: {
    placeholder: 'Enter text',
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};
