import { useEffect, useState } from 'react';

export default function StarryBackground() {
  const [stars, setStars] = useState<{ id: number; left: string; size: string; duration: string; delay: string; opacity: string }[]>([]);

  useEffect(() => {
    // Generate only a few stars for a subtle, premium effect, not too overwhelming
    const newStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 20 + 10}s`,
      delay: `${Math.random() * 15}s`,
      opacity: `${Math.random() * 0.7 + 0.1}`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            opacity: star.opacity,
            bottom: '-10px'
          }}
        />
      ))}
    </div>
  );
}
