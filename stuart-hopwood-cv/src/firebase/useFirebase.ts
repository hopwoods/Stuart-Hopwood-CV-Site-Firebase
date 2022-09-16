import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use

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
    //const analytics = getAnalytics(firebaseApp);


    return { firebaseApp }

}



