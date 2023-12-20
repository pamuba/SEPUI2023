import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos"
  private _postUrl = "/api/video"
  private _putUrl = "/api/video/"
  private _deleteUrl = "/api/video/"

  constructor(private _http:HttpClient) { }

  getVideos(){
    return this._http.get(this._getUrl)
  }
  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._postUrl, video)
               .pipe()
  }

  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._putUrl+video._id, video)
                .pipe()
  }

  deleteVideo(video:Video):Observable<Video>{
    return this._http.delete<Video>(this._deleteUrl+video._id)
               .pipe()
  }
}
