import clsx from "clsx";

export function Leaderboard() {
  const list = [
    {
      id: "u12-321-213-321",
      rank: 1,
      userId: "lumi_123",
      userName: "Lumi",
      points: 12200300,
    },
    {
      id: "u12-321-213-322",
      rank: 2,
      userId: "ron_ron_0x0x",
      userName: "0xRon",
      points: 1020020,
    },
    {
      id: "u12-321-213-323",
      rank: 3,
      userId: "0xdode",
      userName: "Dode",
      points: 20042,
    },
    {
      id: "u12-321-213-324",
      rank: 4,
      userId: "shirayuki",
      userName: "Shirayuki",
      points: 2003,
    },
    {
      id: "u12-321-213-325",
      rank: 5,
      userId: "kalakolololi",
      userName: "Kalakolololi",
      points: 2002,
    },
    {
      id: "u12-321-213-326",
      rank: 6,
      userId: "rei_ayanami",
      userName: "Rei Ayanami",
      points: 2001,
    },
    {
      id: "u12-321-213-327",
      rank: 7,
      userId: "asuka_langley",
      userName: "Asuka Langley",
      points: 1590,
    },
    {
      id: "u12-321-213-328",
      rank: 8,
      userId: "shinji_ikari",
      userName: "Shinji Ikari",
      points: 1290,
    },
    {
      id: "u12-321-213-329",
      rank: 9,
      userId: "kaworu_nagisa",
      userName: "Kaworu Nagisa",
      points: 1190,
    },
    {
      id: "u12-321-213-330",
      rank: 10,
      userId: "misato_katsuragi",
      userName: "Misato Katsuragi",
      points: 1022,
    },
    {
      id: "u12-321-213-331",
      rank: 11,
      userId: "ritsuko_akagi",
      userName: "Ritsuko Akagi",
      points: 973,
    },
    {
      id: "u12-321-213-332",
      rank: 12,
      userId: "gendo_ikari",
      userName: "Gendo Ikari",
      points: 542,
    },
    {
      id: "u12-321-213-333",
      rank: 13,
      userId: "toji_suzuhara",
      userName: "Toji Suzuhara",
      points: 541,
    },
    {
      id: "u12-321-213-334",
      rank: 14,
      userId: "kensuke_aida",
      userName: "Kensuke Aida",
      points: 540,
    },
    {
      id: "u12-321-213-335",
      rank: 15,
      userId: "bulbasaur",
      userName: "Bulbasaur",
      points: 539,
    },
    {
      id: "u12-321-213-336",
      rank: 16,
      userId: "ivysaur",
      userName: "Ivysaur",
      points: 538,
    },
    {
      id: "u12-321-213-337",
      rank: 17,
      userId: "venusaur",
      userName: "Venusaur",
      points: 537,
    },
    {
      id: "u12-321-213-338",
      rank: 18,
      userId: "charmander",
      userName: "Charmander",
      points: 536,
    },
    {
      id: "u12-321-213-339",
      rank: 19,
      userId: "charmeleon",
      userName: "Charmeleon",
      points: 535,
    },
    {
      id: "u12-321-213-340",
      rank: 20,
      userId: "charizard",
      userName: "Charizard",
      points: 534,
    },
    {
      id: "u12-321-213-341",
      rank: 21,
      userId: "squirtle",
      userName: "Squirtle",
      points: 533,
    },
    {
      id: "u12-321-213-342",
      rank: 22,
      userId: "wartortle",
      userName: "Wartortle",
      points: 532,
    },
    {
      id: "u12-321-213-343",
      rank: 23,
      userId: "blastoise",
      userName: "Blastoise",
      points: 531,
    },
    {
      id: "u12-321-213-344",
      rank: 24,
      userId: "caterpie",
      userName: "Caterpie",
      points: 530,
    },
    {
      id: "u12-321-213-345",
      rank: 25,
      userId: "metapod",
      userName: "Metapod",
      points: 529,
    },
    {
      id: "u12-321-213-346",
      rank: 26,
      userId: "butterfree",
      userName: "Butterfree",
      points: 528,
    },
    {
      id: "u12-321-213-347",
      rank: 27,
      userId: "weedle",
      userName: "Weedle",
      points: 527,
    },
    {
      id: "u12-321-213-348",
      rank: 28,
      userId: "kakuna",
      userName: "Kakuna",
      points: 526,
    },
    {
      id: "u12-321-213-349",
      rank: 29,
      userId: "beedrill",
      userName: "Beedrill",
      points: 525,
    },
    {
      id: "u12-321-213-350",
      rank: 30,
      userId: "pidgey",
      userName: "Pidgey",
      points: 524,
    },
  ];

  return (
    <div className="flex flex-col gap-10 h-full">
      <h1 className="text-4xl text-white font-black header-text-border">
        LEADERBOARD
      </h1>

      <div className="h-full overflow-y-auto max-h-[660px]">
        <div className="grid grid-cols-2 gap-5 p-4">
          {list.map((item) => (
            <div
              key={item.id}
              className={clsx([
                "pl-6 pr-4 py-4 rounded-2xl shadow relative text-white",
                item.rank === 1 && "bg-yellow-600",
                item.rank === 2 && "bg-gray-600",
                item.rank === 3 && "bg-orange-600",
                item.rank > 3 && "bg-black/5 text-black",
              ])}
            >
              <div
                className={clsx([
                  "text-lg w-10 h-10 -left-4 -top-4 absolute flex justify-center items-center rounded-full border border-white",
                  item.rank === 1 && "bg-yellow-500",
                  item.rank === 2 && "bg-gray-500",
                  item.rank === 3 && "bg-orange-500",
                  item.rank > 3 && "bg-gray-200",
                ])}
              >
                {item.rank}
              </div>
              <div className="text-lg space-x-3">
                <span className="text-3xl font-bold">𝕏</span>
                <span className="font-bold space-x-2">
                  <span className="text-2xl break-all tracking-tight">
                    {item.userName}
                  </span>
                  <small>(@{item.userId})</small>
                </span>
              </div>
              <div className="text-lg">{item.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
