import { cn } from '@/lib/utils';

const colorsObj = {
  green: 'stroke-[#6ED29C]',
  yellow: 'stroke-[#FBBF24]',
  red: 'stroke-[#FF3B6B]',
  black: 'stroke-[#111]',
};

export type ColorType = keyof typeof colorsObj;

interface CircularPercentageProps {
  percentage: string | number | undefined;
  color?: ColorType;
}

function CircularPercentage({ percentage = 0, color = undefined }: CircularPercentageProps) {
  return (
    <svg viewBox='0 0 36 36' className='block m-1'>
      <path
        className='fill-none stroke-[#eee] stroke-[2.8]'
        d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
      />
      <path
        className={cn('circle fill-none stroke-[2.8]', colorsObj[color || 'black'])}
        strokeDasharray={`${percentage}, 100`}
        d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
      />
      <text x='15' y='20.35' className='percentage font-bold fill-[#333] block text-center'>
        {percentage}
      </text>
      <text x='24' y='20.35' className='percentage-symbol fill-[#333] block text-center'>
        %
      </text>
    </svg>
  );
}

CircularPercentage.displayName = 'Circular Percentage';
export default CircularPercentage;
