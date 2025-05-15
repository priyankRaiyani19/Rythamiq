import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import "react-loading-skeleton/dist/skeleton.css";

import { useYoutubeSearch } from "../../service/products/Api.ts";
import SearchBarCard from "./SearchBarCard.tsx";
import SearchBarCardSkeleton from "./SearchBarCardSkeleton.tsx";

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { data, isLoading, error, refetch } = useYoutubeSearch(query);

  const handleSearch = () => {
    if (query.trim()) {
      refetch();
    }
  };

  function handleKeyPress(e: { key: string }) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  // console.log(data);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-full bg-primary-400 shadow-md hover:bg-primary-200 transition duration-200"
      >
        <FiSearch className="text-xl text-primary-900" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center backdrop-blur-sm px-4 scrollbar1"
        >
          <div
            className="relative bg-primary-700 w-full max-w-3xl rounded-xl shadow-lg p-6 overflow-y-auto max-h-[90vh] animate-fadeIn"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary-900">Search YouTube</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-900 hover:text-gray-600 text-2xl"
              >
                <IoCloseSharp />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <input
                type="text"
                placeholder="Type to search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex w-full px-4 py-2 border border-primary-900 rounded-lg outline-none placeholder-primary-900 text-primary-900"
                onKeyDown={handleKeyPress}
              />
              <button
                onClick={handleSearch}
                className="px-5 py-2 bg-primary-900 text-white hover:text-primary-900 rounded-lg hover:bg-primary-500 transition duration-200"
              >
                Search
              </button>
            </div>

            {isLoading
              ? (
                  <div className="flex flex-wrap gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <SearchBarCardSkeleton key={i} i={i} />
                    ))}
                  </div>
                )
              : error
                ? <p className="text-center text-red-500">Error fetching videos</p>

                : data && (
                  <div className="flex flex-wrap  gap-4  ">
                    {data.items.map((video: any) => (
                      <SearchBarCard
                        key={video.id.videoId}
                        title={video.snippet.title}
                        id={video.id.videoId}
                        thumbnail={video.snippet.thumbnails.high.url}
                        channelName={video.snippet.channelTitle}
                      />
                    ))}
                  </div>
                )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
