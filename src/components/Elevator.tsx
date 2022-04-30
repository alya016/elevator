import { FC, useState, useEffect } from "react";

import './Elevator.css'

const Elevator: FC<{ floor: number, leftIndent: string}> = ({floor, leftIndent}) => {
  const [isDoorClosed, setIsClosed] = useState<boolean>(false);
  const [currentFloor, setCurrentFloor] = useState<number>(floor);

  useEffect(() => {
      setIsClosed(true);
      const timeout = setTimeout(() => {
        setCurrentFloor(floor);
      }, 1000);
      const doorTimeout = setTimeout(() => {
        setIsClosed(false);
      }, 2700);
      return () => {
        clearTimeout(timeout);
        clearTimeout(doorTimeout);
      };
  }, [floor]);

  return(
    <div className={`Elevator floor-${currentFloor}`} style={{left:leftIndent}}>
      <div className={`door left ${isDoorClosed ? "closed" : "opened"}`} />
      <div className={`door right ${isDoorClosed ? "closed" : "opened"}`} />
    </div>
  );
};

export default Elevator;
