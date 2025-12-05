"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Main = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/discover");
  }, [router]);
  return <div>Main</div>;
};

export default Main;
