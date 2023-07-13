type Props = {
  userScore: string | null;
  setUserScore: (value: string) => void;
};

const ScoreRange = ({ userScore, setUserScore }: Props) => {
  return (
    <div>
      <label
        htmlFor="user-score"
        className="mb-1 text-xs font-bold text-lightText dark:text-white"
      >
        User Score 0-10, <span>Currently {userScore || 0}</span>
      </label>
      <input
        className="w-full"
        type="range"
        id="user-score"
        min={0}
        max={10}
        list="markers"
        value={userScore ? userScore : 0}
        aria-valuenow={userScore ? Number(userScore) : 0}
        onChange={(e) => setUserScore(e.target.value)}
      />
    </div>
  );
};

export default ScoreRange;
