import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

export const mailService = {
    query,
    remove,
    get,
    save,
    sendMail,
    saveDraft,
    sort,
    sendToTrash,
    // removeFromTrash,
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mamamia Bela',
}

const MAILS_KEY = 'mailsDB'
const TRASH_KEY = 'trashDB'
_createMails()
_createTrash()

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

function sendToTrash(mail) {
    return storageService.put(MAILS_KEY, mail)
    // return storageService.post(TRASH_KEY, mail)
}

// function removeFromTrash(mailId) {
//     return storageService.remove(TRASH_KEY, mailId)
// }

function sendMail(mail) {
    if(mail.isDraft){
        mail.isDraft = false
        return storageService.put(MAILS_KEY, mail)
    }
    mail.isRead = false
    mail.isSent = true
    mail.isDraft = false
    return storageService.post(MAILS_KEY, mail)
}

function saveDraft(draft) {
    if (draft.id) return storageService.put(MAILS_KEY, draft)
    return storageService.post(MAILS_KEY, draft)
}

function sort(mails, sortBy) {
    let sortedMails
    if(sortBy === 'sentAt') sortedMails = mails.sort((a, b) => b.sentAt - a.sentAt)
    else if(sortBy === 'subject') sortedMails = mails.sort((a, b) => a.subject.localeCompare(b.subject))
}

function queryTrash() {
    return storageService.query(TRASH_KEY)
}

function _createTrash() {
    return queryTrash().then((trash) => {
        if (!trash || !trash.length) {
            trash = []
            return storageService.postMany(TRASH_KEY, trash)
        }
        return trash
    })
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
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e102',
                    subject: 'Come say hello!',
                    body: 'Would love to catch up sometimes',
                    isRead: false,
                    sentAt: 1551153930594,
                    to: 'momo@momo.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e103',
                    subject: 'I need help!',
                    body: 'Would love to catch up sometimes',
                    isRead: false,
                    sentAt: 1551233930594,
                    to: 'momo@momo.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
            ]
            return storageService.postMany(MAILS_KEY, mails)
            // utilService.save(MAILS_KEY, mails)
        }
        return mails
    })
    // return mails
}
