import React, { Component } from 'react';
import { deviceSize } from '../utils/Constants';
import { SectionList, Text, View, Image } from 'react-native';

export class PolicyScreen extends Component {

  render() {
    return (
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <View style={{
            flexDirection: "row", alignItems: "center",
            padding: 5, paddingBottom: 3, paddingRight: 3
          }}>
            <Image
              source={require("./imgs/test.png")}
              style={{ width: 40, height: 40, marginRight: 3 }} />
            <Text
              style={{
                fontSize: 16, width: deviceSize.width - 40 - 10
              }}>
              {title}
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <Text
            style={{ padding: 5, paddingTop: 0, color: "gray" }} key={index}>
            {item}
          </Text>
        )}
        renderSectionFooter={() => (
          <View style={{ height: 1, backgroundColor: '#CDC9C9' }} />
        )}
        sections={
          [
            {
              title: '[2019-04-09]西藏人民广播电台《藏家小康路》获奖',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-10]普兰县宣传部集中学习《中华人民共和国宪法》',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-11]普兰县政法支部举办“名族团结月”演讲比赛',
              data: ['当地农牧民群众通过经济林果种植增加收入，形成“山上放牧收国土，山下果树来致富”的格局。']
            },
            {
              title: '[2019-04-09]西藏人民广播电台《藏家小康路》获奖',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-10]普兰县宣传部集中学习《中华人民共和国宪法》',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-11]普兰县政法支部举办“名族团结月”演讲比赛',
              data: ['当地农牧民群众通过经济林果种植增加收入，形成“山上放牧收国土，山下果树来致富”的格局。']
            },
            {
              title: '[2019-04-09]西藏人民广播电台《藏家小康路》获奖',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-10]普兰县宣传部集中学习《中华人民共和国宪法》',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-11]普兰县政法支部举办“名族团结月”演讲比赛',
              data: ['当地农牧民群众通过经济林果种植增加收入，形成“山上放牧收国土，山下果树来致富”的格局。']
            },
            {
              title: '[2019-04-09]西藏人民广播电台《藏家小康路》获奖',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-10]普兰县宣传部集中学习《中华人民共和国宪法》',
              data: ['阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。']
            },
            {
              title: '[2019-04-11]普兰县政法支部举办“名族团结月”演讲比赛',
              data: ['当地农牧民群众通过经济林果种植增加收入，形成“山上放牧收国土，山下果树来致富”的格局。']
            },
          ]
        }
        keyExtractor={(item, index) => item + index}
      />
    );
  }

}
