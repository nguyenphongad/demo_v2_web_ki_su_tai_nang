import React from 'react'

const ComponentInput = ({
    children,
    label,
    type,
    value,
    placeholder,
    id,
    classNameWrap,
    className,
    iconBefore,
    disabled
}) => {
    return (
        <div className="component__input">
            <label htmlFor={id}>{label}</label>
            <div className={classNameWrap}>
                <div className={`line__input ${className}`}>
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        id={id}
                        disabled={disabled}
                        // className={className}
                    />
                    <div className="icon__before">
                        {iconBefore}
                    </div>
                </div>

                {children}
            </div>
        </div>
    )
}

export default ComponentInput