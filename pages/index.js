export const getStaticProps = async () => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e5aa86bd0e914921add0f3dadb0a99ad');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a >
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Ninjas;