export type VideoItem = {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
  viewCount: string;
};

export type SearchBarCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  channelName: string;
};
export type FrontCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  channelName: string;

  views: number;

};
