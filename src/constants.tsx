import Temp from "./temp";

const someObj = {
  Temp, // because this is importing Temp and Temp is importing somethingElse it hits this error
};

export const somethingElse = "not using Temp but commonJS does not tree shake";
