import React from 'react'

interface Props{
    children: React.ReactNode,
    products: React.ReactNode,
    users: React.ReactNode,

}

export default function layout({children, products, users}: Props) {
  return (
    <div>
      {children}
      {users}
      {products}
    </div>
  )
}
