import React from 'react'

function Input({
    label,
    type = 'text',
    className = '',
    ...props
}) {
    return (
        <div className=' flex flex-col px-5'>
            {
                (label && (<label className=' text-[18px] font-semibold'>{label}</label>))

            }
            <input type={type} className={` rounded-md ps-2 outline-0 py-1 text-black ${className}`} {...props} />
        </div>
    )
}

export default Input