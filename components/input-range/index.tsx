import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { Slider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

export type Props = {
  label: string
  name: string
  defaultValue?: number[]
  step?: number
  formatValue?: (value: number) => string
}

export default function InputRange({
  name,
  label,
  defaultValue = [0, 10],
  formatValue = (value: number) => value.toString(),
  step = 1,
}: Props) {
  const { control } = useFormContext()
  return (
    <Box sx={{ width: 300 }}>
      <Typography id="range-slider" gutterBottom>
        {label}
      </Typography>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <Stack spacing={1} direction="column">
            <Slider
              value={value}
              onChange={onChange}
              valueLabelDisplay="auto"
              step={step}
              getAriaValueText={formatValue}
              valueLabelFormat={formatValue}
              min={defaultValue[0]}
              max={defaultValue[1]}
              // getAriaValueText={valuetext}
            />
            <Typography id="range-slider" gutterBottom variant="caption">
              {`${formatValue(value[0])} - ${formatValue(value[1])}`}
            </Typography>
          </Stack>
        )}
      />
    </Box>
  )
}
