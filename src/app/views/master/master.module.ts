import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MasterRouting} from './master.routing';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryDeviceService} from './category-device/category-device.service';
import {AuthenticationInterceptor} from '../../_auth/auth.interceptor';
import {DataTablesModule} from 'angular-datatables';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {ListColorComponent} from './color/list-color/list-color.component';
import {NewColorComponent} from './color/new-color/new-color.component';
import {UpdateColorComponent} from './color/update-color/update-color.component';
import {ColorService} from './color/color.service';
import {ListBrandDeviceComponent} from './brand-device/list-brand-device/list-brand-device.component';
import {NewBrandDeviceComponent} from './brand-device/new-brand-device/new-brand-device.component';
import {UpdateBrandDeviceComponent} from './brand-device/update-brand-device/update-brand-device.component';
import {BrandDeviceService} from './brand-device/brand-device.service';
import {ListConditionDeviceComponent} from './condition-device/list-condition-device/list-condition-device.component';
import {NewConditionDeviceComponent} from './condition-device/new-condition-device/new-condition-device.component';
import {UpdateConditionDeviceComponent} from './condition-device/update-condition-device/update-condition-device.component';
import {ConditionDeviceService} from './condition-device/condition-device.service';
import {ListUnitCapacityDeviceComponent} from './unit-capacity-device/list-unit-capacity-device/list-unit-capacity-device.component';
import {NewUnitCapacityDeviceComponent} from './unit-capacity-device/new-unit-capacity-device/new-unit-capacity-device.component';
import {UpdateUnitCapacityDeviceComponent} from './unit-capacity-device/update-unit-capacity-device/update-unit-capacity-device.component';
import {UnitCapacityDeviceService} from './unit-capacity-device/unit-capacity-device.service';
import {ListLoanStatusDeviceComponent} from './loan-status-device/list-loan-status-device/list-loan-status-device.component';
import {NewLoanStatusDeviceComponent} from './loan-status-device/new-loan-status-device/new-loan-status-device.component';
import {UpdateLoanStatusDeviceComponent} from './loan-status-device/update-loan-status-device/update-loan-status-device.component';
import {LoanStatusDeviceService} from './loan-status-device/loan-status-device.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    MasterRouting,
    AlertModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ListCategoryDeviceComponent,
    NewCategoryDeviceComponent,
    UpdateCategoryDeviceComponent,
    ListColorComponent,
    NewColorComponent,
    UpdateColorComponent,
    ListBrandDeviceComponent,
    NewBrandDeviceComponent,
    UpdateBrandDeviceComponent,
    ListConditionDeviceComponent,
    NewConditionDeviceComponent,
    UpdateConditionDeviceComponent,
    ListUnitCapacityDeviceComponent,
    NewUnitCapacityDeviceComponent,
    UpdateUnitCapacityDeviceComponent,
    ListLoanStatusDeviceComponent,
    NewLoanStatusDeviceComponent,
    UpdateLoanStatusDeviceComponent
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthenticationInterceptor
    },
    CategoryDeviceService,
    ColorService,
    BrandDeviceService,
    ConditionDeviceService,
    UnitCapacityDeviceService,
    LoanStatusDeviceService
  ]
})
export class MasterModule {
}
