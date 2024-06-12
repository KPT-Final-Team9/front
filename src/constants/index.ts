export const AVATAR_BUILDING_COLORS = ['bg-blue-700', 'bg-cyan-400', 'bg-orange-300', 'bg-green-500'];
export const AVATAR_BUILDING_GRADIENT = [
  { strokeColor: '#1158f1', gradientColor: '#c6d0e7' },
  { strokeColor: '#67E8F9', gradientColor: '#a6edf5' },
  { strokeColor: '#FFB775', gradientColor: '#f5c89e' },
  { strokeColor: '#22c55e', gradientColor: '#b5f4cd' },
];
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

// score slider
export const SLIDER_COLOR = {
  manage: ['bg-gradient-to-r from-[#98B7FC] to-primary', 'border-primary'],
  facility: ['bg-gradient-to-r from-[#CDF4CD] to-primary-management', 'border-primary-management'],
  complaint: ['bg-gradient-to-r from-[#FEF1CF] to-primay-claim', 'border-primay-claim'],
};

// survey 평가 문구
export const SURVEY_QUESTION: { [key: string]: string } = {
  manage: '관리',
  facility: '시설',
  complaint: '민원 처리',
};

export enum UserRole {
  Role = 'role',
  User = 'user',
  Owner = 'owner',
  Admin = 'admin',
}

export enum AuthInputId {
  Account = 'account',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
}

// 쿼리스트링 값
export enum QueryOptions {
  Id = 'id',
  BuildingName = 'buildingName',
}

interface ContractStatus {
  status: string;
  description: string;
}

export const CONTRACT_STATUSES: { [key: string]: ContractStatus } = {
  PENDING: { status: 'PENDING', description: '계약 대기' },
  COMPLETED: { status: 'COMPLETED', description: '계약 완료' },
  CANCELED: { status: 'CANCELED', description: '계약 취소' },
  IN_PROGRESS: { status: 'IN_PROGRESS', description: '계약 이행' },
  TERMINATED: { status: 'TERMINATED', description: '계약 파기' },
  EXPIRED: { status: 'EXPIRED', description: '계약 만료' },
};

export enum ScoreType {
  MANAGEMENT = 'management',
  CLAIM = 'claim',
  FACILITY = 'facility',
}
