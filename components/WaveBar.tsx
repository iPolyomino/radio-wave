type Props = {
  height: number;
};

const WaveBar: React.FC<Props> = ({ height }) => {
  const width = 100;
  const baseHight = 5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${baseHight + height}`}
    >
      <rect width={width} height={baseHight + height} fill="#505050" />
    </svg>
  );
};

export default WaveBar;
