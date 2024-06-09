import './App.css'
import { useEffect, useState} from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';
export default function App() {
  const[ notes, setNotes ] = useState([
    {
    id: nanoid(),
    text: "This is my first Note",
    date: "12/5/2024"
    },{
    id: nanoid(),
    text: "This is my second Note",
    date: "12/5/2024"
    },{
    id: nanoid(),
    text: "This is my third Note",
    date: "25/5/2024"
    }]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  },[notes]);
  const addNote =(text) => {
    const date = new Date();
    const newNote ={
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);  

    
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <main>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
        <Header handleToggle={setDarkMode} />
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
      </div>
      
    </main>
  )
}
