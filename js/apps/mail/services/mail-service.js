import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

const MAILS_KEY = 'mailsDB'
// _createMails()

export const bookService = {
    query,
    remove,
    get,
    save,
}

function query() {
    return storageService.query(MAILS_KEY)
}

function remove(mailId) {
    // return Promise.reject('Big Error Badd')
    return storageService.remove(MAILS_KEY, mailId)
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function save(mail) {
    return storageService.put(MAILS_KEY, mail)
}
