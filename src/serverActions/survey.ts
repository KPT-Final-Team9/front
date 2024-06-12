'use server';

import { redirect } from 'next/navigation';
import { baseApis } from '@/services/api';
import { FormInput } from '@/app/(after-login)/user-survey/_components/RoomSurveyDetail';

export const updateSurveyScore = async (formData: FormInput) => {
  try {
    const fetchInstance = await baseApis();
    await fetchInstance(`/scores/${formData.scoreId}`, {
      cache: 'no-store',
      method: 'PATCH',
      body: JSON.stringify({
        score: formData.score,
        comment: formData.opinion,
      }),
    }).then(res => res.json());
  } catch (error) {
    console.error('Error fetching Unsplash data:', error);
  }
  redirect('/user-survey/scores?id=done');
};
