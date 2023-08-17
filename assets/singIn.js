import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { authUser } from './firebase.js'

const logIn = document.querySelector("#loginForm")

logIn.addEventListener("submit", async e => {
    e.preventDefault()
    const emailLog = logIn['emailUserLog'].value
    const passLog = logIn['passUserLog'].value

    try {
        const userCredential = await signInWithEmailAndPassword(authUser, emailLog, passLog)
        console.log(userCredential);
        
    } catch (error) {
        console.log(error.code);
        if (error.code === 'auth/user-not-found') {
            alert('Email invalido')
        } else if (error.code === 'auth/wrong-password') {
            alert('Contraseña Equivocada')
        } else if (error.code) {
            alert('Algo salio Mal!')
        }
    }
})