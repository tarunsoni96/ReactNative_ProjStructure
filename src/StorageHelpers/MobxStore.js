import {observable} from 'mobx';
class MobxStore {
  @observable var1 = 'Mobx alert test'
}
export default new MobxStore();