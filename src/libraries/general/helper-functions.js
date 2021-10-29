import * as $ from "jquery";

export function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function parseCommasPerThousand(str){
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
