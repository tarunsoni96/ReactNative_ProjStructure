import {observable} from 'mobx';
class MobxStore {
  @observable var1 = 'sad'
  @observable serviceType = 'asd'
}
export default new MobxStore();