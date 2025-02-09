'use client'
import { useState, useEffect } from 'react'
import styles from './Navigation.module.scss'

const Navigation = ({ activeSection }) => {
  const [activeSectionState, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'comments']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        const rect = element.getBoundingClientRect()
        return rect.top >= 0 && rect.top <= 300
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDarkSection = activeSection === 'about' || activeSection === 'comments';
  
  return (
    <nav className={`${styles.navigation} ${isDarkSection ? styles.dark : ''}`}>
      <ul>
        <li className={activeSection === 'home' ? styles.active : ''}>
          <button onClick={() => scrollToSection('home')}>Home</button>
        </li>
        <li className={activeSection === 'about' ? styles.active : ''}>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li className={activeSection === 'comments' ? styles.active : ''}>
          <button onClick={() => scrollToSection('comments')}>Comments</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 