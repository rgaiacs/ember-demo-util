import { tracked } from '@glimmer/tracking';

export default function Model() {
  return {
    id: tracked({value: 1}),
  }
}

export function serialise(pojo) {
  console.log("pojo");
  console.log(Object.keys(pojo));
  console.log("pojo.__proto__");
  console.log(Object.keys(pojo.__proto__));
};
