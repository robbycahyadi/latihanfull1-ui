import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BrandDeviceService} from '../brand-device.service';
import {BrandDevice} from '../../../../entity/brand-device.model';

@Component({
  selector: 'app-new-brand-device',
  templateUrl: './new-brand-device.component.html',
  styleUrls: ['./new-brand-device.component.scss']
})
export class NewBrandDeviceComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: BrandDeviceService,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'name': this._formBuilder.control(''),
      'code': this._formBuilder.control(''),
      'description': this._formBuilder.control('')
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Save Change Type',
        {
          timeOut: 5000
        });
      return;
    }

    const value: BrandDevice = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Brand of Device Saved', 'Save Success');
      this._router.navigate(['master', 'brand-device']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }
}
