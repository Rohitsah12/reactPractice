import { Provider } from "react-redux";
import Counting from "./Counting";
import stores from "./Stores";
import CustomCounter from "./customCounter";

export default function App(){
  return(
    <Provider store={stores}>
        <Counting />
        <br />
        <br />
        <CustomCounter />
    </Provider>
  )
}