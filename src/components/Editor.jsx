import React, { useState } from 'react';
import ReactMde from 'react-mde';
import { Converter } from 'showdown';

export default function Editor({ currentNote, updateNote }) {
  // TODO: Localstorage of what was last selected
  const [selectedTab, setSelectedTab] = useState('write');

  const converter = new Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className='pane editor'>
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits='vh'
        loadingPreview='Loading...'
      />
    </section>
  );
}
