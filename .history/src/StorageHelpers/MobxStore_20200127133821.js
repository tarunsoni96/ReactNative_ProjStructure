import {observable} from 'mobx';
class MobxStore {
  @observable var1 = 'Mobx test'
}
export default new MobxStore();