let allNotes = {
  notesTitles: [],
  notes: [],
  trashNotesTitles: [],
  trashNotes: [],
  archivNotesTitles: [],
  archivNotes: [],
};

function init() {
  getAllFromLokalStorage();
  renderAll();
}

function renderAll() {
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function saveAllToLocalStorage() {
  saveNoteToLocalStorage();
  savearchivToLocalStorage();
  saveTrashToLocalStorage();
}

function getAllFromLokalStorage() {
  getNoteFromLocalStorage();
  getTrashNoteFromLocalStorage();
  getArchivNoteFromLocalStorage();
}

function addNote() {
  let titleInputRef = document.getElementById('title_input');
  let noteInputRef = document.getElementById('note_input');

  if (titleInputRef.value && noteInputRef.value != '') {
    allNotes.notesTitles.push(titleInputRef.value);
    allNotes.notes.push(noteInputRef.value);
  }

  saveNoteToLocalStorage();
  renderNotes();
  titleInputRef.value = '';
  noteInputRef.value = '';
}

function renderNotes() {
  let contentNotesRef = document.getElementById('notes_content');
  contentNotesRef.innerHTML = '';

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentNotesRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let contentTrashRef = document.getElementById('trash_content');
  contentTrashRef.innerHTML = '';

  for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
    contentTrashRef.innerHTML += getTrashNotesTemplate(indexTrashNote);
  }
}

function renderArchivNotes() {
  let contentArchivRef = document.getElementById('archiv_content');
  contentArchivRef.innerHTML = '';

  for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
    contentArchivRef.innerHTML += archivNotesTemplate(indexArchivNote);
  }
}

function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);

  let notesTitle = allNotes[startKey + 'Titles'].splice(indexNote, 1);
  allNotes[destinationKey + 'Titles'].push(notesTitle[0]);

  saveAllToLocalStorage();
  renderAll();
}

function deleteTrashNote(indexTrashNote) {
  if (confirm('Willst du die Notiz entgültig löschen?') == true) {
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotes.splice(indexTrashNote, 1);

    saveTrashToLocalStorage();
    renderAll();
  }
}

function saveNoteToLocalStorage() {
  localStorage.setItem('Titel', JSON.stringify(allNotes.notesTitles));
  localStorage.setItem('Note', JSON.stringify(allNotes.notes));
}

function saveTrashToLocalStorage() {
  localStorage.setItem('Trash Title', JSON.stringify(allNotes.trashNotesTitles));
  localStorage.setItem('Trash Note', JSON.stringify(allNotes.trashNotes));
}

function savearchivToLocalStorage() {
  localStorage.setItem('Archiv Title', JSON.stringify(allNotes.archivNotesTitles));
  localStorage.setItem('Archiv Note', JSON.stringify(allNotes.archivNotes));
}

function getNoteFromLocalStorage() {
  let myTitle = JSON.parse(localStorage.getItem('Titel'));
  let myNote = JSON.parse(localStorage.getItem('Note'));

  if (myTitle == null || myNote == null) {
    return;
  }
  allNotes.notesTitles = myTitle;
  allNotes.notes = myNote;
}

function getTrashNoteFromLocalStorage() {
  let myTrashTitle = JSON.parse(localStorage.getItem('Trash Title'));
  let myTrashNote = JSON.parse(localStorage.getItem('Trash Note'));

  if (myTrashTitle == null || myTrashNote == null) {
    return;
  }
  allNotes.trashNotesTitles = myTrashTitle;
  allNotes.trashNotes = myTrashNote;
}

function getArchivNoteFromLocalStorage() {
  let myArchivTitle = JSON.parse(localStorage.getItem('Archiv Title'));
  let myArchivNote = JSON.parse(localStorage.getItem('Archiv Note'));

  if (myArchivTitle == null || myArchivNote == null) {
    return;
  }
  allNotes.archivNotesTitles = myArchivTitle;
  allNotes.archivNotes = myArchivNote;
}
