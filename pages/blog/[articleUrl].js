import { fetchApi } from '../../utils/handelApi';
import Image from 'next/image';

function Article({ article }) {
  const { title, date, desc, image, content } = article
  return (
    <div className='container py-4' dir='rtl'>
      <Image
        width={750}
        height={550}
        layout="responsive"
        className="w-100"
        src={`http://localhost:5000/images/${image}`}
        blurDataURL={`http://localhost:5000/images/${image}`}
        placeholder="blur"
        alt="aaa"
      />
      <strong className="text-dark mt-2 d-block">{article.date}</strong>
      <h1 className='fs-h1 text-dark my-1 mb-3'>{title}</h1>
      <strong className="text-dark fs-5 mb-2 d-block">وصف المقال</strong>
      <p>{desc}</p>
      <strong className="text-dark fs- mb-2 d-block">محتوي المقال</strong>
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>

    </div>
  )
}

export default Article

export async function getStaticPaths() {
  const { articles } = await fetchApi(`articles`);

  const paths = articles.map(product => {
    return { params: { articleUrl: product.url } }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { articleUrl } = params;
  try {
    const { article } = await fetchApi(`article/${articleUrl}`);
    return {
      props: {
        article,
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      notFound: true,
      revalidate: 10
    }
  }
}