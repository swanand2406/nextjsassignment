
// export const getStaticProps = async () => {
//   const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e5aa86bd0e914921add0f3dadb0a99ad');
//   const data = await res.json();
//   const datao=data.articles[0];

//   return {
//     props: { data }
//   }
// }

function App({ data }) {
  return (
    <ul>
      {data.map((key) => (
        <li>{key.title}</li>
        
      ))}
    </ul>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e5aa86bd0e914921add0f3dadb0a99ad')
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data:data.articles,
    },
  }
}

export default App;