import { NgModule } from '@angular/core';

import { TableComponent } from './table/table.component';
import { TableHeaderComponent } from './table/table-header/table-header.component';
import { TableFooterComponent } from './table/table-footer/table-footer.component';
import { TableDataComponent } from './table/table-data/table-data.component';
import { TableFilterComponent } from './table/table-filter/table-filter.component';
import { TablePaginationComponent } from './table/table-pagination/table-pagination.component';
import { TablePaginationEntriesComponent } from './table/table-pagination/table-pagination-entries/table-pagination-entries.component';

const APP_COMMON_COMPONENTS = [
    TableComponent,
    TableHeaderComponent,
    TableFooterComponent,
    TableDataComponent,
    TableFilterComponent,
    TablePaginationComponent,
    TablePaginationEntriesComponent,
];

@NgModule({
    declarations: [
        ...APP_COMMON_COMPONENTS,
    ],
    exports: [
        ...APP_COMMON_COMPONENTS,
    ]
})
export class AppCommonModule {
}
