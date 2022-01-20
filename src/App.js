import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [state, setSTATE] = useState([]);
  

useEffect(() => {
 axios.get('https://fortnite-api.com/v1/map')
 .then(res => console.log(res))
},[])

  return (
    <div >
      {state.map(el => <div>{el.data}</div>)}
    </div>
  );
}

export default App;
