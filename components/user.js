import { get, del } from 'idb-keyval';
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
export default function User() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        async function fethUser(){
            setUser(await get('user'));
        }
        fethUser();
    },[user])

    function handleSignin(ev) {
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
                <div><h2>{user.name}</h2></div>
                <form onSubmit={handleLogout}>
                    <Button type="submit" color= "inherit" >Sign off</Button>
                </form>
            </>
        )
    return (
        <>
            <form onSubmit={handleSignin}>
                <Button type="submit" size="small" color="inherit">Sign in</Button>
            </form>
        </>
    )
}

