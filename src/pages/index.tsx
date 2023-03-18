import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { BsTelegram, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { FiMail } from 'react-icons/fi'

import styles from '../assets/styles/Home.module.scss'
import { Earth } from '@/components/HomeComponents/Earth'
import sign from '../assets/images/sign.png'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <link rel="shortcut icon" href="icon.png" />
      </Head>
      <video className={styles.video} src="spacebg.mp4" autoPlay muted loop />
      <div className={styles.content}>
        <div className={styles.planet}>
          <Suspense fallback={null}>
            <Canvas>
              <ambientLight intensity={3.2} />
              <pointLight position={[10, 100, 10]} />
              <Earth position={[-0.8, 0.1, 4]} />
            </Canvas>
          </Suspense>
          <div className={styles.modal}>
            <div className={styles.buttons}>
              <button className={styles.button}>Blog</button>
              <Link target="_blank" href="https://my-projects-iota.vercel.app/">
                <button className={styles.button}>Projects</button>
              </Link>
              <Link
                className={styles.Link}
                target="_blank"
                href="https://github.com/therehimli"
              >
                <button className={styles.button}>GitHub</button>
              </Link>
              <Link
                className={styles.Link}
                target="_blank"
                href="https://www.linkedin.com/in/orkhan-rahimli-1b5a4b244/"
              >
                <button className={styles.button}>Linkedin</button>
              </Link>
            </div>
            <div className={styles.info}>
              <h1 className={styles.name}>Orkhan Rahimli</h1>
              <strong className={styles.position}>Front-end developer</strong>
              <div className={styles.links}>
                <Link target="_blank" href="https://twitter.com/orxan70382042">
                  <BsTwitter size={30} color="white" />
                </Link>
                <Link target="_blank" href="mailto:orduxan144@gmail.com">
                  <FiMail size={30} color="white" />
                </Link>
                <Link target="_blank" href="https://t.me/therehimli">
                  <BsTelegram size={30} color="white" />
                </Link>
              </div>
            </div>
            <div className={styles.bottomcontent}>
              <Link
                className={styles.Link}
                href="cv.pdf"
                download
                target="_blank"
              >
                <button className={styles.button49} role="button">
                  Download CV
                </button>
              </Link>
              <Image className={styles.sign} src={sign} alt="sign" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
