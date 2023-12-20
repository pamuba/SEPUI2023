import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videos!:Video[];
  @Output() SelectVideo  = new EventEmitter();

  onSelect(vid:Video){
    this.SelectVideo.emit(vid);
  }
}
