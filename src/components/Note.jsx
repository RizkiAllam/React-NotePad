/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Note({ note, deleteNote, toggleArchiveNote }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md bg-opacity-90 hover:bg-opacity-100 transition-all">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{note.title}</h2>
        <p className="text-gray-700 mb-4">{note.body}</p>
            <div className="flex justify-between">
                <button
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                onClick={() => deleteNote(note.id)}
                >
                Delete
                </button>
                <button
                className={`${
                    note.archived ? 'bg-green-500' : 'bg-yellow-500'
                } text-white py-1 px-3 rounded-lg hover:${
                    note.archived ? 'bg-green-700' : 'bg-yellow-700'
                }`}
                onClick={() => toggleArchiveNote(note.id)}
                >
                {note.archived ? 'move' : 'archive'}
                </button>
            </div>
        </div>
    );
}

export default Note;
