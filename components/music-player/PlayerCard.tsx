"use client";
import {
  musicPlayerData,
  MusicPlayerData,
} from "@/data/music-player/musicPlayerData";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import HeaderCard from "./HeaderCard";
import Tools from "./Tools";
import Track from "./Track";

export default function PlayerCard() {
  const [musicData, setMusicData] =
    useState<MusicPlayerData[]>(musicPlayerData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentTrack = musicData[currentIndex];
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPause, setIsPause] = useState<boolean>(true);
  const [random, setRandom] = useState<boolean>(false);
  const interval = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsPause(true);
      setCurrentTime(0);
    });
  }, [currentTrack.id]);
  function randomChoice() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * (musicData.length - 1 - 0 + 1));
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
  }
  function setIntervalFunc() {
    interval.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev + 1 > currentTrack.duration) {
          if (random) {
            randomChoice();
            return 0;
          } else {
            setCurrentIndex((prev) => {
              if (prev + 1 === musicData.length - 1) {
                return 0;
              } else {
                return prev + 1;
              }
            });
            return 0;
          }
        } else {
          return prev + 1;
        }
      });
    }, 1000);
  }
  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    if (isPause) {
      return;
    } else {
      interval.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev + 1 > currentTrack.duration) {
            if (random) {
              randomChoice();
              return 0;
            } else {
              setCurrentIndex((prev) => {
                if (prev + 1 === musicData.length - 1) {
                  return 0;
                } else {
                  return prev + 1;
                }
              });
              return 0;
            }
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    }
    return () => {
      if (interval.current) {
        clearTimeout(interval.current);
      }
    };
  }, [isPause, currentTrack, random, musicData.length]);

  return (
    <div
      className={cn(
        "rounded-[20px] border bg-mp-surface max-w-90 w-full border-mp-border p-6 shadow-[0_24px_60px_rgba(124,106,255,0.08)] flex flex-col gap-5",
      )}
    >
      <HeaderCard
        setMusicData={setMusicData}
        id={currentTrack.id}
        like={currentTrack.like}
        name={currentTrack.name}
        author={currentTrack.author}
        bg={currentTrack.bg}
      />
      <Track
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        duration={currentTrack.duration}
        interval={interval}
        isPause={isPause}
        setIntervalFunc={setIntervalFunc}
      />

      <Tools
        randomChoice={randomChoice}
        setCurrentIndex={setCurrentIndex}
        random={random}
        setRandom={setRandom}
        isPause={isPause}
        setIsPause={setIsPause}
      />
    </div>
  );
}
