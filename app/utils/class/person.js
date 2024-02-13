import { tracked } from "@glimmer/tracking";

import Model from "./model";

export default class Method extends Model {
  @tracked name = "Jane";
}
