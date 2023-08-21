import loader from '@/shared/assets/svg/load.gif'
import Image from "next/image";
import s from './loading.module.scss'

export default function LoadingNotes() {
    return (
        <div className={s.loading} >
            <Image src={loader} alt={'loader'} />
        </div>
    )
}
