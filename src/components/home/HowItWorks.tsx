'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

/* ---------- Keyframe styles (injected once) ---------- */

const animStyles = `
@keyframes hw-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes hw-float2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes hw-float3 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(0.9); }
}
@keyframes hw-wave {
  0% { transform: translateX(0); }
  50% { transform: translateX(8px); }
  100% { transform: translateX(0); }
}
@keyframes hw-wave2 {
  0% { transform: translateX(0); }
  50% { transform: translateX(-6px); }
  100% { transform: translateX(0); }
}
@keyframes hw-fall {
  0% { transform: translateY(0); opacity: 0.7; }
  100% { transform: translateY(18px); opacity: 0; }
}
@keyframes hw-pour {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-12deg); }
  60% { transform: rotate(-8deg); }
}
@keyframes hw-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes hw-pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.15); }
}
@keyframes hw-twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.6); }
}
@keyframes hw-rise {
  0% { transform: translateY(0); opacity: 0.8; }
  100% { transform: translateY(-12px); opacity: 0; }
}
@keyframes hw-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(2deg); }
  75% { transform: translateY(3px) rotate(-2deg); }
}
@keyframes hw-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
`;

/* ---------- Custom SVG Illustrations ---------- */

function DissolveIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Bucket */}
      <path d="M60 85 L55 160 C55 168 65 175 100 175 C135 175 145 168 145 160 L140 85" stroke="#6366F1" strokeWidth="3" fill="#EEF2FF" />
      <ellipse cx="100" cy="85" rx="42" ry="12" fill="#EEF2FF" stroke="#6366F1" strokeWidth="3" />
      {/* Water waves */}
      <g style={{ animation: 'hw-wave 3s ease-in-out infinite' }}>
        <ellipse cx="100" cy="120" rx="35" ry="8" fill="#818CF8" opacity="0.3" />
        <path d="M68 115 Q84 125 100 118 Q116 111 132 120" stroke="#818CF8" strokeWidth="2" fill="none" opacity="0.5" />
      </g>
      {/* Bubbles - animated float */}
      <g style={{ animation: 'hw-float 2.5s ease-in-out infinite' }}>
        <circle cx="80" cy="100" r="6" fill="#C7D2FE" opacity="0.8" />
        <circle cx="80" cy="100" r="6" fill="none" stroke="#818CF8" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float2 3s ease-in-out infinite 0.4s' }}>
        <circle cx="115" cy="95" r="8" fill="#C7D2FE" opacity="0.7" />
        <circle cx="115" cy="95" r="8" fill="none" stroke="#818CF8" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float3 2.8s ease-in-out infinite 0.8s' }}>
        <circle cx="95" cy="88" r="5" fill="#C7D2FE" opacity="0.6" />
        <circle cx="95" cy="88" r="5" fill="none" stroke="#818CF8" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float 3.2s ease-in-out infinite 1.2s' }}>
        <circle cx="125" cy="108" r="4" fill="#DDD6FE" opacity="0.8" />
      </g>
      <g style={{ animation: 'hw-float2 2.6s ease-in-out infinite 0.6s' }}>
        <circle cx="70" cy="110" r="3" fill="#DDD6FE" opacity="0.7" />
      </g>
      {/* Powder particles falling - animated */}
      <circle cx="100" cy="55" r="2" fill="#8B5CF6" style={{ animation: 'hw-fall 1.8s ease-in infinite' }} />
      <circle cx="93" cy="58" r="1.5" fill="#8B5CF6" style={{ animation: 'hw-fall 1.8s ease-in infinite 0.3s' }} />
      <circle cx="108" cy="56" r="2" fill="#8B5CF6" style={{ animation: 'hw-fall 1.8s ease-in infinite 0.6s' }} />
      <circle cx="96" cy="60" r="1.5" fill="#8B5CF6" style={{ animation: 'hw-fall 1.8s ease-in infinite 0.9s' }} />
      <circle cx="105" cy="57" r="1" fill="#8B5CF6" style={{ animation: 'hw-fall 1.8s ease-in infinite 1.2s' }} />
      {/* Scoop - animated tilt */}
      <g style={{ animation: 'hw-pour 3s ease-in-out infinite', transformOrigin: '100px 45px' }}>
        <path d="M85 40 L90 55 L110 55 L115 40 Z" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M88 40 L112 40" stroke="#8B5CF6" strokeWidth="2" />
        <rect x="96" y="30" width="8" height="12" rx="2" fill="#8B5CF6" />
      </g>
    </svg>
  );
}

function SoakIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Basin */}
      <path d="M35 100 C35 100 40 165 100 165 C160 165 165 100 165 100" stroke="#6366F1" strokeWidth="3" fill="#EEF2FF" />
      <path d="M30 100 L170 100" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
      {/* Water waves - animated */}
      <g style={{ animation: 'hw-wave 3.5s ease-in-out infinite' }}>
        <path d="M45 115 Q60 108 75 115 Q90 122 105 115 Q120 108 135 115 Q150 122 155 118" stroke="#818CF8" strokeWidth="2.5" fill="none" />
      </g>
      <g style={{ animation: 'hw-wave2 4s ease-in-out infinite 0.5s' }}>
        <path d="M50 125 Q65 118 80 125 Q95 132 110 125 Q125 118 140 125 Q150 130 155 128" stroke="#818CF8" strokeWidth="2" fill="none" opacity="0.5" />
      </g>
      {/* Clothes bobbing */}
      <g style={{ animation: 'hw-bob 4s ease-in-out infinite' }}>
        <path d="M65 95 Q70 80 80 85 Q85 75 95 82 L90 100" stroke="#8B5CF6" strokeWidth="2.5" fill="#DDD6FE" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'hw-bob 4s ease-in-out infinite 1s' }}>
        <path d="M120 92 Q125 78 135 82 L130 100" stroke="#8B5CF6" strokeWidth="2.5" fill="#DDD6FE" strokeLinecap="round" />
      </g>
      {/* Bubbles floating up */}
      <g style={{ animation: 'hw-float 2.5s ease-in-out infinite' }}>
        <circle cx="60" cy="90" r="7" fill="#C7D2FE" opacity="0.7" />
        <circle cx="60" cy="90" r="7" fill="none" stroke="#818CF8" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float2 3s ease-in-out infinite 0.5s' }}>
        <circle cx="110" cy="85" r="9" fill="#C7D2FE" opacity="0.6" />
        <circle cx="110" cy="85" r="9" fill="none" stroke="#818CF8" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float3 2.8s ease-in-out infinite 1s' }}>
        <circle cx="145" cy="88" r="5" fill="#C7D2FE" opacity="0.8" />
        <circle cx="145" cy="88" r="5" fill="none" stroke="#818CF8" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float 3.2s ease-in-out infinite 1.5s' }}>
        <circle cx="85" cy="75" r="5" fill="#EEF2FF" opacity="0.9" />
        <circle cx="85" cy="75" r="5" fill="none" stroke="#A78BFA" strokeWidth="1" />
      </g>
      <g style={{ animation: 'hw-float2 2.6s ease-in-out infinite 0.8s' }}>
        <circle cx="130" cy="70" r="6" fill="#EEF2FF" opacity="0.8" />
        <circle cx="130" cy="70" r="6" fill="none" stroke="#A78BFA" strokeWidth="1" />
      </g>
      {/* Clock - animated hand */}
      <circle cx="100" cy="50" r="16" fill="white" stroke="#6366F1" strokeWidth="2" />
      <g style={{ animation: 'hw-spin 8s linear infinite', transformOrigin: '100px 50px' }}>
        <path d="M100 42 L100 50 L107 54" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="50" r="2" fill="#6366F1" />
    </svg>
  );
}

function WashIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Machine body */}
      <rect x="45" y="40" width="110" height="130" rx="12" fill="#EEF2FF" stroke="#6366F1" strokeWidth="3" />
      {/* Door circle */}
      <circle cx="100" cy="115" r="38" fill="white" stroke="#6366F1" strokeWidth="3" />
      <circle cx="100" cy="115" r="30" fill="#C7D2FE" opacity="0.3" stroke="#818CF8" strokeWidth="1.5" />
      {/* Clothes spinning inside */}
      <g style={{ animation: 'hw-spin 4s linear infinite', transformOrigin: '100px 115px' }}>
        <path d="M82 105 Q90 95 100 105 Q110 115 105 125 Q95 130 88 120 Z" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M105 100 Q115 108 112 118 Q105 125 100 115 Z" fill="#EEF2FF" stroke="#A78BFA" strokeWidth="1.5" />
        <path d="M78 120 Q88 110 100 118 Q112 126 122 118" stroke="#818CF8" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>
      {/* Control panel */}
      <rect x="55" y="50" width="90" height="25" rx="5" fill="white" stroke="#D1D5DB" strokeWidth="1" />
      <circle cx="75" cy="62" r="7" fill="none" stroke="#6366F1" strokeWidth="2" />
      <line x1="75" y1="57" x2="75" y2="62" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      {/* Blinking LED */}
      <circle cx="100" cy="62" r="3" fill="#8B5CF6" style={{ animation: 'hw-blink 1.5s ease-in-out infinite' }} />
      <circle cx="115" cy="62" r="3" fill="#D1D5DB" />
      <circle cx="130" cy="62" r="3" fill="#D1D5DB" />
      {/* Water drops - animated */}
      <g style={{ animation: 'hw-fall 2s ease-in infinite 0.2s' }}>
        <path d="M40 90 Q36 96 40 100" stroke="#818CF8" strokeWidth="2" fill="none" />
      </g>
      <g style={{ animation: 'hw-fall 2s ease-in infinite 0.8s' }}>
        <path d="M160 95 Q164 101 160 105" stroke="#818CF8" strokeWidth="2" fill="none" />
      </g>
      {/* Bubbles - animated */}
      <g style={{ animation: 'hw-float 2s ease-in-out infinite' }}>
        <circle cx="50" cy="80" r="4" fill="#C7D2FE" opacity="0.6" />
      </g>
      <g style={{ animation: 'hw-float2 2.5s ease-in-out infinite 0.5s' }}>
        <circle cx="155" cy="85" r="3" fill="#C7D2FE" opacity="0.5" />
      </g>
      <g style={{ animation: 'hw-float3 3s ease-in-out infinite 1s' }}>
        <circle cx="42" cy="120" r="3" fill="#DDD6FE" opacity="0.7" />
      </g>
    </svg>
  );
}

function FreshIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* T-shirt */}
      <path d="M70 70 L60 55 L45 65 L55 80 L55 150 C55 155 60 158 70 158 L130 158 C140 158 145 155 145 150 L145 80 L155 65 L140 55 L130 70 Z" fill="white" stroke="#6366F1" strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 70 Q85 82 100 72 Q115 82 130 70" stroke="#6366F1" strokeWidth="2.5" fill="none" />
      {/* Sparkle stars - animated twinkle */}
      <g style={{ animation: 'hw-twinkle 2s ease-in-out infinite' }}>
        <path d="M35 50 L37 44 L39 50 L45 52 L39 54 L37 60 L35 54 L29 52 Z" fill="#8B5CF6" />
      </g>
      <g style={{ animation: 'hw-twinkle 2s ease-in-out infinite 0.5s' }}>
        <path d="M160 45 L161.5 40 L163 45 L168 46.5 L163 48 L161.5 53 L160 48 L155 46.5 Z" fill="#A78BFA" />
      </g>
      <g style={{ animation: 'hw-twinkle 2s ease-in-out infinite 1s' }}>
        <path d="M155 110 L156.5 106 L158 110 L162 111.5 L158 113 L156.5 117 L155 113 L151 111.5 Z" fill="#8B5CF6" opacity="0.7" />
      </g>
      <g style={{ animation: 'hw-twinkle 2s ease-in-out infinite 1.5s' }}>
        <path d="M40 120 L41.5 116 L43 120 L47 121.5 L43 123 L41.5 127 L40 123 L36 121.5 Z" fill="#A78BFA" opacity="0.6" />
      </g>
      <g style={{ animation: 'hw-twinkle 1.8s ease-in-out infinite 0.3s' }}>
        <path d="M170 75 L171 72 L172 75 L175 76 L172 77 L171 80 L170 77 L167 76 Z" fill="#C7D2FE" />
      </g>
      <g style={{ animation: 'hw-twinkle 1.8s ease-in-out infinite 0.8s' }}>
        <path d="M28 85 L29 82 L30 85 L33 86 L30 87 L29 90 L28 87 L25 86 Z" fill="#C7D2FE" />
      </g>
      {/* Shine rays - animated pulse */}
      <g style={{ animation: 'hw-pulse 2s ease-in-out infinite' }}>
        <line x1="100" y1="30" x2="100" y2="22" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'hw-pulse 2s ease-in-out infinite 0.3s' }}>
        <line x1="120" y1="35" x2="126" y2="28" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'hw-pulse 2s ease-in-out infinite 0.6s' }}>
        <line x1="80" y1="35" x2="74" y2="28" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Fresh scent lines - animated rise */}
      <g style={{ animation: 'hw-rise 2.5s ease-out infinite' }}>
        <path d="M85 100 Q88 93 85 87" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
      <g style={{ animation: 'hw-rise 2.5s ease-out infinite 0.5s' }}>
        <path d="M100 97 Q103 90 100 83" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
      <g style={{ animation: 'hw-rise 2.5s ease-out infinite 1s' }}>
        <path d="M115 100 Q118 93 115 87" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/* ---------- Curved connector arrow ---------- */

function ConnectorArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg viewBox="0 0 60 24" fill="none" className="w-14 h-6 text-[#8B5CF6]">
        <path d="M0 12 C15 12 15 4 30 4 C45 4 45 12 60 12" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
        <path d="M52 6 L60 12 L52 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

/* ---------- Data ---------- */

const steps = [
  {
    illustration: DissolveIllustration,
    step: '01',
    title: 'Dissolve',
    description: 'Add one scoop of Orma to a bucket of water and stir until fully dissolved.',
    color: '#6366F1',
  },
  {
    illustration: SoakIllustration,
    step: '02',
    title: 'Soak',
    description: 'Soak your clothes for 15–20 minutes. Tough stains? Let them soak a bit longer.',
    color: '#8B5CF6',
  },
  {
    illustration: WashIllustration,
    step: '03',
    title: 'Wash & Rinse',
    description: 'Scrub gently or run your machine cycle. Rinse thoroughly with clean water.',
    color: '#7C3AED',
  },
  {
    illustration: FreshIllustration,
    step: '04',
    title: 'Bright & Fresh',
    description: 'Enjoy spotless, bright clothes with a refreshing fragrance that lasts all day.',
    color: '#A78BFA',
  },
];

/* ---------- Component ---------- */

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F7] overflow-hidden">
      {/* Inject animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: animStyles }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            How It Works
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#6B7280]">
            Four simple steps to sparkling clean clothes, every time.
          </p>
          <div className="mt-4 w-20 h-1 bg-[#8B5CF6] mx-auto rounded-full" />
        </AnimatedSection>

        {/* Steps with illustrations */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0">
          {steps.map((item, idx) => (
            <div key={item.step} className="flex items-center lg:flex-1">
              <AnimatedSection delay={idx * 0.15} className="w-full">
                <div className="relative group">
                  {/* Illustration */}
                  <div className="mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6 rounded-2xl bg-white p-4 shadow-sm border border-[#E5E7EB] group-hover:shadow-lg group-hover:border-[#6366F1]/20 transition-all duration-300">
                    <item.illustration />
                  </div>

                  {/* Step badge */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: item.color }}
                  >
                    Step {item.step}
                  </div>

                  {/* Text */}
                  <div className="text-center px-2">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#6B7280] leading-relaxed max-w-[220px] mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connector between steps */}
              {idx < steps.length - 1 && <ConnectorArrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
