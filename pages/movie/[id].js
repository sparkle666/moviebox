import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SideBarContent from '../../components/SideBarContent'
import SideBar from '../../components/SideBar'
import Head from 'next/head';

const MovieList = () => {
    const router = useRouter();
    const { id } = router.query;

    return (

        <div className='d-flex flex-row'>
            <Head>
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous" />
            </Head>
            <SideBar />
            <SideBarContent id={id} />
        </div>
    )
}

export default MovieList