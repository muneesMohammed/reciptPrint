import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Renderer2,ElementRef,ViewChild,Input,ChangeDetectionStrategy  } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  clickMessage = '';
  Data: any[];

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    }

  selected = 'option1';


  gstAmount:number
  marked = false;
  theCheckbox = false;
  theCheckbox1 = false;
  theCheckbox2 = false;
  theCheckbox3 = false;
  theCheckbox4 = false;
 // num=this.Data.TaxPer;


i=0;
  constructor(private renderer: Renderer2,private dataService: DataService) {

    this.Data = this.dataService.Data;
    /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click',(e:Event)=>{
         /**
          * Only run when toggleButton is not clicked
          * If we don't check this, all clicks (even on the toggle button) gets into this
          * section which in the result we might never see the menu open!
          * And the menu itself is checked here, and it's where we check just outside of
          * the menu and button the condition abbove must close the menu
          */
        if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
            this.isMenuOpen=false;
        }
    });
/*add() {
 if (this.num=='option1') {
  this.Data.TaxAmount=this.Data.PriceUnit*0.5
} else {
  this.Data.TaxAmount=this.Data.PriceUnit*0
}}*/

  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {

  }

  adddTable() {
    this.dataService.addTable();


  }
  deleteRow(x){
   // var delBtn = confirm(" Do you want to delete ?");
    //if ( delBtn == true ) {
      this.Data.splice(x, 1 );
    //}
  }


 /** Gets the total cost of all transactions. */
 @Input() getTotalCost() {
  return this.Data.map(t => t.Amount).reduce((acc, value) => acc + Number(value), 0);
}
getTotalQty() {
  return this.Data.map(t => t.Qty).reduce((bcc, value) => bcc +  Number(value), 0);
}

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
tax($event){
  for ( this.i=0; this.i < this.Data.length; this.i++)
  this.Data[this.i].TaxAmount=Number(this.Data[this.i].TaxPer)*this.Data[this.i].PriceUnit*Number(this.Data[this.i].Qty)
}
amountTotal($event){
  for ( this.i=0; this.i < this.Data.length; this.i++)
  this.Data[this.i].Amount=this.Data[this.i].TaxAmount+this.Data[this.i].PriceUnit*this.Data[this.i].Qty
}
  Units: string[] = [
    'BAGS','BOTTLES(BTL)','BOX','BUNDLES','CANS','CARTONS','DOZENS','GRAMMES','KILOGRAMES',
    'LITRE','MILLITRE','METERES','NUMBERS','PACKS','PAIRS','PIECES','QUINTALS','ROLLS',
    'SQUARE FEET','SQUARE METERS','TABLETS'];

}








