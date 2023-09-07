import React, {ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useMemo} from 'react';
import s from './textarea.module.scss'
import classNames from "classnames";

type ModeType = Array<'' | 'default'>
interface PropsType extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
    value: string
    className?: string;
    modes: ModeType;
    onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}
export function Textarea ({ value, onChange, className, modes = [ 'default' ], ...anyProps }: PropsType) {
    const modeList = useMemo(() => modes.map((el) => s[el]), [ modes ]);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e);
    };
    return (
        <textarea value={value} onChange={onChangeHandler} className={classNames(s.textarea, className, modeList)} {...anyProps}/>
    );
};
