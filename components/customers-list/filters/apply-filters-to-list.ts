import { Filter, FilterType } from './types.d'
import { Customer } from '@types'
import { isInRange } from '../../../utils'

export function applyFiltersToList(
  filters: Filter[],
  list: Customer[]
): Customer[] {
  let newList = [...list]

  filters.forEach(({ type, value }) => {
    switch (type) {
      case FilterType.BUDGET:
        newList = newList.filter((customer) => {
          const budget = customer.search.budget
          return isInRange(budget, value[0], value[1])
        })
        break

      case FilterType.SURFACE:
        newList = newList.filter((customer) => {
          const surface = customer.search.surface
          return isInRange(surface, value[0], value[1])
        })
        break

      case FilterType.ROOMS:
        newList = newList.filter((customer) => {
          const rooms = customer.search.rooms
          return rooms === value
        })
        break

      case FilterType.SEARCH:
        newList = newList.filter((customer) => {
          const search = value
          const { phone, lastName, firstName, email } = customer
          const phoneMatch = phone.includes(search)
          const nameMatch =
            lastName.includes(search) || firstName.includes(search)
          const emailMatch = email.includes(search)
          return phoneMatch || nameMatch || emailMatch
        })
        break

      /* implement other filters here */

      default:
        break
    }
  })

  return newList
}
