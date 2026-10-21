interface BackgroundLayerProps {
  intensity?: 'full' | 'subtle';
}

export default function BackgroundLayer({ intensity = 'full' }: BackgroundLayerProps) {
  const glowOpacity = intensity === 'full' ? 'opacity-[0.12]' : 'opacity-[0.07]';
  const accentOpacity = intensity === 'full' ? 'opacity-[0.10]' : 'opacity-[0.05]';
  const grainOpacity = 'opacity-[0.04]';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-base via-navy-deep to-navy-deep" />

      <div className={`absolute inset-0 bg-grain ${grainOpacity}`} />

      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 ${glowOpacity}`}
        style={{
          background: 'linear-gradient(180deg, rgba(14, 89, 68, 0.5) 0%, transparent 100%)',
          filter: 'blur(120px)',
        }}
      />

      <div
        className={`hidden lg:block absolute bottom-0 right-0 w-1/3 h-2/3 ${accentOpacity}`}
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(240, 224, 184, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-base to-transparent opacity-40" />
    </div>
  );
}
