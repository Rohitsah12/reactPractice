import Card from "./Card";
import Header from "./Header";
import {Provider} from 'react-redux'
import stores from "./Store";

export default function App(){
  return(
      <Provider store={stores}>
        <Header />
        <Card />
      </Provider>
  )
}