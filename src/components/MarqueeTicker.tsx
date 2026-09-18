import React from 'react';

interface MarqueeTickerProps {
  accentColor?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ accentColor = '#FFE600' }) => {
  const items = [
    'DISTRIBUTED SYSTEMS',
    'RAFT CONSENSUS',
    'M.TECH CSE RESEARCH',
    'HIGH-PERFORMANCE NETWORKING',
    'eBPF & KERNEL PROBING',
    'LLM INFERENCE & PAGEDATTENTION',
    'FAULT-TOLERANT ARCHITECTURES',
    'CONCURRENCY IN GO & C++',
    'ADVANCED ALGORITHMS',
    'LINUX INTERNALS',
  ];

  return (
    <div className="relative overflow-hidden border-y-4 border-black bg-black text-black select-none my-8">
      {/* Top Banner Track */}
      <div 
        className="py-3 flex overflow-x-hidden border-b-2 border-black"
        style={{ backgroundColor: accentColor }}
      >
        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-6 items-center">
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-6 font-mono font-black text-sm sm:text-base tracking-wider">
              <span>{item}</span>
              <span className="text-xl">✦</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-6 items-center" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-6 font-mono font-black text-sm sm:text-base tracking-wider">
              <span>{item}</span>
              <span className="text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
