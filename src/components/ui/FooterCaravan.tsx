export function FooterCaravan() {
  return (
    <div
      className="w-full py-8"
      style={{
        background: "linear-gradient(to bottom, #D2B48C, #A0826D)",
      }}
    >
      <style>{`
        @keyframes caravan-drive {
          0% {
            left: 0;
          }
          100% {
            left: calc(100% - 100px);
          }
        }

        @keyframes caravan-bob {
          0%, 100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(-12px);
          }
          75% {
            transform: translateY(-6px);
          }
        }

        .caravan-vehicle {
          animation: caravan-drive 20s ease-in-out infinite, caravan-bob 3s ease-in-out infinite;
          position: absolute;
          bottom: 20px;
          width: 120px;
          height: auto;
          filter: brightness(1) contrast(1.1);
        }

        @keyframes wheel-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .caravan-wheel {
          animation: wheel-spin 0.8s linear infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Hills SVG Background */}
      <svg
        className="w-full h-32 mb-4"
        viewBox="0 0 1200 150"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8B7355", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "#654321", stopOpacity: 0.9 }} />
          </linearGradient>
        </defs>

        {/* Left hill */}
        <path
          d="M 0 100 Q 150 20 300 100 L 300 150 L 0 150 Z"
          fill="url(#hillGradient)"
        />

        {/* Center hill */}
        <path
          d="M 250 120 Q 400 30 550 120 L 550 150 L 250 150 Z"
          fill="url(#hillGradient)"
          opacity="0.8"
        />

        {/* Right hill */}
        <path
          d="M 500 100 Q 650 40 800 100 L 800 150 L 500 150 Z"
          fill="url(#hillGradient)"
        />

        {/* Far right hill */}
        <path
          d="M 750 110 Q 900 35 1050 110 L 1050 150 L 750 150 Z"
          fill="url(#hillGradient)"
          opacity="0.85"
        />

        {/* Repeat on right */}
        <path
          d="M 1000 100 Q 1150 20 1300 100 L 1300 150 L 1000 150 Z"
          fill="url(#hillGradient)"
        />
      </svg>

      {/* Animated Caravan Container */}
      <div className="relative w-full h-24">
        {/* Caravan Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="caravan-vehicle"
          style={{
            width: '120px',
            height: 'auto',
            backgroundColor: 'transparent',
          }}
        >
          <source src={new URL('../../assets/wagon.mp4', import.meta.url).href} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
