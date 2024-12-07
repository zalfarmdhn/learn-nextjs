"use client";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { formatMoney } from "@/utils/formatMoney";

interface RootObject {
  data: CoinType;
  timestamp: number;
}

interface CoinType {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export default function Page() {
  const [bitcoinData, setBitcoinData] = useState<RootObject | null>(null);
  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsRefetch(true);
        const response = await fetch(
          "https://api.coincap.io/v2/assets/bitcoin",
          {
            cache: "no-store",
          }
        );
        const data: RootObject = await response.json();
        setBitcoinData(data);
        setIsRefetch(false);
      };

      fetchData(); // Fetch data immediately on mount

      const interval = setInterval(fetchData, 10000);
      return () => clearInterval(interval);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const price = Number(bitcoinData?.data.priceUsd);
  const market = Number(bitcoinData?.data.marketCapUsd);

  if (!bitcoinData) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <p>Symbol: {bitcoinData?.data.symbol}</p>
        <p>Name: {bitcoinData?.data.name}</p>
        <p>Price: {formatMoney(price)}</p>
        <p>Market Cap: {formatMoney(market)}</p>
        {isRefetch && <p>Refetching..</p>}
      </div>
    </>
  );
}
