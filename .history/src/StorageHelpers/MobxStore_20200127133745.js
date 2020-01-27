import {observable} from 'mobx';
class MobxStore {
  @observable serviceId = ''
  @observable serviceType = 'asd'
}
export default new MobxStore();