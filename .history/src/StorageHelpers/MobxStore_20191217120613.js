import {observable} from 'mobx';
class MobxStore {
  @observable serviceId = ''
  @observable serviceType = ''
}
export default new MobxStore();