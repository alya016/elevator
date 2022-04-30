import { FC, useState, useEffect } from "react";

import './Elevator.css'

const Elevator: FC<{ floor: number, left: string}> = ({floor, left}) => {
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(true);
  const [currentFloor, setCurrentFloor] = useState<number>(floor);

  useEffect(() => {
        setIsDoorOpen(true);
      const timeout = setTimeout(() => {
        setCurrentFloor(floor);
        // clearTimeout(timeout);
      }, 1000);
      const doorTimeout = setTimeout(() => {
        setIsDoorOpen(false);
      }, 2700);
      return () => {
        clearTimeout(timeout);
        clearTimeout(doorTimeout);
      };
  }, [floor]);
  
  return(
    <div className={`Elevator floor-${currentFloor}`} style={{left:left}}>
      <div className={`door left ${isDoorOpen ? "opened" : ""}`} />
      <div className={`door right ${isDoorOpen ? "opened" : ""}`} />
    </div>
  );
};

export default Elevator;
