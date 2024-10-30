// import { View, Text, Dimensions, FlatList, Image } from 'react-native';
// import React, { useRef, useState } from 'react';
// import images from '../data/FeaturedImages';

// const { width } = Dimensions.get('window');

// const MoviesSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);
//   const infiniteImages = [...images, ...images];

//   const onScrollEnd = (event) => {
//     const sliderIndex = Math.round(event.nativeEvent.contentOffset.x / width);

//     if (sliderIndex >= images.length) {
//       setTimeout(() => {
//         sliderRef.current.scrollToOffset({ offset: 0, animated: false });
//         setCurrentIndex(0);
//       }, 300);
//     } else {
//       setCurrentIndex(sliderIndex % images.length);
//     }
//   };

//   return (
//       <View className="mt-5">
//       <FlatList
//         data={infiniteImages}
//         keyExtractor={(item, index) => `${item.id}-${index}`}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={onScrollEnd}
//         ref={sliderRef}
//         renderItem={({ item }) => (
//           <Image
//             source={{ uri: item.url }}
//             style={{ width, height: 500 }}
//             className="bg-cover rounded-3xl"
//           />
//         )}
//       />
//     </View>
//   );
// };

// export default MoviesSlider;





// ______________________________ THIS IS FOR AUTOMATIC SLIDER ____________________
import { View, Dimensions, FlatList, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import images from '../data/FeaturedImages';

const { width } = Dimensions.get('window');

const MoviesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const infiniteImages = [...images, ...images];

  const onScrollEnd = (event) => {
    const sliderIndex = Math.round(event.nativeEvent.contentOffset.x / width);

    if (sliderIndex >= images.length) {
      setTimeout(() => {
        sliderRef.current.scrollToOffset({ offset: 0, animated: false });
        setCurrentIndex(0);
      }, 300);
    } else {
      setCurrentIndex(sliderIndex % images.length);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      sliderRef.current.scrollToOffset({ offset: nextIndex * width, animated: true });
      setCurrentIndex(nextIndex);
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex]);

  return (
    <View className="mt-5">
      <FlatList
        data={infiniteImages}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        ref={sliderRef}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{ width, height: 500 }}
            className="bg-cover rounded-3xl"
          />
        )}
      />
    </View>
  );
};

export default MoviesSlider;
