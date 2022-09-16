import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

export function useFirebase() {

//TODO: Add Offline Persistence 
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
    //const analytics = getAnalytics(firebaseApp);

    // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
    // key is the counterpart to the secret key you set in the Firebase console.
    const appCheck = initializeAppCheck(firebaseApp, {
        provider: new ReCaptchaV3Provider('6LfcdQIiAAAAAGFXyfauaf1CxTmjX014fJzJnQWI'),
        isTokenAutoRefreshEnabled: true
    });


    return { firebaseApp }
}



