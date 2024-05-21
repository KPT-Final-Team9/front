import { LocalIcon } from '@icon/index';

import { Props as LabelListProp } from '../../../node_modules/recharts/types/component/Label.js';

/**
 * Description placeholder
 *
 * @param {LabelListProp} props SVGProps <SVGTextElement>
 * @returns {*} svg를 반환함
 */
export const SpeechBubbleCustomLabel = (props: LabelListProp) => {
  const { x, y, width, value, fill } = props;

  const parsedX = typeof x === 'number' ? x : parseFloat(x || '0');
  const parsedY = typeof y === 'number' ? y : parseFloat(y || '0');
  const parsedWidth = typeof width === 'number' ? width : parseFloat(width || '0');

  return (
    <g transform={`translate(${parsedX - parsedWidth + 20}, ${parsedY - 50})`}>
      <LocalIcon
        name="SpeechBubbleIcon"
        fill={fill}
        width={60}
        height={60}
      />
      <text
        x={25}
        y={14}
        dy={5}
        dx={5}
        fill="white"
        textAnchor="middle"
        fontSize={14}
        style={{ fontFamily: 'var(--font-pretendard)', fontWeight: '600' }}
        fontWeight={'600'}>
        {value}
      </text>
    </g>
  );
};

export const TextCustomLabel = (props: LabelListProp) => {
  const { x, y, width, height, value } = props;

  const parsedX = typeof x === 'number' ? x : parseFloat(x || '0');
  const parsedY = typeof y === 'number' ? y : parseFloat(y || '0');
  const parsedWidth = typeof width === 'number' ? width : parseFloat(width || '0');
  const parsedHeight = typeof height === 'number' ? height : parseFloat(height || '0');

  return (
    <text
      x={parsedX + parsedWidth + 10}
      y={parsedY + parsedHeight / 2}
      dy={5}
      dx={5}
      fill="#000"
      textAnchor="start"
      fontSize={17}
      style={{ fontFamily: 'var(--font-pretendard)', fontWeight: '600' }}
      fontWeight={'600'}>
      {value}
    </text>
  );
};
