'use client'
import { useEffect, useState } from 'react'
import anime from 'animejs'
import styles from './page.module.scss'
import Image from 'next/image'
import Navigation from './components/Navigation'
import CommentForm from './components/CommentForm'
import Comments from './components/Comments'

export default function Home() {
  const [daysCount, setDaysCount] = useState(0)

  useEffect(() => {
    const startDate = new Date('2023-10-22')
    const today = new Date()
    const diffTime = Math.abs(today - startDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysCount(diffDays)

    // Анимации
    anime({
      targets: '.hero-section',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: 'easeOutExpo'
    })

    anime({
      targets: '.logo-heart',
      scale: [0.9, 1],
      duration: 1500,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    })
  }, [])

  return (
    <main className={styles.main}>
      <Navigation />
      
      <section id="home" className={`${styles.heroSection} hero-section`}>
        <div className={styles.logoContainer}>
          <Image 
            src={`/images/heart-logo.svg`}
            alt="Heart Logo"
            width={200}
            height={200}
            className="logo-heart"
            priority
          />
        </div>

        <h1 className={styles.names}>
          Alex <span>+</span> Alice
        </h1>

        <div className={styles.counter}>
          {daysCount} days<br />without
        </div>

        <div className={styles.smallFigures}>
          <Image 
            src={`/images/small-figures.svg`}
            alt="Small Figures"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className={styles.mountainsContainer}>
          <div className={styles.mountainFront}>
            <Image 
              src={`/images/mountains.svg`}
              alt="Mountains Front"
              width={1920}
              height={400}
              className={styles.mountain}
              priority
            />
          </div>
          <div className={styles.mountainMiddle}>
            <Image 
              src={`/images/mountains.svg`}
              alt="Mountains Middle"
              width={1920}
              height={400}
              className={styles.mountain}
            />
          </div>
          <div className={styles.mountainBack}>
            <Image 
              src={`/images/mountains.svg`}
              alt="Mountains Back"
              width={1920}
              height={400}
              className={styles.mountain}
            />
          </div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <h2>About Us</h2>
        {/* Здесь будет контент для About секции */}
      </section>

      <section id="comments" className={styles.commentsSection}>
        <Comments />
      </section>
    </main>
  )
} 