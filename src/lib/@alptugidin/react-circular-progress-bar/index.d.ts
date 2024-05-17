import React from 'react';

interface IFlat {
   progress: number
   range?: { from: number, to: number }
   text?: string
   sign?: { value: string, position: SignPosition }
   showValue?: boolean
   showMiniCircle?: boolean
   sx: {
      strokeColor: string
      bgStrokeColor?: string
      bgColor?: { value: string, transparency: string }
      barWidth: number
      shape?: FlatShape
      strokeLinecap?: StrokeLineCap
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: FontFamily
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: FontFamily
      loadingTime?: number
      miniCircleColor?: string
      miniCircleSize?: number
      valueAnimation?: boolean
      intersectionEnabled?: boolean
   }
}

type SignPosition = 'start' | 'end'
interface IHeat {
   progress: number
   range?: { from: number, to: number }
   showValue?: boolean
   sign?: { value: string, position: SignPosition }
   showMiniCircle?: boolean
   text?: string
   revertBackground?: boolean
   sx: {
      barWidth: number
      bgColor: string
      shape?: HeatShape
      strokeLinecap?: StrokeLineCap
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: FontFamily
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: FontFamily
      loadingTime?: number
      miniCircleColor?: string
      valueAnimation?: boolean
      intersectionEnabled?: boolean
   }

}

interface INested {
   circles: [
      circle1: { value: number, text: string, color: string },
      circle2: { value: number, text: string, color: string },
      circle3?: { value: number, text: string, color: string },
      circle4?: { value: number, text: string, color: string },
      circle5?: { value: number, text: string, color: string }
   ]
   sx: {
      bgColor: string
      strokeLinecap?: StrokeLineCap
      fontFamily?: FontFamily
      fontWeight?: FontWeight
      loadingTime?: number
      valueAnimation?: boolean
      intersectionEnabled?: boolean
   }
}

type StrokeLineCap = 'butt' | 'round' | 'square'
type FlatShape = 'full' | 'threequarters' | 'half'
type HeatShape = 'threequarters' | 'half'
type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'
type FontFamily =
'Arial' |
'Arial Black' |
'Arial Narrow' |
'Arial Rounded MT Bold' |
'Arial Unicode MS' |
'Calibri' |
'Candara' |
'Century Gothic' |
'Comic Sans MS' |
'Courier New' |
'Geneva' |
'Georgia' |
'Gill Sans' |
'Helvetica' |
'Impact' |
'Lucida Console' |
'Lucida Grande' |
'Lucida Sans Unicode' |
'Palatino Linotype' |
'Tahoma' |
'Times New Roman' |
'Trebuchet MS' |
'Verdana' |
'Webdings' |
'Wingdings'

declare const Flat: React.FC<IFlat>
declare const Heat: React.FC<IHeat>
declare const Nested: React.FC<INested>
export { IFlat, IHeat, INested, SignPosition, Flat, Heat, Nested };
