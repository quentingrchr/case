import React from 'react'
import { Customer } from '@types'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import { formatPrice, formatSurface } from '@utils/index'
import { Stack } from '@mui/system'

export type Props = {
  customer: Customer
}

export default function Item({ customer }: Props) {
  const { firstName, lastName, email, phone, search } = customer
  const primaryText = `${firstName} ${lastName}`
  const secondaryText = `${email} / ${phone}`
  return (
    <ListItem>
      <Stack direction="column" spacing={2}>
        <ListItemText primary={primaryText} secondary={secondaryText} />
        <Stack direction="row" spacing={2}>
          <Typography color="textPrimary" variant="body2">
            {formatPrice(search.budget)}
          </Typography>
          <Typography variant="body2">
            {formatSurface(search.surface)}
          </Typography>
          <Typography variant="body2">{search.rooms} rooms</Typography>
        </Stack>
      </Stack>
    </ListItem>
  )
}
