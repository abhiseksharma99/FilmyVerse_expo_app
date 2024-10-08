import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import Categories from '../../components/categories';
import {apiCall} from '../../api'
import ImageGrid from '../../components/imageGrid';
import {debounce} from 'lodash';
import FiltersModel from '../../components/filtersModel';
import { ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

var page = 1 ;

const HomeScreen = () => {

const {top} = useSafeAreaInsets();
const paddingTop = top>0? top + 10 : 30 ;
const [search,setSearch] = useState('');
const [images,SetImages] = useState([]);
const [filters,setFilters] = useState(null);
const [activeCategory,SetActiveCategory] = useState(null);
const searchInputRef = useRef(null);
const modalRef = useRef(null);
const scrollRef = useRef(null);
const router = useRouter();
const [isEndReached,setIsEndReached] = useState(false);


useEffect(() => {
 fetchImages();
},[]);

const fetchImages = async(params={page:1}, append=true) => {
  let res = await apiCall(params);
  if(res.success && res?.data?.hits){
    if(append)
    SetImages([...images, ...res.data.hits])
    else
    SetImages([...res.data.hits])
  }
}

const openFiltersModal = () => {
  modalRef?.current?.present();
}

const closeFiltersModal = () => {
  modalRef?.current?.close();
}


const applyFilters = () => {
  if(filters){
    page = 1;
    SetImages([]);
    let params = {
      page,
      ...filters
    }
    if(activeCategory) params.category = activeCategory;
    if(search) params.q = search;
    fetchImages(params, false);
  }
  closeFiltersModal();
}


const resetFilters = () => {
  if(filters){
    page = 1;
    setFilters(null);
    SetImages([]);
    let params = {
      page,
    }
    if(activeCategory) params.category = activeCategory;
    if(search) params.q = search;
    fetchImages(params, false);
  }
  closeFiltersModal();
}


const clearThisFilter = (filterName) => {
  let filterz = {...filters};
  delete filterz[filterName];
  setFilters({...filterz});
  page = 1;
  SetImages([]);
  let params = {
    page,
    ...filterz
  }
  if(activeCategory) params.category = activeCategory;
  if(search) params.q = search;
  fetchImages(params, false);
}


const handleChangeCategory = (cat) => {
  SetActiveCategory(cat);
  clearSearch();
  SetImages([]);
  page = 1;
  let params = {
    page,
    ...filters
  }
  if(cat) params.category = cat ;
  fetchImages(params, false);
}


const handleSearch = (text) => {
    setSearch(text);
    if(text.length>2){
      page = 1 ;
      SetImages([]);
      SetActiveCategory(null);
      fetchImages({page, q: text, ...filters}, false);
    }
    if(text==''){
      page = 1 ;
      searchInputRef?.current?.clear();
      SetImages([]);
      SetActiveCategory(null);
      fetchImages({page, ...filters}, false);
    }
}


const clearSearch = () => {
  setSearch('');
  searchInputRef?.current?.clear();
}


const handleScroll = (event) => {
   const contentHeight = event.nativeEvent.contentSize.height;
   const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
   const scrollOffset = event.nativeEvent.contentOffset.y;
   const bottomPosition = contentHeight - scrollViewHeight;

   if(scrollOffset>=bottomPosition-1){
    if(!isEndReached){
      setIsEndReached(true);
      ++page;
      let params = {
        page,
        ...filters
      }
      if(activeCategory) params.category = activeCategory;
      if(search) params.q = search;
      fetchImages(params);
    }
   } else if(isEndReached){
    setIsEndReached(false);
   }
}


const handleScrollUp = () => {
  scrollRef?.current?.scrollTo({
    y: 0,
    animated: true
  })
}
  


const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])


  return (
    <View className='flex-1 gap-3' style={{paddingTop}}>
      <View className='flex-row justify-between items-center px-4'>
        <Pressable onPress={handleScrollUp} >
            <Text className='text-3xl font-semibold' style={{fontFamily:'DancingScript-bold'}}>
                Pixels
            </Text>
        </Pressable>
        <Pressable onPress={openFiltersModal} >
            <FontAwesome6 name='bars-staggered' size={22} color='black' />
        </Pressable>
      </View>
      <ScrollView
       onScroll={handleScroll}
       scrollEventThrottle={5}
       ref={scrollRef}
       contentContainerStyle={{gap: 15}}>
       <View className='flex-row justify-between items-center border-1 border-gray-400 bg-white rounded-lg mx-4 p-1'>
         <View className='p-2'>
            <Feather name='search' size={24} color='gray' />
         </View>
         <TextInput placeholder='search for photos...' 
          // value={search}
          ref={searchInputRef}
          onChangeText={handleTextDebounce}
          className='flex-1 rounded-lg py-2 text-sm' />
          {
            search && (
                <Pressable onPress={()=>handleSearch('')} className='bg-gray-200 rounded-lg p-1'>
                <Ionicons name='close' size={24} color='gray' />
                </Pressable>
            )
          }
       </View>
       <View>
         <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
       </View>

 
        {
          filters && (
            <View>
              <ScrollView horizontal showHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
                {
                  Object.keys(filters).map((key, index) => {
                    return (
                      <View key={key} className='bg-gray-200 flex-row items-center rounded-lg pb-2 px-2 gap-2'>
                        {
                          key =='colors'?(
                            <View className='h-[20px] w-[30px] rounded-lg' style={{backgroundColor: filters[key]}} />
                          )
                          :
                          (
                          <Text className='font-semibold'>{filters[key]}</Text>
                          )
                        }
                        <Pressable onPress={()=>clearThisFilter(key)} className='bg-gray-400 rounded-full p-[2px]'>
                          <Ionicons name='close' size={14} color='black' />
                        </Pressable>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </View>
          )
        }


       <View>
        {
          images.length>0 && <ImageGrid images={images} router={router} />
        }
       </View>

       <View style={{marginBottom: 70, marginTop: images.length>0? 10:70}}>
         <ActivityIndicator size='large' />
       </View>

      </ScrollView>
      <FiltersModel 
      modalRef={modalRef}
      filters={filters}
      setFilters={setFilters}
      onClose={closeFiltersModal}
      onApply={applyFilters}
      onReset={resetFilters}
       />
    </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    padding: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
})
