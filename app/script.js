// Firebase Test
/*^*^*^*^*^*^*^*
script.js
The main script for Firebase Test.
*^*^*^*^*^*^*^*/

import {firebaseConfig} from "../firebaseConfig.js";
import {initializeApp} from "firebase/app";
import firebase from "firebase";
import {getFirestore} from "firebase/firestore";
export class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.firebaseApp = initializeApp(firebaseConfig);
  }
  preload() {

  }
  create() {

  }
  update() {

  }
}
