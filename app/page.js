"use client";

import { useState } from "react";
import CryptoPriceList from "./CryptoPriceList";
import SearchBar from "./SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");

  const resetSearch = () => {
    setSearch("");
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl mb-4 text-center sm:text-left">
        Crypto Price Tracker
      </h1>
      <div className="flex justify-center sm:justify-start mb-4">
        <SearchBar onSearch={setSearch} />
      </div>
      <CryptoPriceList search={search} resetSearch={resetSearch} />
    </div>
  );
}
