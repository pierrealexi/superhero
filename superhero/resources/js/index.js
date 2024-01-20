import Heros from '.../superheroFront/ask-hero/src/app/Heros/page.tsx';
import axios from './axios';
import Head from 'next/head';
import Link from 'next/link';

export const Home = ({superheroes}) => {
    return (
        <>
            <Head>
                <title>Superhero - Home</title>
            </Head>

            <div className="flex flex-col gap-2">

            {superheroes.map(superhero => (

                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">
                        {superhero.name}
                    </h1>
                    <p>
                        {superhero.superheroes.body}
                    </p>

                    <Link href="">
                        <a className="text-blue-500 hover:underline">
                            Read more 
                        </a>
                    </Link>
                    
                </div>
            ))}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const response = await axios.get('../routes/api.php');
    const superheroes = response.data.data;

    return {
        props: {
            superheroes
        }
    }
}

Home.getLayout = function getLayout(page) {
    return (
        <Heros>
            {page}
        </Heros>
    )
}
