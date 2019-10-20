import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: any;
  edit_item_form: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        //console.log(data);
        this.item = this.itemService.getItemById(data.id)[0];
        //console.log(this.item);
        if(!this.item){
          this.goBack();
        }else{
          this.edit_item_form = this.formBuilder.group({
            titulo: new FormControl(this.item.titulo, Validators.required),
            descricao: new FormControl(this.item.descricao, Validators.required)
          })
        }
      }
    )
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  updateItem(value){
    let newValues = {
      id: this.item.id,
      titulo: value.titulo,
      descricao: value.descricao
    };
    this.itemService.updateItem(newValues);
    this.goBack();
  }

}
