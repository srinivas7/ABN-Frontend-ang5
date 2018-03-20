import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  thumbnailUrl;
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
    this.fileToUpload = files.item(0);

    this.service.postFile(this.fileToUpload).subscribe(data => {
        //console.log('file uploaded..', data["images"][0]);
        //this.newAlbum(data["images"][0]);
      }, error => {
        console.log(error);
      });
  }

  newAlbum(imgUrl){
    let obj = {  
      "ownerId":14255,
        "thumbnailEncryption" : imgUrl,
        "id" : 24545,
        "albumName": "new albums",
       "images" : [
          {  
           "ownerAccountId":14259,
           "url":"images.pexels.com",
           "dateTaken":1466181881000,
           "id":1000
        },
        {  
           "ownerAccountId":14259,
           "url":"images.pexels.com",
           "dateTaken":1466181881000,
           "id":1000
        }
       ]
    }

    this.service.newAlbum(obj)
        .subscribe(
          response  => { console.log("new album created") },
          error =>  {this.handleError(error); }
        )

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
