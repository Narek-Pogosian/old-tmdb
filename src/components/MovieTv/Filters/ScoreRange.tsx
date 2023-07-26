import Slider from "rc-slider";

type Props = {
  setUserScore: (value: string) => void;
  userScore: string | null;
};

const ScoreRange = ({ setUserScore, userScore }: Props) => {
  return (
    <div className="h-14">
      <p className="mb-2 text-sm font-semibold">Minimum User Score</p>

      <Slider
        min={0}
        max={10}
        value={Number(userScore)}
        onChange={(val) => setUserScore(String(val))}
        step={1}
        marks={{ 0: "0", 2: "2", 4: "4", 6: "6", 8: "8", 10: "10" }}
        dotStyle={{ width: "1px", borderRadius: 0 }}
        handleStyle={{ opacity: 1 }}
        dots
      />
    </div>
  );
};

export default ScoreRange;
