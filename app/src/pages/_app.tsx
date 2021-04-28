import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      {/* {componente heade}r */}
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
