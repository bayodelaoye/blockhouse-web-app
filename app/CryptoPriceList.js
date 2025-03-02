"use client";

import { useQuery } from "react-query";
import axios from "axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const fetchPrices = async () => {
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price",
    {
      params: {
        ids: "bitcoin,ethereum,cardano,binancecoin,solana", // Available coins
        vs_currencies: "usd",
      },
    }
  );
  return data;
};

export default function CryptoPriceList({ search, resetSearch }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data, isLoading, error, refetch } = useQuery(
    "cryptoPrices",
    fetchPrices
  );

  // Set a timeout after 3 seconds if the data is still loading
  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoaded(true); // This will trigger after 3 seconds if still loading
      }, 3000); // 3000ms = 3 seconds
    } else {
      setIsLoaded(false); // Reset the state if the loading finishes
    }

    return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts or isLoading changes
  }, [isLoading]); // Dependency array ensures effect runs when isLoading changes

  if (isLoading && !isLoaded) return <Loading />; // Show loading spinner while loading
  if (error)
    return <div className="flex justify-center">Error fetching data</div>;

  // Ensure data exists before trying to call Object.keys on it
  const filteredData = data
    ? Object.keys(data).filter((crypto) =>
        crypto.toLowerCase().includes(search)
      )
    : [];

  return (
    <>
      <div className="flex justify-center items-center pb-8 pt-5">
        <p className="text-center">
          Note: Wait 1 minute before pressing the "Refresh Prices" button for
          the prices to be updated.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col">
          <button
            onClick={() => refetch()}
            className="mb-4 p-2 text-000000 rounded cursor-pointer w-[15rem] rounded-full"
            style={{ backgroundColor: "#a1eafb" }}
          >
            Refresh Prices
          </button>
        </div>
        <ul>
          {filteredData.length === 0 ? (
            <div className="flex justify-center p-4">No results found</div>
          ) : (
            filteredData.map((crypto) => (
              <li key={crypto} className="flex justify-between p-2 border-b">
                <span>{crypto}</span>
                <span className="text-green">${data[crypto].usd}</span>
              </li>
            ))
          )}
        </ul>
        <div className="flex justify-center items-center flex-col pt-10">
          <button
            onClick={resetSearch}
            className="mb-4 p-2 text-000000 rounded cursor-pointer w-[15rem] rounded-full"
            style={{ backgroundColor: "#a1eafb" }}
          >
            Reset Search Crypto
          </button>
        </div>
      </div>
    </>
  );
}
