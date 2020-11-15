import { Router } from "express";
import * as videoCtrl from "./videos.controller";
const router = Router();

//obtener videos
router.get("/videos", videoCtrl.geVideos);
//ontener in video
router.get("/videos/:id", videoCtrl.getVideo);
//crear video
router.post("/videos", videoCtrl.createVideo);
//eliminar video
router.delete("/videos/:id", videoCtrl.deleteVideo);
//actualizar video
router.put("/videos/:id", videoCtrl.updateVideo);
export default router;
