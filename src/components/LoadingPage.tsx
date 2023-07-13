import { ThreeDots } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex justify-center w-full pt-20">
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="#90cea1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default LoadingPage;
