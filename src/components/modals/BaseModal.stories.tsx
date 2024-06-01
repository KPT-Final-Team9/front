import { Meta, StoryObj } from '@storybook/react';
import BaseModal from '@/components/modals/BaseModal';
import BoxImportant from '@img/box_important.png';
import { AlertDialogDescription } from '@/components/ui/alert-dialog';
import { StarIconButton } from '@Atoms/buttons/IconButtons';

const meta: Meta = {
  title: 'Modal/BaseModal',
  component: BaseModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const header = (
  <div className="flex flex-col gap-4">
    <div>
      <AlertDialogDescription className="text-h4 text-text-primary">미왕빌딩 A동 201호를</AlertDialogDescription>
      <AlertDialogDescription className="mb-3 text-h4 text-text-primary">
        대표호실로 등록하시겠습니까?
      </AlertDialogDescription>
    </div>
  </div>
);

export const NextIconButtonCircle: Story = {
  args: {
    header: header,
    imgSrc: BoxImportant,
    openTrigger: <StarIconButton />,
    acceptText: '네, 등록하겠습니다',
    cancelText: '아니요, 취소하겠습니다',
  },
};
