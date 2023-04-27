import React, {FC} from 'react';
import s from './Scoreboard.module.css'
type PropsType = {
    count:number
    maxValue:number
}

export const Scoreboard: FC<PropsType> = (props) => {
    const {count, maxValue, ...otherProps} = props
    return (
        <div className={count === maxValue? `${s.scoreboard} ${s.disabled}`:s.scoreboard}>
            {count}
        </div>
    );
};

