import { useState } from 'react'

function App() {
  const [list, setList] = useState(['Hiago', 'Diego', 'Larissa']);
  const [newItem, setNewItem] = useState('');

  function addToList() {
    setList(state => [...state, newItem])
  }

  return (
    <>
      <input 
        type="text" 
        onChange={e => setNewItem(e.target.value)}
        placeholder="Novo item"
      />
      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </>
  )
}

export default App
