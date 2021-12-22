import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Profile() {
  const router = useRouter();
  const session = useSession();
  
  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router])

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col space-y-3 items-center'>
        <h1 className='mt-3 font-bold text-6xl'>
          Welcome, {session.data?.user.name}!
        </h1>
        <p>Your Authentication will be expired at {session.data?.expires}</p>
      </div>
    </div>
  )
}

export default Profile
