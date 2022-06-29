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
            url: "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
            title: "Bobi and Me",
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
            txt: "if no me to me, who me?",
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
