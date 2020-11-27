import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Video, Params } from "./video.interface";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, useParams } from "react-router-dom";
import * as VideoService from "./VideoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Videoform = () => {
   const history = useHistory();
   const params = useParams<Params>();

   const [video, setVideo] = useState<Video>({
      title: "",
      description: "",
      url: "",
   });

   const handleChanges = (e: InputChange) =>
      setVideo({ ...video, [e.target.name]: e.target.value });

   const getVideo = async (id: string) => {
      const res = await VideoService.getVideo(id);
      console.log(res);

      const { title, description, url } = res.data;
      setVideo({ title, description, url });
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!params.id) {
         await VideoService.createVideo(video);
         toast.success("Nuevo video agregado");
         history.push("/");
      } else {
         await VideoService.updateVideo(params.id, video);
         toast.success("Video actualizado");
         history.push("/");
      }
   };

   useEffect(() => {
      if (params.id) getVideo(params.id);
   }, []);

   return (
      <div className="row">
         <div className="col-md-5 offset-md-3">
            <div className="card">
               <div className="card-body">
                  <h3>Nuevo Video</h3>
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <input
                           type="text"
                           name="title"
                           className="form-control"
                           placeholder="Escribe el titulo"
                           onChange={handleChanges}
                           value={video.title}
                           autoFocus
                        />
                     </div>
                     <div className="form-group">
                        <input
                           type="text"
                           name="url"
                           className="form-control"
                           placeholder="https://www.youtube.com/watch?example"
                           value={video.url}
                           onChange={handleChanges}
                        />
                     </div>

                     <div className="form-group">
                        <textarea
                           name="description"
                           className="form-control"
                           placeholder="Escribe una descripción"
                           onChange={handleChanges}
                           value={video.description}
                        />
                     </div>
                     {params.id ? (
                        <button className="btn btn-primary">
                           Actualizar Video
                        </button>
                     ) : (
                        <button className="btn btn-primary">
                           Agregar Video
                        </button>
                     )}
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Videoform;
