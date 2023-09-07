import React, {ButtonHTMLAttributes, ReactNode, useMemo} from 'react';
import s from './button.module.scss'
import classNames from "classnames";

type ModeType = Array<'' | 'default' | 'outline' | 'blue'>;
interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    modes: ModeType;
    children: ReactNode;
}
export function Button ({ className, children, modes, ...anyProps}:PropsType)  {
    const modeList = useMemo(() => modes.map((el) => s[el]), [ modes ]);


    return (
        <button className={classNames(s.button, modeList, className)} {...anyProps}>
            {children}
        </button>
    );
};
