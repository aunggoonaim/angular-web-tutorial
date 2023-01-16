import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  loading = false;
  frmGroup: FormGroup;

  constructor(private registerService: RegisterService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.frmGroup = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(60)])
    });
  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
      // this.frmGroup.markAllAsTouched();
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 1500);
  }

  findKey(key: string) {
    const obj = this.frmGroup.controls[key].errors as any;
    const keys = Object.keys(obj);
    return keys.length > 0 ? keys[0] : '';
  }

  submit() {
    if (this.frmGroup.invalid) {
      alert('Form is invalid');
      return;
    }
    this.loading = true;
    this.registerService.postUserRegister(this.frmGroup.value).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.token) {
          localStorage.setItem('access_token', response.token);
          alert('ลงทะเบียนสำเร็จ !');
        }
      },
      error: (err) => {
        this.loading = false;
        alert('ไม่สามารถเชื่อมต่อฐานข้อมูลได้ !');
      }
    })
  }

}
