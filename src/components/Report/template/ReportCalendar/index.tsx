import Calendar from 'components/Global/template/Calendar';
import React from 'react';
import {View} from 'react-native';
import {DateData} from 'react-native-calendars';
import useRecordStore from 'stores/useRecordStore';

function ReportCalendar() {
  const {selectedDateString, selectDateString} = useRecordStore();

  const handlePressDay = (date: DateData) => {
    selectDateString(date.dateString);
  };

  return (
    <View className="p-8">
      <Calendar
        onDayPress={handlePressDay}
        markedDates={{[selectedDateString]: {selected: true}}}
      />
    </View>
  );
}

export default ReportCalendar;
