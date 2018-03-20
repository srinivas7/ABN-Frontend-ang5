import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  currentDate = new Date();
  constructor(private service: CommonService) { }

  ngOnInit() {
  }

  handleInputChange (event) {
    let formData = new FormData();
    let image = event.target.files[0];
    formData.append('file',image);
    formData.append('contentType', "image/jpg");
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
    console.log(formData);
    this.service.makeRequest(formData).subscribe(
          response  => {this.handleSuccess(response); },
          error =>  {this.handleError(error); }
        );

  }

  handleFileInput(files: FileList) {
    let data = {  
        "ownerId":14255,
        "thumbnailEncryption" : "images.pexels.com",
        "id" : 24545,
        "albumName": "new albums",
        "images" : [
          {  
           "ownerAccountId":14259,
           "url":"images.pexels.com",
           "dateTaken":this.currentDate,
           "id":1000
        }
       ]
    }


    this.fileToUpload = files.item(0);

    let payload = {
      data : data,
      fileToUpload: this.fileToUpload
    }

    this.service.postFile(payload).subscribe(data => {
        console.log('file uploaded');
      }, error => {
        console.log(error);
      });
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
