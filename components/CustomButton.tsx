'use client'
import Image from 'next/image'
import React from 'react'
import { CustomButtonProps } from '../types'

const CustomButton = ({title,rightIcon,textStyles,btnType,containerStyles,handleClick} : CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image 
                        src={rightIcon}
                        alt='right icon'
                        fill 
                        className='object-contain'
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton
