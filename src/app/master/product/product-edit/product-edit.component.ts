import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('uploadTag') uploadTag!: ElementRef<HTMLInputElement>;

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
      image: new FormControl(frm?.image)
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

  uploadImage($event: any) {
    const fileHtml = document.getElementById('uploadTag') as any;
    const file = fileHtml.files[0] as File;
    this.service.upload(file).subscribe({
      next: (response) => {
        this.form?.controls['image'].patchValue(response.fileName);
        this.uploadTag.nativeElement.value = '';
        this.uploadTag.nativeElement.files = null;
      },
      error: (err) => {
        this.uploadTag.nativeElement.value = '';
        this.uploadTag.nativeElement.files = null;
      }
    })
  }

  viewImage(filename: string) {
    window.open(`http://localhost:8080/Upload/${filename}`, '_blank');
  }
}
