import { Provider } from "react-redux";
import Counting from "./Counting";
import stores from "./Stores";

export default function App(){
  return(
    <Provider store={stores}>
        <Counting />
    </Provider>
  )
}