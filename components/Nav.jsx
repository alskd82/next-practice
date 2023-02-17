import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li> <Link href="/"> HOME </Link></li>
                <li> <Link href="/photos"> Photos </Link> </li>
            </ul>
        </nav>
    );
}

