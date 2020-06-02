import { get, del } from 'idb-keyval';
import Router from 'next/router'
import { useEffect, useState } from 'react'
export default function User() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        async function fethUser(){
            setUser(await get('user'));
        }
        fethUser();
    },[user])

    function handleSigin(ev) {
        ev.preventDefault();
        Router.push('/login')

    }
    async function handleLogout(ev) {
        ev.preventDefault();
        await fetch(`/api/logout/${user.refreshToken}`, {
            method: 'POST',
        })
        await del('user');
        setUser(null);
    }
    if (user)
        return (
            <>
                <div>{user.name}</div>
                <form onSubmit={handleLogout}>
                    <button type="submit">Sign off</button>
                </form>
            </>
        )
    return (
        <>
            <form onSubmit={handleSigin}>
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}