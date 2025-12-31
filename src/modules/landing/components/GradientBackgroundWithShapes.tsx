'use client';

import React from 'react';

interface GradientBackgroundWithShapesProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  height?: string;
  showShapes?: boolean;
  shapeColor?: 'white' | 'blue' | 'purple' | 'green' | string;
  shapeOpacity?: number;
}

const GradientBackgroundWithShapes = ({
  children,
  className = '',
  gradient = 'linear-gradient(350deg, #00bfc3 0%, #4488af 40%, #904b99 100%)',
  height = 'h-96',
  showShapes = true,
  shapeColor = 'white',
  shapeOpacity = 0.4,
}: GradientBackgroundWithShapesProps) => {
  const colorFilters = {
    white: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)',
    blue: 'invert(24%) sepia(98%) saturate(1833%) hue-rotate(203deg) brightness(98%) contrast(97%)',
    purple: 'invert(21%) sepia(95%) saturate(3103%) hue-rotate(271deg) brightness(94%) contrast(106%)',
    green: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)',
  };

  const CurvedShape = ({ className, rotate = 0 }: { className?: string; rotate?: number }) => (
    <img
      src="/shape-illu-red.svg"
      alt="Curved Shape"
      className={className}
      style={{
        filter: colorFilters[shapeColor as keyof typeof colorFilters] || colorFilters.white,
        opacity: shapeOpacity,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    />
  );

  return (
    <div className={`relative overflow-hidden  p-8 ${height} ${className}`} style={{ background: gradient }}>
      {showShapes && (
        <>
          <div className="absolute -top-20 -left-40 w-150 h-150 z-0">
            <CurvedShape className="w-full h-full" rotate={-45} />
          </div>

          <div className="absolute -bottom-20 -right-40 w-150 h-150 z-0">
            <CurvedShape className="w-full h-full" rotate={180} />
          </div>
        </>
      )}

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400 rounded-full opacity-10 blur-3xl z-0" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 rounded-full opacity-10 blur-3xl z-0" />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default GradientBackgroundWithShapes;
