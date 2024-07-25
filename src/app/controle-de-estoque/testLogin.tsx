import {useSession, signIn, signOut} from 'next-auth/react';

export default () => {
    const {data: session} = useSession();

    return (
        session ?
        <>
            Signed in as {session.user.email} :) <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
        :
        <>
            <button onClick={() => signIn()}>Login</button>
        </>
    )
}