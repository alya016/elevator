import {useState} from 'react';

import './App.css';
import Elevator from './components/Elevator'

const App = () => {
  const [floor, setFloor] = useState<number>(1);
  return (
    <div className="main">
      <div className="floor floor-3">
        <button onClick={() => setFloor(3)} />
      </div>
      <div className="floor floor-2">
        <button onClick={() => setFloor(2)} />
      </div>
      <div className="floor floor-1">
        <button onClick={() => setFloor(1)} />
      </div>
      <Elevator floor={floor} />
    </div>
  );
}

export default App;



