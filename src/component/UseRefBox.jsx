import { useState, useRef, useEffect } from "react";

const UseRefBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  // Toggle visibility on button click
  const toggleBox = () => {
    setIsVisible(!isVisible);
  };

  // Hide the box when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={toggleBox}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Toggle Box
      </button>

      {isVisible && (
        <div
          ref={boxRef}
          className="mt-4 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-300"
        >
          <p className="text-gray-800">This is the box content.</p>
        </div>
      )}
    </div>
  );
};

export default UseRefBox;