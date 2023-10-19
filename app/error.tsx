"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
      <Image src="./error-icon.svg" alt="error" width={150} height={100} />
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-md text-sm font-medium bg-red-200 border-2 border-red-200 text-red-500 hover:bg-transparent hover:border-red-500"
      >
        Try again
      </button>
    </div>
  );
}
