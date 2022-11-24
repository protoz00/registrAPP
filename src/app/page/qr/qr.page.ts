import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})

export class QRPage implements OnInit {
  
  clase : any;
  constructor(private data:DataService) { 
    this.data.$getObjectSource.subscribe(data => this.clase = data)
    console.log(this.clase)
    this.clase = JSON.stringify(this.clase)
    this.myAngularxQrCode = this.clase;
  }
  public myAngularxQrCode: String = null;
  ngOnInit() {
    
    
  }
  
}
