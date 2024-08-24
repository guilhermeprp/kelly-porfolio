import Background from "@/presentation/components/background";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Dynamic = {
  Globe: dynamic(() => import("@/presentation/components/globe"), { ssr: false }),
  Banner: dynamic(() => import("@/presentation/layouts/banner")),
  Projects: dynamic(() => import("@/presentation/layouts/projects"), { ssr: true })
}

export default function Home() {
  return (
    <>
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between py-24 px-0 sm:px-4 md:px-8 lg:px-24">
        <Dynamic.Globe />
        <Dynamic.Banner />
        <Dynamic.Projects />
        <Background />
      </main>
    </>
  );
}
