import Skeleton from "react-loading-skeleton";

function SearchBarCardSkeleton({ i }: { i: number }) {
  return (
    <div key={i} className="bg-gray-200 w-56 h-[17.5rem] rounded-xl">
      <Skeleton
        height={150}
        width="100%"
        baseColor="#848884"
        highlightColor="#808080"
      />
      <div className="px-3 py-4">
        <Skeleton
          height={20}
          width={150}
          baseColor="#848884"
          highlightColor="#C0C0C0"
        />

        <Skeleton
          height={20}
          width={100}
          baseColor="#848884"
          highlightColor="#C0C0C0"
        />

      </div>
    </div>
  );
}

export default SearchBarCardSkeleton;
