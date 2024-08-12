import Background from "@/presentation/components/background";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Dynamic = {
  Banner: dynamic(() => import("@/presentation/layouts/banner")),
  Projects: dynamic(() => import("@/presentation/layouts/projects"), { ssr: true })
}

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between py-24 px-0 sm:px-4 md:px-8 lg:px-24">
        <Suspense fallback={(<h1>Loading...</h1>)} >
          <Dynamic.Banner />
          <Dynamic.Projects />
        </Suspense>
      </main>
    </>
  );
}
