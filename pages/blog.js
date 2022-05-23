import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import { useEffect, useState } from 'react'
const Blog = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs)

  return (
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return <div key={blogitem.slug}>
          <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogitem.title} </h3></Link>
          <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
          <Link href={`/blogpost/${blogitem.slug}`}><button href={`/blogpost/${blogitem.slug}`} className={styles.btn}>Read More</button></Link>
        </div>
      })}

    </main>
  )

}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile));
    // console.log(JSON.parse(myFile))
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blog