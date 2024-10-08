import { View,Text, Pressable } from "react-native"
import { capitalize } from "../helpers/common"

export const SectionView = ({title,content}) => {
    return (
        <View className='gap-2'>
            <Text className='text-lg font-semibold'>{title}</Text>
            <View>
                {content}
            </View>
        </View>
    )
}


export const CommonFilterRow = ({data, filterName, filters, setFilters}) => {

   const onSelect = (item) => {
       setFilters({...filters, [filterName]: item})
   }


    return (
        <View className='gap-2 flex-row flex-wrap' >
            {
                data && data.map((item, index) => {
                    let isActive = filters && filters[filterName] == item ;
                    return(
                        <Pressable onPress={()=>onSelect(item)}
                         key={item} className={isActive?'bg-black p-2 px-4 border border-gray-400 rounded-lg shadow-xl shadow-gray-400':'p-2 px-4 border border-gray-400 rounded-lg'} >
                            <Text className={isActive?'text-white':'text-black'}>{capitalize(item)}</Text>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}



export const ColorFilter = ({data, filterName, filters, setFilters}) => {

    const onSelect = (item) => {
        setFilters({...filters, [filterName]: item})
    }
 
 
     return (
         <View className='gap-2 flex-row flex-wrap' >
             {
                 data && data.map((item, index) => {
                     let isActive = filters && filters[filterName] == item ;
                     return(
                         <Pressable onPress={()=>onSelect(item)}
                          key={item} >
                            <View className={isActive?'p-[2px] border-2 rounded-md':'p-[2px]'} >
                                <View className='w-[35px] h-[30px] rounded-md' style={{backgroundColor:item}} />
                            </View>
                         </Pressable>
                     )
                 })
             }
         </View>
     )
 }
