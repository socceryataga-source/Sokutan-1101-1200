const quizData = [
  {
    "no": 1101,
    "word": "recipe",
    "meaning": "調理法",
    "choices": [
      "材料",
      "調理法",
      "食欲",
      "味付け"
    ],
    "sentence": "This recipe is easy enough for beginners to follow.",
    "translation": "この調理法は初心者でも簡単に作れます。"
  },
  {
    "no": 1102,
    "word": "ingredient",
    "meaning": "材料",
    "choices": [
      "食器",
      "材料",
      "手順",
      "香り"
    ],
    "sentence": "We need one more ingredient for the soup.",
    "translation": "そのスープにはもう一つ材料が必要です。"
  },
  {
    "no": 1103,
    "word": "platform",
    "meaning": "ホーム",
    "choices": [
      "切符",
      "ホーム",
      "車両",
      "改札"
    ],
    "sentence": "Please wait on platform 2 for the next train.",
    "translation": "次の電車は2番ホームでお待ちください。"
  },
  {
    "no": 1104,
    "word": "currently",
    "meaning": "現在",
    "choices": [
      "現在",
      "突然",
      "たまに",
      "以前"
    ],
    "sentence": "She is currently working at a hotel in Sapporo.",
    "translation": "彼女は現在、札幌のホテルで働いています。"
  },
  {
    "no": 1105,
    "word": "admit",
    "meaning": "認める",
    "choices": [
      "疑う",
      "隠す",
      "拒む",
      "認める"
    ],
    "sentence": "He finally admitted that he had made a mistake.",
    "translation": "彼はついに自分の誤りを認めました。"
  },
  {
    "no": 1106,
    "word": "acknowledge",
    "meaning": "認める",
    "choices": [
      "認める",
      "要求する",
      "称賛する",
      "報告する"
    ],
    "sentence": "The company acknowledged the problem in its official statement.",
    "translation": "その会社は公式声明でその問題を認めました。"
  },
  {
    "no": 1107,
    "word": "stair",
    "meaning": "階段",
    "choices": [
      "出口",
      "階段",
      "天井",
      "廊下"
    ],
    "sentence": "Be careful on the last stair because it is narrow.",
    "translation": "最後の階段の一段は狭いので気をつけてください。"
  },
  {
    "no": 1108,
    "word": "assess",
    "meaning": "評価する",
    "choices": [
      "比較する",
      "測定する",
      "評価する",
      "記録する"
    ],
    "sentence": "Teachers assess students in different ways.",
    "translation": "教師はさまざまな方法で生徒を評価します。"
  },
  {
    "no": 1109,
    "word": "cooperation",
    "meaning": "協力",
    "choices": [
      "議論",
      "協力",
      "調査",
      "競争"
    ],
    "sentence": "The project succeeded through close cooperation between the two teams.",
    "translation": "その計画は2つのチームの密接な協力によって成功しました。"
  },
  {
    "no": 1110,
    "word": "rural",
    "meaning": "田舎の",
    "choices": [
      "都会の",
      "田舎の",
      "歴史的な",
      "安全な"
    ],
    "sentence": "My grandparents live in a quiet rural town.",
    "translation": "私の祖父母は静かな田舎町に住んでいます。"
  },
  {
    "no": 1111,
    "word": "absorb",
    "meaning": "吸収する",
    "choices": [
      "混ぜる",
      "放出する",
      "分ける",
      "吸収する"
    ],
    "sentence": "Plants absorb water through their roots.",
    "translation": "植物は根から水を吸収します。"
  },
  {
    "no": 1112,
    "word": "crazy",
    "meaning": "夢中で",
    "choices": [
      "静かで",
      "退屈で",
      "慎重で",
      "夢中で"
    ],
    "sentence": "My brother is crazy about baseball.",
    "translation": "私の兄は野球に夢中です。"
  },
  {
    "no": 1113,
    "word": "coal",
    "meaning": "石炭",
    "choices": [
      "鉄",
      "木材",
      "石油",
      "石炭"
    ],
    "sentence": "The old factory once used coal as fuel.",
    "translation": "その古い工場はかつて燃料として石炭を使っていました。"
  },
  {
    "no": 1114,
    "word": "soak",
    "meaning": "浸す",
    "choices": [
      "乾かす",
      "温める",
      "包む",
      "浸す"
    ],
    "sentence": "Soak the beans in water overnight.",
    "translation": "豆を一晩水に浸してください。"
  },
  {
    "no": 1115,
    "word": "excess",
    "meaning": "余分な",
    "choices": [
      "公平な",
      "正確な",
      "余分な",
      "十分な"
    ],
    "sentence": "Please remove any excess oil from the pan.",
    "translation": "フライパンの余分な油を取り除いてください。"
  },
  {
    "no": 1116,
    "word": "rainfall",
    "meaning": "降雨量",
    "choices": [
      "湿度",
      "風速",
      "気温",
      "降雨量"
    ],
    "sentence": "This area has heavy rainfall in June.",
    "translation": "この地域は6月に降雨量が多いです。"
  },
  {
    "no": 1117,
    "word": "hurricane",
    "meaning": "ハリケーン",
    "choices": [
      "洪水",
      "ハリケーン",
      "地震",
      "干ばつ"
    ],
    "sentence": "The hurricane caused serious damage along the coast.",
    "translation": "そのハリケーンは沿岸地域に深刻な被害をもたらしました。"
  },
  {
    "no": 1118,
    "word": "tropical",
    "meaning": "熱帯の",
    "choices": [
      "寒帯の",
      "乾燥した",
      "熱帯の",
      "高山の"
    ],
    "sentence": "We saw many tropical plants in the greenhouse.",
    "translation": "私たちは温室で多くの熱帯の植物を見ました。"
  },
  {
    "no": 1119,
    "word": "humidity",
    "meaning": "湿度",
    "choices": [
      "気温",
      "気圧",
      "日照",
      "湿度"
    ],
    "sentence": "The humidity is high today, so the room feels uncomfortable.",
    "translation": "今日は湿度が高いので、部屋が蒸し暑く感じます。"
  },
  {
    "no": 1120,
    "word": "appointment",
    "meaning": "任命",
    "choices": [
      "診察",
      "面会",
      "指示",
      "任命"
    ],
    "sentence": "Her appointment as team leader was announced yesterday.",
    "translation": "彼女のチームリーダーへの任命が昨日発表されました。"
  },
  {
    "no": 1121,
    "word": "launch",
    "meaning": "開始する",
    "choices": [
      "中止する",
      "支援する",
      "開始する",
      "拡大する"
    ],
    "sentence": "The company will launch a new service next month.",
    "translation": "その会社は来月新しいサービスを開始します。"
  },
  {
    "no": 1122,
    "word": "initial",
    "meaning": "初めの",
    "choices": [
      "主要な",
      "初めの",
      "一時的な",
      "最後の"
    ],
    "sentence": "Our initial plan was simple and realistic.",
    "translation": "私たちの初めの計画は単純で現実的でした。"
  },
  {
    "no": 1123,
    "word": "pledge",
    "meaning": "誓う",
    "choices": [
      "疑う",
      "提案する",
      "命じる",
      "誓う"
    ],
    "sentence": "The athletes pledged to do their best.",
    "translation": "その選手たちは全力を尽くすと誓いました。"
  },
  {
    "no": 1124,
    "word": "burden",
    "meaning": "負担",
    "choices": [
      "負担",
      "利益",
      "責任",
      "結果"
    ],
    "sentence": "Childcare costs can be a heavy burden for young families.",
    "translation": "育児費用は若い家庭にとって大きな負担になりえます。"
  },
  {
    "no": 1125,
    "word": "manner",
    "meaning": "方法",
    "choices": [
      "方法",
      "態度",
      "順番",
      "速さ"
    ],
    "sentence": "We discussed the manner in which the survey should be done.",
    "translation": "私たちはその調査をどのような方法で行うべきか話し合いました。"
  },
  {
    "no": 1126,
    "word": "implement",
    "meaning": "実行する",
    "choices": [
      "延期する",
      "実行する",
      "修正する",
      "発表する"
    ],
    "sentence": "The school will implement the new rule in April.",
    "translation": "その学校は4月に新しい規則を実行します。"
  },
  {
    "no": 1127,
    "word": "machinery",
    "meaning": "機械",
    "choices": [
      "資源",
      "設備",
      "機械",
      "工具"
    ],
    "sentence": "Modern machinery has improved farm work a lot.",
    "translation": "現代の機械は農作業を大きく改善しました。"
  },
  {
    "no": 1128,
    "word": "foster",
    "meaning": "育む",
    "choices": [
      "止める",
      "失う",
      "飾る",
      "育む"
    ],
    "sentence": "Good teachers foster curiosity in their students.",
    "translation": "よい教師は生徒の好奇心を育みます。"
  },
  {
    "no": 1129,
    "word": "scheme",
    "meaning": "計画",
    "choices": [
      "計画",
      "契約",
      "制度",
      "予算"
    ],
    "sentence": "The city introduced a new recycling scheme.",
    "translation": "その市は新しいリサイクル計画を導入しました。"
  },
  {
    "no": 1130,
    "word": "ecosystem",
    "meaning": "生態系",
    "choices": [
      "環境",
      "動物",
      "生態系",
      "森林"
    ],
    "sentence": "Pollution can damage the whole ecosystem of a lake.",
    "translation": "汚染は湖全体の生態系を損なうことがあります。"
  },
  {
    "no": 1131,
    "word": "biology",
    "meaning": "生物学",
    "choices": [
      "地理",
      "物理",
      "生物学",
      "化学"
    ],
    "sentence": "She wants to study biology at university.",
    "translation": "彼女は大学で生物学を学びたいと思っています。"
  },
  {
    "no": 1132,
    "word": "neighborhood",
    "meaning": "地域",
    "choices": [
      "家庭",
      "郊外",
      "道路",
      "地域"
    ],
    "sentence": "This neighborhood is popular with young families.",
    "translation": "この地域は若い家族に人気があります。"
  },
  {
    "no": 1133,
    "word": "valuable",
    "meaning": "貴重な",
    "choices": [
      "危険な",
      "高価な",
      "普通の",
      "貴重な"
    ],
    "sentence": "Your advice was very valuable to me.",
    "translation": "あなたの助言は私にとってとても貴重でした。"
  },
  {
    "no": 1134,
    "word": "designate",
    "meaning": "指定する",
    "choices": [
      "比較する",
      "修理する",
      "説明する",
      "指定する"
    ],
    "sentence": "The gym was designated as a shelter during the storm.",
    "translation": "嵐の間、その体育館は避難所として指定されました。"
  },
  {
    "no": 1135,
    "word": "assign",
    "meaning": "割り当てる",
    "choices": [
      "配達する",
      "割り当てる",
      "収集する",
      "提出する"
    ],
    "sentence": "The teacher assigned each group a different topic.",
    "translation": "先生は各グループに異なる話題を割り当てました。"
  },
  {
    "no": 1136,
    "word": "code",
    "meaning": "規定",
    "choices": [
      "定規",
      "規定",
      "羅列",
      "通知"
    ],
    "sentence": "All members must follow the club code.",
    "translation": "すべての部員はその部の規定に従わなければなりません。"
  },
  {
    "no": 1137,
    "word": "monitor",
    "meaning": "監視する",
    "choices": [
      "交換する",
      "修理する",
      "調整する",
      "監視する"
    ],
    "sentence": "Nurses monitor the patient's condition all night.",
    "translation": "看護師たちは一晩中患者の状態を監視します。"
  },
  {
    "no": 1138,
    "word": "alert",
    "meaning": "用心深い",
    "choices": [
      "控えめな",
      "用心深い",
      "柔軟な",
      "気楽な"
    ],
    "sentence": "You need to stay alert in crowded places.",
    "translation": "人混みでは用心深くしている必要があります。"
  },
  {
    "no": 1139,
    "word": "conscious",
    "meaning": "気づいて",
    "choices": [
      "満足して",
      "集中して",
      "疲れて",
      "気づいて"
    ],
    "sentence": "She is very conscious of how her words affect others.",
    "translation": "彼女は自分の言葉が他人にどう影響するかによく気づいています。"
  },
  {
    "no": 1140,
    "word": "via",
    "meaning": "経由で",
    "choices": [
      "経由で",
      "周辺で",
      "以内に",
      "以外に"
    ],
    "sentence": "We flew to London via Singapore.",
    "translation": "私たちはシンガポール経由でロンドンへ飛びました。"
  },
  {
    "no": 1141,
    "word": "update",
    "meaning": "更新する",
    "choices": [
      "印刷する",
      "削除する",
      "更新する",
      "保存する"
    ],
    "sentence": "Please update your profile before Friday.",
    "translation": "金曜日までにプロフィールを更新してください。"
  },
  {
    "no": 1142,
    "word": "inform",
    "meaning": "知らせる",
    "choices": [
      "招待する",
      "許す",
      "知らせる",
      "励ます"
    ],
    "sentence": "We will inform you of the result by email.",
    "translation": "結果はメールでお知らせします。"
  },
  {
    "no": 1143,
    "word": "sustain",
    "meaning": "持続させる",
    "choices": [
      "持続させる",
      "拡大する",
      "止める",
      "変化させる"
    ],
    "sentence": "It is hard to sustain such a fast pace for long.",
    "translation": "そんな速いペースを長く持続させるのは難しいです。"
  },
  {
    "no": 1144,
    "word": "engage",
    "meaning": "引きつける",
    "choices": [
      "引きつける",
      "困らせる",
      "区別する",
      "安心させる"
    ],
    "sentence": "The speaker used stories to engage the audience.",
    "translation": "その話し手は聴衆を引きつけるために物語を使いました。"
  },
  {
    "no": 1145,
    "word": "divorce",
    "meaning": "離婚",
    "choices": [
      "別居",
      "和解",
      "再婚",
      "離婚"
    ],
    "sentence": "The news of their divorce surprised many friends.",
    "translation": "彼らの離婚の知らせは多くの友人を驚かせました。"
  },
  {
    "no": 1146,
    "word": "yield",
    "meaning": "産出する",
    "choices": [
      "消費する",
      "産出する",
      "輸入する",
      "運ぶ"
    ],
    "sentence": "This field yields a large amount of corn every year.",
    "translation": "この畑は毎年大量のトウモロコシを産出します。"
  },
  {
    "no": 1147,
    "word": "reply",
    "meaning": "返事をする",
    "choices": [
      "返事をする",
      "説明する",
      "約束する",
      "質問する"
    ],
    "sentence": "He did not reply to my message until the next day.",
    "translation": "彼は翌日まで私のメッセージに返事をしませんでした。"
  },
  {
    "no": 1148,
    "word": "correspond",
    "meaning": "一致する",
    "choices": [
      "一致する",
      "増加する",
      "変化する",
      "対立する"
    ],
    "sentence": "The two answers do not correspond with each other.",
    "translation": "その二つの答えは互いに一致していません。"
  },
  {
    "no": 1149,
    "word": "directly",
    "meaning": "直接に",
    "choices": [
      "慎重に",
      "直接に",
      "即座に",
      "部分的に"
    ],
    "sentence": "You can contact me directly if you have questions.",
    "translation": "質問があれば私に直接連絡できます。"
  },
  {
    "no": 1150,
    "word": "wipe",
    "meaning": "ふく",
    "choices": [
      "洗う",
      "削る",
      "ふく",
      "壊す"
    ],
    "sentence": "She wiped the table with a wet cloth.",
    "translation": "彼女はぬれた布でテーブルをふきました。"
  },
  {
    "no": 1151,
    "word": "sweep",
    "meaning": "掃除する",
    "choices": [
      "掃除する",
      "運ぶ",
      "数える",
      "並べる"
    ],
    "sentence": "I need to sweep the floor before the guests arrive.",
    "translation": "お客さんが来る前に床を掃除しなければなりません。"
  },
  {
    "no": 1152,
    "word": "tidy",
    "meaning": "整頓する",
    "choices": [
      "予約する",
      "準備する",
      "分類する",
      "整頓する"
    ],
    "sentence": "Please tidy your desk after class.",
    "translation": "授業の後で机を整頓してください。"
  },
  {
    "no": 1153,
    "word": "custom",
    "meaning": "慣習",
    "choices": [
      "法律",
      "作法",
      "慣習",
      "伝説"
    ],
    "sentence": "It is a local custom to eat this dish on New Year's Day.",
    "translation": "元日にこの料理を食べるのはその土地の慣習です。"
  },
  {
    "no": 1154,
    "word": "conventional",
    "meaning": "従来の",
    "choices": [
      "従来の",
      "基本的な",
      "革新的な",
      "理想的な"
    ],
    "sentence": "Some farmers still use conventional methods.",
    "translation": "今でも従来の方法を使う農家もいます。"
  },
  {
    "no": 1155,
    "word": "refer",
    "meaning": "言及する",
    "choices": [
      "参加する",
      "貢献する",
      "反対する",
      "言及する"
    ],
    "sentence": "The article refers to a recent survey on teenagers.",
    "translation": "その記事は10代に関する最近の調査に言及しています。"
  },
  {
    "no": 1156,
    "word": "pleasant",
    "meaning": "心地よい",
    "choices": [
      "心地よい",
      "強烈な",
      "騒がしい",
      "珍しい"
    ],
    "sentence": "A pleasant breeze came in through the window.",
    "translation": "心地よい風が窓から入ってきました。"
  },
  {
    "no": 1157,
    "word": "delight",
    "meaning": "喜ばせる",
    "choices": [
      "喜ばせる",
      "驚かせる",
      "納得させる",
      "励ます"
    ],
    "sentence": "The children's performance delighted the audience.",
    "translation": "子どもたちの発表は観客を喜ばせました。"
  },
  {
    "no": 1158,
    "word": "atmosphere",
    "meaning": "雰囲気",
    "choices": [
      "景色",
      "雰囲気",
      "構造",
      "音量"
    ],
    "sentence": "The cafe has a warm and relaxed atmosphere.",
    "translation": "そのカフェには温かく落ち着いた雰囲気があります。"
  },
  {
    "no": 1159,
    "word": "scream",
    "meaning": "叫ぶ",
    "choices": [
      "笑う",
      "ささやく",
      "叫ぶ",
      "ため息をつく"
    ],
    "sentence": "I heard someone scream for help outside.",
    "translation": "外でだれかが助けを求めて叫ぶのが聞こえました。"
  },
  {
    "no": 1160,
    "word": "regardless",
    "meaning": "無頓着な",
    "choices": [
      "積極的な",
      "忠実な",
      "几帳面な",
      "無頓着な"
    ],
    "sentence": "He seemed regardless of the danger around him.",
    "translation": "彼は周囲の危険に無頓着なようでした。"
  },
  {
    "no": 1161,
    "word": "essentially",
    "meaning": "基本的に",
    "choices": [
      "一時的に",
      "慎重に",
      "完全に",
      "基本的に"
    ],
    "sentence": "The two ideas are essentially the same.",
    "translation": "その二つの考えは基本的に同じです。"
  },
  {
    "no": 1162,
    "word": "switch",
    "meaning": "変える",
    "choices": [
      "壊す",
      "確認する",
      "選ぶ",
      "変える"
    ],
    "sentence": "She switched trains at Omiya Station.",
    "translation": "彼女は大宮駅で電車を乗り換えました。"
  },
  {
    "no": 1163,
    "word": "topic",
    "meaning": "話題",
    "choices": [
      "結論",
      "話題",
      "要点",
      "意見"
    ],
    "sentence": "Today's main topic is online safety.",
    "translation": "今日の主な話題はオンラインの安全です。"
  },
  {
    "no": 1164,
    "word": "relax",
    "meaning": "くつろぐ",
    "choices": [
      "我慢する",
      "黙る",
      "くつろぐ",
      "急ぐ"
    ],
    "sentence": "I like to relax with music after dinner.",
    "translation": "夕食後は音楽を聴いてくつろぐのが好きです。"
  },
  {
    "no": 1165,
    "word": "loose",
    "meaning": "ゆるい",
    "choices": [
      "ゆるい",
      "透明な",
      "鋭い",
      "厚い"
    ],
    "sentence": "These shoes are a little loose for me.",
    "translation": "この靴は私には少しゆるいです。"
  },
  {
    "no": 1166,
    "word": "originate",
    "meaning": "始まる",
    "choices": [
      "戻る",
      "止まる",
      "始まる",
      "広がる"
    ],
    "sentence": "This festival originated in a small fishing village.",
    "translation": "この祭りは小さな漁村で始まりました。"
  },
  {
    "no": 1167,
    "word": "originally",
    "meaning": "もともと",
    "choices": [
      "偶然",
      "もともと",
      "最終的に",
      "急に"
    ],
    "sentence": "This building was originally a school.",
    "translation": "この建物はもともと学校でした。"
  },
  {
    "no": 1168,
    "word": "closely",
    "meaning": "密接に",
    "choices": [
      "静かに",
      "公平に",
      "別々に",
      "密接に"
    ],
    "sentence": "The two countries work closely on energy issues.",
    "translation": "その二国はエネルギー問題で密接に協力しています。"
  },
  {
    "no": 1169,
    "word": "ally",
    "meaning": "協力者",
    "choices": [
      "協力者",
      "代表者",
      "指導者",
      "通訳"
    ],
    "sentence": "The country sought a strong ally in the region.",
    "translation": "その国はその地域で強い協力者を求めました。"
  },
  {
    "no": 1170,
    "word": "federal",
    "meaning": "連邦の",
    "choices": [
      "国際的な",
      "連邦の",
      "歴史的な",
      "地方の"
    ],
    "sentence": "The issue was discussed by the federal government.",
    "translation": "その問題は連邦政府によって議論されました。"
  },
  {
    "no": 1171,
    "word": "tradition",
    "meaning": "伝統",
    "choices": [
      "伝統",
      "制度",
      "理論",
      "宗教"
    ],
    "sentence": "This dance is part of a long local tradition.",
    "translation": "この踊りは長い地域の伝統の一部です。"
  },
  {
    "no": 1172,
    "word": "heritage",
    "meaning": "遺産",
    "choices": [
      "資産",
      "文化",
      "記録",
      "遺産"
    ],
    "sentence": "The town is proud of its cultural heritage.",
    "translation": "その町は自分たちの文化遺産を誇りにしています。"
  },
  {
    "no": 1173,
    "word": "anytime",
    "meaning": "いつでも",
    "choices": [
      "たまに",
      "今すぐ",
      "そのうち",
      "いつでも"
    ],
    "sentence": "You can call me anytime if you need help.",
    "translation": "助けが必要ならいつでも電話してください。"
  },
  {
    "no": 1174,
    "word": "goodness",
    "meaning": "善良さ",
    "choices": [
      "勇気",
      "忍耐",
      "誠実さ",
      "善良さ"
    ],
    "sentence": "Her goodness showed in the way she helped strangers.",
    "translation": "見知らぬ人を助けるその姿に、彼女の善良さが表れていました。"
  },
  {
    "no": 1175,
    "word": "pray",
    "meaning": "祈る",
    "choices": [
      "願う",
      "謝る",
      "祈る",
      "頼る"
    ],
    "sentence": "They prayed for the safety of the missing hikers.",
    "translation": "彼らは行方不明の登山者たちの無事を祈りました。"
  },
  {
    "no": 1176,
    "word": "incorporate",
    "meaning": "取り入れる",
    "choices": [
      "除外する",
      "改良する",
      "縮小する",
      "取り入れる"
    ],
    "sentence": "The new plan incorporates student feedback.",
    "translation": "その新しい計画は生徒の意見を取り入れています。"
  },
  {
    "no": 1177,
    "word": "incredible",
    "meaning": "信じられない",
    "choices": [
      "信じられない",
      "一般的な",
      "危険な",
      "魅力的な"
    ],
    "sentence": "It was incredible that she finished the race after falling.",
    "translation": "転んだあとで彼女がレースを完走したのは信じられませんでした。"
  },
  {
    "no": 1178,
    "word": "tremendous",
    "meaning": "ものすごい",
    "choices": [
      "わずかな",
      "安定した",
      "正確な",
      "ものすごい"
    ],
    "sentence": "The team made tremendous progress this year.",
    "translation": "そのチームは今年ものすごい進歩を遂げました。"
  },
  {
    "no": 1179,
    "word": "miracle",
    "meaning": "奇跡",
    "choices": [
      "奇跡",
      "勝利",
      "希望",
      "偶然"
    ],
    "sentence": "Doctors called his recovery a miracle.",
    "translation": "医師たちは彼の回復を奇跡だと呼びました。"
  },
  {
    "no": 1180,
    "word": "bright",
    "meaning": "明るい",
    "choices": [
      "狭い",
      "荒い",
      "弱い",
      "明るい"
    ],
    "sentence": "The classroom is bright in the morning sun.",
    "translation": "その教室は朝の日差しで明るいです。"
  },
  {
    "no": 1181,
    "word": "crucial",
    "meaning": "極めて重要な",
    "choices": [
      "不十分な",
      "多少重要な",
      "有利な",
      "極めて重要な"
    ],
    "sentence": "Clear communication is crucial in an emergency.",
    "translation": "緊急時には明確な意思疎通が極めて重要です。"
  },
  {
    "no": 1182,
    "word": "vital",
    "meaning": "不可欠な",
    "choices": [
      "有益な",
      "柔軟な",
      "不安定な",
      "不可欠な"
    ],
    "sentence": "Clean water is vital for human life.",
    "translation": "きれいな水は人間の生活に不可欠です。"
  },
  {
    "no": 1183,
    "word": "defeat",
    "meaning": "打ち負かす",
    "choices": [
      "打ち負かす",
      "応援する",
      "追い越す",
      "避ける"
    ],
    "sentence": "Our team defeated the champions in the final game.",
    "translation": "私たちのチームは決勝戦で優勝チームを打ち負かしました。"
  },
  {
    "no": 1184,
    "word": "triumph",
    "meaning": "勝利",
    "choices": [
      "努力",
      "挑戦",
      "名声",
      "勝利"
    ],
    "sentence": "The player raised his hands in triumph.",
    "translation": "その選手は勝利して両手を上げました。"
  },
  {
    "no": 1185,
    "word": "compose",
    "meaning": "構成する",
    "choices": [
      "表現する",
      "構成する",
      "改善する",
      "発展する"
    ],
    "sentence": "Women compose more than half of the class.",
    "translation": "そのクラスの半分以上を女子が構成しています。"
  },
  {
    "no": 1186,
    "word": "apparent",
    "meaning": "明らかな",
    "choices": [
      "明らかな",
      "内面的な",
      "一時的な",
      "公平な"
    ],
    "sentence": "It soon became apparent that the plan would fail.",
    "translation": "その計画が失敗することはすぐに明らかになりました。"
  },
  {
    "no": 1187,
    "word": "newly",
    "meaning": "新たに",
    "choices": [
      "以前に",
      "新たに",
      "急速に",
      "完全に"
    ],
    "sentence": "The newly opened library is already popular.",
    "translation": "新たに開館した図書館はもう人気があります。"
  },
  {
    "no": 1188,
    "word": "renew",
    "meaning": "更新する",
    "choices": [
      "更新する",
      "回収する",
      "配布する",
      "接続する"
    ],
    "sentence": "I need to renew my student card this week.",
    "translation": "私は今週学生証を更新する必要があります。"
  },
  {
    "no": 1189,
    "word": "constantly",
    "meaning": "絶えず",
    "choices": [
      "絶えず",
      "慎重に",
      "部分的に",
      "まれに"
    ],
    "sentence": "The weather here changes constantly in spring.",
    "translation": "ここの天気は春には絶えず変わります。"
  },
  {
    "no": 1190,
    "word": "consistent",
    "meaning": "一貫した",
    "choices": [
      "断続的な",
      "個人的な",
      "一貫した",
      "急激な"
    ],
    "sentence": "Her work has been consistent all year.",
    "translation": "彼女の仕事ぶりは一年中一貫していました。"
  },
  {
    "no": 1191,
    "word": "path",
    "meaning": "小道",
    "choices": [
      "小道",
      "街灯",
      "斜面",
      "境界"
    ],
    "sentence": "We followed a narrow path through the forest.",
    "translation": "私たちは森の中の細い小道をたどりました。"
  },
  {
    "no": 1192,
    "word": "pave",
    "meaning": "舗装する",
    "choices": [
      "測る",
      "掘る",
      "舗装する",
      "区切る"
    ],
    "sentence": "The city plans to pave this road next year.",
    "translation": "その市は来年この道路を舗装する予定です。"
  },
  {
    "no": 1193,
    "word": "pedestrian",
    "meaning": "歩行者",
    "choices": [
      "歩行者",
      "運転手",
      "通勤客",
      "旅行者"
    ],
    "sentence": "Drivers must stop for pedestrians at this crossing.",
    "translation": "運転手はこの横断歩道で歩行者のために止まらなければなりません。"
  },
  {
    "no": 1194,
    "word": "stumble",
    "meaning": "つまずく",
    "choices": [
      "しゃがむ",
      "つまずく",
      "向きを変える",
      "滑る"
    ],
    "sentence": "I stumbled on a stone but did not fall.",
    "translation": "私は石につまずきましたが、転びませんでした。"
  },
  {
    "no": 1195,
    "word": "drag",
    "meaning": "引きずる",
    "choices": [
      "引きずる",
      "抱える",
      "押し上げる",
      "たたむ"
    ],
    "sentence": "He dragged the heavy box across the floor.",
    "translation": "彼は重い箱を床の上で引きずりました。"
  },
  {
    "no": 1196,
    "word": "crawl",
    "meaning": "這う",
    "choices": [
      "曲がる",
      "伸びる",
      "這う",
      "跳ぶ"
    ],
    "sentence": "The baby can crawl across the room now.",
    "translation": "その赤ちゃんは今では部屋の中を這って進めます。"
  },
  {
    "no": 1197,
    "word": "promotion",
    "meaning": "昇進",
    "choices": [
      "表彰",
      "昇進",
      "異動",
      "採用"
    ],
    "sentence": "She got a promotion after years of hard work.",
    "translation": "彼女は長年の努力の末に昇進しました。"
  },
  {
    "no": 1198,
    "word": "salary",
    "meaning": "給料",
    "choices": [
      "家賃",
      "税金",
      "賞金",
      "給料"
    ],
    "sentence": "He is satisfied with his salary at the new company.",
    "translation": "彼は新しい会社での給料に満足しています。"
  },
  {
    "no": 1199,
    "word": "wallet",
    "meaning": "財布",
    "choices": [
      "かばん",
      "財布",
      "手帳",
      "鍵"
    ],
    "sentence": "I keep my student ID in my wallet.",
    "translation": "私は学生証を財布に入れています。"
  },
  {
    "no": 1200,
    "word": "objective",
    "meaning": "客観的な",
    "choices": [
      "現実的な",
      "主観的な",
      "批判的な",
      "客観的な"
    ],
    "sentence": "We need objective data before making a decision.",
    "translation": "判断を下す前に客観的なデータが必要です。"
  }
];
