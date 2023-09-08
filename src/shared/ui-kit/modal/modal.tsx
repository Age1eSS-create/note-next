import React, {ReactNode} from 'react';
import s from './modal.module.scss'
import classNames from "classnames";
import cross from '@/shared/assets/svg/cross.svg'
import Image from "next/image";

interface PropsType {
    className: string;
    setFlagShow: (flag:boolean) => void;
    title:string;
    children: ReactNode;
}
export function Modal ({className, setFlagShow, title, children}:PropsType) {
    return (
        <div className={classNames(s.modal, className)}>
            <div className={classNames(s.block)}>
                <div className={classNames(s.head)}>
                    {title}
                    <Image src={cross} alt={'Закрыть'} onClick={e => setFlagShow(false)}/>
                </div>
                <div className={classNames(s.body)}>
                    {children}
                </div>
            </div>
        </div>
    );
};
