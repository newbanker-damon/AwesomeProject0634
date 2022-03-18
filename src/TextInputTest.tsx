import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from 'react-native';
import React from 'react';
import TextInputItem from './TextInputItem';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {content} from './content';

//Keyboard.addListener('keyboardDidShow',())

const TextInputTest = () => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView enableOnAndroid>
        {/* <TextInputItem label="日程标题1" placeholder="请输入。。。" />
        <TextInputItem label="日程标题2" placeholder="请输入。。。" />
        <TextInputItem label="日程标题3" placeholder="请输入。。。" />
        <TextInputItem label="日程标题4" placeholder="请输入。。。" />
        <TextInputItem label="日程标题5" placeholder="请输入。。。" />
        <TextInputItem label="日程标题6" placeholder="请输入。。。" />
        <TextInputItem label="日程标题7" placeholder="请输入。。。" />
        <TextInputItem label="日程标题8" placeholder="请输入。。。" />
        <TextInputItem label="日程标题9" placeholder="请输入。。。" /> */}
        <TextInputItem
          label="日程标题10"
          placeholder="请输入。。。"
          //style={{height: 100}}
          multiline
          defaultValue={content}
        />
        {/* <TextInputItem label="日程标题11" placeholder="请输入。。。" />
        <TextInputItem label="日程标题12" placeholder="请输入。。。" /> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default TextInputTest;

const styles = StyleSheet.create({});
