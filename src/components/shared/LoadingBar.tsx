const LoadingBar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1 bg-primary">
      <div className="absolute top-0 bottom-0 w-1/3 rounded bg-tertiary progress"></div>
    </div>
  );
};

export default LoadingBar;
