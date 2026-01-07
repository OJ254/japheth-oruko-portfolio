// components/AnimatedBackground.tsx
export default function AnimatedBackground() {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      <div className='animated-gradient h-full w-full opacity-80 blur-3xl' />
    </div>
  );
}
