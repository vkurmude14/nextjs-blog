import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import * as fs from 'fs'
const Slug = (props) => {
    function createMarkup(c) {
        return {__html: c};
      }
    // console.log(router.query)
    const [blog, setblog] = useState(props.myBlog)



    return (

        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                {blog &&     <div dangerouslySetInnerHTML={createMarkup(blog.Content)}></div>}

            </main>
        </div>
    )
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}
export async function getStaticProps(context) {
    // const router = useRouter()
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Slug