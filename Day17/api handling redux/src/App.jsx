import CoinCreate from "./CoinCreate";
import stores from "./store";
import {Provider} from 'react-redux'

export default function App(){
  return(
    <Provider store={stores} >
      <CoinCreate />
    </Provider>
  )
}