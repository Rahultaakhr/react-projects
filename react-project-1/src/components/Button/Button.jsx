import React from 'react'

function Button({
    children,
    className = '',
    ...props

}) {

    return (
        <button className={` border-none rounded-lg bg-purple-500 text-lg px-3 py-2 w-40 ${className}  `} {...props}>{children}</button>
    )
}

export default Button