import React from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { Controller } from 'react-hook-form'

export type Props = {
  label: string
  name: string
  defaultValue: string
  type?: 'text' | 'number'
  min?: number
  max?: number
}

export default function InputTextField({
  label,
  name,
  defaultValue,
  type = 'text',
}: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <TextField
          fullWidth
          type={type}
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (type === 'number') {
              const value = Number(e.target.value)
              onChange(Number(e.target.value))
            } else {
              onChange(e.target.value)
            }
          }}
        />
      )}
    />
  )
}
