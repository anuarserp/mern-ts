import React from "react";
import { Video } from "./video.interface";
import ReactPlayer from "react-player";
import "./VideoItem.css";
import { useHistory } from "react-router-dom";
import * as VideoService from "./VideoService";

interface Props {
   video: Video;
   loadVideos: () => void;
}

const Videoitem = (props: Props) => {
   const { video, loadVideos } = props;

   const history = useHistory();
   const handleDelete = async (id: string) => {
      await VideoService.deleteVideo(id);
      loadVideos();
   };

   return (
      <div className="col-md-4 mb-2">
         <div className="card video-card" style={{ cursor: "pointer" }}>
            <div className="embed-responsive embed-responsive-16by9">
               <div className="embed-responsive-item">
                  <ReactPlayer url={video.url} />
               </div>
            </div>
            <div className="card-body">
               <div className="d-flex justify-content-between">
                  <h5
                     className="card-title "
                     onClick={() => history.push(`/update/${video._id}`)}
                  >
                     {video.title}
                  </h5>
                  <span
                     className="text-danger"
                     onClick={() => video._id && handleDelete(video._id)}
                  >
                     X
                  </span>
               </div>
               <p className="card-text">{video.description}</p>
               <a
                  href={video.url}
                  className="btn btn-outline-danger"
                  target="_blank"
                  rel="noreferrer"
               >
                  Ir a Youtube
               </a>
            </div>
         </div>
      </div>
   );
};

export default Videoitem;
