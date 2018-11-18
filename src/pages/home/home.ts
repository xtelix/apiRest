import { Proveedor1Provider } from './../../providers/proveedor1/proveedor1';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios:any;

  constructor(public navCtrl: NavController, public Proveedor:Proveedor1Provider) {

  }

  ionViewDidLoad(){
   this.Proveedor.obtenerDatos().subscribe(
     (data)=>{this.usuarios = data;},
     (error)=>{console.log(error);}
      )
  }

}
