import {observable} from 'mobx';
class MobxStore {
  @observable serviceId = 'sad'
  @observable serviceType = 'asd'
}
export default new MobxStore();