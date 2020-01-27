import {observable} from 'mobx';
class MobxStore {
  @observable var1 = 'sad'
}
export default new MobxStore();