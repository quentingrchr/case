import CustomersList from '@components/customers-list'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Grid, Typography } from '@mui/material'
import dummyCustomers from '@data/customers'
import { Box } from '@mui/system'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Customers </title>
      </Head>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box m={5}>
          <Typography variant="h1">Customers</Typography>
        </Box>
        <CustomersList customers={dummyCustomers} />
      </main>
    </>
  )
}

export default Home
