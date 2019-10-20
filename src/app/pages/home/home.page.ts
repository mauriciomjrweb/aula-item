import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;

  constructor(public itemService: ItemService,
              private router: Router ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
