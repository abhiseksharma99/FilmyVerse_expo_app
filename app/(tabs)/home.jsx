import { ScrollView, View } from 'react-native'
import React from 'react'
import MoviesSlider from '../../components/MoviesSlider'
import SearchBar from '../../components/SearchBar'
import Recommendations from '../../components/Recommendations'

const Home = () => {

  return (
    <>
    <ScrollView className='bg-black flex-1 mt-[10%]'>
     <SearchBar/>
     <MoviesSlider />
     <Recommendations/>
    </ScrollView>
    </>
  )
}

export default Home


