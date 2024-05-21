'use client';
import { useEffect } from 'react';
import axios from 'axios';
import CircleProgressBar from '@Atoms/progress-bar/CircleProgressBar';

export default function Page() {
  async function getCalendarData() {
    const res = await axios.get('/api/exam');
    console.log(res);
  }
  useEffect(() => {
    getCalendarData();
  }, []);
  return (
    <div>
      <CircleProgressBar></CircleProgressBar>
    </div>
  );
}
