interface HalfCircleCountProps {
  value: string | number | undefined;
}

function HalfCircleCount({ value = undefined }: HalfCircleCountProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='113' height='57' viewBox='0 0 113 57' fill='none'>
      <path d='M106.07 56.0352C106.07 42.765 100.799 30.0384 91.4153 20.655C82.0319 11.2715 69.3053 6 56.0352 6C42.765 6 30.0384 11.2715 20.655 20.655C11.2715 30.0384 6 42.765 6 56.0351' stroke='#F5F5F5' stroke-width='12' />
      <path d='M91.3707 20.655C81.9922 11.2715 69.2722 6 56.009 6C42.7458 6 30.0258 11.2715 20.6473 20.655C11.2688 30.0384 6 42.765 6 56.0352' stroke='#6ED29C' stroke-width='11' />
      <text x='48' y='50' className='half-circle font-bold fill-[#333] block text-center'>
        {value}
      </text>
    </svg>
  );
}

HalfCircleCount.displayName = 'Half Circle';
export default HalfCircleCount;
