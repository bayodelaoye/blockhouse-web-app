"use client";

export default function SearchBar({ onSearch }) {
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value.toLowerCase());
    }
  };

  return (
    <input
      type="text"
      placeholder="Search Crypto"
      onKeyDown={handleEnterKey}
      className="p-2 border rounded placeholder-black w-[13rem]"
    />
  );
}
