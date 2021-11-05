
export const getStaticProps = async () => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e5aa86bd0e914921add0f3dadb0a99ad');
  const data = await res.json();
  const datao=data.articles[0];
  //const myjson=JSON.parse(data)
  console.log(data);
  //console.log("Helllllllllllllllllllllllllllllloooooooooooooooooooooooooooooo",datao.title);

  return {
    props: { datao: datao }
  }
}

const App = ({ datao }) => {
  console.log(datao)

  return (
    <div>
      
      {datao.map(dat => (
        <div key={dat.author}>
          <a >
            <h3>{ dat.title }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default App;