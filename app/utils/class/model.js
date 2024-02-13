import { tracked } from '@glimmer/tracking';

export default function Model {
  @tracked id = 1;

  serialize() {
    console.log('this');
    console.log(this);
    console.log('keys');
    console.log(Object.keys(this));
  }
}
