import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAHN7qi76sqh-ZHSlAGryJEbTvxcsvFJaY",
    authDomain: "user-database-test-9ee1d.firebaseapp.com",
    databaseURL: "https://user-database-test-9ee1d.firebaseio.com",
    projectId: "user-database-test-9ee1d",
    storageBucket: "user-database-test-9ee1d.appspot.com",
    messagingSenderId: "425239506606",
    appId: "1:425239506606:web:decf3cc0780d2d8e9d073f"
};


class Firebase {
    
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore;
        this.u_id = 0;
        this.currentUserID = 0;
        this.currentUsername = "";        
    }

    async getPlayers() {
        console.log("getting fantasy player stats lists...");
        // get a list of all homework from userid
        let db = "fantasyPlayerStats";
        let x = await firebase.database().ref(db).once('value');
        let playerStats = [];
        let v;
        for (let k in x.val()) {
            v = x.val()[k];
            playerStats = v;
        }
        console.log("done");
        return playerStats;
    }

    async getSeason() {
        console.log("getting fantasy player stats lists...");
        // get a list of all homework from userid
        let db = "fantasyPlayerSeasonStats";
        let x = await firebase.database().ref(db).once('value');
        let seasonStats = [];
        let v;
        for (let k in x.val()) {
            v = x.val()[k];
            seasonStats = v;
        }
        console.log("done");
        return seasonStats;
    }

}

export default new Firebase();
