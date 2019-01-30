import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoanStatusDeviceService} from '../loan-status-device.service';
import {LoanStatusDevice} from '../../../../entity/loan-status-device.model';

@Component({
  selector: 'app-new-loan-status-device',
  templateUrl: './new-loan-status-device.component.html',
  styleUrls: ['./new-loan-status-device.component.scss']
})
export class NewLoanStatusDeviceComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: LoanStatusDeviceService,
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

    const value: LoanStatusDevice = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Loan Status of Device Saved', 'Save Success');
      this._router.navigate(['master', 'loan-status-device']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }
}
