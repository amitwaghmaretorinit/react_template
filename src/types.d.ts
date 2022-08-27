declare interface Filters {
    sortKey?: string,
    sortDirection?: 'asc' | 'desc',
    page: number,
    searchKey?: string,
    nextPageUrl?: string,
    [key: string]: any,
    search?: string,
    sortBy?: string,
}
declare interface OptionType {
    type: Key
    id: string,
    name: string
}

declare interface ObjectStringKey {
    [key: string]: any
}