import { useEffect, useState } from "react";

export function useCountDown(mins: number) {
  const [secs, setSecs] = useState(mins * 60);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (secs > 0) {
      const progressLevel = setInterval(() => {
        setProgress(((secs - 1) * 100) / (mins * 60));
        setSecs(secs - 1);
      }, 1000);
      return () => clearInterval(progressLevel);
    }
  }, [secs, progress, mins]);

  const min = secs / 60;
  const floorMin = Math.floor(min);
  const sec = secs % 60;
  const minutes = floorMin < 10 ? "0" + floorMin : floorMin;
  const seconds = sec < 10 ? "0" + sec : sec;

  return { minutes, seconds, progress };
}
