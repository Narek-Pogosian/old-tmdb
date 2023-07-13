import { ThreeDots } from "react-loader-spinner";

const ScrollLoading = () => {
  return (
    <div className="flex justify-center py-8">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#90cea1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default ScrollLoading;
