import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center font-mono'>
        <div className='text-center p-5'>
          <h1 className='font-bold text-6xl my-5'>Authentication Practice</h1>
          <p>Authentication with credentials, using Nextjs, Next-Auth, bcryptjs.<br/> Credentials
            stored in the database, using docker-contained MariaDB, and CRUD using Prisma.</p>
        </div>
      </main>
    </div>
  )
}
