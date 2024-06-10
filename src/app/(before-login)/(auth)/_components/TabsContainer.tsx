'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthInput from '@Atoms/input/AuthInput';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingSpinner } from '@/asset/Icons/index';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { FormInput, LoginTab } from '@/types/auth';

export default function TabsContainer({
  zodSchema,
  onHandleSubmit,
  tabs,
  setTabState,
  isLoading,
}: {
  zodSchema: z.ZodObject<any>;
  onHandleSubmit: SubmitHandler<FormInput>;
  setTabState: Dispatch<SetStateAction<string>>;
  tabs: LoginTab[];
  isLoading: boolean;
}) {
  const tabTriggerClass =
    'rounded-b-none border-[1px] border-r-0 bg-gray-50 text-black data-[state=active]:border-b-0 data-[state=active]:bg-white data-[state=active]:shadow-none w-full  py-[20px] text-h4 desktop:font-bold ';
  const tabContentClass = 'rounded-sm m-0 border-x-[1px] desktop:px-16 pt-11 grow pb-[64px] border-b-[1px]';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormInput>({
    criteriaMode: 'all',
    resolver: zodResolver(zodSchema),
    mode: 'onBlur',
  });
  useEffect(() => {
    setTabState(tabs[0].value);
  }, []);

  return (
    <>
      <Tabs
        className="w-full px-4 desktop:w-[619px] desktop:px-0"
        defaultValue={tabs[0].value}
        onValueChange={setTabState}>
        <TabsList className="bg-whit h-fit w-full p-0 ">
          {tabs.map((tab, index) => {
            return (
              <TabsTrigger
                key={index}
                className={tabTriggerClass}
                value={tab.value}>
                {tab.title}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {tabs.map((tab, index) => {
          return (
            <TabsContent
              key={index}
              className={tabContentClass}
              value={tab.value}>
              <form
                onSubmit={handleSubmit(onHandleSubmit)}
                className="flex w-full flex-col px-4">
                {tab.inputs.map((input, iIndex) => (
                  <AuthInput
                    key={iIndex}
                    placeholder={input.placeholder}
                    id={input.id}
                    type={input.type}
                    errorMessage={errors}
                    register={register}
                  />
                ))}
                <Button className="mt-3 py-3">{isLoading ? <LoadingSpinner /> : '로그인'}</Button>
              </form>
            </TabsContent>
          );
        })}
      </Tabs>
    </>
  );
}
