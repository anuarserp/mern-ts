import axios from "axios";
import { Video } from "./video.interface";

export const getVideos = async () => {
   return await axios.get<Video[]>("http://localhost:4000/videos");
};

export const createVideo = async (video: Video) => {
   return await axios.post("http://localhost:4000/videos", video);
};

export const getVideo = async (id: string) => {
   return await axios.get<Video>(`http://localhost:4000/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
   return await axios.put<Video>(`http://localhost:4000/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
   return await axios.delete<Video>(`http://localhost:4000/videos/${id}`);
};
