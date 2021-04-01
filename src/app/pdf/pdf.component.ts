import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import { DataService } from '../data.service';
declare let jsPDF;
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  Data: { No: number; Catgory: string; Item: string; ItemCode: string; HsnCode: string; Description: string; Qty: number; Unit: string; PriceUnit: number; DiscountPer: string; DiscountAmount: string; TaxPer: string; TaxAmount: any; Amount: number; }[];
  total: any;

  constructor(private dataService: DataService) {
    this.Data = this.dataService.Data;
    this.total=this.dataService.getTotalCost();
  }

  ngOnInit(): void {
  }

  name = 'Angular';

  @ViewChild('content') content: ElementRef;

  makePdf() {
    let doc = new jsPDF();
    doc.addHTML(this.content.nativeElement, function() {
       doc.save("obrz.pdf");
    });
  }
}
