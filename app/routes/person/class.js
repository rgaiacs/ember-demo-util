import Route from '@ember/routing/route';

import Person from 'ember-demo-util/utils/class/person';

export default class PersonClassRoute extends Route {
  async model() {
    const person = new Person();
    person.serialise();
  }
}
