import { MdNavigateNext } from 'react-icons/md';

import SpeechBubbleIconComp from '@/asset/Icons/ic-speechbubble.svg';
import TooltipIconComp from '@/asset/Icons/ic-tooltip.svg';
import XIconComp from '@/asset/Icons/ic-x.svg';
import BellIconComp from '@/asset/Icons/icon_alarm.svg';
import StarIconComp from '@/asset/Icons/icon_star.svg';
import DefaultAvatarIconComp from '@/asset/Icons/account.svg';
import BuildingIconComp from '@/asset/Icons/icon_building.svg';
import DashLineIconComp from '@/asset/Icons/dash-line.svg';
import ExclamationMarkComp from '@/asset/Icons/exclamation-mark.svg';
import RoundStarIconComp from '@/asset/Icons/ic-star.svg';
import RoundUnselectedStarIconComp from '@/asset/Icons/ic-start-unselected.svg';
import ReviewTrackCircleIconComp from '@/asset/Icons/ic-reviewTrackCircle.svg';
import CalendarIconComp from '@/asset/Icons/icon_calendar.svg';
import RoomIconComp from '@/asset/Icons/icon_room.svg';
import RoomScoreBgComp from '@/asset/Icons/room-score-bg.svg';
import BookmarkIconComp from '@/asset/Icons/icon_bookmark.svg';
import FilterIconComp from '@/asset/Icons/icon_filter.svg';
import SearchIconComp from '@/asset/Icons/icon_search.svg';
import TotalIconComp from '@/asset/Icons/icon_total.svg';

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

export function AccountIcon({ ...props }) {
  return <DefaultAvatarIconComp {...props} />;
}

export function BuildingIcon({ ...props }) {
  return <BuildingIconComp {...props} />;
}

export function DashLineIcon({ ...props }) {
  return <DashLineIconComp {...props} />;
}

export function ExclamationMark({ ...props }) {
  return <ExclamationMarkComp {...props} />;
}

export function RoundStarIcon({ ...props }) {
  return <RoundStarIconComp {...props} />;
}

export function RoundUnselectedStarIcon({ ...props }) {
  return <RoundUnselectedStarIconComp {...props} />;
}

export function CalendarIcon({ ...props }) {
  return <CalendarIconComp {...props} />;
}

export function RoomIcon({ ...props }) {
  return <RoomIconComp {...props} />;
}

export function ReviewTrackCircleIcon({ ...props }) {
  return <ReviewTrackCircleIconComp {...props} />;
}

export function RoomScoreBg({ ...props }) {
  return <RoomScoreBgComp {...props} />;
}

export function BookmarkIcon({ ...props }) {
  return <BookmarkIconComp {...props} />;
}

export function FilterIcon({ ...props }) {
  return <FilterIconComp {...props} />;
}

export function SearchIcon({ ...props }) {
  return <SearchIconComp {...props} />;
}

export function TotalIcon({ ...props }) {
  return <TotalIconComp {...props} />;
}
