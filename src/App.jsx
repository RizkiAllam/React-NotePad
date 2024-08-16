/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { initialNotes } from './utils/notesData';

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchiveNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  return (
    <div className="container mx-auto p-4 my-8 max-w-4xl">
      <h1 className="text-3xl font-extrabold mb-4 text-center text-white drop-shadow-lg">
      personal notepad
      </h1>
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full p-2 mb-4 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NoteForm addNote={addNote} />
      <h2 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Active Notes</h2>
      <NoteList notes={activeNotes} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
      <h2 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Archived Notes</h2>
      <NoteList notes={archivedNotes} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
    </div>
  );
}

export default App;
