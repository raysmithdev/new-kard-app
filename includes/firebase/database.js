import * as firebase from 'firebase';

class Database {
  static addUserEmail(uid, emailTitle, email) {
    const userEmailPath = `/user/${uid}/emails`;
    return firebase.database().ref(userEmailPath).push().set({
      emailTitle,
      email
    });
  }
}

module.exports = Database;
