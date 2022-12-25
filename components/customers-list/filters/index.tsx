import React from 'react'
import { Stack } from '@mui/system'
import { Button, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { InputTextField, InputRange } from '@components'
import { formatPrice, formatSurface } from '@utils/index'
import { Filter, FilterType } from './types.d'
import { minMax } from '@types'

export type Props = {
  setFilters: (filters: Filter[]) => void
}

type FormValues = {
  [FilterType.SEARCH]: string
  [FilterType.ROOMS]: number
  [FilterType.BUDGET]: minMax
  [FilterType.SURFACE]: minMax
}

export default function Filters({ setFilters }: Props) {
  const methods = useForm<FormValues>()
  const { handleSubmit, reset } = methods

  function resetFilters() {
    reset()
    setFilters([])
  }

  function transformFormValuesToFilters(form: FormValues): Filter[] {
    const filters: Filter[] = []
    Object.keys(form).forEach((key) => {
      const value = form[key as FilterType]
      const type = key as FilterType
      if (!!value) {
        filters.push({
          type,
          value,
        } as Filter)
      }
    })
    return filters
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          setFilters(transformFormValuesToFilters(data))
        })}
      >
        <Grid container spacing={1} alignItems="stretch">
          <Grid item md={6}>
            <InputTextField
              label="Search"
              name={FilterType.SEARCH}
              defaultValue=""
            />
          </Grid>
          <Grid item md={2}>
            <InputTextField
              label="Nb of rooms"
              name={FilterType.ROOMS}
              type="number"
              defaultValue=""
            />
          </Grid>
          <Grid item alignItems="stretch" justifyContent="center">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Button variant="contained" type="submit">
                Search
              </Button>
              <Button variant="outlined" color="error" onClick={resetFilters}>
                Clear filters
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={4}>
              <InputRange
                label="Budget"
                name={FilterType.BUDGET}
                formatValue={formatPrice}
                defaultValue={[100000, 1000000]}
                step={10000}
              />
              <InputRange
                label="Surface"
                name={FilterType.SURFACE}
                formatValue={formatSurface}
                defaultValue={[20, 100]}
                step={1}
              />
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  )
}
