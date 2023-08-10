import Layout from 'components/Global/template/Layout';
import ReportCalendar from 'components/Report/template/ReportCalendar';
import ReportSummary from 'components/Report/template/ReportSummary';
import React from 'react';

function ReportScreen() {
  return (
    <Layout>
      <ReportCalendar />
      <ReportSummary />
    </Layout>
  );
}

export default ReportScreen;
