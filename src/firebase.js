import { initializeApp } from 'firebase'
import config from '../firebase-config'

const app = initializeApp(config)
const db = app.database()
const namesRef = db.ref('names')

export { db, namesRef }