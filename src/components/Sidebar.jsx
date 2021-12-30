import React from 'react';

// .notes, currentNote, .newNote
export default function Sidebar({
  notes,
  currentNote,
  newNote,
  setCurrentNoteId,
}) {
  const noteElements = notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`note-title ${
          note.id === currentNote.id ? 'bg-dark rounded' : ''
        }`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className='text-light'>
          {note.body.slice(0, note.body.indexOf('\n'))}
        </h4>
      </div>
    </div>
  ));

  return (
    <section className='pane sidebar'>
      <div className='sidebar--header'>
        <h3>Notes</h3>
        <hr />
        <button className='btn btn-sm btn-light new-note' onClick={newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
