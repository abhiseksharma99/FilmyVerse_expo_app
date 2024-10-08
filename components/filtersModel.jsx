import { View, Text, StyleSheet, Platform, Pressable } from 'react-native'
import React, {useMemo} from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import Animated, { Extrapolation, FadeInDown, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { ColorFilter, CommonFilterRow, SectionView } from './filterViews';
import { capitalize } from '../helpers/common';
import { data } from '../constants/data';

const FiltersModel = ({modalRef,onClose,onApply,onReset,filters,setFilters}) => {
 
    const snapPoints = useMemo(() => ['75%'], []);

    const CustomBackdrop = ({animatedIndex, style}) => {

        const containerAnimatedStyle = useAnimatedStyle(() => {
            let opacity = interpolate(
                animatedIndex.value,
                [-1, 0],
                [0,1],
                Extrapolation.CLAMP
            )
            return {
                opacity
            }
        })

        const containerStyle = [
            StyleSheet.absoluteFill,
            style,
            styles.overlay,
            containerAnimatedStyle
        ]
        return (
            <Animated.View style={containerStyle}>
            {Platform.OS === 'ios' ? (
              <BlurView style={StyleSheet.absoluteFill} tint='dark' intensity={25} />
            ) : (
              <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.7)' }]} />
            )}
          </Animated.View>
        )
    }

  return (
     <BottomSheetModal ref={modalRef} index={0} snapPoints={snapPoints} enablePanDownToClose={true} backdropComponent={CustomBackdrop} >
        <BottomSheetView style={styles.contentContainer}>
            <View className='px-2 py-4 gap-3 w-full'>
                <Text className='font-semibold text-3xl mb-1'>Filters</Text>
                {
                    Object.keys(sections).map((sectionName, index) => {
                        let sectionView = sections[sectionName];
                        let sectionData = data.filters[sectionName];
                        let title = capitalize(sectionName);
                        return (
                            <Animated.View
                            entering={FadeInDown.delay((index*100)+100).springify().damping(11)}
                            key={sectionName} >
                                <SectionView
                                 title={title}
                                 content={sectionView({
                                    data: sectionData,
                                    filters,
                                    setFilters,
                                    filterName: sectionName
                                })}
                                 />
                            </Animated.View>
                        )
                    })
                }

       
            <Animated.View
             entering={FadeInDown.delay(500).springify().damping(11)}
             className='flex-row gap-2' >
                <Pressable onPress={onReset} className='bg-gray-200 flex-1 rounded-lg' >
                  <Text className='text-center py-2 text-base'>
                    Reset
                  </Text>
                </Pressable>
                <Pressable onPress={onApply} className='bg-black flex-1 rounded-lg' >
                  <Text className='text-center text-white py-2 text-base'>
                    Apply
                  </Text>
                </Pressable>
            </Animated.View>


            </View>
        </BottomSheetView>
     </BottomSheetModal>
  )
}

const sections = {
    'order': (props) => <CommonFilterRow {...props} />,
    'orientation': (props) => <CommonFilterRow {...props} />,
    'type': (props) => <CommonFilterRow {...props} />,
    'colors': (props) => <ColorFilter {...props} />
}



export default FiltersModel

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})
