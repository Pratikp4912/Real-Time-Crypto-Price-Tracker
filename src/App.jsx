import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCoinData } from './redux/cryptoSlice';
import { randomizeCrypto } from './utils/mockUpdater';
import CryptoTable from './components/CryptoTable';

function App() {
  const coins = useSelector(state => state.crypto.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCoinData(randomizeCrypto(coins)));
    }, 1500);
    return () => clearInterval(interval);
  }, [coins, dispatch]);

  return <CryptoTable />;
}

export default App;
