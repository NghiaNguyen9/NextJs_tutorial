import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Blog = () => {
  return (
    <div className={styles.mainContainter}>
      <Link href="#" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          width={400}
          height={250}
          alt="" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href="#" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          width={400}
          height={250}
          alt="" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href="#" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          width={400}
          height={250}
          alt="" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog