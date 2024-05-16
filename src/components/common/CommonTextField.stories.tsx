import type { Meta, StoryObj } from '@storybook/react';
import CommonTextField from './CommonTextField';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// inputField는 react-hook-form을 사용하기때문에
// story로 만들기 어려운 부분이 존재함
// zodResolver만 객체로 받게해서
// 에러메세지를 커스텀 할 수 있게 했음
const User = z.object({
  firstName: z
    .string()
    .min(1, { message: '이름은 필수' })
    .min(6, { message: '이름은 6이상 12이하' })
    .max(12, { message: '이름은 6이상 12이하' }),
});

const CommonTextFieldStory = ({
  placeholder,
  zodResolverObj,
}: {
  placeholder: string;
  zodResolverObj: z.ZodObject<any>;
}) => {
  const {
    register,
    watch,
    resetField,
    setFocus,
    formState: { errors, isValid, isLoading, isSubmitted, isSubmitting },
  } = useForm<FormInput>({
    criteriaMode: 'all',
    resolver: zodResolver(zodResolverObj),
    mode: 'onBlur',
  });
  return (
    <form action="">
      <CommonTextField
        errorMessage={errors}
        placeholder={placeholder}
        IsError={!(Object.keys(errors).length === 0)}
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
  title: 'Common/TextField/CommonTextField',
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
    zodResolverObj: User,
  },
  decorators: [
    Story => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};
