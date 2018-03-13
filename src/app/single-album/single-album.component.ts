import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {
  @Input('albumInfo') albumInfo;
  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  ngOnInit() {
    //console.log('album info is..', this.albumInfo);
  }

  albumHover(event){
    this.renderer.addClass(this.el.nativeElement.getElementsByClassName('middle')[0], 'showAlbumName');
  }
  albumLeave(event){
    this.renderer.removeClass(this.el.nativeElement.getElementsByClassName('middle')[0], 'showAlbumName');
  }
  openAlbum(albumInfo){
    this.router.navigate(['/sav']);
  }

}
