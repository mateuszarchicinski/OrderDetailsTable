import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TableDataFilters } from '../table-filter/table-filter.component';

const TABLE_DATA_COMPONENT_SELECTOR = 'app-table-data';

export interface TableDataConfig {
    activeEntryNumber: number;
    activePageNumber: number;
    filters?: TableDataFilters;
}

@Component({
    selector: TABLE_DATA_COMPONENT_SELECTOR,
    exportAs: TABLE_DATA_COMPONENT_SELECTOR,
    templateUrl: './table-data.component.html',
    styleUrls: ['./table-data.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataComponent<T> implements OnInit {

    @Input() config: TableDataConfig;
    @Input() data: T[];

    get entries(): T[] {
        return this.data.slice(this.data.length - (this.activeEntryNumber || 5));
    }

    get displayedNumberOfEntries(): number {
        return this.entries.length;
    }

    get numberOfEntries(): number {
        return this.entries.length;
    }

    private _activeEntryNumber: number;

    get activeEntryNumber(): number {
        return this._activeEntryNumber;
    }

    get entryNumbers(): number[] {
        return [5, 10, 15, 20, 25];
    }

    get firstPageNumber(): number {
        return 1;
    }

    get lastPageNumber(): number {
        return 5;
    }

    private _activePageNumber: number;

    get activePageNumber(): number {
        return this._activePageNumber;
    }

    get pageNumbers(): number[] {
        return [1, 2, 3, 4, 5];
    }

    private _filters: TableDataFilters;

    get filters(): TableDataFilters {
        return this._filters;
    }

    handleEntryNumberChange(entryNumber: number): void {
        this._activeEntryNumber = entryNumber;
    }

    handlePageNumberChange(pageNumber: number): void {
        this._activePageNumber = pageNumber;
    }

    handleFiltersChange(filtersChange: TableDataFilters): void {
        this._filters = filtersChange;
    }

    ngOnInit(): void {
        this._activeEntryNumber = this.config.activeEntryNumber;
        this._activePageNumber = this.config.activePageNumber;
        this._filters = this.config.filters;
    }

}
