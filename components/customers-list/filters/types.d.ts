export enum FilterType {
  SEARCH = 'SEARCH',
  BUDGET = 'BUDGET',
  ROOMS = 'ROOMS',
  SURFACE = 'SURFACE',
}

export type SearchFilter = {
  type: FilterType.SEARCH
  value: string
}

export type BudgetFilter = {
  type: FilterType.BUDGET
  value: minMax
}

export type RoomsFilter = {
  type: FilterType.ROOMS
  value: number
}

export type SurfaceFilter = {
  type: FilterType.SURFACE
  value: minMax
}

export type Filter = SearchFilter | BudgetFilter | RoomsFilter | SurfaceFilter
