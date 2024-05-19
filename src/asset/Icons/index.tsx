import XIconComp from '@/asset/Icons/ic-x.svg';
import BellIconComp from '@/asset/Icons/icon_alarm.svg';
import { MdNavigateNext } from 'react-icons/md';
import DefaultAvatarIconComp from '@/asset/Icons/account.svg';
import BuildingIconComp from '@/asset/Icons/building.svg';

export function XIcon({ ...props }) {
  return <XIconComp {...props} />;
}

export function XIconDark({ ...props }) {
  return (
    <XIconComp
      className="fill-white"
      {...props}
    />
  );
}

export function BellIcon({ ...props }) {
  return <BellIconComp {...props} />;
}

export function NextIcon({ ...props }) {
  return <MdNavigateNext {...props} />;
}

export function AccountIcon({ ...props }) {
  return <DefaultAvatarIconComp {...props} />;
}

export function BuildingIcon({ ...props }) {
  return <BuildingIconComp {...props} />;
}
