import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from '../Components/Container';
import Header from '../Components/Header';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <h1>Ola Mundo! Plataforma geek</h1>
      </Container>
    </>
  )
}
