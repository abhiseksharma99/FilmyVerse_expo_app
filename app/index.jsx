import { View, Switch, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const Index = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("");

  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };

  const calculate = (title) => {
   if(title == 'C'){
    setResult('');
   } else if (title=='DL'){
    setResult(result.substring(0,result.length - 1));
   } else if(title == '='){
     const ans = Number(eval(result).toFixed(3)).toString()
     setResult(ans)
   } else {
    setResult (result + title);
   }
  }

  const Btn = ({ title,type }) => (
    <TouchableOpacity className='p-2 rounded-lg h-[55px] w-[55px] m-4'
    style={{ elevation: 2, backgroundColor: getColor(colors.light1,colors.dark2) }}
    onPress={()=>calculate(title)}
    >
      <Text className="text-3xl text-black text-center" style={{color:getBtnColor(type)}}>{title}</Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type) => {
   if(type == 'top'){
    return '#35FBD6'
   } else if(type == 'right'){
    return '#EB6363'
   } else {
    return getColor(colors.dark,colors.light)
   }
  }

  const getColor = (light, dark) => {
    return darkTheme ? dark : light;
  };

  return (
    <View
      style={{ backgroundColor: getColor(colors.light, colors.dark) }}
      className="w-[100%] h-[100%] py-[5] items-center"
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.light, colors.dark)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <Text
        className="text-3xl text-right w-[100%] pr-5 mt-[55%] pb-[5%]"
        style={{ color: getColor(colors.dark, colors.light) }}
      >
        {result}
      </Text>
      <View className="flex-row flex-wrap justify-center" style={{backgroundColor: getColor(colors.light1,colors.dark1)}}>
        <Btn title="C" type='top' />
        <Btn title="DL" type='top' />
        <Btn title="/"  type='top'/>
        <Btn title="%" type='top' />
        <Btn title="7" type='number' />
        <Btn title="8" type='number'/>
        <Btn title="9" type='number'/>
        <Btn title="*" type='right' />
        <Btn title="4" type='number'/>
        <Btn title="5" type='number'/>
        <Btn title="6" type='number' />
        <Btn title="-" type='right'  />
        <Btn title="1" type='number'/>
        <Btn title="2" type='number'/>
        <Btn title="3" type='number'/>
        <Btn title="+" type='right'  />
        <Btn title="00" type='number'/>
        <Btn title="0" type='number'/>
        <Btn title="." type='number'/>
        <Btn title="=" type='right'  />
      </View>
    </View>
  );
};

export default Index;
