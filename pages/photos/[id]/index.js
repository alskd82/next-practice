import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function index({photos}) {
    const router = useRouter();
    console.log(router)
    const {title, url} = photos
    return (
        <div>
            {/* <h2> image {router.query.id} </h2> */}
            <h2> {title} </h2>
            <Image src={url} width={500} height={500} alt={title} />
            <Link href="/photos"> go boack </Link>
        </div>
    );
}

export const getStaticProps = async(context)=>{
    
    const {id} = context.params; // context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photos = await res.json();
    return {
        props: {
            photos
        },
      revalidate: 20, // 데이터를 받아오고 20초 후에 다시 한번 바뀐게 없는지 받아오게 됨
    } 
}

/*
https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
getStaticProps 함수에 동적으로 패스를 넘겨줄 수 있음 
*/
export const getStaticPaths = async()=>{ 
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
    const photos = await res.json();
    const ids = photos.map(photo => photo.id);
    const paths = ids.map( id=>{
        return {
            params: {id: id.toString() } // 문자열로 들어가야 함
        }
    })
    return{
        // paths :[ //  params 를 수동을 넣는 법 
        //     { params: {id: '1'} },
        //     { params: {id: '2'} },
        //     { params: {id: '3'} },
        // ],
        paths: paths,
        fallback: false,
    }
}

