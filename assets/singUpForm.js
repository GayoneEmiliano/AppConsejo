import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import {authUser} from './firebase.js'

singnupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const emailUser = document.getElementById("emailUser").value
    const passUser = document.getElementById("passUser").value
    console.log("ento al submit");
    try{
        const userData = await createUserWithEmailAndPassword(authUser, emailUser, passUser)
        console.log(userData);
        $('#modalSingUp').modal('hide')
        $('#modalConfirmacion').modal('show')
    }catch (error){
        console.log(error);
        if(error.code === 'auth/email-already-in-use'){
            alert('El Email ya esta en uso')
        }else if(error.code === 'auth/invalid-email'){
            alert('Email invalido')
        }else if(error.code === 'auth/weak-password'){
            alert('Contraseña demasiado corta')
        }else if(error.code){
            alert('Algo salio Mal!')
        }
    }
})