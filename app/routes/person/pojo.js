import Route from '@ember/routing/route';

import { serialise } from 'ember-demo-util/utils/pojo/model';

import Person from 'ember-demo-util/utils/pojo/person';

export default class PersonPojoRoute extends Route {
  async model() {
    const person = Person();
    serialise(person);
  }
}
