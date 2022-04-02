// Firebase Test
/*^*^*^*^*^*^*^*
script.js
The main script for Firebase Test.
*^*^*^*^*^*^*^*/

import {firebaseConfig} from "../firebaseConfig.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import {collection, addDoc, getFirestore, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

export class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.firebase = initializeApp(firebaseConfig);
    const database = getFirestore(this.firebase);
    (async () => {
      const docRef = doc(database, "data", "data");
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    })();
  }
  preload() {

  }
  create() {

  }
  update() {

  }
}
