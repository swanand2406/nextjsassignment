import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const apiResponse = await fetch(
        process.env.NEXT_PUBLIC_API
    );
    const response = await apiResponse.json();
    const { articles } = response;
    console.log(articles)
    const paths = articles.map(index => ({
        params: { id: index.toString() }
    })
    );
    return {
        paths,
        fallback: true,
    }
}
export const getStaticProps = async (pageContext) => {
    const id = encodeURI(pageContext.params.id);

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}?apikey=${process.env.NEXT_PUBLIC_API_KEY}&qInTitle==${id}`
    )

    const singleData = await response.json();
    const { articles } = singleData;
    console.log(articles)
    return {
        props: {
            articles,
            id,
        }
    }
}
const Details = ({ articles, id }) => {
    console.log("data", articles)
    console.log("id", id)
    return (
        <div  >
            {articles.map((article, id) => (
                <div className={styles.innercontainer} key={id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <p dangerouslySetInnerHTML={{__html:article.description}}></p>
                    <img className={styles.innerimg} src={article.urlToImage} />
                </div>
            ))}
        </div>
    );
}



export default Details;