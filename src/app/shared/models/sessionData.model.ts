import { User } from './user.model'

interface _SessionData {
  isLoggedin: boolean;
  isAdmin: boolean;
  userLogged: User;
  authToken: string;
}

export class SessionData {

  sessionData: _SessionData;
  storage = localStorage;

  public storageAvailable() {
    try {
      var x = '__storage_test__';
      this.storage.setItem(x, x);
      this.storage.removeItem(x);
      return true;
    }
    catch (e) {
      return false;
    }
  }

  constructor() {
    this.loadData();
  }

  public reset() {
    this.sessionData = {
      isLoggedin: false, isAdmin: false, userLogged: {
          userId: 0, email: '', nick: '', photo: '', roles: [''],
      }, authToken: ''
  };
   this.saveData();
  }

  public amILogged() {
    return this.sessionData.isLoggedin;
  }

  public amIAdmin() {
    return this.sessionData.isAdmin;
  }

  public authToken() {
    return this.sessionData.authToken;
  }

  public setAuthToken(auth) {
    this.sessionData.authToken = auth;
  }

  public setUserLogged(u) {
    this.sessionData.userLogged = u;
  }

  public getUserLogged() {
    return this.sessionData.userLogged;
  }

  public setAmIAdmin(b) {
    this.sessionData.isAdmin = b;
  }

  public setAmILogged(b) {
    this.sessionData.isLoggedin = b;
  }

  public saveData() {
    //if (this.sessionData.isLoggedin) {
      this.storage.setItem("isLoggedin", JSON.stringify(this.sessionData.isLoggedin));
      this.storage.setItem("isAdmin", JSON.stringify(this.sessionData.isAdmin));
      this.storage.setItem("authToken", JSON.stringify(this.sessionData.authToken));
      this.storage.setItem("userLogged", JSON.stringify(this.sessionData.userLogged));
    //}
  }

  public destroyData() {
    this.storage.removeItem("sessionDataaa");
  }

  public loadData() {
    console.log("Trying to load session data from storage....")
    this.sessionData = JSON.parse(this.storage.getItem("sessionDataaa"));
    if (this.sessionData == undefined || this.sessionData == null) {
      console.log("Data not found, using new session")
      this.reset();
    }
    console.log(this.sessionData);

  }
}
