import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const loggedinUser = { 
    email: 'user@appsus.com',
    fullname: 'Mamamia Bela' 
}
const MAILS_KEY = 'mailsDB'
_createMails()

export const mailService = {
    query,
    remove,
    get,
    save,
    sendMail,
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

function sendMail(mail) {
    mail.id = utilService.makeId()
    mail.isRead = false
    mail.isSent = true
    return storageService.post(MAILS_KEY, mail)
}

function _createMails() {
    // let mails = utilService.load(MAILS_KEY)
    return query().then((mails) => {
        if (!mails || !mails.length) {
            mails = [
                {
                    id: 'e101',
                    subject: 'Miss you!',
                    body: 'Would love to catch up sometimes',
                    isRead: false,
                    sentAt: 1551134930594,
                    to: 'momo@momo.com',
                },
                {
                    id: 'e102',
                    subject: 'Come say hello!',
                    body: 'Would love to catch up sometimes',
                    isRead: false,
                    sentAt: 1551153930594,
                    to: 'momo@momo.com',
                },
                {
                    id: 'e103',
                    subject: 'I need help!',
                    body: 'Would love to catch up sometimes',
                    isRead: false,
                    sentAt: 1551233930594,
                    to: 'momo@momo.com',
                },
            ]
            return storageService.postMany(MAILS_KEY, mails)
            // utilService.save(MAILS_KEY, mails)
        }
        return mails
    })
    // return mails
}
