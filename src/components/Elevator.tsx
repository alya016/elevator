import { FC, useState, useEffect } from "react";

import './Elevator.css'

const Elevator: FC<{ floor: number }> = ({floor}) => {
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(true);
  const [currentFloor, setCurrentFloor] = useState<number>(floor);

  useEffect(() => {
    setIsDoorOpen(true);
    const timeout = setTimeout(() => {
      setCurrentFloor(floor);
      clearTimeout(timeout);
    }, 1000);
  }, [floor]);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsDoorOpen(false);
        clearTimeout(timeout);
      }, 3500);
    }, [isDoorOpen]);
  return(
    <div className={`Elevator floor-${currentFloor}`}>
      <div className={`door left ${isDoorOpen ? "opened" : ""}`} />
      <div className={`door right ${isDoorOpen ? "opened" : ""}`} />
    </div>
  );
};

export default Elevator;
