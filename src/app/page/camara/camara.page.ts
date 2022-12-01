import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { DataService } from 'src/app/servicios/data.service';
import { AlumnoI } from 'src/app/Models/model-alumno';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  providers: []
})
export class CamaraPage implements OnInit {

  image: string
  datos: any 
  constructor(private metodo : MetodosService,
              private data : DataService ) {
                
               }

  scannedResult: any;
  content_visibility = '';
  lista_alumno : AlumnoI[];
  ngOnInit() {
   this.checkPermission();
   this.data.$getObjectSource.subscribe(data => this.datos = data )
   this.listar();
  }
  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }
  async listar(){
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
    })
  }

  async startScan() {
    try {
      document.querySelector('body').classList.add('scanner-active');
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.body.style.background = "transparent";
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';

      if(result?.hasContent) {
        this.scannedResult = result.content;
        for(let alumno of this.lista_alumno){
          if(alumno.correo == this.datos.correo ){
            var id = alumno.id;
            var collection = this.scannedResult
            var data_json = JSON.parse(collection)
            data_json.id_alumno = id;
            data_json.estado = 'presente'
            this.metodo.grabarClase(data_json)
            console.log('alumno registrado')
          }
        }
        console.log(this.scannedResult);

      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
   BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
      this.stopScan();
  }


}
