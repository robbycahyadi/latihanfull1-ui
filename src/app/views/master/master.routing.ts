import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListColorComponent} from './color/list-color/list-color.component';
import {NewColorComponent} from './color/new-color/new-color.component';
import {UpdateColorComponent} from './color/update-color/update-color.component';
import {ListBrandDeviceComponent} from './brand-device/list-brand-device/list-brand-device.component';
import {NewBrandDeviceComponent} from './brand-device/new-brand-device/new-brand-device.component';
import {UpdateBrandDeviceComponent} from './brand-device/update-brand-device/update-brand-device.component';
import {UpdateConditionDeviceComponent} from './condition-device/update-condition-device/update-condition-device.component';
import {NewConditionDeviceComponent} from './condition-device/new-condition-device/new-condition-device.component';
import {ListConditionDeviceComponent} from './condition-device/list-condition-device/list-condition-device.component';
import {ListUnitCapacityDeviceComponent} from './unit-capacity-device/list-unit-capacity-device/list-unit-capacity-device.component';
import {NewUnitCapacityDeviceComponent} from './unit-capacity-device/new-unit-capacity-device/new-unit-capacity-device.component';
import {UpdateUnitCapacityDeviceComponent} from './unit-capacity-device/update-unit-capacity-device/update-unit-capacity-device.component';
import {ListLoanStatusDeviceComponent} from './loan-status-device/list-loan-status-device/list-loan-status-device.component';
import {NewLoanStatusDeviceComponent} from './loan-status-device/new-loan-status-device/new-loan-status-device.component';
import {UpdateLoanStatusDeviceComponent} from './loan-status-device/update-loan-status-device/update-loan-status-device.component';
import {ListMasterDeviceComponent} from './master-device/list-master-device/list-master-device.component';
import {NewMasterDeviceComponent} from './master-device/new-master-device/new-master-device.component';
import {UpdateMasterDeviceComponent} from './master-device/update-master-device/update-master-device.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: 'category-device',
        component: ListCategoryDeviceComponent,
        data: {
          title: 'Category of Devices'
        }
      },
      {
        path: 'category-device/new',
        component: NewCategoryDeviceComponent,
        data: {
          title: 'New category of device'
        }
      },
      {
        path: 'category-device/:id',
        component: UpdateCategoryDeviceComponent,
        data: {
          title: 'Update a category of device'
        }
      },
      {
        path: 'color-device',
        component: ListColorComponent,
        data: {
          title: 'Color of Devices'
        }
      },
      {
        path: 'color-device/new',
        component: NewColorComponent,
        data: {
          title: 'New color of device'
        }
      },
      {
        path: 'color-device/:id',
        component: UpdateColorComponent,
        data: {
          title: 'Update a color of device'
        }
      },
      {
        path: 'brand-device',
        component: ListBrandDeviceComponent,
        data: {
          title: 'Brand of Devices'
        }
      },
      {
        path: 'brand-device/new',
        component: NewBrandDeviceComponent,
        data: {
          title: 'New brand of device'
        }
      },
      {
        path: 'brand-device/:id',
        component: UpdateBrandDeviceComponent,
        data: {
          title: 'Update a brand of device'
        }
      },
      {
        path: 'condition-device',
        component: ListConditionDeviceComponent,
        data: {
          title: 'Condition of Devices'
        }
      },
      {
        path: 'condition-device/new',
        component: NewConditionDeviceComponent,
        data: {
          title: 'New condition of device'
        }
      },
      {
        path: 'condition-device/:id',
        component: UpdateConditionDeviceComponent,
        data: {
          title: 'Update a condition of device'
        }
      },
      {
        path: 'unit-capacity-device',
        component: ListUnitCapacityDeviceComponent,
        data: {
          title: 'Unit Capacity of Devices'
        }
      },
      {
        path: 'unit-capacity-device/new',
        component: NewUnitCapacityDeviceComponent,
        data: {
          title: 'New unit capacity of device'
        }
      },
      {
        path: 'unit-capacity-device/:id',
        component: UpdateUnitCapacityDeviceComponent,
        data: {
          title: 'Update a unit capacity of device'
        }
      },
      {
        path: 'loan-status-device',
        component: ListLoanStatusDeviceComponent,
        data: {
          title: 'Loan Status of Devices'
        }
      },
      {
        path: 'loan-status-device/new',
        component: NewLoanStatusDeviceComponent,
        data: {
          title: 'New Loan Status of Device'
        }
      },
      {
        path: 'loan-status-device/:id',
        component: UpdateLoanStatusDeviceComponent,
        data: {
          title: 'Update a Loan Status of Device'
        }
      },
      {
        path: 'device',
        component: ListMasterDeviceComponent,
        data: {
          title: 'Master of Devices'
        }
      },
      {
        path: 'device/new',
        component: NewMasterDeviceComponent,
        data: {
          title: 'New Master Device'
        }
      },
      {
        path: 'device/:id',
        component: UpdateMasterDeviceComponent,
        data: {
          title: 'Update Master Device'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRouting {
}
