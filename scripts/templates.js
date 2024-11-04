function getNoteTemplate(indexNote) {
  return /*html*/ `
    <div class="note">
      <h3>${allNotes.notesTitles[indexNote]} </h3>
      <p>${allNotes.notes[indexNote]}</p>
      <div>
        <button onclick="moveNote(${indexNote},'notes','trashNotes')" class="btn">X</button>
        <button onclick="moveNote(${indexNote},'notes','archivNotes')" class="btn">A</button>
      </div>
    </div>
    `;
}

function getTrashNotesTemplate(indexTrashNote) {
  return /*html*/ `
    <div class="note">
      <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
      <p>${allNotes.trashNotes[indexTrashNote]}</p>
      <div>
        <button onclick="deleteTrashNote(${indexTrashNote})" class="btn">X</button>
        <button onclick="moveNote(${indexTrashNote},'trashNotes','archivNotes')" class="btn">A</button>
      </div>
    </div>
        
   
    `;
}

function archivNotesTemplate(indexArchivNote) {
  return /*html*/ `
    <div class="note">
      <h3>${allNotes.archivNotesTitles[indexArchivNote]} </h3>
      <p>${allNotes.archivNotes[indexArchivNote]}</p>
      <div>
        <button onclick="moveNote(${indexArchivNote},'archivNotes','trashNotes')" class="btn">X</button>
        <button onclick="moveNote(${indexArchivNote},'archivNotes','notes')" class="btn">N</button>
      </div>
    </div>
  `;
}
