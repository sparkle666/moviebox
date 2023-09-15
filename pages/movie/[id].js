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
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous" />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <SideBar path="movie" />
            <SideBarContent id={id} />
        </div>
    )
}

export default MovieList