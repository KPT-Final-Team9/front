'use client';

import React, { useEffect } from 'react';
import SingleCategoryHorizontalBarChart from '@chart/bar-chart/SingleCategoryHorizontalBarChart';
import CommonChartLabel from '@Monocles/chart-label/CommonChartLabel';
import { UseMediaQuery } from '@/hooks/index';

const Box = ({ chartData, text, accentColor }: { chartData: any; text: string; accentColor: string }) => {
  const barChartSize = UseMediaQuery({ defaultSize: 27, changedSize: 21 });

  return (
    <div className="flex w-[295px] grow  flex-col rounded-box border-[1.5px] p-4 desktop:w-[394px] ">
      <p className="mb-2 text-body1">{text}</p>
      <div className="flex flex-row ">
        <div className="mr-2 flex flex-col justify-between py-[16px] desktop:py-2">
          <CommonChartLabel
            inlienBarColor={accentColor}
            size={'md'}
            textType={'default'}
            text="내호실"
          />
          <CommonChartLabel
            boxColor={'gray'}
            size={'md'}
            textType={'default'}
            text="타호실"
          />
        </div>
        <div className="h-[90px] min-h-[40px] grow">
          <SingleCategoryHorizontalBarChart
            size={barChartSize}
            chartData={chartData}
            categoryKey="name"
            accentColor={accentColor}
          />
        </div>
      </div>
    </div>
  );
};

export default function RowBarComp({ chartData }: { chartData: object[]; isLoading: boolean }) {
  useEffect(() => {
    const awaitTime = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('hello');
      }, 3000);
    });

    const fetchData = async () => {
      const result = await awaitTime;
    };

    fetchData();
  }, []);
  const textArray = [
    { title: '임대료', color: '#2461e6' },
    { title: '재계약률', color: '#67e8f9' },
    { title: '공실률', color: '#ffb775' },
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 desktop:flex-row">
        {chartData.map((val, index) => {
          return (
            <Box
              key={index}
              chartData={[val]}
              text={textArray[index % textArray.length]['title']}
              accentColor={textArray[index % textArray.length]['color']}
            />
          );
        })}
      </div>
    </div>
  );
}
