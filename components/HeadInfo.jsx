import React from 'react';
import Head from 'next/head';

export default function HeadInfo({title, keyword, content}) {
    return (
        <Head> 
            <title> {title} </title>
            <meta keyword= {keyword} />
            <meta content = {content} />
        </Head>
    );
}

HeadInfo.defaultProps = {
    title: "My Blog",
    keyword: "keyword",
    content: "content"
}