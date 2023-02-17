import HeadInfo from '@/components/HeadInfo'
import styles from '@/styles/Home.module.css'

export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
      <HeadInfo />
      <h1> Welcome to My Blog </h1>
      <ul>
        { posts.map(post =>(
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

/*
페이지에 들어올 때마다 서에 해당 api 를 요청해서 받아옴
https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
*/
// export const getServerSideProps = async() =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
//   const posts = await res.json();
//   return {
//     props: {
//       posts
//     }
//   }
// }

/*
html 에 직접 데이터를 심어버림.
https://nextjs.org/docs/api-reference/data-fetching/get-static-props
*/
export const getStaticProps = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
  const posts = await res.json();
  return {
    props: {
      posts
    },
    revalidate: 20, // 데이터를 받아오고 20초 후에 다시 한번 바뀐게 없는지 받아오게 됨
  }
}