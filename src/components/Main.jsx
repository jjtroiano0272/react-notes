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
      body: 'Please note that this website is still in development. As such this is a draft! (30 DEC 2021)',
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
        <Split sizes={[30, 70]} direction='horizontal' className='d-flex'>
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
