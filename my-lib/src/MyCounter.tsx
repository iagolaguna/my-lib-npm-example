import React from "react";

type Props = {
  value?: number;
};
export const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = React.useState(value);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  );
};
