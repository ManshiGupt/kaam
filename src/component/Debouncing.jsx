import React, { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler); // Cleanup
  }, [value, delay]);

  return debouncedValue;
}

export default function Debouncing() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // Debounce for 500ms

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Search API call for:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
