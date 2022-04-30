import { FC, useState, useEffect } from "react";

import './Elevator.css'

const Elevator: FC<{ floor: number }> = ({floor}) => {
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [currentFloor, setCurrentFloor] = useState<number>(floor);

  // useEffect(() => {
  //   setCurrentFloor(floor)
  //   setIsDoorOpen(true);
  //   const timeout = setTimeout(() => {
  //     setIsDoorOpen(false);
  //     clearTimeout(timeout);
  //   }, 500);
  useEffect(() => {
    setIsDoorOpen(true);

    const timeout = setTimeout(() => {
      setIsDoorOpen(false);
      clearTimeout(timeout);
      setCurrentFloor(floor);
    }, 1500);
  }, [floor]);

  return(
    <div className={`Elevator floor-${currentFloor}`}>
      <div className={`door left ${isDoorOpen ? "opened" : ""}`} />
      <div className={`door right ${isDoorOpen ? "opened" : ""}`} />
    </div>
  );
};

export default Elevator;
