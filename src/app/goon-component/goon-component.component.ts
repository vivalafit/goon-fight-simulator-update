import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Goon } from '../classes/goon';

@Component({
  selector: 'app-goon-component',
  templateUrl: './goon-component.component.html',
  styleUrls: ['./goon-component.component.css']
})

export class GoonComponentComponent implements OnInit {
  @Input() goon: Goon;
  @Input() goonIndex: number;
  name = new FormControl('');
  REFval = new FormControl('');
  d10Roll = new FormControl('');
  AdditionalREF = new FormControl('');
  totalREFval : number = 0;
  @Output() exportGoon = new EventEmitter<Goon>();
  @Output() killGoon = new EventEmitter<Goon>();

  constructor() { }

  ngOnInit() {
    this.goon.goonIndex = this.goonIndex;
  }

  addbits(s){
    var total= 0, s= s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(s.length){
        total+= parseFloat(s.shift());
    }
     return total;
  }

  countTotalInitiative(){
    this.totalREFval = this.addbits(this.REFval.value) +
                       this.addbits(this.d10Roll.value) +
                       this.addbits(this.AdditionalREF.value)
    this.goon.name = this.name.value;
    this.goon.totalREFval = this.totalREFval;
    this.exportGoon.emit(this.goon);
  }

  removeGoon(){
    this.killGoon.emit(this.goon);
  }


}
