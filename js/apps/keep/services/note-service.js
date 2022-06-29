import { storageService } from "../../../services/async-storage-service.js"
import { utilService } from "../../../services/util-service.js"

export const noteService = {
  query,
}

const NOTE_KEY = "notes"
createNotes()

function createNotes() {
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
        },
        {
          id: utilService.makeId(),
          type: "note-img",
          info: {
            url: "http://some-img/me",
            title: "Bobi and Me",
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
        },
        {
          id: utilService.makeId(),
          type: "note-video",
          info: {
            url: "https://www.youtube.com/watch?v=jxi0ETwDvws",
            title: "Bug in the javascript",
          },
          style: {
            backgroundColor: "black",
          },
        },
      ]
      return storageService.postMany(NOTE_KEY, notes)
    }
    return notes
  })
}

function query() {
  return storageService.query(NOTE_KEY)
}
