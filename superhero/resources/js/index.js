import React from 'react';
import Heros from '.../superheroFront/ask-hero/src/app/Heros/page.tsx';
import axios from './axios';
import Head from 'next/head';
import Link from 'next/link';

const Data = ({ superheroes }) => {
  return (
    <div>
      <Head>
        <title>Superhero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Superhero</h1>
        <ul>
          {superheroes.map(superhero => (
            <li key={superhero.id}>
              <Link href={`/superhero/${superhero.id}`}>
                <a>{superhero.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('../public/index.php');
    const superheroes = response.data.data;

    return {
      props: {
        superheroes,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        superheroes: [],
      },
    };
  }
}

Data.getLayout = function getLayout(page) {
  return (
    <Heros>
      {page}
    </Heros>
  );
};

console.log(Data);

export default Data;
