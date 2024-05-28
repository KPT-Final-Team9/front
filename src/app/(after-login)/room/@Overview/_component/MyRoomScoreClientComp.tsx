// 유저가 선택하는 기간에 따라서 점수가 달라지기 때문에, client 컴포넌트가 되는 것이 맞다고 판단함.
'use client';
import { RoomScoreBg } from '@/asset/Icons';
import { ROOM_SCORE_EMOJI } from '@/constants';
import { RoomScoreGradeEmoji } from '@/constants';
// TODO: 로딩 대응 정해지고 수정하기
import { Spinner } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';

const MOCK_SCORE = 63;
const EMOJI_DEFAULT_SIZE = '60px';

export default function MyRoomScoreClientComp() {
  // TODO: React Query로 점수 받아오는 API 로직 따라서 React Query onSuccess로 넘기거나 SSR로 처리하기
  const [roomScore, setRoomScore] = useState<number | undefined>(undefined);
  const [roomScoreEmoji, setRoomScoreEmoji] = useState<RoomScoreGradeEmoji | undefined>(undefined);

  // TODO: 서버에서 데이터 fetching 하는 동작을 Mocking 해둠.
  useEffect(() => {
    setTimeout(() => {
      setRoomScore(MOCK_SCORE);
    }, 100);
  }, []);

  // TODO: React Query로 점수 받아오는 API 로직 따라서 React Query onSuccess로 넘기거나 SSR로 처리하기
  useEffect(() => {
    if (roomScore === undefined) return;

    if (roomScore >= 81) {
      setRoomScoreEmoji(RoomScoreGradeEmoji.EXCELLENT);
    } else if (roomScore >= 61) {
      setRoomScoreEmoji(RoomScoreGradeEmoji.GOOD);
    } else if (roomScore >= 41) {
      setRoomScoreEmoji(RoomScoreGradeEmoji.NORMAL);
    } else if (roomScore >= 21) {
      setRoomScoreEmoji(RoomScoreGradeEmoji.NOT_BAD);
    } else {
      setRoomScoreEmoji(RoomScoreGradeEmoji.BAD);
    }
  }, [roomScore]);

  return (
    <div className="relative flex h-full w-full justify-between">
      <div className="justify-center align-middle text-h1 text-white">
        {roomScore ? (
          MOCK_SCORE + '점'
        ) : (
          <Spinner
            className="mt-2 h-10 text-white"
            size="3"
          />
        )}
      </div>
      <div className="relative flex h-[90px] w-[90px] self-end">
        <div className="icon-wrapper absolute top-[25%] z-10">
          {roomScoreEmoji ? (
            <img
              src={ROOM_SCORE_EMOJI[roomScoreEmoji].src}
              alt={ROOM_SCORE_EMOJI[roomScoreEmoji].alt}
              width={EMOJI_DEFAULT_SIZE}
              height={EMOJI_DEFAULT_SIZE}
            />
          ) : (
            <Spinner
              className="mx-auto my-auto text-white"
              size="3"
            />
          )}
        </div>
        <div className="absolute bottom-0 right-0 z-0 ">
          <RoomScoreBg />
        </div>
      </div>
    </div>
  );
}
