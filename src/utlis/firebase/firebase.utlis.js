import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDw6qJoiIalU4A10WEYSCCV3BaxJUNYgY",
    authDomain: "crwn-db-9242f.firebaseapp.com",
    projectId: "crwn-db-9242f",
    storageBucket: "crwn-db-9242f.appspot.com",
    messagingSenderId: "109695055924",
    appId: "1:109695055924:web:773ca132a0333bde87b261",
    measurementId: "G-PV7YB7EVPN"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef
}

