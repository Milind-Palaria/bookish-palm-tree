// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//     apiKey: "AIzaSyBiYL4M3iCS575ucDO2fVkJAUGN5xs4oSk",
//     authDomain: "bookish-palm-tree.firebaseapp.com",
//     projectId: "bookish-palm-tree",
//     storageBucket: "bookish-palm-tree.appspot.com",
//     messagingSenderId: "117404108533",
//     appId: "1:117404108533:web:754a8e084eac2fa4a367bc"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// console.log("Hello")
// console.log("BP44b81S2bMSL6fFe_BSX0GdBfheRq3M_FNg30KR8Sy7xin4E5SF2bJqHudtkuucRur45tCasns_Jo1CRMNniss")

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });