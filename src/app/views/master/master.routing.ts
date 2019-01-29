import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListColorComponent} from './color/list-color/list-color.component';
import {NewColorComponent} from './color/new-color/new-color.component';
import {UpdateColorComponent} from './color/update-color/update-color.component';

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
