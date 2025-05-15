import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import type { FrontCardProps } from "../../lib/types/type.ts";

function FrontCard({ id, thumbnail, title, channelName, views }: FrontCardProps) {
  const navigate = useNavigate();
  return (
    <div
      key={id}
      onClick={() => navigate(`/watch/${id}`)}
      className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl  duration-300 bg-primary-700  min-w-[21rem] min-h-[19rem] max-w-[21rem] max-h-[22rem]"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={thumbnail}
          alt="not found"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        className="p-6 bg-primary-700 rounded-lg  flex flex-col justify-between gap-4 min-h-[6rem] "
      >
        <p className="text-xl font-bold text-primary-900 line-clamp-2">
          {title}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg text-primary-900/80 line-clamp-2">
            {channelName}
          </p>
          <p className="text-sm   text-primary-900/80 flex items-center gap-2    ">
            <FaEye size={20} />
            {`${Number(views) >= 1_000_000 ? `${Math.round(Number(views) / 1_000_000)}M` : Number(views) >= 1_000 ? `${Math.round(Number(views) / 1_000)}K` : views} views`}

          </p>

        </div>
      </div>

    </div>
  );
}

export default FrontCard;
