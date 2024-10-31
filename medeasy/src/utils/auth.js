import { auth } from './firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { getDatabase, ref, query, get, set } from 'firebase/database'

let userLoggedIn = false
const db = getDatabase()
const getGoogleProvider = () => new GoogleAuthProvider()


// Login functions
export const LoginWithEmail = async (email, password) => {
    if (!validateEmail(email) || !validatePassword(password)) {
        return {error: 'Invalid email and/or password'}
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        const dbRefUser = ref(db, `users/${user.uid}`)
        const snapshot = await get(query(dbRefUser))

        if (!snapshot.exists()) {
            return {error: 'Account not found'}
        }

        userLoggedIn = true

        return {success: 'You have successfully logged in'}
    } catch (error) {
        console.error(error)
        return {error: error.message}
    }
}

export const LoginWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, getGoogleProvider())
        const user = userCredential.user

        const dbRefUser = ref(db, `users/${user.uid}`)
        const snapshot = await get(query(dbRefUser))

        if (!snapshot.exists()) {
            return {error: 'Account not found'}
        }

        userLoggedIn = true

        return {success: 'You have successfully logged in'}
    } catch (error) {
        console.error(error)
        return {error: error.message}
    }
}


// Signin functions
export const SigninWithEmail = async (nome, email, password) => {
    if (!validateEmail(email) || !validatePassword(password)) {
        return {error: 'Invalid email and/or password'}
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        await sendEmailVerification(user)

        const emailVerified = await waitForEmailVerification(user, 60)
        if (!emailVerified) {
            return {warning: 'Email not verified'}
        }

        const dbRefUser = ref(db, `users/${user.uid}`)
        const snapshot = await get(query(dbRefUser))

        if (snapshot.exists()) {
            return {error: 'Account already exists'}
        }

        const objUser = {
            uid: user.uid,
            nome: nome,
            email: user.email,
            role: 'USER',
            emailVerified: user.emailVerified
        }

        await set(dbRefUser, objUser)

        return {success: 'Your account has been created successfully'}
    } catch (error) {
        console.error(error)
        return {error: error.message}
    }
}

export const SigninWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, getGoogleProvider())
        const user = userCredential.user

        const dbRefUser = ref(db, `users/${user.uid}`)
        const snapshot = await get(query(dbRefUser))

        if (snapshot.exists()) {
            return {error: 'Account already exists'}
        }

        const objUser = {
            uid: user.uid,
            nome: user.displayName.split(' ')[0],
            email: user.email,
            role: 'USER',
            emailVerified: user.emailVerified
        }

        await set(dbRefUser, objUser)

        return {success: 'You have successfully signed in'}
    } catch (error) {
        console.error(error)
        return {error: error.message}
    }
}


// Logout function
export const Logout = async () => {

}

export const isLoggedIn = () => {
    return userLoggedIn
}


// Validation functions
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailRegex.test(email)
}

const validatePassword = (password) => {
    return password.length >= 8
}

const waitForEmailVerification = async (user, timeoutSeconds) => {
    const startTime = Date.now()

    while (!user.emailVerified) {
        await user.reload()

        if (user.emailVerified) {
            return true
        }

        if (Date.now() - startTime >= timeoutSeconds * 1000) {
            return false
        }

        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}