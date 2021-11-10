import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
function App({ data, }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous">
        </link>
      </Head>
      <div className={styles.row}>
        <center><h1>Top Sources</h1></center>

        <div className={styles.card}>
          {data.map((key) => (
            <div className="col-sm-4 mx-auto">
              <div className={styles.card}>
                <h5 className={styles.cardText}>{key.name} </h5>
                <a href={key.url} className={styles.cardImg} >{key.url}</a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get news
  const res = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=e5aa86bd0e914921add0f3dadb0a99ad')
  const data = await res.json()

  return {
    props: {
      data: data.sources,
    },
  }
}


export default App;