import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { axiosInstance } from "./Client.ts";

export function useYoutubeSearch(query: string) {
  return useQuery({
    queryKey: ["youtubeSearch", query],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/search", {
        params: {
          part: "snippet",
          q: query,
          type: "any",
          maxResults: 12,
        },
      });
      return data;
    },
    enabled: false,
  });
}

export function useYoutubeTrending(regionCode: string = "IN") {
  return useInfiniteQuery({
    queryKey: ["youtubeTrending", regionCode],
    queryFn: async ({ pageParam = "" }) => {
      const { data } = await axiosInstance.get("/videos", {
        params: {
          part: "snippet,statistics,contentDetails",
          chart: "mostPopular",
          regionCode,
          maxResults: 15,
          pageToken: pageParam,
        },
      });
      return data;
    },
    initialPageParam: "",
    getNextPageParam: lastPage => lastPage.nextPageToken,
  });
}
