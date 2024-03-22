import './firebase.js'
import './singIn.js'
import './singUpForm.js'
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { authUser } from './firebase.js'


onAuthStateChanged(authUser, async (user) => {
    console.log(user);
    if (user !== null) {
        window.location.href = './modulos/desk.html'
    }
})
 
// function logOutUser (){
//     const logOut = document.querySelector('#logOut')
//     logOut.addEventListener('click', async () => {
//         console.log("LOGOUT");
//         await signOut(authUser)
//     })
// }

