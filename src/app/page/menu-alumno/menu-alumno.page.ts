import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';



@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
  providers: [Camera]
})
export class MenuAlumnoPage implements OnInit {

    image:string;

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  opencam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
      console.log(err);
     });
  
  
}

}