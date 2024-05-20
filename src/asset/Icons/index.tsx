import { MdNavigateNext } from 'react-icons/md';

import SpeechBubbleIconComp from '@/asset/Icons/ic-speechbubble.svg';
import TooltipIconComp from '@/asset/Icons/ic-tooltip.svg';
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

export function SpeechBubbleIcon({ ...props }) {
  return <SpeechBubbleIconComp {...props} />;
}

export function TooltipIcon({ ...props }) {
  return <TooltipIconComp {...props} />;
}
