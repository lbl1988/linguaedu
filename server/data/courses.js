const courses = [
  // ===================== 英语 =====================
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
        id: 'en-b-1', title: '字母与发音', type: 'pronunciation', duration: 15,
        vocabulary: [
          { word: 'Apple', translation: '苹果', phonetic: '/ˈæpl/' },
          { word: 'Book', translation: '书本', phonetic: '/bʊk/' },
          { word: 'Cat', translation: '猫', phonetic: '/kæt/' },
          { word: 'Dog', translation: '狗', phonetic: '/dɒɡ/' },
          { word: 'Egg', translation: '鸡蛋', phonetic: '/eɡ/' },
          { word: 'Fish', translation: '鱼', phonetic: '/fɪʃ/' },
          { word: 'Good', translation: '好的', phonetic: '/ɡʊd/' },
          { word: 'Hello', translation: '你好', phonetic: '/həˈləʊ/' }
        ],
        grammar: { title: '元音与辅音', examples: ['A E I O U are vowels.', 'Consonants: B C D F G...'] },
        dialogue: [
          { en: 'Hello! How are you?', zh: '你好！你好吗？' },
          { en: 'I am fine, thank you.', zh: '我很好，谢谢你。' },
          { en: 'What is your name?', zh: '你叫什么名字？' },
          { en: 'My name is Tom.', zh: '我叫汤姆。' }
        ]
      },
      {
        id: 'en-b-2', title: '日常问候', type: 'conversation', duration: 20,
        vocabulary: [
          { word: 'Good morning', translation: '早上好', phonetic: '' },
          { word: 'Good night', translation: '晚安', phonetic: '' },
          { word: 'Nice to meet you', translation: '很高兴认识你', phonetic: '' },
          { word: 'See you later', translation: '再见', phonetic: '' },
          { word: 'Welcome', translation: '欢迎', phonetic: '' },
          { word: 'Excuse me', translation: '打扰一下', phonetic: '' },
          { word: 'Sorry', translation: '对不起', phonetic: '' },
          { word: 'Please', translation: '请', phonetic: '' }
        ],
        grammar: { title: '问候用语', examples: ['How is it going?', "What's up?", 'Long time no see.'] },
        dialogue: [
          { en: 'Good morning, everyone!', zh: '大家早上好！' },
          { en: 'Nice to meet you, Sarah.', zh: '很高兴认识你，萨拉。' },
          { en: 'Where are you from?', zh: '你来自哪里？' },
          { en: 'I am from China.', zh: '我来自中国。' },
          { en: 'See you tomorrow!', zh: '明天见！' }
        ]
      },
      {
        id: 'en-b-3', title: '数字与时间', type: 'numbers', duration: 18,
        vocabulary: [
          { word: 'One', translation: '一', phonetic: '' },
          { word: 'Two', translation: '二', phonetic: '' },
          { word: 'Three', translation: '三', phonetic: '' },
          { word: 'Four', translation: '四', phonetic: '' },
          { word: 'Five', translation: '五', phonetic: '' },
          { word: 'Ten', translation: '十', phonetic: '' },
          { word: 'Today', translation: '今天', phonetic: '' },
          { word: 'Tomorrow', translation: '明天', phonetic: '' },
          { word: 'Yesterday', translation: '昨天', phonetic: '' },
          { word: 'Week', translation: '周', phonetic: '' }
        ],
        grammar: { title: '时间表达', examples: ["It's 9 o'clock.", 'The date is Monday.', 'Half past ten.'] },
        dialogue: [
          { en: 'What time is it now?', zh: '现在几点？' },
          { en: 'It is nine o clock in the morning.', zh: '现在是上午九点。' },
          { en: 'What day is it today?', zh: '今天星期几？' },
          { en: 'Today is Friday.', zh: '今天星期五。' }
        ]
      },
      {
        id: 'en-b-4', title: '购物场景', type: 'scenario', duration: 25,
        vocabulary: [
          { word: 'How much', translation: '多少钱', phonetic: '' },
          { word: 'Expensive', translation: '昂贵的', phonetic: '' },
          { word: 'Cheap', translation: '便宜的', phonetic: '' },
          { word: 'Bill', translation: '账单', phonetic: '' },
          { word: 'Cash', translation: '现金', phonetic: '' },
          { word: 'Credit card', translation: '信用卡', phonetic: '' },
          { word: 'Size', translation: '尺码', phonetic: '' },
          { word: 'Color', translation: '颜色', phonetic: '' }
        ],
        grammar: { title: '价格询问与讨价还价', examples: ['How much is this?', 'Can I have a discount?', 'That is too expensive.'] },
        dialogue: [
          { en: 'Excuse me, how much is this shirt?', zh: '打扰一下，这件衬衫多少钱？' },
          { en: 'It is 50 dollars.', zh: '50美元。' },
          { en: 'That is too expensive. Can you give a discount?', zh: '太贵了，能便宜点吗？' },
          { en: 'OK, I can give you 10% off.', zh: '好的，给你打九折。' },
          { en: 'Great, I will take it.', zh: '太好了，我要了。' }
        ]
      },
      {
        id: 'en-b-5', title: '家庭成员', type: 'conversation', duration: 20,
        vocabulary: [
          { word: 'Family', translation: '家庭', phonetic: '' },
          { word: 'Father', translation: '父亲', phonetic: '' },
          { word: 'Mother', translation: '母亲', phonetic: '' },
          { word: 'Brother', translation: '兄弟', phonetic: '' },
          { word: 'Sister', translation: '姐妹', phonetic: '' },
          { word: 'Grandfather', translation: '祖父', phonetic: '' },
          { word: 'Grandmother', translation: '祖母', phonetic: '' },
          { word: 'Cousin', translation: '表兄弟姐妹', phonetic: '' }
        ],
        grammar: { title: '所有格', examples: ['This is my family.', 'Her brother is tall.', 'Their house is big.'] },
        dialogue: [
          { en: 'Tell me about your family.', zh: '跟我说说你的家庭吧。' },
          { en: 'I have a brother and a sister.', zh: '我有一个哥哥和一个妹妹。' },
          { en: 'What does your father do?', zh: '你爸爸是做什么的？' },
          { en: 'He is a doctor.', zh: '他是一名医生。' }
        ]
      },
      {
        id: 'en-b-6', title: '食物与餐厅', type: 'scenario', duration: 22,
        vocabulary: [
          { word: 'Breakfast', translation: '早餐', phonetic: '' },
          { word: 'Lunch', translation: '午餐', phonetic: '' },
          { word: 'Dinner', translation: '晚餐', phonetic: '' },
          { word: 'Rice', translation: '米饭', phonetic: '' },
          { word: 'Bread', translation: '面包', phonetic: '' },
          { word: 'Water', translation: '水', phonetic: '' },
          { word: 'Tea', translation: '茶', phonetic: '' },
          { word: 'Coffee', translation: '咖啡', phonetic: '' },
          { word: 'Menu', translation: '菜单', phonetic: '' },
          { word: 'Order', translation: '点餐', phonetic: '' }
        ],
        grammar: { title: '点餐用语', examples: ['What would you like?', 'I would like a cup of tea.', 'Check, please.'] },
        dialogue: [
          { en: 'Good evening, do you have a reservation?', zh: '晚上好，有预订吗？' },
          { en: 'Yes, under the name Smith.', zh: '有，预订人史密斯。' },
          { en: 'Here is the menu. Are you ready to order?', zh: '这是菜单，准备好点餐了吗？' },
          { en: 'I will have a steak and a salad, please.', zh: '我要一份牛排和沙拉。' },
          { en: 'Would you like something to drink?', zh: '要喝点什么吗？' },
          { en: 'A glass of water, please.', zh: '请来一杯水。' }
        ]
      },
      {
        id: 'en-b-7', title: '交通出行', type: 'scenario', duration: 20,
        vocabulary: [
          { word: 'Bus', translation: '公交车', phonetic: '' },
          { word: 'Subway', translation: '地铁', phonetic: '' },
          { word: 'Taxi', translation: '出租车', phonetic: '' },
          { word: 'Train', translation: '火车', phonetic: '' },
          { word: 'Airport', translation: '机场', phonetic: '' },
          { word: 'Station', translation: '车站', phonetic: '' },
          { word: 'Ticket', translation: '票', phonetic: '' },
          { word: 'Direction', translation: '方向', phonetic: '' }
        ],
        grammar: { title: '问路', examples: ['Where is the subway?', 'How do I get to the airport?', 'Go straight and turn left.'] },
        dialogue: [
          { en: 'Excuse me, how do I get to the museum?', zh: '打扰一下，去博物馆怎么走？' },
          { en: 'Take the subway to Central Park.', zh: '坐地铁到中央公园。' },
          { en: 'How long does it take?', zh: '需要多长时间？' },
          { en: 'About 20 minutes by bus.', zh: '坐公交大约20分钟。' },
          { en: 'Thanks for your help!', zh: '谢谢你的帮助！' }
        ]
      },
      {
        id: 'en-b-8', title: '天气与健康', type: 'conversation', duration: 20,
        vocabulary: [
          { word: 'Weather', translation: '天气', phonetic: '' },
          { word: 'Sunny', translation: '晴朗的', phonetic: '' },
          { word: 'Rainy', translation: '下雨的', phonetic: '' },
          { word: 'Cold', translation: '寒冷的', phonetic: '' },
          { word: 'Hot', translation: '炎热的', phonetic: '' },
          { word: 'Sick', translation: '生病的', phonetic: '' },
          { word: 'Headache', translation: '头痛', phonetic: '' },
          { word: 'Medicine', translation: '药', phonetic: '' }
        ],
        grammar: { title: '谈论健康', examples: ['How are you feeling today?', 'I do not feel well.', 'You should see a doctor.'] },
        dialogue: [
          { en: 'How is the weather today?', zh: '今天天气怎么样？' },
          { en: 'It is very hot and sunny.', zh: '非常炎热晴朗。' },
          { en: 'I don\'t feel well today.', zh: '我今天感觉不舒服。' },
          { en: 'What is wrong with you?', zh: '你怎么了？' },
          { en: 'I have a headache.', zh: '我有点头痛。' },
          { en: 'You should take some medicine and rest.', zh: '你应该吃药休息。' }
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
        id: 'en-i-1', title: '过去时态', type: 'grammar', duration: 30,
        vocabulary: [
          { word: 'Yesterday', translation: '昨天', phonetic: '' },
          { word: 'Last week', translation: '上周', phonetic: '' },
          { word: 'Already', translation: '已经', phonetic: '' },
          { word: 'Recently', translation: '最近', phonetic: '' },
          { word: 'Previously', translation: '以前', phonetic: '' }
        ],
        grammar: { title: '一般过去时与现在完成时', examples: ['I visited Paris last year.', 'She has lived here for 3 years.', 'Have you ever tried sushi?'] },
        dialogue: [
          { en: 'What did you do last weekend?', zh: '你上周末做了什么？' },
          { en: 'I went hiking with my friends.', zh: '我和朋友去徒步了。' },
          { en: 'Have you ever been to Japan?', zh: '你去过日本吗？' },
          { en: 'Yes, I went there last summer.', zh: '是的，我去年夏天去的。' }
        ]
      },
      {
        id: 'en-i-2', title: '工作交流', type: 'business', duration: 35,
        vocabulary: [
          { word: 'Meeting', translation: '会议', phonetic: '' },
          { word: 'Deadline', translation: '截止日期', phonetic: '' },
          { word: 'Project', translation: '项目', phonetic: '' },
          { word: 'Colleague', translation: '同事', phonetic: '' },
          { word: 'Report', translation: '报告', phonetic: '' },
          { word: 'Schedule', translation: '日程', phonetic: '' },
          { word: 'Conference', translation: '大会', phonetic: '' },
          { word: 'Negotiate', translation: '谈判', phonetic: '' }
        ],
        grammar: { title: '商务表达', examples: ["Let's schedule a meeting.", 'The project is due Friday.', 'Could you send me the report?'] },
        dialogue: [
          { en: 'Do you have time for a meeting tomorrow?', zh: '你明天有时间开会吗？' },
          { en: 'Sure, how about 3 pm?', zh: '可以，下午3点怎么样？' },
          { en: 'I will send you the project details by email.', zh: '我会通过邮件把项目详情发给你。' },
          { en: 'The deadline is next Friday.', zh: '截止日期是下周五。' }
        ]
      },
      {
        id: 'en-i-3', title: '现在完成时', type: 'grammar', duration: 25,
        vocabulary: [
          { word: 'Since', translation: '自从', phonetic: '' },
          { word: 'For', translation: '持续', phonetic: '' },
          { word: 'Experience', translation: '经验', phonetic: '' },
          { word: 'Achievement', translation: '成就', phonetic: '' }
        ],
        grammar: { title: '现在完成时用法', examples: ['I have learned English for 5 years.', 'She has never been abroad.', 'They have already finished.'] },
        dialogue: [
          { en: 'How long have you been studying English?', zh: '你学英语多久了？' },
          { en: 'I have been studying for 10 years.', zh: '我已经学了10年了。' },
          { en: 'Have you finished the report yet?', zh: '你的报告写完了吗？' },
          { en: 'Yes, I have already submitted it.', zh: '是的，已经提交了。' }
        ]
      },
      {
        id: 'en-i-4', title: '定语从句', type: 'grammar', duration: 30,
        vocabulary: [
          { word: 'Relative clause', translation: '关系从句', phonetic: '' },
          { word: 'Who', translation: '谁', phonetic: '' },
          { word: 'Which', translation: '哪个', phonetic: '' },
          { word: 'That', translation: '那个', phonetic: '' }
        ],
        grammar: { title: '关系代词用法', examples: ['The man who is wearing a red shirt is my teacher.', 'The book which I bought yesterday is interesting.', 'She is the girl that I met at the party.'] },
        dialogue: [
          { en: 'Do you know the girl who is standing there?', zh: '你认识站在那里的女孩吗？' },
          { en: 'Yes, she is my cousin.', zh: '是的，她是我的表妹。' },
          { en: 'The movie that we watched last night was great.', zh: '我们昨晚看的电影很棒。' },
          { en: 'I agree, it was amazing.', zh: '我同意，太精彩了。' }
        ]
      },
      {
        id: 'en-i-5', title: '旅行与度假', type: 'scenario', duration: 30,
        vocabulary: [
          { word: 'Travel', translation: '旅行', phonetic: '' },
          { word: 'Vacation', translation: '假期', phonetic: '' },
          { word: 'Hotel', translation: '酒店', phonetic: '' },
          { word: 'Reservation', translation: '预订', phonetic: '' },
          { word: 'Luggage', translation: '行李', phonetic: '' },
          { word: 'Passport', translation: '护照', phonetic: '' },
          { word: 'Itinerary', translation: '行程', phonetic: '' }
        ],
        grammar: { title: '旅行计划表达', examples: ['I am going to travel to Europe.', 'We have a 7-day itinerary.', 'I would like to book a room.'] },
        dialogue: [
          { en: 'Where are you going for vacation?', zh: '你打算去哪里度假？' },
          { en: 'I am planning to visit Thailand.', zh: '我计划去泰国。' },
          { en: 'Have you booked a hotel yet?', zh: '你订酒店了吗？' },
          { en: 'Yes, I booked a beachfront resort.', zh: '订了一家海滨度假酒店。' },
          { en: 'That sounds wonderful!', zh: '听起来太棒了！' }
        ]
      },
      {
        id: 'en-i-6', title: '社交娱乐', type: 'conversation', duration: 25,
        vocabulary: [
          { word: 'Party', translation: '派对', phonetic: '' },
          { word: 'Invitation', translation: '邀请', phonetic: '' },
          { word: 'Celebrate', translation: '庆祝', phonetic: '' },
          { word: 'Birthday', translation: '生日', phonetic: '' },
          { word: 'Gift', translation: '礼物', phonetic: '' },
          { word: 'Dance', translation: '跳舞', phonetic: '' },
          { word: 'Music', translation: '音乐', phonetic: '' }
        ],
        grammar: { title: '社交用语', examples: ['Would you like to come to my party?', 'Let us celebrate!', 'Happy birthday to you!'] },
        dialogue: [
          { en: 'I am having a birthday party this Saturday.', zh: '我这周六举办生日派对。' },
          { en: 'Would you like to come?', zh: '你想来吗？' },
          { en: 'Of course, I would love to!', zh: '当然，我非常愿意！' },
          { en: 'What time does it start?', zh: '几点开始？' },
          { en: 'At 7 pm. Bring some friends!', zh: '晚上7点，带些朋友来！' }
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
        id: 'en-a-1', title: '学术写作', type: 'writing', duration: 40,
        vocabulary: [
          { word: 'Research', translation: '研究', phonetic: '' },
          { word: 'Analysis', translation: '分析', phonetic: '' },
          { word: 'Conclusion', translation: '结论', phonetic: '' },
          { word: 'Hypothesis', translation: '假设', phonetic: '' },
          { word: 'Methodology', translation: '方法论', phonetic: '' },
          { word: 'Significant', translation: '重要的', phonetic: '' }
        ],
        grammar: { title: '虚拟语气与正式文体', examples: ['If I were you, I would study harder.', 'Had I known, I would have acted.', 'It is suggested that we conduct further research.'] },
        dialogue: [
          { en: 'The research demonstrates significant findings.', zh: '研究展示了重要发现。' },
          { en: 'Based on the analysis, we can conclude that...', zh: '基于分析，我们可以得出结论...' },
          { en: 'Further studies are recommended to validate these results.', zh: '建议进一步研究以验证这些结果。' }
        ]
      },
      {
        id: 'en-a-2', title: '商务谈判', type: 'business', duration: 35,
        vocabulary: [
          { word: 'Negotiation', translation: '谈判', phonetic: '' },
          { word: 'Proposal', translation: '提案', phonetic: '' },
          { word: 'Contract', translation: '合同', phonetic: '' },
          { word: 'Agreement', translation: '协议', phonetic: '' },
          { word: 'Compromise', translation: '妥协', phonetic: '' },
          { word: 'Concession', translation: '让步', phonetic: '' }
        ],
        grammar: { title: '谈判用语', examples: ['We propose a 10% discount.', 'That is not acceptable.', 'Let us find a win-win solution.', 'We need to discuss the terms.'] },
        dialogue: [
          { en: 'Let us discuss the pricing.', zh: '我们来讨论一下价格。' },
          { en: 'We can offer a unit price of $50.', zh: '我们可以提供单价50美元。' },
          { en: 'That is too high. Could you offer a discount?', zh: '太高了，能打折吗？' },
          { en: 'If you order 1000 units, we can reduce to $45.', zh: '如果订1000件，可以降到45美元。' },
          { en: 'That sounds reasonable. Let us draw up the contract.', zh: '听起来合理，我们来拟定合同吧。' }
        ]
      },
      {
        id: 'en-a-3', title: '新闻报道', type: 'listening', duration: 30,
        vocabulary: [
          { word: 'Breaking news', translation: '突发新闻', phonetic: '' },
          { word: 'Report', translation: '报道', phonetic: '' },
          { word: 'Source', translation: '消息来源', phonetic: '' },
          { word: 'Correspondent', translation: '记者', phonetic: '' },
          { word: 'Broadcast', translation: '广播', phonetic: '' },
          { word: 'Coverage', translation: '报道范围', phonetic: '' }
        ],
        grammar: { title: '新闻用语', examples: ['According to reports...', 'Sources say that...', 'An official statement has been released.'] },
        dialogue: [
          { en: 'Breaking news: a major earthquake has struck.', zh: '突发新闻：一场大地震已发生。' },
          { en: 'Our correspondent is live on the scene.', zh: '我们的记者正在现场报道。' },
          { en: 'The government has issued an emergency warning.', zh: '政府已发布紧急警告。' }
        ]
      },
      {
        id: 'en-a-4', title: '文学赏析', type: 'writing', duration: 35,
        vocabulary: [
          { word: 'Literature', translation: '文学', phonetic: '' },
          { word: 'Poetry', translation: '诗歌', phonetic: '' },
          { word: 'Novel', translation: '小说', phonetic: '' },
          { word: 'Character', translation: '角色', phonetic: '' },
          { word: 'Theme', translation: '主题', phonetic: '' },
          { word: 'Symbolism', translation: '象征', phonetic: '' }
        ],
        grammar: { title: '文学评论表达', examples: ['The protagonist represents...', 'The theme of the story is...', 'The author uses symbolism to convey...'] },
        dialogue: [
          { en: 'What do you think of the novel?', zh: '你觉得这本小说怎么样？' },
          { en: 'It is a masterpiece. The character development is superb.', zh: '这是一部杰作，角色塑造非常出色。' },
          { en: 'The theme of love and sacrifice resonates deeply.', zh: '爱与牺牲的主题引发了深刻共鸣。' }
        ]
      },
      {
        id: 'en-a-5', title: '公共演讲', type: 'speaking', duration: 30,
        vocabulary: [
          { word: 'Presentation', translation: '演示', phonetic: '' },
          { word: 'Audience', translation: '观众', phonetic: '' },
          { word: 'Keynote', translation: '主旨', phonetic: '' },
          { word: 'Speech', translation: '演讲', phonetic: '' },
          { word: 'Delivery', translation: '表达方式', phonetic: '' },
          { word: 'Gesture', translation: '手势', phonetic: '' }
        ],
        grammar: { title: '演讲技巧', examples: ['Ladies and gentlemen, welcome.', 'Today I will talk about...', 'Let me give you an example.', 'In conclusion...'] },
        dialogue: [
          { en: 'Ladies and gentlemen, welcome to the conference.', zh: '女士们先生们，欢迎来到大会。' },
          { en: 'Today, I will share my insights on innovation.', zh: '今天，我将分享我对创新的见解。' },
          { en: 'In conclusion, technology shapes our future.', zh: '总之，科技塑造我们的未来。' },
          { en: 'Thank you for your attention.', zh: '感谢大家的聆听。' }
        ]
      }
    ]
  },

  // ===================== 日语 =====================
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
        id: 'ja-b-1', title: '五十音图', type: 'pronunciation', duration: 25,
        vocabulary: [
          { word: 'あ (a)', translation: '啊', phonetic: 'a' },
          { word: 'い (i)', translation: '一', phonetic: 'i' },
          { word: 'う (u)', translation: '乌', phonetic: 'u' },
          { word: 'え (e)', translation: '诶', phonetic: 'e' },
          { word: 'お (o)', translation: '哦', phonetic: 'o' },
          { word: 'か (ka)', translation: '卡', phonetic: 'ka' },
          { word: 'き (ki)', translation: 'ki', phonetic: 'ki' },
          { word: 'く (ku)', translation: 'ku', phonetic: 'ku' }
        ],
        grammar: { title: '假名基础', examples: ['あいうえお', 'かきくけこ', 'さしすせそ'] },
        dialogue: [
          { ja: 'こんにちは', zh: '你好' },
          { ja: 'さようなら', zh: '再见' },
          { ja: 'ありがとう', zh: '谢谢' },
          { ja: 'はじめまして', zh: '初次见面' }
        ]
      },
      {
        id: 'ja-b-2', title: '基础问候', type: 'conversation', duration: 20,
        vocabulary: [
          { word: 'おはよう', translation: '早上好', phonetic: 'ohayou' },
          { word: 'こんにちは', translation: '你好', phonetic: 'konnichiwa' },
          { word: 'こんばんは', translation: '晚上好', phonetic: 'konbanwa' },
          { word: 'ありがとう', translation: '谢谢', phonetic: 'arigatou' },
          { word: 'ごめんなさい', translation: '对不起', phonetic: 'gomennasai' },
          { word: 'おやすみ', translation: '晚安', phonetic: 'oyasumi' }
        ],
        grammar: { title: '礼貌用语', examples: ['です/ます 体', '丁寧語'] },
        dialogue: [
          { ja: 'おはようございます', zh: '早上好（敬语）' },
          { ja: 'ありがとうございます', zh: '非常感谢' },
          { ja: 'ごめんなさい、遅れました', zh: '对不起，迟到了' },
          { ja: 'おやすみなさい', zh: '晚安' }
        ]
      },
      {
        id: 'ja-b-3', title: '数字与日期', type: 'numbers', duration: 22,
        vocabulary: [
          { word: '一 (いち)', translation: '一', phonetic: 'ichi' },
          { word: '二 (に)', translation: '二', phonetic: 'ni' },
          { word: '三 (さん)', translation: '三', phonetic: 'san' },
          { word: '四 (よん)', translation: '四', phonetic: 'yon' },
          { word: '五 (ご)', translation: '五', phonetic: 'go' },
          { word: '今日 (きょう)', translation: '今天', phonetic: 'kyou' },
          { word: '明日 (あした)', translation: '明天', phonetic: 'ashita' },
          { word: '昨日 (きのう)', translation: '昨天', phonetic: 'kinou' }
        ],
        grammar: { title: '数字读法', examples: ['100 = 百(ひゃく)', '1000 = 千(せん)', '10000 = 万(まん)'] },
        dialogue: [
          { ja: '今日はいい天気ですね', zh: '今天天气真好' },
          { ja: '明日は何曜日ですか', zh: '明天星期几？' },
          { ja: '一、二、三、四、五', zh: '一、二、三、四、五' }
        ]
      },
      {
        id: 'ja-b-4', title: '自我介绍', type: 'conversation', duration: 25,
        vocabulary: [
          { word: 'はじめまして', translation: '初次见面', phonetic: 'hajimemashite' },
          { word: '自己紹介', translation: '自我介绍', phonetic: 'jiko_shoukai' },
          { word: '学生', translation: '学生', phonetic: 'gakusei' },
          { word: '会社員', translation: '公司职员', phonetic: 'kaishain' },
          { word: '先生', translation: '老师', phonetic: 'sensei' }
        ],
        grammar: { title: 'です/ます体', examples: ['私は学生です', 'よろしくお願いします', 'はじめまして'] },
        dialogue: [
          { ja: 'はじめまして、田中です', zh: '初次见面，我是田中' },
          { ja: 'よろしくお願いします', zh: '请多关照' },
          { ja: '何のお仕事をしていますか', zh: '您做什么工作？' },
          { ja: '学生です', zh: '我是学生' }
        ]
      },
      {
        id: 'ja-b-5', title: '家庭成员', type: 'conversation', duration: 20,
        vocabulary: [
          { word: '家族', translation: '家庭', phonetic: 'kazoku' },
          { word: '父親', translation: '父亲', phonetic: 'chichioya' },
          { word: '母親', translation: '母亲', phonetic: 'hahaoya' },
          { word: '兄弟', translation: '兄弟', phonetic: 'kyoudai' },
          { word: '姉妹', translation: '姐妹', phonetic: 'shimai' },
          { word: '子供', translation: '孩子', phonetic: 'kodomo' }
        ],
        grammar: { title: '所有格', examples: ['私の家族', 'あなたの母親', '彼の兄弟'] },
        dialogue: [
          { ja: 'ご家族は何人ですか', zh: '您家有几口人？' },
          { ja: '四人です', zh: '四口人' },
          { ja: 'ご両親は元気ですか', zh: '你父母身体好吗？' },
          { ja: 'はい、元気です', zh: '是的，都很好。' }
        ]
      },
      {
        id: 'ja-b-6', title: '食物与饮品', type: 'scenario', duration: 22,
        vocabulary: [
          { word: 'ご飯', translation: '米饭', phonetic: 'gohan' },
          { word: 'パン', translation: '面包', phonetic: 'pan' },
          { word: '水', translation: '水', phonetic: 'mizu' },
          { word: 'お茶', translation: '茶', phonetic: 'ocha' },
          { word: 'コーヒー', translation: '咖啡', phonetic: 'coohii' },
          { word: '朝ご飯', translation: '早餐', phonetic: 'asagohan' },
          { word: '晩ご飯', translation: '晚餐', phonetic: 'bangohan' }
        ],
        grammar: { title: '点餐用语', examples: ['メニューをください', 'これをください', 'お会計お願いします'] },
        dialogue: [
          { ja: 'メニューをください', zh: '请给我菜单' },
          { ja: 'ラーメンを一つください', zh: '请来一碗拉面' },
          { ja: '飲み物は何にしますか', zh: '喝点什么？' },
          { ja: 'お茶をください', zh: '请给我茶' },
          { ja: 'お会計お願いします', zh: '请结账' }
        ]
      },
      {
        id: 'ja-b-7', title: '交通工具', type: 'scenario', duration: 20,
        vocabulary: [
          { word: 'バス', translation: '公交车', phonetic: 'basu' },
          { word: '電車', translation: '电车', phonetic: 'densha' },
          { word: '地下鉄', translation: '地铁', phonetic: 'chikatetsu' },
          { word: 'タクシー', translation: '出租车', phonetic: 'takushii' },
          { word: '新幹線', translation: '新干线', phonetic: 'shinkansen' },
          { word: '空港', translation: '机场', phonetic: 'kuukou' }
        ],
        grammar: { title: '问路', examples: ['駅はどこですか', 'どうやって行きますか', 'まっすぐ行って右です'] },
        dialogue: [
          { ja: 'すみません、駅はどこですか', zh: '请问车站在哪里？' },
          { ja: 'まっすぐ行くと右にあります', zh: '一直走在右边' },
          { ja: '新幹線に乗ります', zh: '乘坐新干线' },
          { ja: '何時に出発しますか', zh: '几点出发？' }
        ]
      },
      {
        id: 'ja-b-8', title: '兴趣爱好', type: 'conversation', duration: 20,
        vocabulary: [
          { word: '趣味', translation: '爱好', phonetic: 'shumi' },
          { word: '音楽', translation: '音乐', phonetic: 'ongaku' },
          { word: '映画', translation: '电影', phonetic: 'eiga' },
          { word: '読書', translation: '读书', phonetic: 'dokusho' },
          { word: '料理', translation: '料理', phonetic: 'ryouri' },
          { word: '旅行', translation: '旅行', phonetic: 'ryokou' },
          { word: 'スポーツ', translation: '运动', phonetic: 'supootsu' }
        ],
        grammar: { title: '喜好表达', examples: ['～が好きです', '～が趣味です', '～をします'] },
        dialogue: [
          { ja: '趣味は何ですか', zh: '你的爱好是什么？' },
          { ja: '音楽を聞くことです', zh: '是听音乐' },
          { ja: 'どんな音楽が好きですか', zh: '喜欢什么样的音乐？' },
          { ja: 'ロックが好きです', zh: '喜欢摇滚' }
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
        id: 'ja-i-1', title: '动词变形', type: 'grammar', duration: 30,
        vocabulary: [
          { word: '食べる', translation: '吃', phonetic: 'taberu' },
          { word: '飲む', translation: '喝', phonetic: 'nomu' },
          { word: '行く', translation: '去', phonetic: 'iku' },
          { word: '来る', translation: '来', phonetic: 'kuru' },
          { word: 'する', translation: '做', phonetic: 'suru' }
        ],
        grammar: { title: '动词三类变形', examples: ['食べます', '食べて', '食べた', '食べない', '食べよう'] },
        dialogue: [
          { ja: '昼ご飯を食べました', zh: '吃过午饭了' },
          { ja: '何を食べましたか', zh: '吃了什么？' },
          { ja: 'ラーメンを食べました', zh: '吃了拉面' },
          { ja: '美味しかったですか', zh: '好吃吗？' },
          { ja: 'はい、美味しかったです', zh: '是的，很好吃。' }
        ]
      },
      {
        id: 'ja-i-2', title: '职场日语', type: 'business', duration: 35,
        vocabulary: [
          { word: '会議', translation: '会议', phonetic: 'kaigi' },
          { word: '電話', translation: '电话', phonetic: 'denwa' },
          { word: 'メール', translation: '邮件', phonetic: 'meeru' },
          { word: '部長', translation: '部长', phonetic: 'buchou' },
          { word: '同僚', translation: '同事', phonetic: 'douryou' },
          { word: '取引先', translation: '客户', phonetic: 'torihikisaki' }
        ],
        grammar: { title: '敬语表达', examples: ['おっしゃる', 'なさる', 'いただく', '差し上げる'] },
        dialogue: [
          { ja: '部長、お電話です', zh: '部长，有您的电话' },
          { ja: 'はい、ありがとう', zh: '好的，谢谢' },
          { ja: '会議は何時からですか', zh: '会议几点开始？' },
          { ja: '三時からです', zh: '三点开始' },
          { ja: '取引先にメールを送りました', zh: '已给客户发了邮件' }
        ]
      },
      {
        id: 'ja-i-3', title: '形容词与副词', type: 'grammar', duration: 25,
        vocabulary: [
          { word: '大きい', translation: '大的', phonetic: 'ookii' },
          { word: '小さい', translation: '小的', phonetic: 'chiisai' },
          { word: '美味しい', translation: '美味的', phonetic: 'oishii' },
          { word: '静か', translation: '安静', phonetic: 'shizuka' },
          { word: '綺麗', translation: '漂亮', phonetic: 'kirei' }
        ],
        grammar: { title: '形容词活用', examples: ['美味しい → 美味しかった → 美味しくない', '静か → 静かだった → 静かじゃない'] },
        dialogue: [
          { ja: 'この料理は美味しいですね', zh: '这道菜真好吃' },
          { ja: 'はい、本当に美味しいです', zh: '是啊，真的很好吃' },
          { ja: 'この町は静かです', zh: '这个城市很安静' },
          { ja: 'そうですね、住みやすいです', zh: '是啊，很适合居住。' }
        ]
      },
      {
        id: 'ja-i-4', title: '授受关系', type: 'grammar', duration: 25,
        vocabulary: [
          { word: 'あげる', translation: '给（我方给对方）', phonetic: 'ageru' },
          { word: 'くれる', translation: '给（对方给我方）', phonetic: 'kureru' },
          { word: 'もらう', translation: '得到', phonetic: 'morau' },
          { word: 'プレゼント', translation: '礼物', phonetic: 'purezento' }
        ],
        grammar: { title: '授受动词', examples: ['友達にプレゼントをあげた', '先生に本をくれた', '友達に本をもらった'] },
        dialogue: [
          { ja: '誕生日プレゼントは何をあげましたか', zh: '你送了什么生日礼物？' },
          { ja: '本をあげました', zh: '送了书' },
          { ja: '誰かに何かもらいましたか', zh: '有人给你什么吗？' },
          { ja: '友達に時計をもらいました', zh: '朋友给了我手表' }
        ]
      },
      {
        id: 'ja-i-5', title: '电话与邮件', type: 'business', duration: 30,
        vocabulary: [
          { word: 'もしもし', translation: '喂', phonetic: 'moshimoshi' },
          { word: '伝言', translation: '留言', phonetic: 'dingon' },
          { word: '折り返し', translation: '回电', phonetic: 'orikaeshi' },
          { word: '件名', translation: '主题', phonetic: 'kenmei' },
          { word: '添付', translation: '附件', phonetic: 'tenpu' }
        ],
        grammar: { title: '电话用语', examples: ['もしもし、～の～でございます', '～様に伝言をお願いできますか', 'では、また電話します'] },
        dialogue: [
          { ja: 'もしもし、田中の佐藤でございます', zh: '喂，我是田中的佐藤' },
          { ja: 'いつもお世話になっております', zh: '一直承蒙关照' },
          { ja: '鈴木部長はいらっしゃいますか', zh: '铃木部长在吗？' },
          { ja: 'はい、少々お待ちください', zh: '好的，请稍等' }
        ]
      },
      {
        id: 'ja-i-6', title: '外出就餐', type: 'scenario', duration: 25,
        vocabulary: [
          { word: '予約', translation: '预订', phonetic: 'yoyaku' },
          { word: '席', translation: '座位', phonetic: 'seki' },
          { word: '注文', translation: '点餐', phonetic: 'chuumon' },
          { word: '会計', translation: '结账', phonetic: 'kaikei' },
          { word: '持ち帰り', translation: '打包带走', phonetic: 'mochikaeri' }
        ],
        grammar: { title: '餐厅用语', examples: ['席をお願いします', 'ご注文はお決まりですか', 'お会計お願いします'] },
        dialogue: [
          { ja: '二人分の席をお願いします', zh: '请给我们两个人的座位' },
          { ja: 'ご注文はお決まりですか', zh: '可以点餐了吗？' },
          { ja: 'ラーメン二つとビールを一つください', zh: '请来两碗拉面和一杯啤酒' },
          { ja: 'お持ち帰りですか', zh: '要打包带走吗？' },
          { ja: 'いいえ、その場で食べます', zh: '不，在这里吃。' }
        ]
      }
    ]
  },
  {
    id: 'ja-advanced',
    language: 'ja',
    languageName: '日语',
    level: 'advanced',
    levelName: '高级',
    title: '日语高级精通',
    description: '商务日语与文化表达',
    cover: '📓',
    color: 'from-pink-500 to-rose-600',
    lessons: [
      {
        id: 'ja-a-1', title: '敬语深入', type: 'grammar', duration: 30,
        vocabulary: [
          { word: '尊敬語', translation: '尊敬语', phonetic: 'sonkeigo' },
          { word: '謙譲語', translation: '谦让语', phonetic: 'kenjougo' },
          { word: '丁寧語', translation: '礼貌语', phonetic: 'teineigo' }
        ],
        grammar: { title: '敬语三种形式', examples: ['尊敬語: おっしゃる、なさる', '謙譲語: 伺う、申し上げる', '丁寧語: です、ます'] },
        dialogue: [
          { ja: '社長は何時に来られますか', zh: '社长几点来？（尊敬语）' },
          { ja: '私が伺います', zh: '我去拜访。（谦让语）' },
          { ja: 'お名前を教えていただけますか', zh: '能请您告诉我名字吗？' }
        ]
      },
      {
        id: 'ja-a-2', title: '新闻日语', type: 'listening', duration: 30,
        vocabulary: [
          { word: 'ニュース', translation: '新闻', phonetic: 'nyuusu' },
          { word: '報道', translation: '报道', phonetic: 'houdou' },
          { word: '情報', translation: '信息', phonetic: 'jouhou' },
          { word: '発表', translation: '发表', phonetic: 'happyou' },
          { word: '事故', translation: '事故', phonetic: 'jiko' }
        ],
        grammar: { title: '新闻文体', examples: ['～によると', '～と発表された', '～が明らかになった'] },
        dialogue: [
          { ja: '速報です', zh: '紧急快报' },
          { ja: '気象庁によると、明日台風が来るそうです', zh: '据气象厅消息，明天有台风' },
          { ja: '政府は緊急対策を発表しました', zh: '政府发表了紧急对策' }
        ]
      },
      {
        id: 'ja-a-3', title: '商务谈判', type: 'business', duration: 35,
        vocabulary: [
          { word: '交渉', translation: '谈判', phonetic: 'koushou' },
          { word: '契約', translation: '合同', phonetic: 'keiyaku' },
          { word: '提案', translation: '提案', phonetic: 'teian' },
          { word: '同意', translation: '同意', phonetic: 'doui' },
          { word: '条件', translation: '条件', phonetic: 'jouken' }
        ],
        grammar: { title: '商务表达', examples: ['～を提案いたします', '～に同意いたします', '～の条件ではいかがでしょうか'] },
        dialogue: [
          { ja: '価格についてご相談したいのですが', zh: '想和您商量价格' },
          { ja: '一箱5000円でいかがでしょうか', zh: '一箱5000日元如何？' },
          { ja: '少し高いです。4500円になりませんか', zh: '有点贵，4500日元可以吗？' },
          { ja: '承知いたしました。では、4500円で', zh: '知道了，那就4500日元' },
          { ja: '契約書を作成いたします', zh: '我来制作合同' }
        ]
      },
      {
        id: 'ja-a-4', title: '日本文化', type: 'conversation', duration: 25,
        vocabulary: [
          { word: '茶道', translation: '茶道', phonetic: 'sadou' },
          { word: '華道', translation: '花道', phonetic: 'kadou' },
          { word: '書道', translation: '书法', phonetic: 'shodou' },
          { word: '武士道', translation: '武士道', phonetic: 'bushido' },
          { word: '伝統', translation: '传统', phonetic: 'dentou' },
          { word: '祭り', translation: '节日', phonetic: 'matsuri' }
        ],
        grammar: { title: '文化术语', examples: ['侘寂', '間', '幽玄'] },
        dialogue: [
          { ja: '日本の文化についてどう思いますか', zh: '你怎么看日本文化？' },
          { ja: '茶道や華道など、伝統的な芸術が素晴らしいです', zh: '茶道花道等传统艺术很出色' },
          { ja: '祭りも活気があって楽しいです', zh: '节日也很热闹好玩' }
        ]
      }
    ]
  },

  // ===================== 韩语 =====================
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
        id: 'ko-b-1', title: '韩文字母', type: 'pronunciation', duration: 25,
        vocabulary: [
          { word: 'ㄱ (g)', translation: '哥', phonetic: 'g' },
          { word: 'ㄴ (n)', translation: '呢', phonetic: 'n' },
          { word: 'ㄷ (d)', translation: '的', phonetic: 'd' },
          { word: 'ㄱ (a)', translation: '啊', phonetic: 'a' },
          { word: 'ㅓ (eo)', translation: '额', phonetic: 'eo' },
          { word: 'ㅗ (o)', translation: '哦', phonetic: 'o' },
          { word: 'ㅜ (u)', translation: '乌', phonetic: 'u' },
          { word: 'ㅑ (ya)', translation: '亚', phonetic: 'ya' }
        ],
        grammar: { title: '音节结构', examples: ['가', '나', '다', '라', '마', '바'] },
        dialogue: [
          { ko: '안녕하세요', zh: '你好' },
          { ko: '감사합니다', zh: '谢谢' },
          { ko: '안녕히 가세요', zh: '再见（留者说）' },
          { ko: '안녕히 계세요', zh: '再见（走者说）' }
        ]
      },
      {
        id: 'ko-b-2', title: '基础问候', type: 'conversation', duration: 20,
        vocabulary: [
          { word: '안녕하세요', translation: '你好', phonetic: 'annyeonghaseyo' },
          { word: '안녕히 가세요', translation: '再见(留者)', phonetic: '' },
          { word: '만나서 반갑습니다', translation: '很高兴见到你', phonetic: '' },
          { word: '감사합니다', translation: '谢谢', phonetic: 'gamsahamnida' },
          { word: '죄송합니다', translation: '对不起', phonetic: 'joesonghamnida' },
          { word: '천만에요', translation: '不客气', phonetic: 'cheonmaneyo' }
        ],
        grammar: { title: '敬语体系', examples: ['-ㅂ니다/습니다', '-세요', '-ㅂ시다'] },
        dialogue: [
          { ko: '안녕하세요, 만나서 반갑습니다', zh: '你好，很高兴见到你' },
          { ko: '감사합니다', zh: '谢谢' },
          { ko: '천만에요', zh: '不客气' },
          { ko: '죄송합니다', zh: '对不起' },
          { ko: '괜찮아요', zh: '没关系' }
        ]
      },
      {
        id: 'ko-b-3', title: '数字表达', type: 'numbers', duration: 22,
        vocabulary: [
          { word: '하나', translation: '一', phonetic: 'hana' },
          { word: '둘', translation: '二', phonetic: 'dul' },
          { word: '셋', translation: '三', phonetic: 'set' },
          { word: '넷', translation: '四', phonetic: 'net' },
          { word: '다섯', translation: '五', phonetic: 'daseot' },
          { word: '오늘', translation: '今天', phonetic: 'oneul' },
          { word: '내일', translation: '明天', phonetic: 'naeil' },
          { word: '어제', translation: '昨天', phonetic: 'eoje' }
        ],
        grammar: { title: '固有数词与汉字词数词', examples: ['固有: 하나, 둘, 셋...', '汉字词: 일, 이, 삼...', '年龄用固有，日期用汉字词'] },
        dialogue: [
          { ko: '오늘 날씨가 좋아요', zh: '今天天气很好' },
          { ko: '내일 만나요', zh: '明天见' },
          { ko: '생일이 언제예요', zh: '生日是什么时候？' },
          { ko: '한국어를 배운 지 2년이 됐어요', zh: '学韩语已经2年了' }
        ]
      },
      {
        id: 'ko-b-4', title: '自我介绍', type: 'conversation', duration: 25,
        vocabulary: [
          { word: '이름', translation: '名字', phonetic: 'ireum' },
          { word: '학생', translation: '学生', phonetic: 'haksaeng' },
          { word: '만나다', translation: '见面', phonetic: 'mannada' },
          { word: '나라', translation: '国家', phonetic: 'nara' },
          { word: '중국', translation: '中国', phonetic: 'jungguk' },
          { word: '한국', translation: '韩国', phonetic: 'hanguk' }
        ],
        grammar: { title: '陈述式与敬语', examples: ['저는 학생입니다', '만나서 반갑습니다', '이름이 뭐예요?'] },
        dialogue: [
          { ko: '안녕하세요, 저는 김철수입니다', zh: '你好，我是金哲洙' },
          { ko: '만나서 반갑습니다', zh: '很高兴见到你' },
          { ko: '어느 나라에서 왔어요', zh: '你来自哪个国家？' },
          { ko: '중국에서 왔어요', zh: '我来自中国' },
          { ko: '이름이 뭐예요', zh: '你叫什么名字？' }
        ]
      },
      {
        id: 'ko-b-5', title: '家庭成员', type: 'conversation', duration: 20,
        vocabulary: [
          { word: '가족', translation: '家庭', phonetic: 'gajok' },
          { word: '아버지', translation: '父亲', phonetic: 'abeoji' },
          { word: '어머니', translation: '母亲', phonetic: 'eomeoni' },
          { word: '형', translation: '哥哥', phonetic: 'hyeong' },
          { word: '누나', translation: '姐姐', phonetic: 'nuna' },
          { word: '동생', translation: '弟妹', phonetic: 'dongsaeng' }
        ],
        grammar: { title: '亲属称谓', examples: ['저의 가족', '그의 형', '그녀의 어머니'] },
        dialogue: [
          { ko: '가족이 몇 명이에요', zh: '你家有几口人？' },
          { ko: '4명이에요', zh: '4口人' },
          { ko: '부모님은 뭐 하세요', zh: '你父母做什么的？' },
          { ko: '아버지는 의사세요', zh: '我爸爸是医生' }
        ]
      },
      {
        id: 'ko-b-6', title: '食物与饮品', type: 'scenario', duration: 22,
        vocabulary: [
          { word: '밥', translation: '米饭', phonetic: 'bap' },
          { word: '빵', translation: '面包', phonetic: 'ppang' },
          { word: '물', translation: '水', phonetic: 'mul' },
          { word: '차', translation: '茶', phonetic: 'cha' },
          { word: '커피', translation: '咖啡', phonetic: 'keopi' },
          { word: '김치', translation: '泡菜', phonetic: 'gimchi' },
          { word: '불고기', translation: '烤肉', phonetic: 'bulgogi' },
          { word: '비빔밥', translation: '拌饭', phonetic: 'bibimbap' }
        ],
        grammar: { title: '点餐用语', examples: ['메뉴 좀 주세요', '이거 주세요', '계산해 주세요'] },
        dialogue: [
          { ko: '메뉴 좀 주세요', zh: '请给我菜单' },
          { ko: '불고기 한 접시 주세요', zh: '请给我一份烤肉' },
          { ko: '음료수는 뭐 마실래요', zh: '喝什么饮料？' },
          { ko: '차 한 잔 주세요', zh: '请给我一杯茶' },
          { ko: '계산해 주세요', zh: '请结账' }
        ]
      },
      {
        id: 'ko-b-7', title: '交通出行', type: 'scenario', duration: 20,
        vocabulary: [
          { word: '버스', translation: '公交车', phonetic: 'beoseu' },
          { word: '지하철', translation: '地铁', phonetic: 'jihacheol' },
          { word: '택시', translation: '出租车', phonetic: 'taeksi' },
          { word: '기차', translation: '火车', phonetic: 'gicha' },
          { word: '비행기', translation: '飞机', phonetic: 'bihaenggi' },
          { word: '공항', translation: '机场', phonetic: 'gonghang' },
          { word: '역', translation: '车站', phonetic: 'yeok' }
        ],
        grammar: { title: '问路表达', examples: ['지하철역이 어디예요?', '어떻게 가나요?', '직진하고 좌회전'] },
        dialogue: [
          { ko: '지하철역이 어디예요', zh: '地铁站在哪里？' },
          { ko: '직진하고 오른쪽에 있어요', zh: '一直走在右边' },
          { ko: '공항까지 얼마나 걸려요', zh: '到机场要多久？' },
          { ko: '택시로 30분 정도 걸려요', zh: '坐出租车大约30分钟' }
        ]
      },
      {
        id: 'ko-b-8', title: '兴趣爱好', type: 'conversation', duration: 20,
        vocabulary: [
          { word: '취미', translation: '爱好', phonetic: 'chwimi' },
          { word: '음악', translation: '音乐', phonetic: 'eumak' },
          { word: '영화', translation: '电影', phonetic: 'yeonghwa' },
          { word: '책', translation: '书', phonetic: 'chaek' },
          { word: '운동', translation: '运动', phonetic: 'undong' },
          { word: '여행', translation: '旅行', phonetic: 'yeohaeng' },
          { word: '요리', translation: '料理', phonetic: 'yori' }
        ],
        grammar: { title: '爱好表达', examples: ['저는 음악을 좋아해요', '취미는 영화 감상이에요', '주말에 운동을 해요'] },
        dialogue: [
          { ko: '취미가 뭐예요', zh: '你的爱好是什么？' },
          { ko: '음악 듣는 것을 좋아해요', zh: '我喜欢听音乐' },
          { ko: '주말에 뭐 해요', zh: '周末做什么？' },
          { ko: '영화 보러 가요', zh: '去看电影' }
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
        id: 'ko-i-1', title: '时态与尊敬', type: 'grammar', duration: 30,
        vocabulary: [
          { word: '했어요', translation: '做了', phonetic: '' },
          { word: '하고 있어요', translation: '正在做', phonetic: '' },
          { word: '했을 거예요', translation: '应该做了', phonetic: '' }
        ],
        grammar: { title: '时态变化', examples: ['过去式 -ㅆ어요', '进行式 -고 있어요', '未来式 -을 거예요'] },
        dialogue: [
          { ko: '밥을 먹고 있어요', zh: '正在吃饭' },
          { ko: '언제 먹었어요', zh: '什么时候吃的？' },
          { ko: '방금 먹었어요', zh: '刚吃完' }
        ]
      },
      {
        id: 'ko-i-2', title: '动词活用', type: 'grammar', duration: 25,
        vocabulary: [
          { word: '가다', translation: '去', phonetic: 'gada' },
          { word: '오다', translation: '来', phonetic: 'oda' },
          { word: '먹다', translation: '吃', phonetic: 'meokda' },
          { word: '마시다', translation: '喝', phonetic: 'masida' },
          { word: '보다', translation: '看', phonetic: 'boda' }
        ],
        grammar: { title: '动词活用', examples: ['가요 / 갔어요 / 갈 거예요', '먹어요 / 먹었어요 / 먹을 거예요'] },
        dialogue: [
          { ko: '어디 가요', zh: '去哪里？' },
          { ko: '도서관 가요', zh: '去图书馆' },
          { ko: '뭐 보고 있어요', zh: '在看什么？' },
          { ko: '드라마 보고 있어요', zh: '在看剧' }
        ]
      },
      {
        id: 'ko-i-3', title: '敬语表达', type: 'grammar', duration: 25,
        vocabulary: [
          { word: '선생님', translation: '老师', phonetic: 'seonsaengnim' },
          { word: '부모님', translation: '父母', phonetic: 'bumonim' },
          { word: '어르신', translation: '老人', phonetic: 'eoresin' }
        ],
        grammar: { title: '敬语形式', examples: ['-ㅂ니다 / 습니다', '-세요 / 십니다', '존댓말'] },
        dialogue: [
          { ko: '선생님, 안녕하세요', zh: '老师，您好' },
          { ko: '학생이 수고가 많았어요', zh: '学生辛苦了' },
          { ko: '부모님께 인사드려요', zh: '向父母问好' }
        ]
      },
      {
        id: 'ko-i-4', title: '日常对话', type: 'conversation', duration: 25,
        vocabulary: [
          { word: '약속', translation: '约定', phonetic: 'yaksok' },
          { word: '친구', translation: '朋友', phonetic: 'chingu' },
          { word: '만나다', translation: '见面', phonetic: 'mannada' },
          { word: '카페', translation: '咖啡馆', phonetic: 'kape' }
        ],
        grammar: { title: '邀约表达', examples: ['약속 있어요?', '같이 가요', '어때요?'] },
        dialogue: [
          { ko: '이번 주말에 약속 있어요', zh: '这周末有约会吗？' },
          { ko: '없어요. 왜요', zh: '没有，怎么了？' },
          { ko: '카페 같이 가요', zh: '一起去咖啡馆吧' },
          { ko: '좋아요', zh: '好啊' }
        ]
      },
      {
        id: 'ko-i-5', title: '流行文化', type: 'conversation', duration: 25,
        vocabulary: [
          { word: 'K-POP', translation: '韩流音乐', phonetic: 'kpop' },
          { word: '드라마', translation: '电视剧', phonetic: 'deurama' },
          { word: '영화', translation: '电影', phonetic: 'yeonghwa' },
          { word: '인플루언서', translation: '网红', phonetic: 'influencer' }
        ],
        grammar: { title: '流行语', examples: ['존맛탱 (真好吃)', '대박 (大发)', '인싸 (社牛)'] },
        dialogue: [
          { ko: '요즘 어떤 드라마 봐요', zh: '最近看什么剧？' },
          { ko: 'Squid Game 봐요', zh: '看《鱿鱼游戏》' },
          { ko: '진짜 대박이에요', zh: '真的超火' }
        ]
      },
      {
        id: 'ko-i-6', title: '职场韩语', type: 'business', duration: 30,
        vocabulary: [
          { word: '회의', translation: '会议', phonetic: 'hoeui' },
          { word: '보고서', translation: '报告', phonetic: 'bogoseo' },
          { word: '상사', translation: '上司', phonetic: 'sangsa' },
          { word: '동료', translation: '同事', phonetic: 'dongryo' },
          { word: '프로젝트', translation: '项目', phonetic: 'peurojekteu' }
        ],
        grammar: { title: '职场用语', examples: ['회의 시작해요', '보고서 제출해요', '프로젝트 마감이에요'] },
        dialogue: [
          { ko: '오늘 회의 있어요', zh: '今天有会议' },
          { ko: '몇 시예요', zh: '几点？' },
          { ko: '오후 3시예요', zh: '下午3点' },
          { ko: '보고서 다 썼어요', zh: '报告写完了' }
        ]
      }
    ]
  },
  {
    id: 'ko-advanced',
    language: 'ko',
    languageName: '韩语',
    level: 'advanced',
    levelName: '高级',
    title: '韩语高级精通',
    description: '商务韩语与文化表达',
    cover: '📔',
    color: 'from-violet-500 to-purple-700',
    lessons: [
      {
        id: 'ko-a-1', title: '高级敬语', type: 'grammar', duration: 30,
        vocabulary: [
          { word: '존댓말', translation: '敬语', phonetic: 'jon-daetmal' },
          { word: '높임말', translation: '尊敬语', phonetic: 'nopimmal' },
          { word: '낮춤말', translation: '谦让语', phonetic: 'najuchummal' }
        ],
        grammar: { title: '敬语进阶', examples: ['-께서 (对长辈)', '-사 (对客户)', '-ㅂ니다 (正式)'] },
        dialogue: [
          { ko: '사장님께서 오셨어요', zh: '社长来了' },
          { ko: '어서 오십시오', zh: '欢迎光临' },
          { ko: '도와드리겠습니다', zh: '我来帮您' }
        ]
      },
      {
        id: 'ko-a-2', title: '新闻韩语', type: 'listening', duration: 30,
        vocabulary: [
          { word: '뉴스', translation: '新闻', phonetic: 'nyuseu' },
          { word: '보도', translation: '报道', phonetic: 'bodo' },
          { word: '발표', translation: '发表', phonetic: 'balpyo' },
          { word: '정부', translation: '政府', phonetic: 'jeongbu' }
        ],
        grammar: { title: '新闻文体', examples: ['정부는 발표했다', '전문가들은 말한다', '시장이 반응했다'] },
        dialogue: [
          { ko: '속보입니다', zh: '突发新闻' },
          { ko: '정부는 새로운 정책을 발표했습니다', zh: '政府发表了新政策' },
          { ko: '전문가들의 의견이 분분합니다', zh: '专家意见不一' }
        ]
      },
      {
        id: 'ko-a-3', title: '商务写作', type: 'writing', duration: 30,
        vocabulary: [
          { word: '이메일', translation: '邮件', phonetic: 'imeil' },
          { word: '보고서', translation: '报告', phonetic: 'bogoseo' },
          { word: '제안서', translation: '提案书', phonetic: 'jeanseo' },
          { word: '계약서', translation: '合同书', phonetic: 'gyeyakseo' }
        ],
        grammar: { title: '正式写作', examples: ['귀하의 의견을 존중합니다', '빠른 답변 부탁드립니다', '감사합니다'] },
        dialogue: [
          { ko: '안녕하세요, 김부장님', zh: '您好，金部长' },
          { ko: '다음 주 회의 안내드립니다', zh: '通知下周会议' },
          { ko: '빠른 회신 부탁드립니다', zh: '请尽快回复' }
        ]
      },
      {
        id: 'ko-a-4', title: '口语表达', type: 'speaking', duration: 25,
        vocabulary: [
          { word: '유행어', translation: '流行语', phonetic: 'yuhaengeo' },
          { word: '속담', translation: '谚语', phonetic: 'sokdam' },
          { word: '관용구', translation: '惯用语', phonetic: 'gwanyonggu' }
        ],
        grammar: { title: '地道表达', examples: ['하늘은 스스로 돕는 자를 돕는다', '소 잃고 외양간 고친다', '콩 심은 데 콩 나고 팥 심은 데 팥 난다'] },
        dialogue: [
          { ko: '오늘 진짜 운이 좋았어요', zh: '今天运气真好' },
          { ko: '하늘이 도운 거죠', zh: '是上天帮你' },
          { ko: '콩 심은 데 콩 나듯이', zh: '种瓜得瓜种豆得豆' }
        ]
      }
    ]
  }
];

module.exports = { courses };