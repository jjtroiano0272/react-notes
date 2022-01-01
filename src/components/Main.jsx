import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Split from 'react-split';
import { nanoid } from 'nanoid';
import Sidebar from './Sidebar';
import Editor from './Editor';
import { notesInitData } from '../assets/data/notesInitData';

export default function Main(props) {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('userNotes')) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ''
  );

  useEffect(() => {
    localStorage.setItem('userNotes', JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: '',
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((prevNotes) => {
      const updatedArr = [];
      for (let i = 0; i < prevNotes.length; i++) {
        const prevNote = prevNotes[i];
        prevNote.id === currentNoteId
          ? updatedArr.unshift({ ...prevNote, body: text })
          : updatedArr.push(prevNote);
      }

      return updatedArr;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <div className='container'>
      {notes.length > 0 ? (
        <>
          {/* Alert that this site is in development */}
          <div
            className='alert alert-warning alert-dismissible fade show'
            role='alert'
          >
            <strong>This website is in development</strong> As such, this is not
            indicative of the final product.
            <button
              type='button'
              className='btn btn-sm close position-absolute'
              data-dismiss='alert'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>

          <Split
            sizes={[30, 70]}
            direction='horizontal'
            className='d-flex mb-5'
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {currentNoteId && notes.length > 0 && (
              <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
            )}
          </Split>
        </>
      ) : (
        <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
          <h1 className='lead'>You have no notes</h1>
          <button className='btn btn-lg btn-light' onClick={createNewNote}>
            Write your first
          </button>
        </div>
      )}
    </div>
  );
}
