import { FC, useState, useEffect } from "react";

import './Elevator.css'

const Elevator: FC<{ floorForFirst: number, floorForSecond: number }> = ({floorForFirst, floorForSecond}) => {
  const [isFirstDoorOpen, setIsFirstDoorOpen] = useState<boolean>(true);
  const [isSecondDoorOpen, setIsSecondDoorOpen] = useState<boolean>(true);
  const [currentFloorForFirst, setCurrentFloorForFirst] = useState<number>(floorForFirst);
  const [currentFloorForSecond, setCurrentFloorForSecond] = useState<number>(floorForSecond);

  useEffect(() => {
    setIsFirstDoorOpen(true);
    const timeout = setTimeout(() => {
      setCurrentFloorForFirst(floorForFirst);
      clearTimeout(timeout);
    }, 1000);
  }, [floorForFirst]);
  useEffect(() => {
    setIsSecondDoorOpen(true);
    const timeout = setTimeout(() => {
      setCurrentFloorForSecond(floorForSecond);
      clearTimeout(timeout);
    }, 1000);
  }, [floorForSecond]);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstDoorOpen(false);
      clearTimeout(timeout);
    }, 3500);
  }, [isFirstDoorOpen]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSecondDoorOpen(false);
      clearTimeout(timeout);
    }, 3500);
  }, [isSecondDoorOpen]);
  return(
    <>
      <div className={`Elevator floor-${currentFloorForFirst}`}>
        <div className={`door left ${isFirstDoorOpen ? "opened" : ""}`} />
        <div className={`door right ${isFirstDoorOpen ? "opened" : ""}`} />
      </div>    
      <div className={`Elevator2 floor-${currentFloorForSecond}`}>
        <div className={`door left ${isSecondDoorOpen ? "opened" : ""}`} />
        <div className={`door right ${isSecondDoorOpen ? "opened" : ""}`} />
      </div>  
    </>
    
  );
};

export default Elevator;
