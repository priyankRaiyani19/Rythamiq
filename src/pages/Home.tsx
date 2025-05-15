import { useEffect, useRef } from "react";

import FrontCard from "../component/atoms/FrontCard.tsx";
import { useYoutubeTrending } from "../service/products/Api.ts";

function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useYoutubeTrending();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage)
      return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    });

    const el = loadMoreRef.current;
    if (el)
      observer.observe(el);

    return () => {
      if (el)
        observer.unobserve(el);
    };
  }, [hasNextPage, isFetchingNextPage]);
  // console.log(data);
  return (
    <div
      className="flex flex-wrap gap-6 p-6  bg-transparent  mx-auto"
    >
      {data?.pages.map(page =>
        page.items.map((video: any, index: number) => (
          <FrontCard
            key={index}
            id={video.id}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            views={video.statistics.viewCount}
          />
        )),
      )}
      <div ref={loadMoreRef} className="h-10 col-span-full" />
    </div>

  );
}

export default Home;
