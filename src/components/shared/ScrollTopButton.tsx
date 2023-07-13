import { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollButtonVisibility = () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);
  return (
    <>
      {showButton && (
        <button
          className="fixed p-3 text-white rounded-full bottom-2 left-2 bg-secondary"
          onClick={scrollToTop}
        >
          Top
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
