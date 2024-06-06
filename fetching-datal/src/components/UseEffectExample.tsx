import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('this count is')
  }, []);

  useEffect(() => {
    console.log('this will re-run everytime our dependency has changed the count is ', count)
  }, [count]);


  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1 className="text-center">UseEffect Example1</h1>
      <div className="row justify-content-center">
        <div className="col-6 d-flex flex-column align-items-center">
          <p>{count}</p>
          <div>
            <button
              className="btn btn-outline-primary mx-3 m-2"
              onClick={handleIncrement}
            >
              +
            </button>
            <button
              className="btn btn-outline-danger mx-3 m-2"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectExample;
