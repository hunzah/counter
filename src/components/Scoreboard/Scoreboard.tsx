import React, {FC} from 'react';
import s from './Scoreboard.module.css'
type PropsType = {
    count:number
}

export const Scoreboard: FC<PropsType> = (props) => {
    const {count} = props
    return (
        <div className={count === 5? `${s.scoreboard} ${s.disabled}`:s.scoreboard}>
            {count}
        </div>
    );
};

