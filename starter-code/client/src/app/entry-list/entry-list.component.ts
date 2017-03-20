import { Component, OnInit } from '@angular/core';
import { FindService } from '../find.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  stuff: Object;
  constructor(private myFind: FindService) { }

  ngOnInit() {
    this.myFind.getList()
      .then((items) => {
        this.stuff = items;
        console.log(this.stuff);
      })
  }
}
