import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '../_services';
import {Subject, Observable} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';



@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {
    
    public webcamImage: WebcamImage = null;

    handleImage(webcamImage: WebcamImage) {
        this.webcamImage = webcamImage;
        }

  iotloginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService
  ) 

  {}
  ngOnInit() {
    this.iotloginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

   // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.iotloginForm.controls; }


onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.iotloginForm.invalid) {
      return;
  }

  this.loading = true;
  this.accountService.iotlogin(this.f.sername.value, this.f.password.value,)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}