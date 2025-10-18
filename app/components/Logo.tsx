export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simplified Bodo Boats logo with green accent */}
      <g>
        {/* "bodo" text in green */}
        <text
          x="180"
          y="300"
          fontFamily="Arial, sans-serif"
          fontSize="120"
          fontWeight="bold"
          fill="#22c55e"
          style={{ fontStyle: 'italic' }}
        >
          bodo
        </text>

        {/* Diagonal stripes pattern - black */}
        <g transform="translate(0, 200)">
          <polygon points="100,0 200,0 400,200 300,200" fill="#000" stroke="#fff" strokeWidth="3"/>
          <polygon points="250,0 350,0 550,200 450,200" fill="#000" stroke="#fff" strokeWidth="3"/>
          <polygon points="400,0 500,0 700,200 600,200" fill="#000" stroke="#fff" strokeWidth="3"/>
          <polygon points="550,0 650,0 850,200 750,200" fill="#000" stroke="#fff" strokeWidth="3"/>
          <polygon points="700,0 800,0 1000,200 900,200" fill="#000" stroke="#fff" strokeWidth="3"/>
          <polygon points="850,0 950,0 1150,200 1050,200" fill="#000" stroke="#fff" strokeWidth="3"/>
        </g>
      </g>
    </svg>
  );
}
