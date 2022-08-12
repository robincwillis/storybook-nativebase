
import { NativeBaseProvider, Text } from 'native-base';

import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

import { View } from 'react-native';


export const parameters = {
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};



export const decorators = [
  withBackgrounds,
  Story => (
    <View style={{backgroundColor: 'blue'}}>
      <NativeBaseProvider>
          <Story />
      </NativeBaseProvider>
    </View>
  )
];
