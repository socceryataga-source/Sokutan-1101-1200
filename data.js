const quizData = [
  {
    "id": 1101,
    "word": "recipe",
    "choices": [
      "調理法",
      "階段",
      "材料",
      "ホーム"
    ],
    "correct": 0,
    "sentence": "I found the recipe on the internet and it is really delicious.",
    "jp": "インターネットでレシピを見つけたのですが，本当においしい。"
  },
  {
    "id": 1102,
    "word": "ingredient",
    "choices": [
      "石炭",
      "調理法",
      "材料",
      "協力"
    ],
    "correct": 2,
    "sentence": "You can buy all the ingredients at your local supermarket.",
    "jp": "材料はすべて地元のスーパーで買える。"
  },
  {
    "id": 1103,
    "word": "platform",
    "choices": [
      "ホーム",
      "降雨",
      "ハリケーン",
      "湿気"
    ],
    "correct": 0,
    "sentence": "The train will leave from platform 1.",
    "jp": "電車は1番ホームから出発します。"
  },
  {
    "id": 1104,
    "word": "currently",
    "choices": [
      "現在",
      "もともと",
      "直接に",
      "本質的に"
    ],
    "correct": 0,
    "sentence": "The new flavor of coffee is currently available at all our stores.",
    "jp": "コーヒーの新フレーバーは現在弊社全店で販売されています。"
  },
  {
    "id": 1105,
    "word": "admit",
    "choices": [
      "に知らせる",
      "に割り当てる",
      "を評価する",
      "を認める"
    ],
    "correct": 3,
    "sentence": "I admit that I had the last cookie.",
    "jp": "私が最後のクッキーを食べたことを認める。"
  },
  {
    "id": 1106,
    "word": "acknowledge",
    "choices": [
      "を認める",
      "を浸す",
      "を吸収する",
      "を開始する"
    ],
    "correct": 0,
    "sentence": "He acknowledged his fault.",
    "jp": "彼は自分の過失を認めた。"
  },
  {
    "id": 1107,
    "word": "stair",
    "choices": [
      "階段",
      "重荷",
      "方法",
      "任命"
    ],
    "correct": 0,
    "sentence": "Please use the stairs to reach the second floor.",
    "jp": "2階に行くには階段を使ってください。"
  },
  {
    "id": 1108,
    "word": "assess",
    "choices": [
      "を評価する",
      "を実行する",
      "を誓う",
      "を認める"
    ],
    "correct": 0,
    "sentence": "The mechanic quickly assessed the damage to the car.",
    "jp": "整備士はすぐに車の損傷を査定した。"
  },
  {
    "id": 1109,
    "word": "cooperation",
    "choices": [
      "計画",
      "機械",
      "協力",
      "生態系"
    ],
    "correct": 2,
    "sentence": "Due to the cooperation between the two companies, we have both expanded our markets.",
    "jp": "両社の協力により，双方とも市場を拡大することができた。"
  },
  {
    "id": 1110,
    "word": "rural",
    "choices": [
      "夢中で",
      "余分の",
      "田舎の",
      "熱帯の"
    ],
    "correct": 2,
    "sentence": "More and more people are moving from rural areas to cities.",
    "jp": "より多くの人々が田舎の地域から都会に移り住むようになっている。"
  },
  {
    "id": 1111,
    "word": "absorb",
    "choices": [
      "を指定する《as",
      "を監視する",
      "を吸収する",
      "を育む"
    ],
    "correct": 2,
    "sentence": "This new material absorbs water, so it is really useful in the kitchen.",
    "jp": "この新素材は水を吸収するので，キッチンでとても重宝している。"
  },
  {
    "id": 1112,
    "word": "crazy",
    "choices": [
      "貴重な",
      "田舎の",
      "夢中で",
      "初めの"
    ],
    "correct": 2,
    "sentence": "My sister is crazy about gardening.",
    "jp": "妹はガーデニングに夢中だ。"
  },
  {
    "id": 1113,
    "word": "coal",
    "choices": [
      "生物学",
      "近所",
      "規定",
      "石炭"
    ],
    "correct": 3,
    "sentence": "There used to be many coal mines in the north of England.",
    "jp": "かつてイングランド北部には多くの炭鉱があった。"
  },
  {
    "id": 1114,
    "word": "soak",
    "choices": [
      "を浸す",
      "を引きつける",
      "を更新する",
      "を持続させる"
    ],
    "correct": 0,
    "sentence": "It was raining heavily, so I got really soaked.",
    "jp": "雨がひどかったので，本当にびしょ濡れになった。"
  },
  {
    "id": 1115,
    "word": "excess",
    "choices": [
      "整然とした",
      "余分の",
      "用心深い",
      "気づいて《of"
    ],
    "correct": 1,
    "sentence": "You have to pay for any excess luggage when you travel on an airplane.",
    "jp": "飛行機での旅行の際には、超過手荷物には料金を支払わなければならない。"
  },
  {
    "id": 1116,
    "word": "rainfall",
    "choices": [
      "慣習",
      "降雨",
      "離婚",
      "大気"
    ],
    "correct": 1,
    "sentence": "This area is known for its heavy rainfall in spring.",
    "jp": "この地域は春に雨が多いことで知られている。"
  },
  {
    "id": 1117,
    "word": "hurricane",
    "choices": [
      "話題",
      "ハリケーン",
      "同盟国",
      "伝統"
    ],
    "correct": 1,
    "sentence": "A hurricane is approaching Hawaii.",
    "jp": "ハリケーンがハワイに接近している。"
  },
  {
    "id": 1118,
    "word": "tropical",
    "choices": [
      "無頓着な",
      "熱帯の",
      "楽しい",
      "従来の"
    ],
    "correct": 1,
    "sentence": "Many countries are cutting down their tropical rainforests to expand agriculture.",
    "jp": "多くの国が農業の拡大のために熱帯雨林を伐採している。"
  },
  {
    "id": 1119,
    "word": "humidity",
    "choices": [
      "遺産",
      "奇跡",
      "神",
      "湿気"
    ],
    "correct": 3,
    "sentence": "When you leave the air-conditioned airport, the humidity of Singapore really hits you.",
    "jp": "エアコンの効いた空港を出ると，シンガポールの湿気がとても身にしみる。"
  },
  {
    "id": 1120,
    "word": "appointment",
    "choices": [
      "小道",
      "歩行者",
      "勝利",
      "任命"
    ],
    "correct": 3,
    "sentence": "I have an appointment at the hairdresser's at two o'clock.",
    "jp": "私は2時に美容院に行く予約をしている。"
  },
  {
    "id": 1121,
    "word": "launch",
    "choices": [
      "を一掃する",
      "を開始する",
      "をふく",
      "を産出する"
    ],
    "correct": 1,
    "sentence": "The space agency successfully launched their new rocket.",
    "jp": "宇宙局は新しいロケットの打ち上げに成功した。"
  },
  {
    "id": 1122,
    "word": "initial",
    "choices": [
      "ゆるい",
      "初めの",
      "連邦の",
      "信じられない"
    ],
    "correct": 1,
    "sentence": "We have completed the initial stage of the project.",
    "jp": "私たちはプロジェクトの初期段階を完了した。"
  },
  {
    "id": 1123,
    "word": "pledge",
    "choices": [
      "をくつろがせる",
      "を誓う",
      "を喜ばせる",
      "を変える"
    ],
    "correct": 1,
    "sentence": "On graduation day, the students pledged to meet again in 10 years.",
    "jp": "卒業の日，学生たちは10年後の再会を誓った。"
  },
  {
    "id": 1124,
    "word": "burden",
    "choices": [
      "札入れ",
      "給料",
      "昇進",
      "重荷"
    ],
    "correct": 3,
    "sentence": "The scholarship will ease the financial burden on students.",
    "jp": "その奨学金は学生への経済的負担を減らすだろう。"
  },
  {
    "id": 1125,
    "word": "manner",
    "choices": [
      "方法",
      "機械",
      "計画",
      "重荷"
    ],
    "correct": 0,
    "sentence": "She has a very gentle manner with the smaller children.",
    "jp": "彼女は小さい子供たちにとても優しい態度で接する。"
  },
  {
    "id": 1126,
    "word": "implement",
    "choices": [
      "を取り入れる",
      "を構成する",
      "を実行する",
      "を打ち負かす≒beat"
    ],
    "correct": 2,
    "sentence": "The school will implement the new rules from the beginning of the new school year.",
    "jp": "その学校は新学期の開始から新しい規則を実施する。"
  },
  {
    "id": 1127,
    "word": "machinery",
    "choices": [
      "生態系",
      "方法",
      "機械",
      "生物学"
    ],
    "correct": 2,
    "sentence": "The machinery in this factory is really loud.",
    "jp": "この工場の機械は本当にうるさい。"
  },
  {
    "id": 1128,
    "word": "foster",
    "choices": [
      "を舗装する",
      "に割り当てる",
      "を引きずる",
      "を育む"
    ],
    "correct": 3,
    "sentence": "The school is very good at fostering students' interests and dreams.",
    "jp": "この学校は生徒の興味と夢を育てるのがとても上手だ。"
  },
  {
    "id": 1129,
    "word": "scheme",
    "choices": [
      "規定",
      "計画",
      "近所",
      "任命"
    ],
    "correct": 1,
    "sentence": "Before you start work, we have a training scheme that you need to complete.",
    "jp": "仕事を始める前に，皆さんが修了する必要がある研修計画があります。"
  },
  {
    "id": 1130,
    "word": "ecosystem",
    "choices": [
      "生態系",
      "湿気",
      "降雨",
      "ハリケーン"
    ],
    "correct": 0,
    "sentence": "The ecosystems of the rainforests are being destroyed by human activities.",
    "jp": "熱帯雨林の生態系は人間の活動によって破壊されつつある。"
  },
  {
    "id": 1131,
    "word": "biology",
    "choices": [
      "離婚",
      "協力",
      "石炭",
      "生物学"
    ],
    "correct": 3,
    "sentence": "I want to study biology and the evolution of plants.",
    "jp": "私は生物学と植物の進化を研究したい。"
  },
  {
    "id": 1132,
    "word": "neighborhood",
    "choices": [
      "階段",
      "大気",
      "近所",
      "慣習"
    ],
    "correct": 2,
    "sentence": "I have just moved into a new neighborhood.",
    "jp": "私は新しい地域に引っ越したばかりだ。"
  },
  {
    "id": 1133,
    "word": "valuable",
    "choices": [
      "貴重な",
      "明るい",
      "ものすごい",
      "極めて重要な"
    ],
    "correct": 0,
    "sentence": "My father gave me a really valuable watch.",
    "jp": "父は本当に貴重な時計を私にくれた。"
  },
  {
    "id": 1134,
    "word": "designate",
    "choices": [
      "に知らせる",
      "を育む",
      "を監視する",
      "を指定する《as"
    ],
    "correct": 3,
    "sentence": "Smoking is only allowed in designated areas.",
    "jp": "喫煙は指定された場所でのみ許可されている。"
  },
  {
    "id": 1135,
    "word": "assign",
    "choices": [
      "を指定する《as",
      "を更新する",
      "に割り当てる",
      "を持続させる"
    ],
    "correct": 2,
    "sentence": "The professor assigned his students a report on the topic of the lecture.",
    "jp": "教授は講義のテーマについて学生にレポートを課した。"
  },
  {
    "id": 1136,
    "word": "code",
    "choices": [
      "ホーム",
      "話題",
      "同盟国",
      "規定"
    ],
    "correct": 3,
    "sentence": "The bank has introduced a code of conduct for employees interacting with clients.",
    "jp": "銀行は顧客とやり取りする従業員の行動規定を導入した。"
  },
  {
    "id": 1137,
    "word": "monitor",
    "choices": [
      "を引きつける",
      "を監視する",
      "を産出する",
      "を実行する"
    ],
    "correct": 1,
    "sentence": "The government is monitoring the situation, and if things get worse, they will act.",
    "jp": "政府は状況を監視しており，事態が悪化すれば行動を起こすだろう。"
  },
  {
    "id": 1138,
    "word": "alert",
    "choices": [
      "用心深い",
      "不可欠な",
      "一貫した",
      "明らかな"
    ],
    "correct": 0,
    "sentence": "Kazue was alert to signs of disease in her child.",
    "jp": "カズエは自分の子供の病気の兆候に注意していた。"
  },
  {
    "id": 1139,
    "word": "conscious",
    "choices": [
      "用心深い",
      "貴重な",
      "客観的な",
      "気づいて《of"
    ],
    "correct": 3,
    "sentence": "I was not conscious of her presence.",
    "jp": "私は彼女がいたことに気づかなかった。"
  },
  {
    "id": 1140,
    "word": "via",
    "choices": [
      "返事をする",
      "を経由して≒by way of",
      "言及する",
      "相当する"
    ],
    "correct": 1,
    "sentence": "I traveled to Rome via Dubai.",
    "jp": "私はドバイ経由でローマに行った。"
  },
  {
    "id": 1141,
    "word": "update",
    "choices": [
      "をふく",
      "を一掃する",
      "を更新する",
      "を喜ばせる"
    ],
    "correct": 2,
    "sentence": "Please update your phone's operating system as soon as possible.",
    "jp": "できるだけ早く電話の操作システムを更新してください。"
  },
  {
    "id": 1142,
    "word": "inform",
    "choices": [
      "を変える",
      "を誓う",
      "を開始する",
      "に知らせる"
    ],
    "correct": 3,
    "sentence": "He informed me that he had succeeded.",
    "jp": "彼は私にうまくいったと知らせてきた。"
  },
  {
    "id": 1143,
    "word": "sustain",
    "choices": [
      "を持続させる",
      "を浸す",
      "を吸収する",
      "をくつろがせる"
    ],
    "correct": 0,
    "sentence": "The country has sustained economic growth for over 20 years.",
    "jp": "その国は20年以上にわたり経済成長を維持している。"
  },
  {
    "id": 1144,
    "word": "engage",
    "choices": [
      "を引きつける",
      "を評価する",
      "を取り入れる",
      "を認める"
    ],
    "correct": 0,
    "sentence": "He was engaged in medical research.",
    "jp": "彼は医学の研究に従事していた。"
  },
  {
    "id": 1145,
    "word": "divorce",
    "choices": [
      "離婚",
      "神",
      "遺産",
      "伝統"
    ],
    "correct": 0,
    "sentence": "After he divorced his wife, he hardly ever saw his children.",
    "jp": "妻と離婚した後，彼は子供たちにほとんど会わなかった。"
  },
  {
    "id": 1146,
    "word": "yield",
    "choices": [
      "を産出する",
      "を打ち負かす≒beat",
      "を構成する",
      "を舗装する"
    ],
    "correct": 0,
    "sentence": "Our investments are yielding a nice profit.",
    "jp": "私たちの投資は大きな利益を生んでいる。"
  },
  {
    "id": 1147,
    "word": "reply",
    "choices": [
      "返事をする",
      "始まる",
      "祈る",
      "叫ぶ"
    ],
    "correct": 0,
    "sentence": "I replied to the company's letter immediately.",
    "jp": "会社からの手紙にすぐに返信した。"
  },
  {
    "id": 1148,
    "word": "correspond",
    "choices": [
      "這う",
      "相当する",
      "つまずく",
      "返事をする"
    ],
    "correct": 1,
    "sentence": "The number on your key card corresponds to the number of your room.",
    "jp": "あなたのカードキーの番号があなたの部屋の番号と一致します。"
  },
  {
    "id": 1149,
    "word": "directly",
    "choices": [
      "直接に",
      "最近",
      "…する時はいつでも",
      "密接に"
    ],
    "correct": 0,
    "sentence": "He walked directly to the station.",
    "jp": "彼は直接駅まで歩いた。"
  },
  {
    "id": 1150,
    "word": "wipe",
    "choices": [
      "に知らせる",
      "をふく",
      "に割り当てる",
      "を引きずる"
    ],
    "correct": 1,
    "sentence": "After the lesson, the teacher wiped the whiteboard clean.",
    "jp": "授業の後，先生はホワイトボードをきれいにふいた。"
  },
  {
    "id": 1151,
    "word": "sweep",
    "choices": [
      "を喜ばせる",
      "を一掃する",
      "を産出する",
      "をふく"
    ],
    "correct": 1,
    "sentence": "The students always sweep the floor of their classroom after school.",
    "jp": "生徒たちはいつも放課後に教室の床を掃除する。"
  },
  {
    "id": 1152,
    "word": "tidy",
    "choices": [
      "無頓着な",
      "楽しい",
      "従来の",
      "整然とした"
    ],
    "correct": 3,
    "sentence": "The students helped the teacher to tidy the classroom after the lesson.",
    "jp": "生徒たちは授業のあと，先生が教室を片付けるのを手伝った。"
  },
  {
    "id": 1153,
    "word": "custom",
    "choices": [
      "小道",
      "勝利",
      "奇跡",
      "慣習"
    ],
    "correct": 3,
    "sentence": "Customs vary from country to country.",
    "jp": "慣習は国によって異なる。"
  },
  {
    "id": 1154,
    "word": "conventional",
    "choices": [
      "ゆるい",
      "整然とした",
      "気づいて《of",
      "従来の"
    ],
    "correct": 3,
    "sentence": "My friend doesn't trust conventional medicine and uses only herbs and plants.",
    "jp": "私の友人は従来の薬を信用せず，ハーブと植物だけを使っている。"
  },
  {
    "id": 1155,
    "word": "refer",
    "choices": [
      "言及する",
      "始まる",
      "相当する",
      "叫ぶ"
    ],
    "correct": 0,
    "sentence": "Please refer to the instruction booklet that came with your new TV.",
    "jp": "新しいテレビに付属していた取扱説明書を参照してください。"
  },
  {
    "id": 1156,
    "word": "pleasant",
    "choices": [
      "ものすごい",
      "信じられない",
      "連邦の",
      "楽しい"
    ],
    "correct": 3,
    "sentence": "What a pleasant surprise to meet you here!",
    "jp": "ここであなたに会えるとは嬉しい驚きです！"
  },
  {
    "id": 1157,
    "word": "delight",
    "choices": [
      "を変える",
      "を喜ばせる",
      "を一掃する",
      "をくつろがせる"
    ],
    "correct": 1,
    "sentence": "He was delighted to receive the job offer.",
    "jp": "彼はその仕事のオファーを受けて喜んでいた。"
  },
  {
    "id": 1158,
    "word": "atmosphere",
    "choices": [
      "歩行者",
      "給料",
      "大気",
      "昇進"
    ],
    "correct": 2,
    "sentence": "There was a great atmosphere at the concert.",
    "jp": "そのコンサートには素晴らしい雰囲気があった。"
  },
  {
    "id": 1159,
    "word": "scream",
    "choices": [
      "叫ぶ",
      "祈る",
      "つまずく",
      "言及する"
    ],
    "correct": 0,
    "sentence": "The child screamed at his father for help.",
    "jp": "その子供は助けを求めて父親に向かって叫んだ。"
  },
  {
    "id": 1160,
    "word": "regardless",
    "choices": [
      "極めて重要な",
      "明るい",
      "無頓着な",
      "不可欠な"
    ],
    "correct": 2,
    "sentence": "I will go abroad, regardless of what you say.",
    "jp": "あなたが何を言おうと関係なく，私は海外に行きます。"
  },
  {
    "id": 1161,
    "word": "essentially",
    "choices": [
      "絶えず",
      "本質的に",
      "もともと",
      "現在"
    ],
    "correct": 1,
    "sentence": "It is essentially a sales job.",
    "jp": "それは基本的には営業の仕事だ。"
  },
  {
    "id": 1162,
    "word": "switch",
    "choices": [
      "を取り入れる",
      "を引きつける",
      "を変える",
      "を持続させる"
    ],
    "correct": 2,
    "sentence": "Could you switch on the lights, please?",
    "jp": "電気をつけていただけますか。"
  },
  {
    "id": 1163,
    "word": "topic",
    "choices": [
      "材料",
      "札入れ",
      "調理法",
      "話題"
    ],
    "correct": 3,
    "sentence": "I enjoy the class because the topics we talk about are really interesting.",
    "jp": "私たちが話す話題が本当に面白いので，私はその授業を楽しんでいる。"
  },
  {
    "id": 1164,
    "word": "relax",
    "choices": [
      "を更新する",
      "を構成する",
      "をくつろがせる",
      "を打ち負かす≒beat"
    ],
    "correct": 2,
    "sentence": "When I want to relax, I take a bath.",
    "jp": "リラックスしたい時，私は風呂に入る。"
  },
  {
    "id": 1165,
    "word": "loose",
    "choices": [
      "ゆるい",
      "客観的な",
      "一貫した",
      "明らかな"
    ],
    "correct": 0,
    "sentence": "It is more comfortable to wear loose clothes in summer.",
    "jp": "夏はゆったりした服装を着る方が快適だ。"
  },
  {
    "id": 1166,
    "word": "originate",
    "choices": [
      "祈る",
      "這う",
      "叫ぶ",
      "始まる"
    ],
    "correct": 3,
    "sentence": "Although curry originated in India, many countries have their own versions.",
    "jp": "カレーはインド発祥だが，多くの国々は独自のバージョンを持っている。"
  },
  {
    "id": 1167,
    "word": "originally",
    "choices": [
      "本質的に",
      "もともと",
      "…する時はいつでも",
      "密接に"
    ],
    "correct": 1,
    "sentence": "Originally I wanted to study science, but I have changed to studying English.",
    "jp": "もともと科学を勉強したかったが，英語を勉強することに変更した。"
  },
  {
    "id": 1168,
    "word": "closely",
    "choices": [
      "直接に",
      "絶えず",
      "最近",
      "密接に"
    ],
    "correct": 3,
    "sentence": "Our senses of smell and taste are very closely related.",
    "jp": "私たちの嗅覚と味覚は非常に密接に関連している。"
  },
  {
    "id": 1169,
    "word": "ally",
    "choices": [
      "伝統",
      "神",
      "遺産",
      "同盟国"
    ],
    "correct": 3,
    "sentence": "The president of the country criticized the allies in his speech.",
    "jp": "その国の大統領はスピーチの中で同盟国を批判した。"
  },
  {
    "id": 1170,
    "word": "federal",
    "choices": [
      "初めの",
      "熱帯の",
      "余分の",
      "連邦の"
    ],
    "correct": 3,
    "sentence": "The U.S. federal government is sometimes referred to as \"Washington.\"",
    "jp": "米国連邦政府は「ワシントン」と呼ばれることもある。"
  },
  {
    "id": 1171,
    "word": "tradition",
    "choices": [
      "話題",
      "伝統",
      "同盟国",
      "奇跡"
    ],
    "correct": 1,
    "sentence": "Having a picnic under the cherry blossoms is a famous tradition in Japan.",
    "jp": "桜の木の下でピクニックをすることは有名な日本の伝統だ。"
  },
  {
    "id": 1172,
    "word": "heritage",
    "choices": [
      "遺産",
      "勝利",
      "大気",
      "慣習"
    ],
    "correct": 0,
    "sentence": "Japan has a lot of world heritage sites.",
    "jp": "日本には多くの世界遺産がある。"
  },
  {
    "id": 1173,
    "word": "anytime",
    "choices": [
      "密接に",
      "現在",
      "…する時はいつでも",
      "もともと"
    ],
    "correct": 2,
    "sentence": "You can come anytime in the afternoon.",
    "jp": "午後はいつでも来ていいよ。"
  },
  {
    "id": 1174,
    "word": "goodness",
    "choices": [
      "神",
      "歩行者",
      "昇進",
      "小道"
    ],
    "correct": 0,
    "sentence": "Thank goodness I had a smartphone.",
    "jp": "スマートフォンを持っていてよかった。"
  },
  {
    "id": 1175,
    "word": "pray",
    "choices": [
      "祈る",
      "始まる",
      "つまずく",
      "言及する"
    ],
    "correct": 0,
    "sentence": "Please do not disturb the people praying in the temple.",
    "jp": "お寺でお祈りをしている人たちの邪魔をしないでください。"
  },
  {
    "id": 1176,
    "word": "incorporate",
    "choices": [
      "を監視する",
      "を引きずる",
      "を取り入れる",
      "を舗装する"
    ],
    "correct": 2,
    "sentence": "The new plan incorporates ideas from all members of the group.",
    "jp": "その新しいプランは，グループ全員のアイデアを取り入れている。"
  },
  {
    "id": 1177,
    "word": "incredible",
    "choices": [
      "信じられない",
      "田舎の",
      "夢中で",
      "ものすごい"
    ],
    "correct": 0,
    "sentence": "The holiday was incredible and I will never forget it.",
    "jp": "この休暇は本当に素晴らしく，私はこれを決して忘れないだろう。"
  },
  {
    "id": 1178,
    "word": "tremendous",
    "choices": [
      "ものすごい",
      "明るい",
      "信じられない",
      "極めて重要な"
    ],
    "correct": 0,
    "sentence": "I had tremendous fun at the festival.",
    "jp": "お祭りではものすごく楽しんだ。"
  },
  {
    "id": 1179,
    "word": "miracle",
    "choices": [
      "給料",
      "札入れ",
      "離婚",
      "奇跡"
    ],
    "correct": 3,
    "sentence": "It was a miracle that we were able to get tickets for the concert.",
    "jp": "私たちがそのコンサートのチケットを取れたのは奇跡だった。"
  },
  {
    "id": 1180,
    "word": "bright",
    "choices": [
      "明るい",
      "不可欠な",
      "連邦の",
      "一貫した"
    ],
    "correct": 0,
    "sentence": "I love the bright colors of the painting.",
    "jp": "その絵の明るい色が好きだ。"
  },
  {
    "id": 1181,
    "word": "crucial",
    "choices": [
      "客観的な",
      "明らかな",
      "極めて重要な",
      "ゆるい"
    ],
    "correct": 2,
    "sentence": "It is crucial that we finish this project by the end of the month.",
    "jp": "月末までにこのプロジェクトを終わらせることが必須だ。"
  },
  {
    "id": 1182,
    "word": "vital",
    "choices": [
      "従来の",
      "不可欠な",
      "楽しい",
      "無頓着な"
    ],
    "correct": 1,
    "sentence": "Yeast is a vital ingredient in bread.",
    "jp": "酵母はパンに不可欠な材料だ。"
  },
  {
    "id": 1183,
    "word": "defeat",
    "choices": [
      "を指定する《as",
      "を打ち負かす≒beat",
      "を実行する",
      "を育む"
    ],
    "correct": 1,
    "sentence": "After a long game, the player managed to defeat the champion.",
    "jp": "長い試合のあと，その選手はなんとかチャンピオンを倒した。"
  },
  {
    "id": 1184,
    "word": "triumph",
    "choices": [
      "近所",
      "勝利",
      "生物学",
      "規定"
    ],
    "correct": 1,
    "sentence": "Tokyo Skytree is a triumph of engineering.",
    "jp": "東京スカイツリーはエンジニアリングの偉業だ。"
  },
  {
    "id": 1185,
    "word": "compose",
    "choices": [
      "を誓う",
      "を浸す",
      "を構成する",
      "を開始する"
    ],
    "correct": 2,
    "sentence": "Common salt is composed primarily of sodium chloride.",
    "jp": "一般的な塩は主に塩化ナトリウムで構成されている。"
  },
  {
    "id": 1186,
    "word": "apparent",
    "choices": [
      "用心深い",
      "明らかな",
      "整然とした",
      "気づいて《of"
    ],
    "correct": 1,
    "sentence": "It was quickly apparent that he did not understand the situation.",
    "jp": "彼が状況を理解していなかったことはすぐに明らかだった。"
  },
  {
    "id": 1187,
    "word": "newly",
    "choices": [
      "本質的に",
      "絶えず",
      "最近",
      "…する時はいつでも"
    ],
    "correct": 2,
    "sentence": "I am satisfied with my newly built house.",
    "jp": "私は新築の家に満足している。"
  },
  {
    "id": 1188,
    "word": "renew",
    "choices": [
      "を認める",
      "を評価する",
      "を吸収する",
      "を更新する"
    ],
    "correct": 3,
    "sentence": "The company decided not to renew its contract with its Internet provider.",
    "jp": "その会社はインターネットプロバイダーとの契約を更新しないことに決めた。"
  },
  {
    "id": 1189,
    "word": "constantly",
    "choices": [
      "絶えず",
      "現在",
      "最近",
      "直接に"
    ],
    "correct": 0,
    "sentence": "Why do you constantly change your mind?",
    "jp": "なぜあなたはいつも考えを変えるのですか。"
  },
  {
    "id": 1190,
    "word": "consistent",
    "choices": [
      "貴重な",
      "一貫した",
      "初めの",
      "熱帯の"
    ],
    "correct": 1,
    "sentence": "Your grades have been consistent over the whole term.",
    "jp": "あなたの成績は学期全体を通して安定している。"
  },
  {
    "id": 1191,
    "word": "path",
    "choices": [
      "小道",
      "計画",
      "生態系",
      "機械"
    ],
    "correct": 0,
    "sentence": "We walked along the path to that temple.",
    "jp": "私たちはその寺に続く小道を歩いた。"
  },
  {
    "id": 1192,
    "word": "pave",
    "choices": [
      "を舗装する",
      "を引きずる",
      "に知らせる",
      "に割り当てる"
    ],
    "correct": 0,
    "sentence": "The local authority decided to pave the shopping street.",
    "jp": "地元当局は商店街を舗装することを決定した。"
  },
  {
    "id": 1193,
    "word": "pedestrian",
    "choices": [
      "歩行者",
      "方法",
      "任命",
      "重荷"
    ],
    "correct": 0,
    "sentence": "This street is for pedestrians only, so no cars are allowed to use it.",
    "jp": "この通りは歩行者専用であり，車は使用することを許可されていない。"
  },
  {
    "id": 1194,
    "word": "stumble",
    "choices": [
      "這う",
      "つまずく",
      "返事をする",
      "相当する"
    ],
    "correct": 1,
    "sentence": "He was so tired that he stumbled on his way home.",
    "jp": "彼はとても疲れていたので，家に帰る途中でつまずいた。"
  },
  {
    "id": 1195,
    "word": "drag",
    "choices": [
      "を引きずる",
      "を構成する",
      "を舗装する",
      "を更新する"
    ],
    "correct": 0,
    "sentence": "He dragged the chair across the floor.",
    "jp": "彼はその椅子を引きずって床を横断した。"
  },
  {
    "id": 1196,
    "word": "crawl",
    "choices": [
      "這う",
      "祈る",
      "始まる",
      "つまずく"
    ],
    "correct": 0,
    "sentence": "The baby crawled toward his mother.",
    "jp": "赤ちゃんは母親に向かって這っていった。"
  },
  {
    "id": 1197,
    "word": "promotion",
    "choices": [
      "昇進",
      "降雨",
      "ハリケーン",
      "湿気"
    ],
    "correct": 0,
    "sentence": "Given your accomplishments, you will soon get a promotion.",
    "jp": "その成果を考慮すると，君はすぐに昇進するだろう。"
  },
  {
    "id": 1198,
    "word": "salary",
    "choices": [
      "給料",
      "石炭",
      "階段",
      "協力"
    ],
    "correct": 0,
    "sentence": "You will receive an increase in your salary after your first year.",
    "jp": "１年目を終えると，あなたの給料は上がるでしょう。"
  },
  {
    "id": 1199,
    "word": "wallet",
    "choices": [
      "ホーム",
      "調理法",
      "材料",
      "札入れ"
    ],
    "correct": 3,
    "sentence": "My girlfriend bought me a new leather wallet.",
    "jp": "ガールフレンドが私に新しい革の財布を買ってくれた。"
  },
  {
    "id": 1200,
    "word": "objective",
    "choices": [
      "客観的な",
      "余分の",
      "田舎の",
      "夢中で"
    ],
    "correct": 0,
    "sentence": "Our team's main objective is to reach the final of the competition.",
    "jp": "私たちのチームの一番の目標は大会の決勝戦に進出することだ。"
  }
];