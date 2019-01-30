import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoanStatusDeviceService} from '../loan-status-device.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoanStatusDevice} from '../../../../entity/loan-status-device.model';

@Component({
  selector: 'app-update-loan-status-device',
  templateUrl: './update-loan-status-device.component.html',
  styleUrls: ['./update-loan-status-device.component.scss']
})
export class UpdateLoanStatusDeviceComponent implements OnInit, OnDestroy {

  private subcribeTopic: Subscription;
  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: LoanStatusDeviceService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: this._formBuilder.control('', Validators.required),
      name: this._formBuilder.control('', Validators.required),
      code: this._formBuilder.control('', Validators.required),
      description: this._formBuilder.control('')
    });

    this.subcribeTopic = this._activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this._service.getChangeTypes(id).subscribe((response: any) => {
        if (response.status === 204) {
          this._router.navigate(['master', 'loan-status-device']);
        } else {
          const value: LoanStatusDevice = response.body;
          console.log(value);
          this.form.setValue({
              'id': value.id,
              'name': value.name,
              'code': value.code,
              'description': value.description
            }
          );
        }
      });
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Update Change Type',
        {
          timeOut: 5000
        });
      return;
    }
    const value: LoanStatusDevice = this.form.value;
    this._service.update(value).subscribe(resp => {
      this._toastr.info('Change a loan status of device', 'Update Success');
      this._router.navigate(['master', 'loan-status-device']);
    }, error => {
      this._toastr.warning('Can\'t Update a loan status of device', 'Oppss...');
      console.error('Can\'t be saved');
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnDestroy(): void {
    this.subcribeTopic.unsubscribe();
  }

}
