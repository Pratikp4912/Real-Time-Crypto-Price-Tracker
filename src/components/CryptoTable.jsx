import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';

const CryptoTable = () => {
  const coins = useSelector(state => state.crypto.coins);

  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, idx) => (
            <tr key={coin.id}>
              <td>{idx + 1}</td>
              <td className="name-cell">
                <img src={coin.logo} alt={coin.symbol} className="coin-logo" />
                <span>{coin.name}</span> <span className="symbol">{coin.symbol}</span>
              </td>
              <td>${coin.price.toLocaleString()}</td>
              <td className={coin.change1h >= 0 ? 'green' : 'red'}>{coin.change1h}%</td>
              <td className={coin.change24h >= 0 ? 'green' : 'red'}>{coin.change24h}%</td>
              <td className={coin.change7d >= 0 ? 'green' : 'red'}>{coin.change7d}%</td>
              <td>${coin.marketCap.toLocaleString()}</td>
              <td>${coin.volume24h.toLocaleString()}</td>
              <td>{coin.supply}</td>
              <td>
                <img src={coin.chart} alt="sparkline" className="sparkline" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
