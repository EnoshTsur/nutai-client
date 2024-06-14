const BodyBuilderLogo = () => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="50" r="20" fill="url(#faceGradient)" />
      <circle
        cx="100"
        cy="50"
        r="20"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
      <circle cx="95" cy="45" r="3" fill="#000" />
      <circle cx="105" cy="45" r="3" fill="#000" />
      <path
        d="M 95 55 Q 100 60, 105 55"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />

      <circle cx="70" cy="90" r="20" fill="url(#faceGradient)" />
      <circle cx="130" cy="90" r="20" fill="url(#faceGradient)" />

      <path
        d="M 50 100 Q 45 130, 70 150 Q 75 120, 50 100 Z"
        fill="url(#heartGradient)"
      />

      <path
        d="M 150 100 Q 155 130, 130 150 Q 125 120, 150 100 Z"
        fill="url(#heartGradient)"
      />

      <path
        stroke="black"
        d="M 60 80 Q 100 70, 100 90 Q 100 140, 70 100 Z"
        fill="url(#bowGradient)"
      />

      <path
        stroke="black"
        d="M 140 80 Q 100 70, 100 90 Q 100 140, 130 100 Z"
        fill="url(#bowGradient)"
      />

      <defs>
        <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffcccb" />
          <stop offset="50%" stop-color="#ff9999" />
          <stop offset="100%" stop-color="#ff6666" />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffcccb" />
          <stop offset="50%" stop-color="#ff9999" />
          <stop offset="100%" stop-color="#ff6666" />
        </linearGradient>
        <linearGradient id="bowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffcccb" />
          <stop offset="50%" stop-color="#ff9999" />
          <stop offset="100%" stop-color="#ff6666" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BodyBuilderLogo;
