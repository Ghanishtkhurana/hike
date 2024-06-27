import Image from "next/image";
import { Inter } from "next/font/google";
import { redirect } from "next/dist/server/api-utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="">Home</div>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};
