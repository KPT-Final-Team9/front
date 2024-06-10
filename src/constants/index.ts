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
