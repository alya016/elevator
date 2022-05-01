import {useState} from 'react';

import './App.css';
import Elevator from './components/Elevator'

const App = () => {
  const [floorElevatorFirst, setFloorElevatorFirst] = useState<number>(1);
  const [floorElevatorSecond, setFloorElevatorSecond] = useState<number>(2);

  const CalculateNearestElevator = (clickedFloor: number) => {
    const distanceToFirst = Math.abs(clickedFloor - floorElevatorFirst);
    const distanceToSecond = Math.abs(clickedFloor - floorElevatorSecond);
    if(distanceToFirst < distanceToSecond){
      setFloorElevatorFirst(clickedFloor);
    }else if(distanceToFirst === distanceToSecond){
      setFloorElevatorFirst(clickedFloor);
      setFloorElevatorSecond(clickedFloor);
    }
    else{
      setFloorElevatorSecond(clickedFloor);
    }
  }
  return (
    <div className="main">
       <div className="floor floor-3">
         <button onClick={() => CalculateNearestElevator(3)} />
       </div>
       <div className="floor floor-2">
         <button onClick={() => CalculateNearestElevator(2)} />
       </div>
       <div className="floor floor-1">
         <button onClick={() => CalculateNearestElevator(1)} />
       </div>
      <Elevator floor={floorElevatorFirst} leftIndent="20%"/>
      <Elevator floor={floorElevatorSecond} leftIndent="60%"/>
    </div>
  );
}

export default App;

