import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-grocerysplit',
  templateUrl: './grocerysplit.component.html',
  styleUrls: ['./grocerysplit.component.scss']
})
export class GrocerySplitComponent implements OnInit {

  items: { price: number, name: string, paidfor: string[] }[] = [];

  price: string = '';
  name: string = '';
  paidfor = [];

  lenatotal: number = 0;
  anderstotal: number = 0;
  nicktotal: number = 0; 
  gwentotal: number = 0;

  constructor() { }

  ngOnInit() {
    
  }

  add() {
    this.items.push({ price: parseFloat(this.price), name: this.name, paidfor: this.paidfor});
    this.price = '';
    this.name = '';
    this.paidfor = [];
    this.total();
    console.log(this.items);
  }

  total() {
    this.items.forEach((item) => {
      let splitcost = item.price / item.paidfor.length;
      if (item.paidfor.includes("lena")) {
        this.lenatotal += splitcost;
      }
      if (item.paidfor.includes("anders")) {
        this.anderstotal += splitcost;
      }
      if (item.paidfor.includes("nick")) {
        this.nicktotal += splitcost;
      }
      if (item.paidfor.includes("gwen")) {
        this.gwentotal += splitcost;
      }

    })
  }
}
