import { ReactNode, useEffect, useState } from "react";

const countDownDate = new Date("Apr 1, 2023 07:00:00").getTime();

export const CountDown = ({ children }: { children: ReactNode }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countDownFinished, setCountDownFinished] = useState(false);

  useEffect(() => {
    const x = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(x);
        setCountDownFinished(true);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <>
      {countDownFinished ? (
        children
      ) : (
        <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
          <div className="text-xl font-semibold sm:text-5xl">
            <span>{days}d </span>
            <span>{hours}h </span>
            <span>{minutes}m </span>
            <span>{seconds}s </span>
          </div>
        </div>
      )}
    </>
  );
};
