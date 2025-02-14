import { formatNumber } from "@/util";
import clsx from "clsx";
import Link from "next/link";

export function Leaderboard() {
  const list = [
    {
      id: "u12-321-213-321",
      rank: 1,
      userId: "lumi_123",
      userHandle: "lumi_123",
      userName: "Lumi",
      point: 12200300,
    },
    {
      id: "u12-321-213-322",
      rank: 2,
      userId: "ron_ron_0x0x",
      userHandle: "ron_ron_0x0x",
      userName: "0xRon",
      point: 1020020,
    },
    {
      id: "u12-321-213-323",
      rank: 3,
      userId: "0xdode",
      userHandle: "0xdode",
      userName: "Dode",
      point: 20042,
    },
    {
      id: "u12-321-213-324",
      rank: 4,
      userId: "shirayuki",
      userHandle: "shirayuki",
      userName: "Shirayuki",
      point: 2003,
    },
    {
      id: "u12-321-213-325",
      rank: 5,
      userId: "kalakolololi",
      userHandle: "kalakolololi",
      userName: "Kalakolololi",
      point: 2002,
    },
    {
      id: "u12-321-213-326",
      rank: 6,
      userId: "rei_ayanami",
      userHandle: "rei_ayanami",
      userName: "Rei Ayanami",
      point: 2001,
    },
    {
      id: "u12-321-213-327",
      rank: 7,
      userId: "asuka_langley",
      userHandle: "asuka_langley",
      userName: "Asuka Langley",
      point: 1590,
    },
    {
      id: "u12-321-213-328",
      rank: 8,
      userId: "shinji_ikari",
      userHandle: "shinji_ikari",
      userName: "Shinji Ikari",
      point: 1290,
    },
    {
      id: "u12-321-213-329",
      rank: 9,
      userId: "kaworu_nagisa",
      userHandle: "kaworu_nagisa",
      userName: "Kaworu Nagisa",
      point: 1190,
    },
    {
      id: "u12-321-213-330",
      rank: 10,
      userId: "misato_katsuragi",
      userHandle: "misato_katsuragi",
      userName: "Misato Katsuragi",
      point: 1022,
    },
    {
      id: "u12-321-213-331",
      rank: 11,
      userId: "ritsuko_akagi",
      userHandle: "ritsuko_akagi",
      userName: "Ritsuko Akagi",
      point: 973,
    },
    {
      id: "u12-321-213-332",
      rank: 12,
      userId: "gendo_ikari",
      userHandle: "gendo_ikari",
      userName: "Gendo Ikari",
      point: 542,
    },
    {
      id: "u12-321-213-333",
      rank: 13,
      userId: "toji_suzuhara",
      userHandle: "toji_suzuhara",
      userName: "Toji Suzuhara",
      point: 541,
    },
    {
      id: "u12-321-213-334",
      rank: 14,
      userId: "kensuke_aida",
      userHandle: "kensuke_aida",
      userName: "Kensuke Aida",
      point: 540,
    },
    {
      id: "u12-321-213-335",
      rank: 15,
      userId: "bulbasaur",
      userHandle: "bulbasaur",
      userName: "Bulbasaur",
      point: 539,
    },
    {
      id: "u12-321-213-336",
      rank: 16,
      userId: "ivysaur",
      userHandle: "ivysaur",
      userName: "Ivysaur",
      point: 538,
    },
    {
      id: "u12-321-213-337",
      rank: 17,
      userId: "venusaur",
      userHandle: "venusaur",
      userName: "Venusaur",
      point: 537,
    },
    {
      id: "u12-321-213-338",
      rank: 18,
      userId: "charmander",
      userHandle: "charmander",
      userName: "Charmander",
      point: 536,
    },
    {
      id: "u12-321-213-339",
      rank: 19,
      userId: "charmeleon",
      userHandle: "charmeleon",
      userName: "Charmeleon",
      point: 535,
    },
    {
      id: "u12-321-213-340",
      rank: 20,
      userId: "charizard",
      userHandle: "charizard",
      userName: "Charizard",
      point: 534,
    },
    {
      id: "u12-321-213-341",
      rank: 21,
      userId: "squirtle",
      userHandle: "squirtle",
      userName: "Squirtle",
      point: 533,
    },
    {
      id: "u12-321-213-342",
      rank: 22,
      userId: "wartortle",
      userHandle: "wartortle",
      userName: "Wartortle",
      point: 532,
    },
    {
      id: "u12-321-213-343",
      rank: 23,
      userId: "blastoise",
      userHandle: "blastoise",
      userName: "Blastoise",
      point: 531,
    },
    {
      id: "u12-321-213-344",
      rank: 24,
      userId: "caterpie",
      userHandle: "caterpie",
      userName: "Caterpie",
      point: 530,
    },
    {
      id: "u12-321-213-345",
      rank: 25,
      userId: "metapod",
      userHandle: "metapod",
      userName: "Metapod",
      point: 529,
    },
    {
      id: "u12-321-213-346",
      rank: 26,
      userId: "butterfree",
      userHandle: "butterfree",
      userName: "Butterfree",
      point: 528,
    },
    {
      id: "u12-321-213-347",
      rank: 27,
      userId: "weedle",
      userHandle: "weedle",
      userName: "Weedle",
      point: 527,
    },
    {
      id: "u12-321-213-348",
      rank: 28,
      userId: "kakuna",
      userHandle: "kakuna",
      userName: "Kakuna",
      point: 526,
    },
    {
      id: "u12-321-213-349",
      rank: 29,
      userId: "beedrill",
      userHandle: "beedrill",
      userName: "Beedrill",
      point: 525,
    },
    {
      id: "u12-321-213-350",
      rank: 30,
      userId: "pidgey",
      userHandle: "pidgey",
      userName: "Pidgey",
      point: 524,
    },
  ];

  return (
    <div className="flex flex-col gap-10 h-full">
      <h1 className="text-4xl text-white font-black header-text-border">
        LEADERBOARD
      </h1>

      <div className="h-full overflow-y-auto max-h-[660px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          {list.map((item) => (
            <div
              key={item.id}
              className={clsx([
                "pl-6 pr-4 py-4 rounded-2xl shadow relative text-white h-40",
                item.rank === 1 &&
                  "bg-gradient-to-r from-yellow-300 to-yellow-500 text-black",
                item.rank === 2 && "bg-gradient-to-r from-gray-400 to-gray-500",
                item.rank === 3 &&
                  "bg-gradient-to-r from-orange-800 to-orange-500",
                item.rank > 3 && "bg-black/5 !text-black",
              ])}
            >
              <div
                className={clsx([
                  "text-lg w-10 h-10 -left-4 -top-4 absolute flex justify-center items-center rounded-full border border-white font-bold text-white header-text-border",
                  item.rank === 1 && "bg-yellow-500",
                  item.rank === 2 && "bg-gray-500",
                  item.rank === 3 && "bg-orange-500",
                  item.rank > 3 && "bg-gray-200",
                ])}
              >
                {item.rank}
              </div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg space-x-3 hover:underline hover:underline-offset-4"
                href={`https://x.com/${item.userHandle}`}
              >
                <span className="text-3xl font-bold">𝕏</span>
                <span className="font-bold space-x-2">
                  <span className="text-2xl break-all tracking-tight">
                    {item.userName}
                  </span>
                  <small>(@{item.userHandle})</small>
                </span>
              </Link>
              <div className="text-3xl font-semibold text-right absolute right-4 bottom-4">
                {formatNumber(item.point)}{" "}
                <small className="text-sm">Point</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
