import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headers: Headers = new Headers();
  constructor(private service: CommonService) { }

  ngOnInit() {
  }
    
  /**
   * Handles the change event of the input tag,
   * Extracts the image file uploaded and 
   * makes an Http request with the image file.
   */ 
  handleInputChange (event) {
    
    let image = event.target.files[0];

    let pattern = /image-*/;
    let reader = new FileReader();

    if (!image.type.match(pattern)) {
        console.error('File is not an image');
        alert('please select proper image(jpg/jpeg');
        return;
    }
    
    let endPoint = '/upload/profileImage'; //use your own API endpoint
    // let headers = new Headers();
    // headers.set('Content-Type', 'application/octet-stream');
    // headers.set('Upload-Content-Type', image.type)
    console.log(image);
    this.service.makeRequest(image).subscribe(
          response  => {this.handleSuccess(response); },
          error =>  {this.handleError(error); }
        );

  }
  
  private handleSuccess(response) {
    console.log('Successfully uploaded image');
    //provide your own implementation of handling the response from API
  }
  
  private handleError(errror) {
    console.error('Error uploading image')
    //provide your own implementation of displaying the error message
  }
}
