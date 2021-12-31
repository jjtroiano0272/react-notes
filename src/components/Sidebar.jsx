import React from 'react';
import { Trash } from 'phosphor-react';

// .notes, currentNote, .newNote
export default function Sidebar({
  notes,
  currentNote,
  newNote,
  deleteNote,
  setCurrentNoteId,
}) {
  const noteElements = notes.map((note, index) => (
    <div key={note.id} className='my-2'>
      <div
        className={`note-title ${
          note.id === currentNote.id ? 'bg-dark rounded' : ''
        }`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <p className='text-light'>
          {note.body.slice(0, note.body.indexOf('\n'))}
        </p>
        <button
          className='btn btn-md btn-light'
          onClick={(event) => deleteNote(event, note.id)}
        >
          <Trash />
        </button>
      </div>
    </div>
  ));

  return (
    <section className='pane sidebar'>
      <div className='sidebar--header'>
        <h3 className='text-center'>Notes</h3>
        <hr />
        <button
          className='btn btn-sm btn-light new-note w-100'
          onClick={newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
