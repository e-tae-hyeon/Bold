import colors from 'common/styles/colors';
import React from 'react';
import {
  Calendar as CalendarComp,
  CalendarProps as CalendarCompProps,
  LocaleConfig,
} from 'react-native-calendars';

type CalendarProps = CalendarCompProps & {};

LocaleConfig.locales.ko = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'ko';

function Calendar({...rest}: CalendarProps) {
  return (
    <CalendarComp
      {...rest}
      theme={{
        arrowColor: colors.black,
        indicatorColor: colors.black,
        backgroundColor: colors.gray[100],
        selectedDayBackgroundColor: colors.black,
        selectedDayTextColor: colors.white,
        textMonthFontFamily: 'Pretendard-Bold',
        textMonthFontSize: 18,
      }}
      hideExtraDays
      monthFormat="yy년 M월"
    />
  );
}

export default Calendar;
