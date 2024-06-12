'use client'
import { Suspense, useEffect, useState } from "react";
import SuspenseAnimation from "./SuspenseAnimation";

export const SuspenseLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<SuspenseAnimation />}>
      {isReady ? (
        <div>
          {children}
        </div>
      ) : (
        <SuspenseAnimation />
      )}
    </Suspense>
  );
};

export default SuspenseLayout;
