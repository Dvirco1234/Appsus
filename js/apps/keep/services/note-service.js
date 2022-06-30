import { storageService } from "../../../services/async-storage-service.js"
import { utilService } from "../../../services/util-service.js"

export const noteService = {
  query,
  addNote,
  // getNoteById,
  // saveNote,
  // pinNote,
  // updateNote,
  getInputTypes,
  removeNote,
}

const NOTE_KEY = "notes"
_createNotes()

function query() {
  return storageService.query(NOTE_KEY)
}

const inputTypes = [
  {
    type: "text",
    placeholder: "What’s on your mind...",
  },
  {
    type: "url",
    placeholder: "Enter image URL...",
  },
  {
    type: "url",
    placeholder: "Enter video URL...",
  },
  {
    type: "text",
    placeholder: "Enter you'r Todos...",
  },
  {
    type: "url",
    placeholder: "Enter audio URL...",
  },
]

function getInputTypes() {
  return Promise.resolve(inputTypes)
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

function _createNotes1() {
  return query().then((notes) => {
    if (!notes || !notes.length) {
      notes = [
        {
          id: utilService.makeId(),
          type: "note-txt",
          isPinned: true,
          info: {
            txt: "Fullstack Me Baby!",
          },
          style: {
            backgroundColor: "#00d",
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
            backgroundColor: "#00d",
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
            backgroundColor: "#00d",
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
            backgroundColor: "#00d",
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
            backgroundColor: "#00d",
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
            backgroundColor: "#00d",
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
            backgroundColor: "#00d",
          },
        },
        {
          id: utilService.makeId(),
          type: "note-txt",
          isPinned: true,
          info: {
            txt: "If no me to me, who me?",
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
          },
        },
      ]
      console.log(notes)
      return storageService.postMany(NOTE_KEY, notes)
    }
    console.log(notes)
    return notes
  })
}

function addNote1(note) {
  let newNote = {
    id: utilService.makeId(),
    isPinned: false,
    info: {},
    style: {
      backgroundColor: "yellow",
    },
  }
  switch (note.typeIdx) {
    case 0:
      newNote.info.txt = note.txt
      break
    case 1:
      newNote.info.url = note.txt
      break
    case 2:
      newNote.info.url = note.txt
      break
    case 3:
      newNote.info.todos = note.txt.split(",").map((todo) => {
        return { txt: todo, doneAt: null }
      })
      break
    case 3:
      newNote.info.url = note.txt
      break
  }
  return storageService.post(NOTE_KEY, newNote)
}

function saveNote1(note) {
  return storageService.put(NOTE_KEY, note)
}

function removeNote(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

function getNoteById(id) {
  return storageService.get(NOTE_KEY, id)
}

function addNote2(note) {
  note.id = utilService.makeId()
  note.isPinned = false
  note.style = {
    backgroundColor: "yellow",
  }
  return storageService.post(NOTE_KEY, note)
}
//   let newNote = {
//     id: utilService.makeId(),
//     isPinned: false,
//     info: {},
//     style: {
//       backgroundColor: "yellow",
//     },
//   }

//   if (newNote.type === "note-txt") {
//     newNote.info = { txt }
//   }
//   if (newNote.type === "note-img") {
//     newNote.info = { url, title }
//   }
//   if (newNote.type === "note-todos") {
//     newNote.info = {
//       label,
//       todos: [],
//     }
//   }
//   if (newNote.type === "note.video") {
//     newNote.info = { url, title }
//   }
//   if (newNote.type === "note-audio") {
//     newNote.info = { url }
//   }
//   newNote = note
//   console.log(newNote)

//   return storageService.post(NOTE_KEY, newNote)
// }

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
        },
        style: {
          backgroundColor: "#00d",
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
          backgroundColor: "#00d",
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
          backgroundColor: "#00d",
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
          backgroundColor: "#00d",
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
          backgroundColor: "#00d",
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
          backgroundColor: "#00d",
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
          backgroundColor: "#00d",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "If no me to me, who me?",
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
        },
      },
    ]
    console.log(notes)
    utilService.save(NOTE_KEY, notes)
  }
  console.log(notes)
  return notes
}

function saveNote(note) {
  if (note.id) return storageService.put(NOTE_KEY, note)
  else return storageService.post(NOTE_KEY, note)
}

function addNote(note) {
  const { type, info } = note
  const newNote = {
    type,
    info,
    isPinned: false,
    style: {
      backgroundColor: "yellow",
    },
  }

  return storageService.post(NOTE_KEY, newNote)
}
