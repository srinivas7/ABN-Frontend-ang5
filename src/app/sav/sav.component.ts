import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/service';

@Component({
  selector: 'app-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.css']
})
export class SavComponent implements OnInit {
  savInfo;
  showImageLayer = false;
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getSAVInfo()
      .subscribe((data)=> {
        console.log("sav data is...",data);
        this.savInfo = data;
      })
  }

}
