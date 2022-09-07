import { FC } from "react";
import { somethingElse } from "./constants";

const Temp: FC = () => {
  return (
    <div>
      Hello world
      {somethingElse}
      <button>yo yo yo</button>
    </div>
  );
};

export default Temp;
export { Temp };
