import { RequestHandler } from "express";
import Video from "./Video";

//onteniendo videos
export const geVideos: RequestHandler = async (req, res) => {
   try {
      const videos = await Video.find();
      res.json(videos);
   } catch (error) {
      res.json(error);
   }
};
//obtener un solo video
export const getVideo: RequestHandler = async (req, res) => {
   const videoFound = await Video.findById(req.params.id);
   if (!videoFound) return res.status(204).json();
   return res.json(videoFound);
};
//guardar video
export const createVideo: RequestHandler = async (req, res) => {
   const videoFound = await Video.findOne({ url: req.body.url });
   if (videoFound) {
      return res.status(301).json({ message: "El video ya existe" });
   }
   const video = new Video(req.body);
   const saveVideo = await video.save();
   res.json(saveVideo);
};
//eliminar un video
export const deleteVideo: RequestHandler = async (req, res) => {
   const videoFound = await Video.findByIdAndDelete(req.params.id);
   if (!videoFound) return res.status(204).json();
   return res.json(videoFound);
};

export const updateVideo: RequestHandler = async (req, res) => {
   const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
   });
   if (!videoUpdate) return res.status(204).json();
   res.json(videoUpdate);
};
