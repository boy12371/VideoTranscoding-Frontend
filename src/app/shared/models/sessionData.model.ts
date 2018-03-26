import {User} from './user.model'

interface _SessionData{
  amILogged:boolean;
  amIAdmin:boolean;
  userLogged: User;
  authToken: string;
}

export class SessionData{

  sessionData: _SessionData;

  storage = window.sessionStorage;

  public storageAvailable(){
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

  constructor(){
    this.loadData();
  }

  public reset(){
    this.sessionData = {amILogged: false, amIAdmin: false, userLogged: {
      userId: 0, email: "", roles: [''], nick: "", photo: '', 
    }, authToken: ""};
    this.storage.setItem("sessionDataaa", JSON.stringify(this.sessionData));
  }

  public amILogged() {
    return this.sessionData.amILogged;
  }

  public amIAdmin(){
    return this.sessionData.amIAdmin;
  }

  public authToken(){
    return this.sessionData.authToken;
  }

  public setAuthToken(auth){
    this.sessionData.authToken = auth;
  }

  public setUserLogged(u){
    this.sessionData.userLogged = u;
  }

  public getUserLogged(){
    return this.sessionData.userLogged;
  }

  public setAmIAdmin(b){
    this.sessionData.amIAdmin = b;
  }

  public setAmILogged(b){
    this.sessionData.amILogged = b;
  }

  public saveData(){
    if(this.sessionData.amILogged)
      this.storage.setItem("sessionDataaa", JSON.stringify(this.sessionData));
  }

  public destroyData(){
    this.storage.removeItem("sessionDataaa");
  }

  public loadData(){
    console.log("Trying to load session data from storage....")
    this.sessionData = JSON.parse(this.storage.getItem("sessionDataaa"));
    if(this.sessionData == undefined || this.sessionData == null){
      console.log("Data not found, using new session")
      this.reset();
    }
    console.log(this.sessionData);

  }
}
