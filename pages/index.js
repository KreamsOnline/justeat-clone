import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Header from '../components/header/header'
import Searchbar from '../components/header/searchbar/searchbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
