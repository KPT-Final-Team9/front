export const AVATAR_BUILDING_COLORS = ['bg-blue-700', 'bg-cyan-400', 'bg-orange-300', 'bg-green-500'];

export type RoomScoreEmojiName =
  | 'UnamusedFace'
  | 'ExpressionlessFace'
  | 'SlightlySmilingFace'
  | 'SmilingFaceWithSmilingEyes'
  | 'GrinningSquintingFace';
export type RoomScoreEmoji = Record<RoomScoreEmojiName, { src: string; alt: string }>;

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
