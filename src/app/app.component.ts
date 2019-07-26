import { Component } from '@angular/core';
import { Goon } from './classes/goon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  goons: Array<Goon> = [];
  yourBoys: Array<Goon> = [];
  allGuys: Array<Goon> = [];

  addGoon() {
       this.goons.push(new Goon());
  }
  addBois(){
    this.yourBoys.push(new Goon());
  }
  getExportedGoon(exportedGoon : Goon){
    this.goons[exportedGoon.goonIndex] = exportedGoon;
    this.allGuys =  this.goons.concat(this.yourBoys);
    this.sortBoysREFS();
  }

  getExportedBoi(getExportedBoi : Goon){
    this.yourBoys[getExportedBoi.goonIndex] = getExportedBoi;
    this.allGuys =  this.goons.concat(this.yourBoys);
    this.sortBoysREFS();
  }

  sortBoysREFS (){
    this.allGuys.sort((a, b) => a.totalREFval - b.totalREFval).reverse();
    console.log('Sorted Array is : ',this.allGuys);
  }

  removeGoonFromList(goonToErase : Goon,isGoon : Boolean){
    if(isGoon){
      this.goons = this.goons.filter(function( goon ) {
      return goon.name !== goonToErase.name;
      });
    } else {
      this.yourBoys = this.yourBoys.filter(function( goon ) {
      return goon.name !== goonToErase.name;
      });
    }
    this.allGuys = this.allGuys.filter(function( goon ) {
    return goon.name !== goonToErase.name;
    });
  }

}
