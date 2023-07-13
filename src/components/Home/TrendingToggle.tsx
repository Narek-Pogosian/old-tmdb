import { TimeWindow } from "../../types/type";

type Props = {
  timeWindow: TimeWindow;
  setTimeWindow: (timeWindow: TimeWindow) => void;
};

const TrendingToggle = ({ timeWindow, setTimeWindow }: Props) => {
  return (
    <span className="relative py-[2px] rounded-full bg-transparent">
      <div
        className={
          "absolute top-0 h-full rounded-full bg-primary transition-transform left-0 duration-300 " +
          `${
            timeWindow === "week"
              ? "translate-x-[81.5px] w-[111.5px]"
              : "w-[81.5px]"
          }`
        }
      ></div>
      <button
        onClick={() => setTimeWindow("day")}
        className={
          "px-5 relative z-99 transition-colors duration-300 dark:text-white " +
          `${timeWindow === "day" ? "text-white" : ""}`
        }
      >
        Today
      </button>
      <button
        onClick={() => setTimeWindow("week")}
        className={
          "px-5 relative z-99 transition-colors duration-300 dark:text-white " +
          `${timeWindow === "week" ? "text-white" : ""}`
        }
      >
        This Week
      </button>
    </span>
  );
};

export default TrendingToggle;
