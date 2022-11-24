// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { pathReference, gsReference, httpsReference } from "strg_dwn_create_ref.js";


// const storage = getStorage();
// getDownloadURL(pathReference)
//   .then((gsReference) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', gsReference);
//     xhr.send();

//     // Or inserted into an <apk> element
//     const apk = document.getElementById('myapk');
//     apk.setAttribute('src', httpsReference);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });