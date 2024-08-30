import Footer from "@/presentation/components/footer";
import LoadingView from "@/presentation/components/loadingView";
import dynamic from "next/dynamic";

const Dynamic = {
  Globe: dynamic(() => import("@/presentation/components/globe"), { ssr: false }),
  Banner: dynamic(() => import("@/presentation/layouts/banner")),
  Projects: dynamic(() => import("@/presentation/layouts/projects"), { ssr: true }),
}

export default function Home() {
  return (
    <>
      <LoadingView />
      <Dynamic.Globe />
      <Dynamic.Banner />
      <Dynamic.Projects />
      <Footer />
    </>
  );
}
