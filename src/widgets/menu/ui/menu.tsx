'use client'

import React from 'react';
import classNames from "classnames";
import s from './menu.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";

export function Menu () {
    const pathName = usePathname();
    console.log(pathName)

    return (
        <nav className={classNames(s.nav)}>
            <div className={classNames(s.block, pathName==='/' && s.active)}><Link href={'./'} >Главная </Link></div>
            <div className={classNames(s.block, pathName==='/notes' && s.active)}><Link href={'./notes'} >Мои заметки </Link></div>
        </nav>
    );
};
