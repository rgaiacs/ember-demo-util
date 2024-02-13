import { tracked } from '@glimmer/tracking';

import Model from './model';

export default function Person() {
  let new_person = Model();

  new_person.name = tracked({value: "Jane"});

  return new_person;
}
