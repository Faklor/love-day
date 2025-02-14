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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

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

    // Добавляем анимацию частиц
    const particlesAnimation = () => {
      const particles = [...document.querySelectorAll('.particle')]
      
      anime({
        targets: particles,
        translateX: () => anime.random(-300, 300),
        translateY: () => anime.random(-300, 300),
        scale: () => anime.random(0.2, 1),
        opacity: [0.8, 0],
        duration: () => anime.random(1000, 2000),
        delay: anime.stagger(100),
        complete: particlesAnimation,
        easing: 'easeOutExpo'
      })
    }

    particlesAnimation()
  }, [])

  return (
    <main className={styles.main}>
      <Navigation />
      
      <section id="home" className={`${styles.heroSection} hero-section`}>
        <div className={styles.logoContainer}>
          <Image 
            src={`${basePath}/images/heart-logo.svg`}
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
            src={`${basePath}/images/small-figures.svg`}
            alt="Small Figures"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className={styles.mountainsContainer}>
          <div className={styles.mountainFront}>
            <Image 
              src={`${basePath}/images/mountains.svg`}
              alt="Mountains Front"
              width={1920}
              height={400}
              className={styles.mountain}
              priority
            />
          </div>
          <div className={styles.mountainMiddle}>
            <Image 
              src={`${basePath}/images/mountains.svg`}
              alt="Mountains Middle"
              width={1920}
              height={400}
              className={styles.mountain}
            />
          </div>
          <div className={styles.mountainBack}>
            <Image 
              src={`${basePath}/images/mountains.svg`}
              alt="Mountains Back"
              width={1920}
              height={400}
              className={styles.mountain}
            />
          </div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>About Us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText} >
            <p>Добро пожаловать на сайт, посвященный Дню Святого Валентина и нашей любви. Мы - Алекс и Алиса, пара, которая нашла друг друга и построила крепкие, значимые отношения, полные любви и взаимопонимания.</p>
            <p>Наш сайт - это Габелла, просто без комментариев.</p>
            <p>С тех пор как он появился, бытовых проблем стало больше, поцелуев меньше, но дрель купили, зачем интересно? Не расскажу.</p>
          </div>
          <div className={styles.aboutImage}>
            <Image 
              src={`${basePath}/images/about_1.svg`}
              alt="About Us"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>

        <h2 className={styles.aboutTitle}>Photo Gallery</h2>
        <div className={styles.photoGallery}>
         
          {[...Array(14)].map((_, index) => (
            <div 
              key={index} 
              className={styles.photoItem}
              style={{
                transform: `translateY(${index % 2 === 0 ? '20%' : '0%'})`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <Image
                src={`${basePath}/images/photo_2025-02-10_09-${index + 1}.jpg`}
                alt={`Photo ${index + 1}`}
                width={300}
                height={400}
                className={styles.photo}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="video" className={styles.videoSection}>
        <video 
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        >
          <source src={`${basePath}/video/love-story.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}>
          <h2 className={styles.videoTitle}>Our Story</h2>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.particlesContainer}>
          {[...Array(15)].map((_, index) => (
            <div 
              key={index}
              className={`${styles.particle} particle`}
            >
              ❤️
            </div>
          ))}
        </div>
        <div className={styles.hearts}>
          {[...Array(5)].map((_, index) => (
            <div 
              key={index} 
              className={styles.heart}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                left: `${20 * (index + 1)}%`
              }}
            >❤️</div>
          ))}
        </div>
        <p>Created with ❤️ by <a href="https://github.com/faklor" target="_blank" rel="noopener noreferrer">faklor</a></p>
      </footer>
    </main>
  )
} 