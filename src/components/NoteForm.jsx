/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { getNewId } from '../utils/notesData';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const titleLimit = 50;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length > titleLimit) return;
        const newNote = {
        id: getNewId(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
        };
        addNote(newNote);
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-2">
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="w-full p-2 mb-1 rounded-lg"
            required
            />
            <p className="text-sm text-gray-500">
            Remaining characters: {titleLimit - title.length}
            </p>
        </div>
        <div className="mb-2">
            <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Contents of the note"
            className="w-full p-2 rounded-lg"
            required
            />
        </div>
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[50%]"
        >
            Add Note📑
        </button>
        </form>
    );
}

export default NoteForm;
