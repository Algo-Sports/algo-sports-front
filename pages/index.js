import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BaseLayout from './layouts/baseLayout'
import HomeLayout from './layouts/homeLayout'

export default function Home() {
  return (
    <BaseLayout>
      <HomeLayout>
      </HomeLayout>
    </BaseLayout>
  )
}
