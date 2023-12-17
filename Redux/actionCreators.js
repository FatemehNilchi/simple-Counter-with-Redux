import { kahesh, afzayesh, tamiz } from "./actionsTypes.js";

const kaheshAction = () => {
  return {
    type: kahesh,
  };
};

const afzayeshAction = () => {
  return {
    type: afzayesh,
  };
};
const tamizAction = () => {
  return {
    type: tamiz,
  };
};
export { tamizAction, afzayeshAction, kaheshAction };
