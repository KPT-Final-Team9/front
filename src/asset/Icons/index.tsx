import { MdNavigateNext } from 'react-icons/md';

import XIconComp from '@/asset/Icons/ic-x.svg';
import BellIconComp from '@/asset/Icons/icon_alarm.svg';
import StarIconComp from '@/asset/Icons/icon_star.svg';

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

export function StarIcon({ ...props }) {
  return <StarIconComp {...props} />;
}
