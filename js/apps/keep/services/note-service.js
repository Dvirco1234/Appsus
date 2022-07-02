import { storageService } from "../../../services/async-storage-service.js"
import { utilService } from "../../../services/util-service.js"

export const noteService = {
  query,
  addNote,
  removeNote,
  pinNote,
  updateNote,
  getNoteById,
  save,
}

const NOTE_KEY = "notes"
const YOUTUBE_KEY = "AIzaSyD0X6HKAWgMgjqn73SNcFmum4FNdh95oPs"
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
        type: "note-img",
        info: {
          url: "https://images.pexels.com/photos/3760044/pexels-photo-3760044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: " Me before Sprint",
        },
        style: {
          backgroundColor: "#FAFDD6",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          url: "https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: " Me during the Sprint",
        },
        style: {
          backgroundColor: "#E6BA95",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          url: "https://images.pexels.com/photos/3799821/pexels-photo-3799821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: " Me after the Sprint",
        },
        style: {
          backgroundColor: "#A2B38B",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          title: "Me working on new framework without Async system",
          url: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        style: {
          backgroundColor: "#E6BA95",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          title: "Note to myself",
          txt: "Bootstrap buttons just looks tasty, DONT think of eating them!",
        },
        style: {
          backgroundColor: "#A2B38B",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-todos",
        info: {
          label: "Build new Framework",
          todos: [
            {
              id: 101,
              txt: "Understanding how to code more than 15K lines",
              doneAt: null,
              isDone: false,
            },
            { id: 102, txt: "Go to sleep", doneAt: 187111111, isDone: false },
          ],
        },
        style: {
          backgroundColor: "#E6BA95",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        info: {
          videoId: "jxi0ETwDvws",
          title: "Bug in the javascript",
        },
        style: {
          backgroundColor: "#EF9F9F",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        info: {
          url: "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Me and dvir Trying to fight bugs",
        },
        style: {
          backgroundColor: "#CDC2AE",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "If no me to me, who me?",
          title: "Always remember!",
        },
        style: {
          backgroundColor: "#ECE5C7",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-audio",
        isPinned: true,
        info: {
          url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        },
        style: {
          backgroundColor: "#A2B38B",
        },
      },
    ]
    utilService.save(NOTE_KEY, notes)
  }
  return notes
}

function addNote(note) {
  const { info, style, type } = note
  const newNote = {
    type,
    info,
    isPinned: false,
    style: style || {
      backgroundColor: "#C2DED1",
    },
  }
  if (newNote.id) return storageService.put(NOTE_KEY, newNote)
  else return storageService.post(NOTE_KEY, newNote)
}

function save(note) {
  if (note.id) return storageService.put(NOTE_KEY, note)
  else return storageService.post(NOTE_KEY, note)
}
