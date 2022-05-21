type Props = {
  height: number;
};

const WaveBar: React.FC<Props> = ({ height }) => {
  const size = 50;

  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      {Array.from(Array(height).keys()).map((y) => (
        <rect
          key={y}
          x="0"
          y={500 - y * size}
          width={size}
          height={size}
          fill="#505050"
        />
      ))}
    </svg>
  );
};

export default WaveBar;
