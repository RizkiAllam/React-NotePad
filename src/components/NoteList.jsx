/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote, toggleArchiveNote }) {
    if (notes.length === 0) {
        return <p className="text-center text-gray-500">Tidak ada catatan</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map(note => (
            <Note
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleArchiveNote={toggleArchiveNote}
            />
        ))}
        </div>
    );
}

export default NoteList;
