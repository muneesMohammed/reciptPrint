import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    Data = [
      {  No:1, Catgory: '', Item:'egg',ItemCode: 'itemc',HsnCode: 'hsn',Description: 'desc', Qty:3,Unit:'unit',PriceUnit:10,DiscountPer:'discount',DiscountAmount:'discount',TaxPer:'0',TaxAmount:null,Amount:24, },
      {  No:1, Catgory: '', Item:'egg',ItemCode: 'itemc',HsnCode: 'hsn',Description: 'desc', Qty:3,Unit:'unit',PriceUnit:20,DiscountPer:'discount',DiscountAmount:'discount',TaxPer:'0',TaxAmount:null,Amount:24, },
      {  No:1, Catgory: '', Item:'egg',ItemCode: 'itemc',HsnCode: 'hsn',Description: 'desc', Qty:3,Unit:'unit',PriceUnit:80,DiscountPer:'discount',DiscountAmount:'discount',TaxPer:'0',TaxAmount:null,Amount:24, },
    ]


  addTable() {
    const obj = {
      No:null,
      Catgory: '',
      Item:'',
      ItemCode: '',
      HsnCode: '',
      Description: '',
       Qty:null,
       Unit:'',
       PriceUnit:null,
       DiscountPer:'',
       DiscountAmount:'',
       TaxPer:'0',
       TaxAmount:null,
       Amount:null,}
    this.Data.push(obj)
  }
   getTotalCost() {
    return this.Data.map(t => t.Amount).reduce((acc, value) => acc + Number(value), 0);
  }
  constructor() {

   }
}
