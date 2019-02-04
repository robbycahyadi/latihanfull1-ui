import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MasterDeviceService} from '../master-device.service';
import {MasterDevice} from '../../../../entity/master-device.model';
import {ColorService} from '../../color/color.service';
import {any} from 'codelyzer/util/function';
import {Color} from '../../../../entity/color.model';
import {BrandDeviceService} from '../../brand-device/brand-device.service';
import {CategoryDeviceService} from '../../category-device/category-device.service';
import {ConditionDeviceService} from '../../condition-device/condition-device.service';
import {LoanStatusDeviceService} from '../../loan-status-device/loan-status-device.service';
import {UnitCapacityDeviceService} from '../../unit-capacity-device/unit-capacity-device.service';
import {BrandDevice} from '../../../../entity/brand-device.model';
import {CategoryDevice} from '../../../../entity/category-device.model';
import {ConditionDevice} from '../../../../entity/condition-device.model';
import {LoanStatusDevice} from '../../../../entity/loan-status-device.model';
import {UnitCapacityDevice} from '../../../../entity/unit-capacity-device.model';

@Component({
  selector: 'app-new-master-device',
  templateUrl: './new-master-device.component.html',
  styleUrls: ['./new-master-device.component.scss']
})
export class NewMasterDeviceComponent implements OnInit {

  colors: Color[];
  brands: BrandDevice[];
  cats: CategoryDevice[];
  conds: ConditionDevice[];
  loans: LoanStatusDevice[];
  units: UnitCapacityDevice[];

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: MasterDeviceService,
    private _colorService: ColorService,
    private _brandService: BrandDeviceService,
    private _catService: CategoryDeviceService,
    private _condService: ConditionDeviceService,
    private _loanService: LoanStatusDeviceService,
    private _unitService: UnitCapacityDeviceService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'name': this._formBuilder.control(''),
      'code': this._formBuilder.control(''),
      'description': this._formBuilder.control('')
    });

    this._colorService.list().subscribe((response: any) => {
      if (response.status === 204) {
        this._router.navigate(['master', 'device']);
        console.log('dsd');
      } else {
        this.colors = response;
        console.log(this.colors);
      }
    });

    this._brandService.list().subscribe((response: any) => {
      if (response.status === 204) {
        this._router.navigate(['master', 'device']);
      } else {
        this.brands = response;
      }
    });

    this._catService.list().subscribe((response: any) => {
      if (response.status === 204) {
        this._router.navigate(['master', 'device']);
      } else {
        this.cats = response;
      }
    });

    this._condService.list().subscribe((response: any) => {
      if (response.status === 204) {
        this._router.navigate(['master', 'device']);
      } else {
        this.conds = response;
      }
    });

    this._loanService.list().subscribe((response: any) => {
      if (response.status === 204) {
        this._router.navigate(['master', 'device']);
      } else {
        this.loans = response;
      }
    });

    this._unitService.list().subscribe((response: any) => {
      if (response.status === 204) {
        this._router.navigate(['master', 'device']);
      } else {
        this.units = response;
      }
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

    const value: MasterDevice = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Loan Status of Device Saved', 'Save Success');
      this._router.navigate(['master', 'device']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }
}
