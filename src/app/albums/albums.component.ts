import { Component, OnInit,  Renderer2, ElementRef, } from '@angular/core';
import { CommonService } from '../services/service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums = {};
  constructor(private renderer: Renderer2, private el: ElementRef,private service: CommonService) { }

  ngOnInit() {
    this.service.getAlbums()
      .subscribe((data)=> {
        console.log("alubms data is...",data);
        this.albums = data;
      })
  }

  albumHover(event){
    console.log(event);
    //this.renderer.addClass(this.el.nativeElement, 'wild');
  }
  albumLeave(event){
    console.log(event);
  }

}
