import VideoEmbed from "./VideoEmbed";

const VideosSection = () => {
  const videoIds = [
    "gLgbWGx2gpk?si=5V-XyDHG3vNiROGS",
    "b0gO265NZbA?si=l2lkEpyXNqevnLhK",
    "s-eATqZY-Vw?si=eeqXsZKtt-lQlDAB",
  ];
  return (
    <div className="max-w-full mt-10 lg:mt-20">
      <h2 className="mb-5 text-center text-xl md:text-2xl lg:text-3xl font-semibold">
        Check Out Popular Youtube Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 max-w-lg md:max-w-full mx-auto ">
        <VideoEmbed videoIds={videoIds} />
      </div>
    </div>
  );
};

export default VideosSection;
