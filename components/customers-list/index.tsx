import React, { useState } from 'react'
import { Customer } from '@types'
import { Box, List, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Item from './item'
import Filters from './filters'
import { Filter } from './filters/types.d'
import { applyFiltersToList } from './filters/apply-filters-to-list'

export type Props = {
  customers: Customer[]
}

export default function CustomersList({ customers }: Props) {
  const [filters, setFilters] = useState<Filter[]>([])
  const displayedCustomers = applyFiltersToList(filters, customers)

  return (
    <Stack direction="column">
      <Box maxWidth={800} m={'auto'}>
        <Filters setFilters={setFilters} />
      </Box>
      {displayedCustomers.length > 0 ? (
        <List sx={{ width: 'auto' }}>
          {displayedCustomers.map((customer) => (
            <Box key={customer.id}>
              <Item customer={customer} />
              <Divider variant="fullWidth" component="li" />
            </Box>
          ))}
        </List>
      ) : (
        <EmptyList />
      )}
    </Stack>
  )
}

function EmptyList() {
  return (
    <Box sx={{ width: 'auto', p: 2 }}>
      <Typography variant="h6" align="center">
        No customers found
      </Typography>
    </Box>
  )
}
