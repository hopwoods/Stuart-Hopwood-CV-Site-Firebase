import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";


export function useFirebase() {

    const firebaseConfig = {
        apiKey: "AIzaSyApd0HU0GxRW_fQEBKyN1YnYfLLljXELDw",
        authDomain: "stuart-hopwood-cv.firebaseapp.com",
        projectId: "stuart-hopwood-cv",
        storageBucket: "stuart-hopwood-cv.appspot.com",
        messagingSenderId: "502264664855",
        appId: "1:502264664855:web:b0d12f12d3c41e4c24dd52",
        measurementId: "G-JFF4C0R4MX"
    };


    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);

    //TODO: Get Analytics working
    //const analytics = getAnalytics(firebaseApp);

    const appCheck = initializeAppCheck(firebaseApp, {
        provider: new ReCaptchaV3Provider('6LfcdQIiAAAAAGFXyfauaf1CxTmjX014fJzJnQWI'),  // reCAPTCHA v3 site key (public key)
        isTokenAutoRefreshEnabled: true
    });

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(firebaseApp);


    return { firebaseApp, db }
}



