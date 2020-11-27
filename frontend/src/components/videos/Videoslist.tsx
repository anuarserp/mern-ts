import React, { useEffect, useState } from "react";
import { Video } from "./video.interface";
import { getVideos } from "./VideoService";
import Videoitem from "./Videoitem";

const Videolist = () => {
   const [videos, setVideos] = useState<Video[]>([]);
   const loadVideos = async () => {
      const res = await getVideos();

      const formatedVideos = res.data
         .map((video) => {
            return {
               ...video,
               createdAt: video.createdAt
                  ? new Date(video.createdAt)
                  : new Date(),
               updatedAt: video.updatedAt
                  ? new Date(video.updatedAt)
                  : new Date(),
            };
         })
         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

      setVideos(formatedVideos);
   };
   useEffect(() => {
      loadVideos();
   }, []);

   //retorno
   return (
      <div className="row">
         {videos.map((video) => {
            return (
               <Videoitem
                  loadVideos={loadVideos}
                  key={video._id}
                  video={video}
               ></Videoitem>
            );
         })}
      </div>
   );
};
export default Videolist;
