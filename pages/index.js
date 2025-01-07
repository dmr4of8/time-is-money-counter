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
      <p>Calculate how much you are making based on your hourly wage while the timer is running.</p>
      <p>Just input your hourly wage and watch the $$ grow!</p>
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
