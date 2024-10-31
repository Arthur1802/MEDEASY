'use strict'

import { getDatabase, ref, query, orderByChild, equalTo, get, set, remove } from 'firebase/database'
import User from './User'

export default class UserDAO {
    static db = null

    constructor() {
        this.connectToDB()
    }

    async connectToDB() {
        if (UserDAO.db === null) {
            UserDAO.db = new Promise((resolve, reject) => {
                const db = getDatabase()
        
                if (db) {
                    resolve(db)
                } else {
                    reject('Database not found')
                }
            })
        }

        return UserDAO.db
    }

    async getUserByUid(uid) {
        let connectionDB = await this.connectToDB()

        return new Promise((resolve, reject) => {
            let dbRefUser = ref(connectionDB, `users/${uid}`)
            let queryUser = query(dbRefUser)
            let result = get(queryUser)

            result.then((dataSnapshot) => {
                let usr = dataSnapshot.val()

                if (usr) {
                    resolve(new User(usr.uid, usr.nome, usr.email, usr.role, usr.emailVerified))
                } else {
                    resolve('User not found')
                }
            }).catch((error) => {
                reject(error)
            })
        })
    }

    async getUserByEmail(email) {
        let connectionDB = await this.connectToDB()

        return new Promise((resolve, reject) => {
            let dbRefUser = ref(connectionDB, 'users')
            let queryUser = query(dbRefUser, orderByChild('email'), equalTo(email))
            let result = get(queryUser)

            result.then((dataSnapshot) => {
                let usr = dataSnapshot.val()

                if (usr) {
                    resolve(new User(usr.uid, usr.nome, usr.email, usr.role, usr.emailVerified))
                } else {
                    resolve('User not found')
                }
            }).catch((error) => {
                reject(error)
            })
        })
    }

    async getAllUsers() {
        let connectionDB = await this.connectToDB()

        return new Promise((resolve, reject) => {
            let usersList = []
            let dbRefUsers = ref(connectionDB, 'users')
            let orderBy = orderByChild('nome')
            let queryUsers = query(dbRefUsers, orderBy)
            let result = get(queryUsers)

            result.then((dataSnapshot) => {
                dataSnapshot.forEach((dataSnapshotObj) => {
                    let usr = dataSnapshotObj.val()
                    usersList.push(new User(usr.uid, usr.nome, usr.email, usr.role, usr.emailVerified))
                })

                resolve(usersList)
            }).catch((error) => {
                reject(error)
            })
        })
    }

}