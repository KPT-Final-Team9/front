'use client';
import { LocalIcon } from '@icon/index';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthInput from '@Atoms/input/AuthInput';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const User = z.object({
  account: z.string().min(1, { message: '이름은 필수' }).min(6, { message: '6이상' }).max(12, { message: '12이하' }),
});

interface FormInput {
  inputField: string;
}

export default function Page() {
  const tabTriggerClass =
    'rounded-b-none border-[1px] border-r-0 bg-stroke text-black data-[state=active]:border-b-0 data-[state=active]:bg-white data-[state=active]:shadow-none w-full px-[132px] py-[24px]';
  const tabContentClass = 'rounded-sm m-0 border-x-[1px] px-28 pt-11 grow pb-[64px] border-b-[1px]';

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
  console.log(errors);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-14">
      <div className="flex flex-col items-center justify-center gap-5">
        <LocalIcon
          className="h-[81px] w-[156px]"
          name={'OfficenerMainLogo'}
        />
        <h1 className="text-h2">로그인</h1>
      </div>
      <Tabs defaultValue="account">
        <TabsList className="bg-whit h-fit w-full p-0 ">
          <TabsTrigger
            className={tabTriggerClass}
            value="account">
            입주자
          </TabsTrigger>
          <TabsTrigger
            className={tabTriggerClass}
            value="password">
            소유자
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className={tabContentClass}
          value="account">
          <form
            action=""
            className="flex flex-col gap-8">
            <AuthInput
              className={cn(
                'rounded-sm border-stroke bg-white py-2 pl-4 pr-10 text-overline text-text-primary placeholder:text-overline placeholder:text-text-disabled desktop:pr-11 desktop:text-body4 desktop:placeholder:text-body4',
              )}
              placeholder="이메일"
              id="account"
              errorMessage={errors}
              register={register}
            />
            <AuthInput
              className={cn(
                'rounded-sm border-stroke bg-white py-2 pl-4 pr-10 text-overline text-text-primary placeholder:text-overline placeholder:text-text-disabled desktop:pr-11 desktop:text-body4 desktop:placeholder:text-body4',
              )}
              placeholder="이메일"
              id="password"
              register={register}
            />
          </form>
        </TabsContent>
        <TabsContent
          className={tabContentClass}
          value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
