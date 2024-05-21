import { TextDecoder } from "node:util";

global.TextDecoder = TextDecoder;

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
