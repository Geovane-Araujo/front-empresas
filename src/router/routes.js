import { routes as login } from "../security";
import { routes as home } from "../views";

export default {
  ...login,
  ...home
}