
import { useEffect, useState } from 'react';
import Board from './components/Board';

function App() {
  const [resources, setResources] = useState([])
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setResources(data.sort((a, b) => a.nr - b.nr)))
      .catch(err => console.log('ajaja', err))
  }, [])

  const updateDb = (quantityObj, mongoId) => {
    fetch(`/api/data/${mongoId}`, {
      method: 'PATCH',
      body: JSON.stringify(quantityObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  
  const updateResources = (type) => {
    let updatedResources
    setResources(prev => {
      if(type === 'farm'){
        updatedResources = prev.map(reso => {
          if(reso.name == 'Kamień') return reso
          updateDb({quantity: reso.quantity - 1}, reso._id)
          return {...reso, quantity: reso.quantity - 1}
        })
      }
      if(type === 'castle'){
        updatedResources = prev.map(reso => {
          if(reso.name === 'Zboże') {
            updateDb({quantity: reso.quantity - 2}, reso._id)
            return {...reso, quantity: reso.quantity - 2}
          }
          else if(reso.name === 'Kamień') {
            updateDb({quantity: reso.quantity - 3}, reso._id)
            return {...reso, quantity: reso.quantity - 3}
          }
          else return reso
        })
      }
      return updatedResources
    })
  }
  return (
    <div className="App">
      <div className='resources'>
        {resources.map(reso => 
            <div key ={reso.nr}>{reso.name} : {reso.quantity}</div>
          )}
      </div>
      <Board resources = {resources} updateResources = {updateResources}/>
    </div>
  );
}
export default App;
