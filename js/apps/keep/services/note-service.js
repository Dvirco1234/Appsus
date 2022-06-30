import { storageService } from "../../../services/async-storage-service.js"
import { utilService } from "../../../services/util-service.js"

export const noteService = {
  query,
  addNote,
  removeNote,
  pinNote,
  updateNote,
  getNoteById,
}

const NOTE_KEY = "notes"
_createNotes()

function query() {
  return storageService.query(NOTE_KEY)
}

function pinNote(note) {
  note.isPinned = !note.isPinned
  return storageService.put(NOTE_KEY, note)
}

function updateNote(newTxt, note) {
  return setnewNoteTxt(newTxt, note).then((note) => {
    return storageService.put(NOTE_KEY, note)
  })
}

function setnewNoteTxt(newTxt, note) {
  switch (note.type) {
    case "NoteTxt":
      note.info.txt = newTxt
      break
    case "NoteImg":
      note.info.url = newTxt
      break
    case "NoteVideo":
      note.info.url = newTxt
      break
    case "NoteAudio":
      note.info.url = newTxt
      break
    case "NoteTodos":
      note.info.todos = newTxt.split(",").map((todo) => {
        return { txt: todo, doneAt: null }
      })
      break
  }
  return Promise.resolve(note)
}

function removeNote(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

function getNoteById(id) {
  return storageService.get(NOTE_KEY, id)
}

function _createNotes() {
  let notes = utilService.load(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack Me Baby!",
          title: "but slowly please...",
        },
        style: {
          backgroundColor: "rgb(220,223,225)",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          url: "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Bobi ",
        },
        style: {
          backgroundColor: "inherit",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-todos",
        info: {
          label: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 },
          ],
        },
        style: {
          backgroundColor: "rgb(220,223,225)",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        info: {
          url: "https://www.youtube.com/embed/jxi0ETwDvws",
          title: "Bug in the javascript",
        },
        style: {
          backgroundColor: "rgb(220,223,225)",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        info: {
          url: "https://www.youtube.com/embed/woFCtpMXNNc",
          title: "Bug in the javascript",
        },
        style: {
          backgroundColor: "inherit",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          url: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
          title: "Bobi and Me",
        },
        style: {
          backgroundColor: "inherit",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          url: "https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          title: " Me",
        },
        style: {
          backgroundColor: "inherit",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "If no me to me, who me?",
          title: "kabab-case",
        },
        style: {
          backgroundColor: "inherit",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-audio",
        isPinned: true,
        info: {
          url: "audio/timbaland.mp3",
        },
        style: {
          backgroundColor: "rgb(136, 221, 255)",
          height: "100px",
        },
      },
    ]
    utilService.save(NOTE_KEY, notes)
  }
<<<<<<< HEAD
  // console.log(notes)
=======
>>>>>>> 9e9014b7910ac09951561230750827eba2ea0b34
  return notes
}

function addNote(note) {
  const { type, info, style } = note
  const newNote = {
    type,
    info,
    isPinned: false,
    style: style || {
      backgroundColor: "rgb(220,223,225)",
    },
  }
  // return storageService.post(NOTE_KEY, newNote)

  if (newNote.id) return storageService.put(NOTE_KEY, newNote)
  else return storageService.post(NOTE_KEY, newNote)
}
