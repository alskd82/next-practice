import HeadInfo from '@/components/HeadInfo';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Photos.module.css'
import Link from 'next/link';

export default function photos({photos}) {
    console.log(photos)
    return (
        <div>
            <HeadInfo title={"My Blog - Photos"}/>
            <h1> Photos </h1>
            <ul className={styles.photos}>
                { photos.map(photo =>(
                    <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                            <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}/>
                            <span> {photo.title} </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10");
    const photos = await res.json();
    return {
        props: {
            photos
        },
      revalidate: 20, // 데이터를 받아오고 20초 후에 다시 한번 바뀐게 없는지 받아오게 됨
    }
}