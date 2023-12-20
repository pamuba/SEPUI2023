import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {
  @Input() video!:Video;
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();
  editTitle:boolean = false;

  onTitleClick(){
    this.editTitle = true;
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }

}
