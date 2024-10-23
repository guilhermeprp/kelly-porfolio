import Footer from "@/presentation/components/footer";
import Globe from "@/presentation/components/globe";
import LoadingView from "@/presentation/components/loadingView";
import Banner from "@/presentation/layouts/banner";
import dynamic from "next/dynamic";
import Head from "next/head";

const Dynamic = {
  Projects: dynamic(() => import("@/presentation/layouts/projects"), { ssr: true }),
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href={process.env.HOST_NAME + '/background.jpg'} />
      </Head>
      <LoadingView />
      <Globe />
      <Banner />
      <Dynamic.Projects />
      <Footer />
    </>
  );
}
