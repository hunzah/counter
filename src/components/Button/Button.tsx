import React, {FC} from 'react';
import s from './Button.module.scss'

type PropsType = {
    callback?: () => void
    buttonName: string
    disabled?: boolean
}

export const Button: FC<PropsType> = (props) => {
    const {callback, buttonName, disabled, ...otherProps} = props


    const className = disabled ? `${s.buttons} ${s.disabled}` : s.buttons
    return (
        <div className={s.wrapper}>
            <button disabled={disabled} className={className} onClick={callback}>{buttonName}</button>
        </div>
    );
};

