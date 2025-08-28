

import { IconWrapper } from '../icons/IconWrapper';
import s from './styles.module.css';

type Props = {
    icon: React.ReactNode;
    text: React.ReactNode;
}

export const Card = ({ icon, text }: Props) => {

    return (
        <article className={s.card}>
            <IconWrapper>{icon}</IconWrapper>
            <div className={s.text}>{text}</div>
        </article>
    )
}