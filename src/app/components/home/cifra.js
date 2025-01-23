'use client';
import { CountUp } from 'use-count-up';

export const Cifra = ({ title, num, children }) => {
  return (
    <article className="w-40 h-40">
      <div className="flex flex-col justify-center items-center">
        <div>{children}</div>
        <span className="text-4xl font-bold">
          <CountUp isCounting end={num} duration={3.2} />
        </span>

        <span className="text-2xl font-bold">{title}</span>
      </div>
    </article>
  );
};
