import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Timer from '@components/Timer'
import React from 'react'

export default function Home() {
  const [hourlyWage, setHourlyWage] = React.useState(60)
  return (
    <div className="container">
      <Head>
        <title>Time is Money!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Time is money! Get working bb" />
      <main>
          <label>
            Hourly Wage: <input className='wage' name="hourlyWage" 
            value={hourlyWage}
            onChange={e => {
              setHourlyWage(e.target.value)
              console.log(e.target.value)}}
              />
          </label>
          <Timer hourlyWage={hourlyWage} />
      </main>

      <Footer />
    </div>
  )
}
