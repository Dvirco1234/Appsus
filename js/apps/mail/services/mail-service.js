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
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mamamia Bela',
}

const MAILS_KEY = 'mailsDB'
_createMails()

function query() {
    return storageService.query(MAILS_KEY)
}

function remove(mailId) {
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
}

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

function _createMails() {
    return query().then((mails) => {
        if (!mails || !mails.length) {
            mails = [
                {
                    id: 'e104',
                    subject: 'Coding academy',
                    body: 'Matan Crispel shared "CaMay22-Materials" with you and give you a permission to commit in Bootcamp general group',
                    isRead: false,
                    sentAt: 1656835581000,
                    to: 'matan@crispel.com',
                    isDraft: false,
                    isStarred: true,
                    isSent: false,
                    isLabeled: true,
                    isTrash: false,
                },
                {
                    id: 'e105',
                    subject: 'Hi, John!',
                    body: 'Aliens are coming down to Earth on Saturday for a mission to kidnap all the sexy and good looking people. You are going to be safe but I am just mailing you to say goodbye.',
                    isRead: false,
                    sentAt: 1656812181000,
                    to: 'spam@spamy.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e106',
                    subject: 'Regards, Henry.',
                    body: 'When I went for an eye check up to a doctor, I noticed his degree on the wall with his name. I tried to recollect where I’d heard that name before and realized that I had a crush on a guy with the same name way back in high school. He was tall and cute, but when I saw the doctor I was convinced it can’t be the same guy as he was fat and half bald. After my check up I asked him if he attended the City School and he said, yes he did. Then I asked him which year he graduated and he said, “1972, but why are you asking me this?” I exclaimed, “You were in my class!” and to that he said, “Oh! Really? Which subject did you teach?”',
                    isRead: false,
                    sentAt: 1656662781000,
                    to: 'harvard@gogo.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e107',
                    subject: 'Hey yoram',
                    body: 'Bereavement leave: You cannot help it if someone dies and so you need not miss work. If your presence is necessary at the funeral, you can arrange it during lunch hours or in very important involvements apply for a one hour leave before lunch in advance.',
                    isRead: true,
                    sentAt: 1656639381000,
                    to: 'moshe@gmail.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: true,
                    isTrash: false,
                },
                {
                    id: 'e108',
                    subject: 'Alert!',
                    body: 'We noticed a new login to your Todolist account Don`t recognize this activity? Reset your password immediately. Resetting your password will log you out on every device and issue a new API token.',
                    isRead: false,
                    sentAt: 1656466581000,
                    to: 'google@gmail.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e109',
                    subject: 'Running out of Time?',
                    body: 'Ditch the 40-minute limit when you upgrade to Pro. For a limited-time save 30% off your first year.',
                    isRead: false,
                    sentAt: 1656466581000,
                    to: 'zoom@zoom.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e110',
                    subject: 'Discover your passion for Germany',
                    body: 'Why not hiking in the mountains? In Germany you will find what you are looking for... and we`ll take you there!',
                    isRead: true,
                    sentAt: 1656416181000,
                    to: 'zoom@zoom.com',
                    isDraft: false,
                    isStarred: true,
                    isSent: false,
                    isLabeled: true,
                    isTrash: false,
                },
                {
                    id: 'e111',
                    subject: 'Thanks for signing up to Appsus ❤️',
                    body: 'You are about to join the millions of people who rely on Todoist to organize work and life.',
                    isRead: false,
                    sentAt: 1656405381000,
                    to: 'appsus@dev.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e112',
                    subject: 'Hello There,',
                    body: 'Don`t worry if you got too relaxed in your beach chair: you still have 24 hours to save 50% on Appsus',
                    isRead: true,
                    sentAt: 1656309681000,
                    to: 'appsus@dev.com',
                    isDraft: false,
                    isStarred: true,
                    isSent: false,
                    isLabeled: true,
                    isTrash: false,
                },
                {
                    id: 'e113',
                    subject: 'Dear Customer,',
                    body: 'We have detected a publicly accessible Google API key associated with the following Google Cloud Platform project:',
                    isRead: false,
                    sentAt: 1656309681000,
                    to: 'google@gmail.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: true,
                },
                {
                    id: 'e114',
                    subject: 'Hi There,',
                    body: 'It`s been more than a year since you last updated your personal info. Keeping your personal info up to date can help better protect your account.',
                    isRead: false,
                    sentAt: 1656223281000,
                    to: 'appsus@dev.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: true,
                },
                {
                    id: 'e115',
                    subject: 'Join your team on Slack',
                    body: 'Slack is a messaging app for teams, a place you can collaborate on projects and organize conversations — so you can work together, no matter where you are. Learn more about Slack...',
                    isRead: false,
                    sentAt: 1656050481000,
                    to: 'slack@dev.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e116',
                    subject: 'You have an invitation',
                    body: 'I`d like to join your LinkedIn network.',
                    isRead: true,
                    sentAt: 1655964081000,
                    to: 'linklink@dev.com',
                    isDraft: false,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e117',
                    subject: 'Hey Folks!',
                    body: 'In this month’s newsletter roundup, we take a journey through the depths of space with our brand-new retro video game, showcase some sweet new duds, and delve into the art of naming icons. Take a look!',
                    isRead: false,
                    sentAt: 1655791281000,
                    to: 'travelTip12@dev.com',
                    isDraft: false,
                    isStarred: true,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
                {
                    id: 'e101',
                    subject: 'Miss you!',
                    body: 'Would love to catch up sometimes',
                    isRead: true,
                    sentAt: 1655791281000,
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
                    body: 'Coffee on me',
                    isRead: true,
                    sentAt: 1653112881000,
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
                    body: '1,000,000 ERORRS in my console',
                    isRead: true,
                    sentAt: 1650520881000,
                    to: 'momo@momo.com',
                    isDraft: true,
                    isStarred: false,
                    isSent: false,
                    isLabeled: false,
                    isTrash: false,
                },
            ]
            return storageService.postMany(MAILS_KEY, mails)
        }
        return mails
    })
}
