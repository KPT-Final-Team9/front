import { MdNavigateNext } from 'react-icons/md';
import { CgClose as CgCloseComp } from 'react-icons/cg';
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
import OfficenerMainLogoComp from '@/asset/Icons/officener-main-logo.svg';
import UserIconComp from '@/asset/Icons/ic-user.svg';
import SurveyIconComp from '@/asset/Icons/icon_survey.svg';
import ArrowLeftIconComp from '@/asset/Icons/icon_arrow_left.svg';
import SurveyRoomComp from '@/asset/Icons/survey_room.svg';
import SurveyBtnIcon1Comp from '@/asset/Icons/icon_survey_btn1.svg';
import SurveyBtnIcon2Comp from '@/asset/Icons/icon_survey_btn2.svg';
import SurveyBtnIcon3Comp from '@/asset/Icons/icon_survey_btn3.svg';
import LoadingSpinnerComp from '@/asset/Icons/loading-spinner.svg';
import BusinessChartComp from '@/asset/Icons/ic-business-chart.svg';
import SurveyManageComp from '@/asset/Icons/survey_manage.svg';
import SurveyFacilityComp from '@/asset/Icons/survey_facility.svg';
import SurveyComplaintComp from '@/asset/Icons/survey_complaint.svg';
import SurveyFinishComp from '@/asset/Icons/survey_finish.svg';
import NavDashboardIconComp from '@/asset/Icons/nav_dashboard.svg';
import NavRoomIconComp from '@/asset/Icons/nav_room.svg';
import NavRatingDetailIconComp from '@/asset/Icons/nav_rating_detail.svg';
import NavAccountIconComp from '@/asset/Icons/nav_account.svg';
import MenuDotsIconComp from '@/asset/Icons/icon-menu-dots.svg';

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
  return (
    <ExclamationMarkComp
      fill="#6B7280"
      {...props}
    />
  );
}

export function RoundStarIcon({ ...props }) {
  return (
    <RoundStarIconComp
      fill={'#FFD233'}
      {...props}
    />
  );
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

export function OfficenerMainLogo({ ...props }) {
  return <OfficenerMainLogoComp {...props} />;
}

export function UserIcon({ ...props }) {
  return <UserIconComp {...props} />;
}

export function SurveyIcon({ ...props }) {
  return <SurveyIconComp {...props} />;
}

export function ArrowLeftIcon({ ...props }) {
  return <ArrowLeftIconComp {...props} />;
}

export function SurveyRoom({ ...props }) {
  return <SurveyRoomComp {...props} />;
}

export function SurveyBtnIcon1({ ...props }) {
  return <SurveyBtnIcon1Comp {...props} />;
}

export function SurveyBtnIcon2({ ...props }) {
  return <SurveyBtnIcon2Comp {...props} />;
}

export function SurveyBtnIcon3({ ...props }) {
  return <SurveyBtnIcon3Comp {...props} />;
}

export function SurveyManage({ ...props }) {
  return <SurveyManageComp {...props} />;
}

export function SurveyFacility({ ...props }) {
  return <SurveyFacilityComp {...props} />;
}

export function SurveyComplaint({ ...props }) {
  return <SurveyComplaintComp {...props} />;
}

export function CgClose({ ...props }) {
  return <CgCloseComp {...props} />;
}

export function LoadingSpinner({ ...props }) {
  return (
    <LoadingSpinnerComp
      className="animate-spin"
      {...props}
    />
  );
}

export function BusinessChart({ ...props }) {
  return <BusinessChartComp {...props} />;
}

export function SurveyFinish({ ...props }) {
  return <SurveyFinishComp {...props} />;
}

export function NavDashboardIcon({ ...props }) {
  return <NavDashboardIconComp {...props} />;
}

export function NavRoomIcon({ ...props }) {
  return <NavRoomIconComp {...props} />;
}

export function NavRatingDetailIcon({ ...props }) {
  return <NavRatingDetailIconComp {...props} />;
}

export function NavAccountIcon({ ...props }) {
  return <NavAccountIconComp {...props} />;
}

export function MenuDotsIcon({ ...props }) {
  return <MenuDotsIconComp {...props} />;
}
