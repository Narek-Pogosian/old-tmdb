type Props = {
  minimumVotes: string | null;
  setMinimumVotes: (value: string) => void;
};

const VoteRange = ({ minimumVotes, setMinimumVotes }: Props) => {
  return (
    <div>
      <label
        htmlFor="user-score"
        className="mb-1 text-xs font-bold text-lightText dark:text-white"
      >
        Minimum Votes 0-500, <span>Currently {minimumVotes || 0}</span>
      </label>
      <input
        className="w-full"
        type="range"
        id="minimum-votes"
        min={0}
        max={500}
        step={20}
        list="markers"
        value={minimumVotes ? minimumVotes : 0}
        aria-valuenow={minimumVotes ? Number(minimumVotes) : 0}
        onChange={(e) => setMinimumVotes(e.target.value)}
      />
    </div>
  );
};

export default VoteRange;
