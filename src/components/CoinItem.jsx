const CoinItem = ({ coin }) => {
  return (
    <div className="max-w-[1000px] mx-auto my-20">
      <div
        key={coin.id}
        className="flex justify-between items-start md:p-8 border-b border-gray-500 overflow-hidden hover:bg-blue-400 duration-100"
      >
        <p>{coin.market_cap_rank}</p>
        <div className="flex justify-start items-center">
          <img className="w-10 h-8 pr-2" src={coin.image} alt={coin.name} />
          <p>{coin.symbol.toUpperCase()}</p>
        </div>

        <p className="items-start">
          {(coin.current_price * 53.63).toLocaleString()} Birr
        </p>
        <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className="hidden md:flex">
          {coin.total_supply
            ? "$" + coin.total_supply.toLocaleString()
            : "Unknown"}
        </p>
        <p className="hidden md:flex">${coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CoinItem;
