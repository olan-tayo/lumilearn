"use client";

import LumilearnPageLoader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Main = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/discover");
  }, [router]);
  return (
    <div className="flex justify-center items-center h-screen">
      <LumilearnPageLoader />
    </div>
  );
};

export default Main;
