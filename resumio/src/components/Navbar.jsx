import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice';

const Navbar = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logoutUser = () =>{
        navigate('/');
        dispatch(logout());
    }
  return (
    <div className='shadow bg-white'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
            <Link to='/'>
                <img src="/logo2.svg" alt="logo" className='h-8 w-auto'/>
            </Link>
            <div className='flex items-center gap-4 text-sm'>
                <p className='max-sm:hidden'>Hi, {user?.name}</p>
                <button onClick={logoutUser} className='px-7 py-1.5 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-red-700 hover:text-slate-900'>Logout</button>
            </div>
        </nav>

    </div>
  )
}

export default Navbar