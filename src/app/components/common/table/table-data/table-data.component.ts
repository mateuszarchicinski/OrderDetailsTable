import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TableDataFilters } from '../table-filter/table-filter.component';

const TABLE_DATA_COMPONENT_SELECTOR = 'app-table-data';

export interface TableDataConfig {
    activeEntryNumber: number;
    entryNumbers: number[];
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

    private _data: T[];

    @Input() set data(v: T[]) {
        this._data = v;
    }

    get data(): T[] {
        const data = this._data || [];
        const isFilter = Object.values(this.filters).some(v => !!v);
        return isFilter ?
            data.filter(e =>
                Object.keys(this.filters).every(key => {
                    const value = this.filters[key];
                    return !!value ? (new RegExp(value, 'i')).test(e[key]) : true;
                }))
            : data;
    }

    get entries(): T[] {
        const data = this.data;
        const endIndex = (this.activePageNumber * this.activeEntryNumber);
        const startIndex = endIndex - this.activeEntryNumber;
        return data.slice(startIndex, endIndex);
    }

    get displayedNumberOfEntries(): number {
        return this.activeEntryNumber > this.entries.length ? this.entries.length : this.activeEntryNumber;
    }

    get numberOfEntries(): number {
        return this.data.length;
    }

    private _activeEntryNumber: number;

    get activeEntryNumber(): number {
        return this._activeEntryNumber;
    }

    private _entryNumbers: number[];

    get entryNumbers(): number[] {
        return this._entryNumbers;
    }

    get firstPageNumber(): number {
        return 1;
    }

    get lastPageNumber(): number {
        return this.pageNumbers[this.pageNumbers.length - 1];
    }

    private _activePageNumber: number;

    get activePageNumber(): number {
        return this._activePageNumber > this.lastPageNumber ? this.lastPageNumber : this._activePageNumber;
    }

    get pageNumbers(): number[] {
        const length = Math.ceil(this.data.length / this.activeEntryNumber);
        return Array
            .apply(null, {length})
            .map((_, index) => index + 1);
    }

    private _filters: TableDataFilters;

    get filters(): TableDataFilters {
        return this._filters || {};
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
        this._entryNumbers = this.config.entryNumbers;
        this._activePageNumber = this.config.activePageNumber;
        this._filters = this.config.filters;
    }

}
