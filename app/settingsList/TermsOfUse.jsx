import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const TermsOfUse = () => {

    const router = useRouter();

  return (
    <View className='flex-1 bg-black mt-[10%]'>
    <TouchableOpacity onPress={() => router.back()} className="absolute top-1 left-3 z-10">
    <Ionicons name="arrow-back-circle" size={40} color="white" />
    </TouchableOpacity>
      <Text className='bg-red-600 text-white p-2 font-bold text-center text-2xl'> Terms Of Use</Text>
      <ScrollView>
      <Text className='p-3 text-white tracking-widest'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, recusandae reprehenderit rem nostrum tenetur necessitatibus fuga quod assumenda? Unde perferendis sint aut voluptatum laborum quod voluptate quia similique fugit omnis reprehenderit assumenda ullam, illo ipsam excepturi optio suscipit at expedita nulla amet eos voluptates, repellat voluptas tempora. Omnis iure nemo id fugiat molestias! Delectus, ad veniam. Earum sed facere fuga quo velit? Dignissimos neque nisi quo molestiae aperiam dolore voluptatibus odit iure quis ea excepturi libero voluptas iusto facere natus, accusamus culpa dolorum inventore assumenda sed magnam repellendus saepe numquam illum. Neque facilis quos illo ullam cupiditate voluptates libero minus nihil facere deserunt, ipsa esse? Ducimus animi voluptatem quae tempore architecto repellat omnis eveniet commodi, facere provident ea ex similique, nesciunt repudiandae consequuntur veritatis! Voluptates magni autem dolores mollitia suscipit harum laboriosam repudiandae, provident facere reprehenderit aperiam accusamus explicabo natus maxime omnis quibusdam adipisci, ex sit labore voluptas. Amet mollitia, cum consequatur tempora earum repellendus suscipit neque nam ratione architecto officiis ipsa necessitatibus eius minima facere? Voluptatum exercitationem odit, corrupti magnam, impedit animi quidem at perspiciatis itaque, fugiat quia voluptatem. Tempore adipisci pariatur cumque placeat aliquam libero iusto consequatur excepturi! Quaerat magni soluta pariatur voluptatum id aperiam totam. Qui nemo voluptatem, vitae eaque asperiores eius numquam! Omnis tempora a quia accusantium autem? Nulla quasi quam ex possimus iure voluptatem eius ipsam quia. Natus, eligendi saepe praesentium commodi cum ratione recusandae et, quod eius voluptatibus, fugiat animi itaque. Reiciendis ad temporibus quibusdam. Corrupti sit quos dicta ipsa. Nisi sint quae adipisci nulla earum, odio quod error eveniet amet mollitia quaerat vel ducimus! Fuga doloremque consequatur optio, dicta hic ea debitis nostrum animi. Asperiores facilis dolorem explicabo, aut nemo eveniet dignissimos magni! Minus aspernatur, sunt debitis necessitatibus facilis officiis? Nisi beatae, odit quibusdam quia fuga natus quidem exercitationem neque quaerat corporis eius.
      </Text>
      </ScrollView>
    </View>
  )
}

export default TermsOfUse