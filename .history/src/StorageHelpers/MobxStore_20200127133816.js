import {observable} from 'mobx';
class MobxStore {
  @observable var1 = 'test'
}
export default new MobxStore();