import { useState } from 'react';
import NavigationBar from './Components/NavigationBar'
import NoteApp from './NotesComponents/NoteApp'

function App() {
  const [getInput, setQuery] = useState("")
  const searchQuery = (userInput) => {
    return setQuery(userInput);
  }

  return (
    <div className='m-auto'>
      <NavigationBar searchInput={searchQuery}/>
      <NoteApp searchInput={searchQuery} input={getInput}/>
    </div>
  )
}

export default App
