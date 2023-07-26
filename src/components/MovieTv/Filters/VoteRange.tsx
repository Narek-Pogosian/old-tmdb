import Slider from "rc-slider";

type Props = {
  setMinimumVotes: (value: string) => void;
  minimumVotes: string | null;
};

const VoteRange = ({ setMinimumVotes, minimumVotes }: Props) => {
  return (
    <div className="h-14">
      <p className="mb-2 text-sm font-semibold text-lightText dark:text-white">
        Minimum Votes
      </p>

      <Slider
        min={0}
        max={500}
        value={Number(minimumVotes)}
        onChange={(val) => setMinimumVotes(String(val))}
        step={50}
        marks={{
          0: "0",
          100: "100",
          200: "200",
          300: "300",
          400: "400",
          500: "500",
        }}
        dotStyle={{ width: "1px", borderRadius: 0 }}
        handleStyle={{ opacity: 1 }}
        dots
      />
    </div>
  );
};

export default VoteRange;
