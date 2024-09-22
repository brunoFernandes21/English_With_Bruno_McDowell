import React from "react";

interface VideoEmbedProps {
  videoIds: string[];
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoIds }) => {
  return (
    <>
      {videoIds.map((videoId: string) => (
        <div
          key={videoId}
          className="rounded-md transition-all ease-in-out duration-500 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-sky-500 relative dark:bg-slate-700 dark:text-white"
        >
          <iframe
            className="rounded-md"
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default VideoEmbed;
