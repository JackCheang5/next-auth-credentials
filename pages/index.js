import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center font-mono'>
        <div className='text-center'>
          <h1 className='font-bold text-6xl my-5'>Authentication Learning</h1>
          <p>Learn to implement authentication with Next-Auth.</p>
        </div>
      </main>
    </div>
  )
}
