'use client';
import React, { useEffect } from 'react';
import SingleCategoryHorizontalBarChart from '@chart/bar-chart/SingleCategoryHorizontalBarChart';
import CommonChartLabel from '@Monocles/chart-label/CommonChartLabel';
import { UseMediaQuery } from '@/hooks/index';
import { RENT_DATA } from '@/constants/index';
import { ChartDataItem } from '@/types/api';

const ChartBox = ({ chartData, text, accentColor }: { chartData: any; text: string; accentColor: string }) => {
  const barChartSize = UseMediaQuery({ defaultSize: 27, changedSize: 21 });

  return (
    <div className="flex grow  flex-col rounded-box border-[1.5px] p-4">
      <p className="mb-2 text-body1">{text}</p>
      <div className="flex flex-row ">
        <div className="mr-2 flex flex-col justify-between py-[16px] desktop:py-2">
          <CommonChartLabel
            inlineBarColor={accentColor}
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

export default function RowBarComp({ chartData }: { chartData: ChartDataItem[] }) {
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
  const rentDataArray = Object.values(RENT_DATA);

  return (
    <div>
      <div className="flex flex-col gap-6 desktop:flex-row">
        {rentDataArray.map((val, index) => {
          const matchingData = chartData.find(data => data.name === val.title);
          return (
            <ChartBox
              key={index}
              chartData={[chartData[index]]}
              text={val.title}
              accentColor={val.color}
            />
          );
        })}
      </div>
    </div>
  );
}
