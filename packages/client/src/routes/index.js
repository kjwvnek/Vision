import React from 'react'
import UserAuth from '@/components/__utils/UserAuth'
import Home from '@/components/Home'
import Login from '@/components/Login'

const routes = [
  {
    path: '/',
    render: () => (
      <UserAuth Component={Home} />
    )
  },
  {
    path: '/login',
    render: () => (
      <Login />
    )
  }
];

export default routes
