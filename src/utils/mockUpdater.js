export const randomizeCrypto = (coins) => {
    return coins.map(coin => {
      const randomFactor = () => (Math.random() * 2 - 1).toFixed(2); // -1 to 1
      const updatedPrice = coin.price * (1 + randomFactor() / 100);
      return {
        ...coin,
        price: parseFloat(updatedPrice.toFixed(2)),
        change1h: parseFloat(randomFactor()),
        change24h: parseFloat(randomFactor()),
        change7d: parseFloat(randomFactor()),
        volume24h: parseFloat((coin.volume24h * (1 + randomFactor() / 10)).toFixed(0))
      };
    });
  };
  