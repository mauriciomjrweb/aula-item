import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  new_item_form: FormGroup;

  constructor(private router: Router,
              public formBuilder: FormBuilder,
              private itemService: ItemService) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  createItem(value){
    this.itemService
    .createItem(value.titulo, value.descricao);
    this.new_item_form.reset();
    this.goBack();
  }

}
