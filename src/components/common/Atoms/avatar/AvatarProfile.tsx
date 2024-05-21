import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LocalIcon } from '@icon/index';

export function AvatarProfile({ imgSrc = '' }: { imgSrc?: string }) {
  return (
    <Avatar>
      <AvatarImage
        src={imgSrc}
        alt="Avatar Profile"
      />
      <AvatarFallback>
        <LocalIcon
          name={'AccountIcon'}
          width={40}
          height={40}
        />
      </AvatarFallback>
    </Avatar>
  );
}
