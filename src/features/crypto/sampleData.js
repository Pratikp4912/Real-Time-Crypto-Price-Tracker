const coins = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    logo: "/assets/crypto/btc.svg",
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    supply: "19.85M BTC",
    chart: "/assets/crypto/sparkline-btc.svg"
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    logo: "/assets/crypto/eth.svg",
    price: 1802.46,
    change1h: 0.6,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    supply: "120.71M ETH",
    chart: "/assets/crypto/sparkline-eth.svg"
  },
  // Add Tether, XRP, BNB, Solana similarly
];
export default coins;
