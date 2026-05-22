import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a numeric value from 0 to `end`.
 *
 * Props:
 *  end        {number|string}  Target value to count up to (required)
 *  duration   {number}         Animation duration in ms         (default: 1400)
 *  delay      {number}         Delay before starting in ms      (default: 0)
 *  prefix     {string}         Text rendered before the number  (default: "")
 *  suffix     {string}         Text rendered after the number   (default: "")
 *  className  {string}         Class names for the wrapper span (default: "")
 *  once       {boolean}        Only animate the first time the  (default: true)
 *                              element enters the viewport
 *
 * Usage:
 *  <CountUp end={312} />
 *  <CountUp end={99.9} suffix="%" duration={2000} />
 *  <CountUp end="$1,200" />   ← non-numeric: renders as-is, no animation
 */
const CountUp = ({
  end,
  duration = 1400,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  once = true,
}) => {
  const numericEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
  const isNumeric = !isNaN(numericEnd);

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // Trigger when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasStarted)) {
          setTimeout(() => setHasStarted(true), delay);
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, hasStarted, once]);

  // Run the animation
  useEffect(() => {
    if (!hasStarted || !isNumeric) return;

    // Reset for re-runs (once: false)
    setCount(0);

    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericEnd * eased;

      // Keep decimals if the target has them
      setCount(
        Number.isInteger(numericEnd)
          ? Math.round(current)
          : parseFloat(current.toFixed(1)),
      );

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, numericEnd, duration, isNumeric]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {isNumeric ? `${prefix}${count}${suffix}` : end}
    </span>
  );
};

export default CountUp;
