const courses = [
  {
    id: 'en-beginner',
    language: 'en',
    languageName: '英语',
    level: 'beginner',
    levelName: '入门级',
    title: '英语零基础入门',
    description: '从字母和简单问候语开始，构建英语基础',
    cover: '📘',
    color: 'from-blue-400 to-blue-600',
    lessons: [
      {
        id: 'en-b-1',
        title: '字母与发音',
        type: 'pronunciation',
        duration: 15,
        vocabulary: [
          { word: 'Apple', translation: '苹果', phonetic: '/ˈæpl/' },
          { word: 'Book', translation: '书本', phonetic: '/bʊk/' },
          { word: 'Cat', translation: '猫', phonetic: '/kæt/' },
          { word: 'Dog', translation: '狗', phonetic: '/dɒɡ/' }
        ],
        grammar: { title: '主语 + 谓语', examples: ['I am a student.', 'She likes apples.'] },
        dialogue: [
          { en: 'Hello! How are you?', zh: '你好！你好吗？' },
          { en: 'I am fine, thank you.', zh: '我很好，谢谢你。' }
        ]
      },
      {
        id: 'en-b-2',
        title: '日常问候',
        type: 'conversation',
        duration: 20,
        vocabulary: [
          { word: 'Good morning', translation: '早上好', phonetic: '' },
          { word: 'Good night', translation: '晚安', phonetic: '' },
          { word: 'Nice to meet you', translation: '很高兴认识你', phonetic: '' },
          { word: 'See you later', translation: '再见', phonetic: '' }
        ],
        grammar: { title: '问候用语', examples: ['How is it going?', "What's up?"] },
        dialogue: [
          { en: 'Good morning!', zh: '早上好！' },
          { en: 'Nice to meet you.', zh: '很高兴认识你。' },
          { en: 'Where are you from?', zh: '你来自哪里？' },
          { en: 'I am from China.', zh: '我来自中国。' }
        ]
      },
      {
        id: 'en-b-3',
        title: '数字与时间',
        type: 'numbers',
        duration: 18,
        vocabulary: [
          { word: 'One', translation: '一', phonetic: '' },
          { word: 'Two', translation: '二', phonetic: '' },
          { word: 'Three', translation: '三', phonetic: '' },
          { word: 'Ten', translation: '十', phonetic: '' },
          { word: 'Today', translation: '今天', phonetic: '' },
          { word: 'Tomorrow', translation: '明天', phonetic: '' }
        ],
        grammar: { title: '时间表达', examples: ["It's 9 o'clock.", 'The date is Monday.'] },
        dialogue: [
          { en: 'What time is it?', zh: '现在几点？' },
          { en: 'It is nine o clock.', zh: '现在九点。' }
        ]
      },
      {
        id: 'en-b-4',
        title: '购物场景',
        type: 'scenario',
        duration: 25,
        vocabulary: [
          { word: 'How much', translation: '多少钱', phonetic: '' },
          { word: 'Expensive', translation: '昂贵的', phonetic: '' },
          { word: 'Cheap', translation: '便宜的', phonetic: '' },
          { word: 'Bill', translation: '账单', phonetic: '' }
        ],
        grammar: { title: '价格询问', examples: ['How much is this?', 'Can I have a discount?'] },
        dialogue: [
          { en: 'How much is this shirt?', zh: '这件衬衫多少钱？' },
          { en: 'It is 50 dollars.', zh: '50美元。' },
          { en: 'That is too expensive.', zh: '太贵了。' }
        ]
      }
    ]
  },
  {
    id: 'en-intermediate',
    language: 'en',
    languageName: '英语',
    level: 'intermediate',
    levelName: '中级',
    title: '英语中级进阶',
    description: '掌握日常交流和商务场景应用',
    cover: '📗',
    color: 'from-green-400 to-green-600',
    lessons: [
      {
        id: 'en-i-1',
        title: '过去时态',
        type: 'grammar',
        duration: 30,
        vocabulary: [
          { word: 'Yesterday', translation: '昨天', phonetic: '' },
          { word: 'Last week', translation: '上周', phonetic: '' },
          { word: 'Already', translation: '已经', phonetic: '' }
        ],
        grammar: { title: '一般过去时', examples: ['I visited Paris last year.', 'She wrote a letter yesterday.'] },
        dialogue: [
          { en: 'What did you do last weekend?', zh: '你上周末做了什么？' },
          { en: 'I went hiking with my friends.', zh: '我和朋友去徒步了。' }
        ]
      },
      {
        id: 'en-i-2',
        title: '工作交流',
        type: 'business',
        duration: 35,
        vocabulary: [
          { word: 'Meeting', translation: '会议', phonetic: '' },
          { word: 'Deadline', translation: '截止日期', phonetic: '' },
          { word: 'Project', translation: '项目', phonetic: '' },
          { word: 'Colleague', translation: '同事', phonetic: '' }
        ],
        grammar: { title: '商务表达', examples: ['Lets schedule a meeting.', 'The project is due Friday.'] },
        dialogue: [
          { en: 'Do you have time for a meeting?', zh: '你有时间开会吗？' },
          { en: 'Sure, how about 3 pm?', zh: '可以，下午3点怎么样？' }
        ]
      }
    ]
  },
  {
    id: 'en-advanced',
    language: 'en',
    languageName: '英语',
    level: 'advanced',
    levelName: '高级',
    title: '英语高级精通',
    description: '学术写作与流利表达',
    cover: '📕',
    color: 'from-red-400 to-red-600',
    lessons: [
      {
        id: 'en-a-1',
        title: '学术写作',
        type: 'writing',
        duration: 40,
        vocabulary: [
          { word: 'Research', translation: '研究', phonetic: '' },
          { word: 'Analysis', translation: '分析', phonetic: '' },
          { word: 'Conclusion', translation: '结论', phonetic: '' }
        ],
        grammar: { title: '虚拟语气', examples: ['If I were you, I would study harder.', 'Had I known, I would have acted.'] },
        dialogue: [
          { en: 'The research demonstrates significant findings.', zh: '研究展示了重要发现。' }
        ]
      }
    ]
  },
  {
    id: 'ja-beginner',
    language: 'ja',
    languageName: '日语',
    level: 'beginner',
    levelName: '入门级',
    title: '日语五十音入门',
    description: '学习假名发音和基础问候',
    cover: '🎌',
    color: 'from-pink-400 to-red-500',
    lessons: [
      {
        id: 'ja-b-1',
        title: '五十音图',
        type: 'pronunciation',
        duration: 25,
        vocabulary: [
          { word: 'あ (a)', translation: '啊', phonetic: 'a' },
          { word: 'い (i)', translation: '一', phonetic: 'i' },
          { word: 'う (u)', translation: '乌', phonetic: 'u' },
          { word: 'え (e)', translation: '诶', phonetic: 'e' },
          { word: 'お (o)', translation: '哦', phonetic: 'o' }
        ],
        grammar: { title: '假名基础', examples: ['あいうえお', 'かきくけこ'] },
        dialogue: [
          { ja: 'こんにちは', zh: '你好' },
          { ja: 'さようなら', zh: '再见' }
        ]
      },
      {
        id: 'ja-b-2',
        title: '基础问候',
        type: 'conversation',
        duration: 20,
        vocabulary: [
          { word: 'おはよう', translation: '早上好', phonetic: 'ohayou' },
          { word: 'こんにちは', translation: '你好', phonetic: 'konnichiwa' },
          { word: 'こんばんは', translation: '晚上好', phonetic: 'konbanwa' },
          { word: 'ありがとう', translation: '谢谢', phonetic: 'arigatou' }
        ],
        grammar: { title: '礼貌用语', examples: ['です/ます 体'] },
        dialogue: [
          { ja: 'おはようございます', zh: '早上好（敬语）' },
          { ja: 'ありがとうございます', zh: '非常感谢' }
        ]
      },
      {
        id: 'ja-b-3',
        title: '数字与日期',
        type: 'numbers',
        duration: 22,
        vocabulary: [
          { word: '一 (いち)', translation: '一', phonetic: 'ichi' },
          { word: '二 (に)', translation: '二', phonetic: 'ni' },
          { word: '三 (さん)', translation: '三', phonetic: 'san' },
          { word: '今日 (きょう)', translation: '今天', phonetic: 'kyou' },
          { word: '明日 (あした)', translation: '明天', phonetic: 'ashita' }
        ],
        grammar: { title: '数字读法', examples: ['100 = 百(ひゃく)', '1000 = 千(せん)'] },
        dialogue: [
          { ja: '今日はいい天気ですね', zh: '今天天气真好' }
        ]
      },
      {
        id: 'ja-b-4',
        title: '自我介绍',
        type: 'conversation',
        duration: 25,
        vocabulary: [
          { word: 'はじめまして', translation: '初次见面', phonetic: 'hajimemashite' },
          { word: '自己紹介', translation: '自我介绍', phonetic: 'jiko_shoukai' },
          { word: '学生', translation: '学生', phonetic: 'gakusei' }
        ],
        grammar: { title: 'です/ます体', examples: ['私は学生です', 'よろしくお願いします'] },
        dialogue: [
          { ja: 'はじめまして、田中です', zh: '初次见面，我是田中' },
          { ja: 'よろしくお願いします', zh: '请多关照' }
        ]
      }
    ]
  },
  {
    id: 'ja-intermediate',
    language: 'ja',
    languageName: '日语',
    level: 'intermediate',
    levelName: '中级',
    title: '日语中级会话',
    description: '掌握日常和职场日语',
    cover: '📙',
    color: 'from-orange-400 to-orange-600',
    lessons: [
      {
        id: 'ja-i-1',
        title: '动词变形',
        type: 'grammar',
        duration: 30,
        vocabulary: [
          { word: '食べる', translation: '吃', phonetic: 'taberu' },
          { word: '飲む', translation: '喝', phonetic: 'nomu' },
          { word: '行く', translation: '去', phonetic: 'iku' }
        ],
        grammar: { title: '动词三类变形', examples: ['食べます', '食べて', '食べた'] },
        dialogue: [
          { ja: '昼ご飯を食べました', zh: '吃过午饭了' }
        ]
      },
      {
        id: 'ja-i-2',
        title: '职场日语',
        type: 'business',
        duration: 35,
        vocabulary: [
          { word: '会議', translation: '会议', phonetic: 'kaigi' },
          { word: '電話', translation: '电话', phonetic: 'denwa' },
          { word: 'メール', translation: '邮件', phonetic: 'meeru' }
        ],
        grammar: { title: '敬语表达', examples: ['おっしゃる', 'なさる', 'いただく'] },
        dialogue: [
          { ja: '部長、お電話です', zh: '部长，有您的电话' }
        ]
      }
    ]
  },
  {
    id: 'ko-beginner',
    language: 'ko',
    languageName: '韩语',
    level: 'beginner',
    levelName: '入门级',
    title: '韩语基础发音',
    description: '学习韩文字母和基础会话',
    cover: '🇰🇷',
    color: 'from-purple-400 to-purple-600',
    lessons: [
      {
        id: 'ko-b-1',
        title: '韩文字母',
        type: 'pronunciation',
        duration: 25,
        vocabulary: [
          { word: 'ㄱ (g)', translation: '哥', phonetic: 'g' },
          { word: 'ㄴ (n)', translation: '呢', phonetic: 'n' },
          { word: 'ㄷ (d)', translation: '的', phonetic: 'd' },
          { word: 'ㅏ (a)', translation: '啊', phonetic: 'a' },
          { word: 'ㅓ (eo)', translation: '额', phonetic: 'eo' }
        ],
        grammar: { title: '音节结构', examples: ['가', '나', '다'] },
        dialogue: [
          { ko: '안녕하세요', zh: '你好' },
          { ko: '감사합니다', zh: '谢谢' }
        ]
      },
      {
        id: 'ko-b-2',
        title: '基础问候',
        type: 'conversation',
        duration: 20,
        vocabulary: [
          { word: '안녕하세요', translation: '你好', phonetic: 'annyeonghaseyo' },
          { word: '안녕히 가세요', translation: '再见(留者)', phonetic: '' },
          { word: '만나서 반갑습니다', translation: '很高兴见到你', phonetic: '' }
        ],
        grammar: { title: '敬语体系', examples: ['-ㅂ니다/습니다', '-세요'] },
        dialogue: [
          { ko: '안녕하세요, 만나서 반갑습니다', zh: '你好，很高兴见到你' }
        ]
      },
      {
        id: 'ko-b-3',
        title: '数字表达',
        type: 'numbers',
        duration: 22,
        vocabulary: [
          { word: '하나', translation: '一', phonetic: 'hana' },
          { word: '둘', translation: '二', phonetic: 'dul' },
          { word: '셋', translation: '三', phonetic: 'set' },
          { word: '오늘', translation: '今天', phonetic: 'oneul' },
          { word: '내일', translation: '明天', phonetic: 'naeil' }
        ],
        grammar: { title: '固有数词', examples: ['1-하나, 2-둘, 3-셋, 4-넷, 5-다섯'] },
        dialogue: [
          { ko: '오늘 날씨가 좋아요', zh: '今天天气很好' }
        ]
      },
      {
        id: 'ko-b-4',
        title: '自我介绍',
        type: 'conversation',
        duration: 25,
        vocabulary: [
          { word: '이름', translation: '名字', phonetic: 'ireum' },
          { word: '학생', translation: '学生', phonetic: 'haksaeng' },
          { word: '만나다', translation: '见面', phonetic: 'mannada' }
        ],
        grammar: { title: '陈述式', examples: ['저는 학생입니다', '만나서 반갑습니다'] },
        dialogue: [
          { ko: '안녕하세요, 저는 김철수입니다', zh: '你好，我是金哲洙' },
          { ko: '만나서 반갑습니다', zh: '很高兴见到你' }
        ]
      }
    ]
  },
  {
    id: 'ko-intermediate',
    language: 'ko',
    languageName: '韩语',
    level: 'intermediate',
    levelName: '中级',
    title: '韩语中级进阶',
    description: '掌握日常交流与流行语',
    cover: '📓',
    color: 'from-indigo-400 to-indigo-600',
    lessons: [
      {
        id: 'ko-i-1',
        title: '时态与尊敬',
        type: 'grammar',
        duration: 30,
        vocabulary: [
          { word: '했어요', translation: '做了', phonetic: '' },
          { word: '하고 있어요', translation: '正在做', phonetic: '' }
        ],
        grammar: { title: '时态变化', examples: ['过去式 -ㅆ어요', '进行式 -고 있어요'] },
        dialogue: [
          { ko: '밥을 먹고 있어요', zh: '正在吃饭' }
        ]
      }
    ]
  }
];

module.exports = { courses };
