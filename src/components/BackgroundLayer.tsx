interface BackgroundLayerProps {
  intensity?: 'full' | 'subtle';
}

export default function BackgroundLayer({ intensity = 'full' }: BackgroundLayerProps) {
  const flagOpacity = intensity === 'full' ? 'opacity-[0.10]' : 'opacity-[0.06]';
  const libertyOpacity = intensity === 'full' ? 'opacity-[0.08]' : 'opacity-[0.04]';
  const grainOpacity = 'opacity-[0.05]';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-base via-navy-deep to-navy-base" />

      <div className={`absolute inset-0 bg-grain ${grainOpacity}`} />

      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 ${flagOpacity}`}
        style={{
          background: 'linear-gradient(180deg, rgba(176, 31, 44, 0.25) 0%, transparent 100%)',
          filter: 'blur(140px)',
        }}
      />

      <div
        className={`hidden lg:block absolute bottom-0 right-0 w-1/3 h-2/3 ${libertyOpacity}`}
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(201, 162, 74, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-base to-transparent opacity-30" />
    </div>
  );
}
