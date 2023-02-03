import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ms_product } from '..';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form?: FormGroup;
  constructor(
    private fb: FormBuilder,
    private acRoute: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {
    this.acRoute.params.subscribe({
      next: (param) => {
        if (param['id'] && Number(param['id']) !== 0) {
          this.getItemById(Number(param['id']));
        } else {
          this.createForm();
        }
      }
    });
  }

  createForm(frm?: ms_product) {
    this.form = this.fb.group({
      id: new FormControl(frm?.id ?? 0),
      name: new FormControl(frm?.name ?? ''),
      price: new FormControl(frm?.price ?? 0),
      image: new FormControl()
    });
  }

  getItemById(id: number) {
    console.log(id);
    this.service.getById(id).subscribe({
      next: (response) => {
        this.createForm(response);
      }
    });
  }

  ngOnInit() {
  }

  save() {
    if (this.form?.value.id === 0) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.service.post(this.form?.value).subscribe({
      next: (response) => {
        alert('Success !');
        this.router.navigateByUrl('/u/main/master/product');
      }
    });
  }

  update() {
    this.service.put(this.form?.value).subscribe({
      next: (response) => {
        alert('Success !');
        this.router.navigateByUrl('/u/main/master/product');
      }
    });
  }

}
