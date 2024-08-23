import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  activeTab: string = 'Invoices';

  constructor() { }

  
  ngOnInit(): void {
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
