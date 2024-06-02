export const AVATAR_BUILDING_COLORS = ['bg-blue-700', 'bg-cyan-400', 'bg-orange-300', 'bg-green-500'];

export const RENT_DATA = {
  rent: { title: '임대료', color: '#2461e6' },
  renewalRate: { title: '재계약률', color: '#67e8f9' },
  vacancyRate: { title: '공실률', color: '#ffb775' },
};

export enum RoomScoreGradeEmoji {
  BAD = 'UnamusedFace',
  NOT_BAD = 'ExpressionlessFace',
  NORMAL = 'SlightlySmilingFace',
  GOOD = 'SmilingFaceWithSmilingEyes',
  EXCELLENT = 'GrinningSquintingFace',
}
export type RoomScoreEmoji = Record<RoomScoreGradeEmoji, { src: string; alt: string }>;

export const ROOM_SCORE_EMOJI: RoomScoreEmoji = {
  ExpressionlessFace: {
    src: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Expressionless%20Face.png',
    alt: 'Expressionless Face',
  },
  GrinningSquintingFace: {
    src: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Squinting%20Face.png',
    alt: 'Grinning Squinting Face',
  },
  SmilingFaceWithSmilingEyes: {
    src: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Smiling%20Eyes.png',
    alt: 'Smiling Face with Smiling Eyes',
  },
  SlightlySmilingFace: {
    src: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Slightly%20Smiling%20Face.png',
    alt: 'Slightly Smiling Face',
  },
  UnamusedFace: {
    src: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Unamused%20Face.png',
    alt: 'Unamused Face',
  },
};

// 버튼 마크업 반복을 피하기 위해 상수로 분리한 데이터.
// FIXME: 사용하는 컴포넌트에서 타입 적용이 해결안되어 해당 파일에 같이 선언해둠
export const SURVEY_BUTTON_DATA: surveyButtonDataType[] = [
  {
    id: 1,
    imgName: 'SurveyBtnIcon1',
    btnTitle: '관리 평가',
    btnDescription: '호실 관리에 대한 나의 평가를 등록해 주세요',
    path: '/user-survey/scores?id=manage',
    isCompleted: false,
  },
  {
    id: 2,
    imgName: 'SurveyBtnIcon2',
    btnTitle: '시설 평가',
    btnDescription: '우리 시설에 대한 나의 점수를 등록해 주세요',
    path: '/user-survey/scores?id=facility',
    isCompleted: false,
  },
  {
    id: 3,
    imgName: 'SurveyBtnIcon3',
    btnTitle: '민원 평가',
    btnDescription: '민원 처리에 대한 나의 만족도를 알려주세요',
    path: '/user-survey/scores?id=complaint',
    isCompleted: false,
  },
];

interface surveyButtonDataType {
  id: number;
  imgName: 'SurveyBtnIcon1' | 'SurveyBtnIcon2' | 'SurveyBtnIcon3';
  btnTitle: string;
  btnDescription: string;
  path: string;
  isCompleted: boolean;
}

// score slider
export const SLIDER_COLOR = {
  manage: ['bg-gradient-to-r from-[#98B7FC] to-primary', 'border-primary'],
  facility: ['bg-gradient-to-r from-[#CDF4CD] to-primary-management', 'border-primary-management'],
  complaint: ['bg-gradient-to-r from-[#FEF1CF] to-primay-claim', 'border-primay-claim'],
};
