importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js')

const firebaseConfig = {
    apiKey: "AIzaSyBsahkxFp1qMb4OGr3RmefRx27lct5vLm4",
    authDomain: "lafemme-128c6.firebaseapp.com",
    projectId: "lafemme-128c6",
    storageBucket: "lafemme-128c6.appspot.com",
    messagingSenderId: "147273629507",
    appId: "1:147273629507:web:ac04d2b976b052492db9f6",
    measurementId: "G-PCJWXFSZWG"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
  
