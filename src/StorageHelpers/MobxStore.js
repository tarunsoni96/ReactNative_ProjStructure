import {observable} from 'mobx';
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import Constants from 'Helpers/Constants'
class MobxStore {

  @observable userObj = {}
  
  updateUserObj(obj){ 
    this.userObj = obj
    AsyncStorageHandler.delete(Constants.userInfoObj,()=>{
      AsyncStorageHandler.store(Constants.userInfoObj,obj)
    })
  }


  storeLastUserType(userType){
    AsyncStorageHandler.delete(Constants.lastUserType,()=>{
      AsyncStorageHandler.store(Constants.lastUserType,userType)
    })
  }

  getUserObj(){
    return this.userObj
  }

  getUserObjKey(key){
    return this.userObj[key]
  }

}
export default new MobxStore();