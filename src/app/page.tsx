import { GirlsSection } from "@/components/girls-section";
import { Leaderboard } from "@/components/leaderboard";
import { Logo, LogoText } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="px-4 py-20 grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-8 min-h-svh">
        <div className="bg-purple-900 rounded-2xl lg:row-span-2 relative overflow-hidden">
          <Image
            src={"/hero-background.jpg"}
            width={800}
            height={600}
            alt="Hero background"
            loading="eager"
            className="w-full h-full absolute object-cover opacity-50 object-center"
          />
          <div className="flex flex-col items-center space-y-4 h-full justify-center relative z-10 py-20">
            <Logo width={200} height={200} />
            <LogoText />
            <h1 className="text-4xl text-white font-black logo-text-border">
              Dashboard
            </h1>

            <div className="pt-10">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/pimpfun_ai"
                className="text-white text-lg align-middle hover:underline hover:underline-offset-4 font-bold"
              >
                <span className="text-2xl">𝕏</span> @pimpfun_ai
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden lg:col-span-2">
          <GirlsSection />
        </div>
        <div className="bg-white rounded-2xl p-8 lg:row-span-2 lg:col-span-2">
          <Leaderboard />
        </div>
        <div className="bg-white rounded-2xl p-8 row-span-1">
          <h1 className="text-4xl text-white font-black header-text-border">
            Ref
          </h1>
        </div>
      </div>
    </div>
  );
}
