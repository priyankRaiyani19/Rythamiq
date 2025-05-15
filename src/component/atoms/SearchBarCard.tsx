import type { SearchBarCardProps } from "../../lib/types/type.ts";

function SearchBarCard({ thumbnail, title, channelName, id }: SearchBarCardProps) {
  return (
    <div
      key={id}
      className="bg-primary-900  rounded-xl overflow-hidden min-w-[14rem] min-h-[15.5rem] max-w-[14rem] max-h-[18.5rem] mx-auto "
    >
      <img
        src={thumbnail}
        alt="Not found"
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="text-base font-semibold text-primary-500 line-clamp-2">{title}</h3>
        <p className="text-medium text-primary-500/50 mt-1">{channelName}</p>
      </div>
    </div>
  );
}

export default SearchBarCard;
