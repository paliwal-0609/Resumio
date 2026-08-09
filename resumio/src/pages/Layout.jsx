import React from 'react'

const Layout = () => {
  return (
    <div>
        <h1>Layout</h1>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout