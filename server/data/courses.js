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
  },
  // ===================== 法语 =====================
  {
    id: 'fr-beginner',
    language: 'fr',
    languageName: '法语',
    level: 'beginner',
    levelName: '入门级',
    title: '法语零基础入门',
    description: '从发音规则和 Bonjour 问候开始，踏上浪漫法语之旅，对标 CEFR A1',
    cover: '🇫🇷',
    color: 'from-blue-400 via-white to-red-400',
    lessons: [
      {
        id: 'fr-b-1', title: '法语字母与发音', type: 'pronunciation', duration: 20,
        vocabulary: [
          { word: 'Bonjour', translation: '你好', phonetic: '/bɔ̃ʒuʁ/' },
          { word: 'Merci', translation: '谢谢', phonetic: '/mɛʁsi/' },
          { word: 'Salut', translation: '嗨（非正式）', phonetic: '/saly/' },
          { word: 'Oui', translation: '是', phonetic: '/wi/' },
          { word: 'Non', translation: '不', phonetic: '/nɔ̃/' },
          { word: 'Au revoir', translation: '再见', phonetic: '/o ʁəvwaʁ/' }
        ],
        grammar: { title: '名词阴阳性 (le / la)', examples: ['le livre 书（阳性）', 'la table 桌子（阴性）', "l'école 学校（元音前）"] },
        dialogue: [
          { fr: 'Bonjour ! Comment ça va ?', zh: '你好！最近如何？' },
          { fr: 'Ça va bien, merci ! Et toi ?', zh: '很好，谢谢！你呢？' },
          { fr: 'Moi aussi, merci. Au revoir !', zh: '我也是，谢谢。再见！' }
        ]
      },
      {
        id: 'fr-b-2', title: '自我介绍与家庭', type: 'conversation', duration: 22,
        vocabulary: [
          { word: 'Je m\'appelle', translation: '我叫', phonetic: '' },
          { word: 'famille', translation: '家庭', phonetic: '' },
          { word: 'père / mère', translation: '父 / 母', phonetic: '' },
          { word: 'frère / sœur', translation: '兄弟 / 姐妹', phonetic: '' },
          { word: 'habiter', translation: '居住', phonetic: '' },
          { word: 'travailler', translation: '工作', phonetic: '' }
        ],
        grammar: { title: '第一组动词 -er 变位（现在时）', examples: ['j\'habite 我住', 'tu travailles 你工作', 'il parle 他说'] },
        dialogue: [
          { fr: 'Bonjour, je m\'appelle Marie.', zh: '你好，我叫玛丽。' },
          { fr: 'Enchanté, je m\'appelle Paul. Tu habites à Paris ?', zh: '很高兴认识你，我叫保罗。你住在巴黎吗？' },
          { fr: 'Oui, j\'habite avec ma famille.', zh: '是的，我和家人一起住。' }
        ]
      },
      {
        id: 'fr-b-3', title: '数字、时间与点餐', type: 'numbers', duration: 25,
        vocabulary: [
          { word: 'un / deux / trois', translation: '一 / 二 / 三', phonetic: '' },
          { word: 'dix / vingt / cent', translation: '十 / 二十 / 一百', phonetic: '' },
          { word: 'maintenant', translation: '现在', phonetic: '' },
          { word: 'café', translation: '咖啡', phonetic: '' },
          { word: 'croissant', translation: '可颂', phonetic: '' },
          { word: 'menu', translation: '菜单', phonetic: '' }
        ],
        grammar: { title: '时间表达法', examples: ['Quelle heure est-il ? 几点了？', 'Il est 9 heures. 现在九点', 'à midi / à minuit 在正午/午夜'] },
        dialogue: [
          { fr: 'Je voudrais un café et un croissant, s\'il vous plaît.', zh: '请给我一杯咖啡和一个可颂。' },
          { fr: 'C\'est tout ?', zh: '就这些吗？' },
          { fr: 'Oui, merci. Ça fait combien ?', zh: '是的，谢谢。多少钱？' }
        ]
      },
      {
        id: 'fr-b-4', title: '旅行场景：问路与酒店', type: 'scenario', duration: 28,
        vocabulary: [
          { word: 'hôtel', translation: '酒店', phonetic: '' },
          { word: 'réservation', translation: '预订', phonetic: '' },
          { word: 'où est', translation: '在哪里', phonetic: '' },
          { word: 'à gauche / à droite', translation: '左 / 右', phonetic: '' },
          { word: 'tout droit', translation: '直走', phonetic: '' },
          { word: 'métro', translation: '地铁', phonetic: '' }
        ],
        grammar: { title: '方位介词', examples: ['près de 靠近', 'loin de 远离', 'en face de 对面', 'à côté de 旁边'] },
        dialogue: [
          { fr: 'Excusez-moi, où est le métro ?', zh: '对不起，请问地铁在哪里？' },
          { fr: 'Tout droit, puis à gauche.', zh: '直走，然后左转。' },
          { fr: 'Merci beaucoup !', zh: '非常感谢！' }
        ]
      }
    ]
  },
  {
    id: 'fr-intermediate',
    language: 'fr',
    languageName: '法语',
    level: 'intermediate',
    levelName: '进阶级',
    title: '法语进阶：日常与职业',
    description: '深入语法与表达，覆盖工作、健康、文化场景，对标 CEFR B1',
    cover: '🥖',
    color: 'from-blue-500 to-indigo-500',
    lessons: [
      {
        id: 'fr-i-1', title: '复合过去时 raconter sa journée', type: 'grammar', duration: 30,
        vocabulary: [
          { word: 'avoir / être', translation: '有 / 是（助动词）', phonetic: '' },
          { word: 'parti / allé', translation: '出发 / 去', phonetic: '' },
          { word: 'acheter', translation: '购买', phonetic: '' },
          { word: 'écrire', translation: '写', phonetic: '' }
        ],
        grammar: { title: 'Passé composé 复合过去时', examples: ['J\'ai mangé une pomme.', 'Elle est allée au cinéma.', 'Nous avons terminé le travail.'] },
        dialogue: [
          { fr: 'Qu\'as-tu fait hier soir ?', zh: '你昨晚做了什么？' },
          { fr: 'J\'ai regardé un film français, puis j\'ai lu un livre.', zh: '我看了一部法国电影，然后读了一本书。' }
        ]
      },
      {
        id: 'fr-i-2', title: '职场法语：电话与会议', type: 'business', duration: 28,
        vocabulary: [
          { word: 'réunion', translation: '会议', phonetic: '' },
          { word: 'décision', translation: '决定', phonetic: '' },
          { word: 'contrat', translation: '合同', phonetic: '' },
          { word: 'partenaire', translation: '合作伙伴', phonetic: '' }
        ],
        grammar: { title: '条件式现在时 (politesse)', examples: ['Pourriez-vous...? 您能否……？', 'Je voudrais... 我想要……', 'Il faudrait... 应该……'] },
        dialogue: [
          { fr: 'Allô, c\'est Philippe de la société ABC. Est-ce que je peux parler à M. Durand ?', zh: '您好，这里是ABC公司的菲利普。我可以和杜朗先生讲话吗？' },
          { fr: 'Bien sûr, je vous le passe.', zh: '当然，我给您转接。' }
        ]
      },
      {
        id: 'fr-i-3', title: '法国文化：美食与节日', type: 'culture', duration: 25,
        vocabulary: [
          { word: 'fromage', translation: '奶酪', phonetic: '' },
          { word: 'vin', translation: '葡萄酒', phonetic: '' },
          { word: 'fête nationale', translation: '国庆（7月14日）', phonetic: '' },
          { word: 'Noël', translation: '圣诞节', phonetic: '' }
        ],
        grammar: { title: '未完成过去时 (imparfait) 描述', examples: ['Quand j\'étais petit, je vivais à Lyon.', 'Il faisait beau ce jour-là.'] },
        dialogue: [
          { fr: 'Tu as déjà goûté le fromage français ?', zh: '你吃过法国奶酪吗？' },
          { fr: 'Oui, j\'adore le brie et le camembert !', zh: '是的，我非常喜欢布里和卡芒贝尔！' }
        ]
      },
      {
        id: 'fr-i-4', title: '观点表达与讨论', type: 'speaking', duration: 30,
        vocabulary: [
          { word: 'à mon avis', translation: '在我看来', phonetic: '' },
          { word: 'je pense que', translation: '我认为', phonetic: '' },
          { word: 'bien sûr', translation: '当然', phonetic: '' },
          { word: 'cependant', translation: '然而', phonetic: '' }
        ],
        grammar: { title: '虚拟式现在时入门', examples: ['Il faut que tu viennes.', 'Je veux que tu sois heureux.'] },
        dialogue: [
          { fr: 'À ton avis, faut-il apprendre plusieurs langues ?', zh: '在你看来，我们应该学多门语言吗？' },
          { fr: 'Bien sûr, ça ouvre l\'esprit ! Cependant, il faut beaucoup de temps.', zh: '当然，它打开视野！不过需要很多时间。' }
        ]
      }
    ]
  },
  {
    id: 'fr-advanced',
    language: 'fr',
    languageName: '法语',
    level: 'advanced',
    levelName: '高阶级',
    title: '法语高级：文学、媒体与思辨',
    description: '文学赏析、新闻媒体与高阶写作，对标 CEFR C1，备战 DELF/DALF',
    cover: '🗼',
    color: 'from-indigo-600 to-purple-600',
    lessons: [
      {
        id: 'fr-a-1', title: '文学赏析：小王子节选', type: 'culture', duration: 35,
        vocabulary: [
          { word: 'renard', translation: '狐狸', phonetic: '' },
          { word: 'apprivoiser', translation: '驯养', phonetic: '' },
          { word: 'essentiel', translation: '本质的', phonetic: '' },
          { word: 'invisible', translation: '看不见的', phonetic: '' }
        ],
        grammar: { title: '先过去时 & 过去的将来', examples: ['Il avait fini avant qu\'elle ne parte.', 'Il a dit qu\'il reviendrait.'] },
        dialogue: [
          { fr: 'Tu deviens responsable pour toujours de ce que tu as apprivoisé.', zh: '你对你驯养过的事物永远有责任。' },
          { fr: 'On ne voit bien qu\'avec le cœur. L\'essentiel est invisible pour les yeux.', zh: '只有用心才能看清事物的本质，肉眼是看不见的。' }
        ]
      },
      {
        id: 'fr-a-2', title: '新闻媒体：Le Monde 社论', type: 'writing', duration: 35,
        vocabulary: [
          { word: 'climatique', translation: '气候的', phonetic: '' },
          { word: 'société', translation: '社会', phonetic: '' },
          { word: 'argumentation', translation: '论证', phonetic: '' },
          { word: 'émission', translation: '排放', phonetic: '' }
        ],
        grammar: { title: '论文写作：引入 / 发展 / 结论', examples: ['Tout d\'abord... De plus... Enfin...', 'Cependant... Ainsi... Par conséquent...'] },
        dialogue: [
          { fr: 'Selon vous, quel est le plus grand défi de notre époque ?', zh: '你认为我们时代最大的挑战是什么？' },
          { fr: 'Sans conteste, le changement climatique et la transition écologique.', zh: '毫无疑问，气候变化和生态转型。' }
        ]
      },
      {
        id: 'fr-a-3', title: 'DELF B2 / DALF C1 写作技巧', type: 'writing', duration: 35,
        vocabulary: [
          { word: 'thèse / antithèse / synthèse', translation: '正 / 反 / 合（辩证写作）', phonetic: '' },
          { word: 'plan détaillé', translation: '详细大纲', phonetic: '' },
          { word: 'introduction', translation: '引言', phonetic: '' },
          { word: 'conclusion', translation: '结语', phonetic: '' }
        ],
        grammar: { title: '连接词与论述结构', examples: ['Premièrement... Deuxièmement... Pour conclure', 'En dépit de... En raison de... Grâce à...'] },
        dialogue: [
          { fr: 'Comment structurer une dissertation de 500 mots ?', zh: '如何组织一篇500字的论述文？' },
          { fr: 'Introduction → Plan en 2 parties → Conclusion : c\'est la base du DELF B2.', zh: '引言 → 两部分展开 → 结论：这是DELF B2的基础。' }
        ]
      },
      {
        id: 'fr-a-4', title: 'DELF B2 口语辩论模拟', type: 'speaking', duration: 40,
        vocabulary: [
          { word: 'débattre', translation: '辩论', phonetic: '' },
          { word: 'pour / contre', translation: '支持 / 反对', phonetic: '' },
          { word: 'réfuter', translation: '反驳', phonetic: '' },
          { word: 'argument', translation: '论据', phonetic: '' }
        ],
        grammar: { title: '论证动词与让步结构', examples: ['Bien que X, Y...', 'Même si X, Y...', 'Non seulement... mais aussi...'] },
        dialogue: [
          { fr: 'Le travail à distance : pour ou contre ?', zh: '远程办公：支持还是反对？' },
          { fr: 'Pour : flexibilité. Contre : isolement. À vous de choisir !', zh: '支持：灵活性；反对：孤独感。你自己选！' }
        ]
      }
    ]
  },
  // ===================== 德语 =====================
  {
    id: 'de-beginner',
    language: 'de',
    languageName: '德语',
    level: 'beginner',
    levelName: '入门级',
    title: '德语零基础入门',
    description: '从 W-发音 和格变化 入门，带你走进歌德语言世界，对标 CEFR A1',
    cover: '🇩🇪',
    color: 'from-yellow-400 via-red-500 to-slate-800',
    lessons: [
      {
        id: 'de-b-1', title: '德语字母与发音', type: 'pronunciation', duration: 22,
        vocabulary: [
          { word: 'Hallo', translation: '你好', phonetic: '/ˈhalo/' },
          { word: 'Guten Tag', translation: '白天好', phonetic: '/ˈɡuːtn̩ taːk/' },
          { word: 'Tschüss', translation: '再见', phonetic: '/tʃʏs/' },
          { word: 'Danke', translation: '谢谢', phonetic: '/ˈdaŋkə/' },
          { word: 'Bitte', translation: '请 / 不客气', phonetic: '/ˈbɪtə/' },
          { word: 'Ja / Nein', translation: '是 / 否', phonetic: '' }
        ],
        grammar: { title: '定冠词第一格 (Nominativ)：der / die / das', examples: ['der Mann 男人（阳）', 'die Frau 女人（阴）', 'das Kind 孩子（中）', 'die Leute 人们（复）'] },
        dialogue: [
          { de: 'Hallo, guten Tag! Wie heißt du?', zh: '你好，白天好！你叫什么？' },
          { de: 'Ich heiße Anna. Und du?', zh: '我叫安娜。你呢？' },
          { de: 'Ich bin Thomas. Freut mich!', zh: '我是托马斯。很高兴认识你！' }
        ]
      },
      {
        id: 'de-b-2', title: '自我介绍与家庭', type: 'conversation', duration: 25,
        vocabulary: [
          { word: 'heißen', translation: '名叫', phonetic: '' },
          { word: 'Vater / Mutter', translation: '父亲 / 母亲', phonetic: '' },
          { word: 'Bruder / Schwester', translation: '兄弟 / 姐妹', phonetic: '' },
          { word: 'wohnen', translation: '居住', phonetic: '' },
          { word: 'arbeiten', translation: '工作', phonetic: '' },
          { word: 'Beruf', translation: '职业', phonetic: '' }
        ],
        grammar: { title: '动词现在时变位：ich/du/er/es/sie', examples: ['ich wohne 我住', 'du arbeitest 你工作', 'er heißt 他名叫'] },
        dialogue: [
          { de: 'Ich wohne in Berlin und arbeite dort.', zh: '我住在柏林并在那里工作。' },
          { de: 'Was ist dein Beruf?', zh: '你的职业是什么？' },
          { de: 'Ich bin Lehrer an einer Schule.', zh: '我是一所学校的老师。' }
        ]
      },
      {
        id: 'de-b-3', title: '数字、时钟与点餐', type: 'numbers', duration: 25,
        vocabulary: [
          { word: 'eins / zwei / drei', translation: '一 / 二 / 三', phonetic: '' },
          { word: 'zehn / zwanzig / hundert', translation: '十 / 二十 / 一百', phonetic: '' },
          { word: 'Uhr', translation: '点钟 / 时钟', phonetic: '' },
          { word: 'Kaffee', translation: '咖啡', phonetic: '' },
          { word: 'Apfelkuchen', translation: '苹果蛋糕', phonetic: '' },
          { word: 'Rechnung', translation: '账单', phonetic: '' }
        ],
        grammar: { title: '时间表达：Es ist... Uhr', examples: ['Es ist 9 Uhr. 现在九点。', 'halb fünf 四点半', 'viertel nach eins 1点15'] },
        dialogue: [
          { de: 'Was möchten Sie trinken?', zh: '您想喝点什么？' },
          { de: 'Ich nehme einen Kaffee und einen Apfelkuchen, bitte.', zh: '我要一杯咖啡和一个苹果蛋糕，谢谢。' },
          { de: 'Die Rechnung, bitte. – Das macht 6,50 Euro.', zh: '请结账。—一共6.50欧元。' }
        ]
      },
      {
        id: 'de-b-4', title: '旅行：问路与交通', type: 'scenario', duration: 28,
        vocabulary: [
          { word: 'Bahnhof', translation: '火车站', phonetic: '' },
          { word: 'U-Bahn', translation: '地铁', phonetic: '' },
          { word: 'links / rechts / geradeaus', translation: '左 / 右 / 直走', phonetic: '' },
          { word: 'Ticket', translation: '车票', phonetic: '' },
          { word: 'Weg', translation: '路，路径', phonetic: '' }
        ],
        grammar: { title: '定冠词第三格 (Dativ)：方向与距离', examples: ['Ich gehe zum Bahnhof.', 'Das ist links von dem Haus.'] },
        dialogue: [
          { de: 'Entschuldigung, wie komme ich zum Hauptbahnhof?', zh: '抱歉，我怎么到中央火车站？' },
          { de: 'Gehen Sie geradeaus, dann die zweite Straße links.', zh: '您直走，然后第二条街左转。' },
          { de: 'Danke für Ihre Hilfe!', zh: '感谢您的帮助！' }
        ]
      }
    ]
  },
  {
    id: 'de-intermediate',
    language: 'de',
    languageName: '德语',
    level: 'intermediate',
    levelName: '进阶级',
    title: '德语进阶：格变化、情态动词与职场',
    description: '掌握四格体系、可分动词、完成时与办公室场景，对标 CEFR B1',
    cover: '🍺',
    color: 'from-amber-500 to-orange-600',
    lessons: [
      {
        id: 'de-i-1', title: '现在完成时 Perfekt', type: 'grammar', duration: 30,
        vocabulary: [
          { word: 'gegessen / getrunken', translation: '吃过 / 喝过', phonetic: '' },
          { word: 'gegangen / gekommen', translation: '去过 / 来过', phonetic: '' },
          { word: 'gesprochen', translation: '说过', phonetic: '' },
          { word: 'geschrieben', translation: '写过', phonetic: '' }
        ],
        grammar: { title: 'Perfekt 构成：haben/sein + Partizip II', examples: ['Ich habe Kaffee getrunken.', 'Wir sind nach Hause gegangen.', 'Sie hat einen Brief geschrieben.'] },
        dialogue: [
          { de: 'Was hast du am Wochenende gemacht?', zh: '你周末做了什么？' },
          { de: 'Ich bin mit Freunden ins Kino gegangen und habe Pizza gegessen.', zh: '我和朋友去电影院了，还吃了披萨。' }
        ]
      },
      {
        id: 'de-i-2', title: '情态动词与表达', type: 'grammar', duration: 28,
        vocabulary: [
          { word: 'können', translation: '能够', phonetic: '' },
          { word: 'müssen', translation: '必须', phonetic: '' },
          { word: 'wollen', translation: '想要', phonetic: '' },
          { word: 'sollen', translation: '应该', phonetic: '' },
          { word: 'dürfen', translation: '允许', phonetic: '' }
        ],
        grammar: { title: '情态动词现在时 + 不定式', examples: ['Ich kann Deutsch sprechen.', 'Du musst zum Arzt gehen.', 'Wir wollen reisen.'] },
        dialogue: [
          { de: 'Kannst du mir morgen helfen? Ich muss bis 17 Uhr das Projekt abschließen.', zh: '你明天能帮我吗？我必须17点前完成项目。' },
          { de: 'Natürlich! Ich komme sofort nach der Vorlesung.', zh: '当然！我一下课就来。' }
        ]
      },
      {
        id: 'de-i-3', title: '办公室：邮件与会议', type: 'business', duration: 30,
        vocabulary: [
          { word: 'E-Mail (die)', translation: '邮件', phonetic: '' },
          { word: 'Besprechung', translation: '会议', phonetic: '' },
          { word: 'Bericht', translation: '报告', phonetic: '' },
          { word: 'Termin', translation: '约会，约定', phonetic: '' }
        ],
        grammar: { title: '正式邮件句式：Sehr geehrte/r... (Mit freundlichen Grüßen)', examples: ['Sehr geehrte Frau Müller, ...', 'Vielen Dank für Ihre Antwort vom 15.'] },
        dialogue: [
          { de: 'Haben Sie meinen Bericht schon gelesen?', zh: '您看过我的报告了吗？' },
          { de: 'Ja, ich bin damit einverstanden. Wir besprechen es morgen in der Besprechung.', zh: '是的，我同意。我们明天会议上讨论。' }
        ]
      },
      {
        id: 'de-i-4', title: '可分动词与过去叙述', type: 'speaking', duration: 30,
        vocabulary: [
          { word: 'aufstehen', translation: '起床', phonetic: '' },
          { word: 'anrufen', translation: '打电话', phonetic: '' },
          { word: 'mitbringen', translation: '带来', phonetic: '' },
          { word: 'einkaufen', translation: '购物', phonetic: '' }
        ],
        grammar: { title: '可分动词：现在时/完成时', examples: ['Ich stehe um 7 Uhr auf.', 'Er hat seine Schwester angerufen.'] },
        dialogue: [
          { de: 'Stehst du jeden Tag um 6 Uhr auf?', zh: '你每天6点起床吗？' },
          { de: 'Fast immer. Danach kaufe ich noch schnell ein.', zh: '几乎总是。之后我还快速地去购物。' }
        ]
      }
    ]
  },
  {
    id: 'de-advanced',
    language: 'de',
    languageName: '德语',
    level: 'advanced',
    levelName: '高阶级',
    title: '德语高级：德福备考 / 论文结构 / 学术表达',
    description: '德福 TestDaF 与 DSH 冲刺，图表写作、听力笔记与论证口语，对标 CEFR C1',
    cover: '🏰',
    color: 'from-amber-700 to-red-700',
    lessons: [
      {
        id: 'de-a-1', title: '德福主题：Umwelt & Nachhaltigkeit', type: 'culture', duration: 35,
        vocabulary: [
          { word: 'Umwelt', translation: '环境', phonetic: '' },
          { word: 'Nachhaltigkeit', translation: '可持续发展', phonetic: '' },
          { word: 'Treibhausgas', translation: '温室气体', phonetic: '' },
          { word: 'erneuerbare Energie', translation: '可再生能源', phonetic: '' }
        ],
        grammar: { title: '名词化与被动语态（B2/C1 必备）', examples: ['Die Umwelt wird geschützt.', 'Die Reduktion der Emissionen ist wichtig.'] },
        dialogue: [
          { de: 'Wie können wir die Umwelt besser schützen?', zh: '我们如何能更好地保护环境？' },
          { de: 'Indem wir auf erneuerbare Energien umsteigen und weniger Auto fahren.', zh: '通过转向可再生能源，少开车。' }
        ]
      },
      {
        id: 'de-a-2', title: '德福图表写作 (Beschreibung)', type: 'writing', duration: 40,
        vocabulary: [
          { word: 'Grafik / Tabelle', translation: '图表 / 表格', phonetic: '' },
          { word: 'Anteil', translation: '比例，份额', phonetic: '' },
          { word: 'Prognose', translation: '预测', phonetic: '' },
          { word: 'Vergleich', translation: '对比', phonetic: '' }
        ],
        grammar: { title: '德福图表：Einleitung → Beschreibung → Auswertung', examples: ['Die Grafik zeigt, dass...', 'Im Vergleich zu 2010 stieg X um Y...', 'Man kann daraus schließen, dass...'] },
        dialogue: [
          { de: 'Wie beschreibt man am besten eine Grafik im TestDaF?', zh: '在德福考试中，如何最好地描述图表？' },
          { de: 'Zuerst Einleitung, dann die Daten systematisch beschreiben, abschließend die Tendenz hervorheben.', zh: '首先引言，然后系统描述数据，最后强调趋势。' }
        ]
      },
      {
        id: 'de-a-3', title: '学术写作结构：Einleitung / Hauptteil / Schluss', type: 'writing', duration: 35,
        vocabulary: [
          { word: 'These / Antithese / Synthese', translation: '论点 / 反论点 / 合论点', phonetic: '' },
          { word: 'Argumentation', translation: '论证', phonetic: '' },
          { word: 'Fazit', translation: '结论', phonetic: '' },
          { word: 'Beispiel', translation: '例子', phonetic: '' }
        ],
        grammar: { title: 'DSH 论文：连接词库', examples: ['Einerseits... Andererseits...', 'Deshalb / Aus diesem Grund...', 'Zusammenfassend lässt sich sagen, dass...'] },
        dialogue: [
          { de: 'Wie schreibe ich eine gute Einleitung in der DSH-Schriftlichen Arbeit?', zh: '我如何在DSH书面作业中写好引言？' },
          { de: 'Kontext liefern → Themenschritt → These / Leitfrage formulieren.', zh: '提供背景 → 主题推进 → 提出论点或引导问题。' }
        ]
      },
      {
        id: 'de-a-4', title: '德福口语 Ausspracheprüfung 模拟', type: 'speaking', duration: 40,
        vocabulary: [
          { word: 'Meinung', translation: '观点', phonetic: '' },
          { word: 'pro / kontra', translation: '支持 / 反对', phonetic: '' },
          { word: 'Behauptung', translation: '主张', phonetic: '' },
          { word: 'Begründung', translation: '理由', phonetic: '' }
        ],
        grammar: { title: '表达观点的情态与让步', examples: ['Meiner Meinung nach...', 'Obwohl X, Y...', 'Ich glaube, dass... Andererseits könnte man sagen, dass...'] },
        dialogue: [
          { de: 'Sollen die Länder mehr Geld für Bildung ausgeben?', zh: '各国应该在教育上投入更多钱吗？' },
          { de: 'Definitiv pro. Nur durch gute Bildung kann eine Gesellschaft nachhaltig wachsen.', zh: '绝对支持。只有通过良好的教育，社会才能可持续发展。' }
        ]
      }
    ]
  },
  // ===================== 西班牙语 =====================
  {
    id: 'es-beginner',
    language: 'es',
    languageName: '西班牙语',
    level: 'beginner',
    levelName: '入门级',
    title: '西班牙语零基础入门',
    description: 'Rolling R 与 Hola，从拉丁热情开始，对标 CEFR A1',
    cover: '🇪🇸',
    color: 'from-red-500 via-orange-400 to-yellow-500',
    lessons: [
      {
        id: 'es-b-1', title: '发音与基础问候', type: 'pronunciation', duration: 20,
        vocabulary: [
          { word: 'Hola', translation: '你好', phonetic: '/ˈola/' },
          { word: 'Gracias', translation: '谢谢', phonetic: '/ˈɡɾaθjas/' },
          { word: 'Adiós', translation: '再见', phonetic: '/aˈðjos/' },
          { word: 'Buenos días', translation: '早上好', phonetic: '' },
          { word: 'Por favor', translation: '请', phonetic: '' },
          { word: 'Sí / No', translation: '是 / 否', phonetic: '' }
        ],
        grammar: { title: '定冠词：el / la / los / las', examples: ['el libro 书（阳）', 'la casa 房子（阴）', 'los niños 男孩们', 'las flores 花们'] },
        dialogue: [
          { es: '¡Hola! ¿Cómo estás?', zh: '你好！你好吗？' },
          { es: 'Muy bien, gracias. ¿Y tú?', zh: '很好，谢谢。你呢？' },
          { es: '¡Estupendo! Adiós.', zh: '太棒了！再见。' }
        ]
      },
      {
        id: 'es-b-2', title: '自我介绍与家庭', type: 'conversation', duration: 22,
        vocabulary: [
          { word: 'llamarse', translation: '名叫', phonetic: '' },
          { word: 'padre / madre', translation: '父亲 / 母亲', phonetic: '' },
          { word: 'hermano / hermana', translation: '兄弟 / 姐妹', phonetic: '' },
          { word: 'vivir', translation: '居住', phonetic: '' },
          { word: 'trabajar', translation: '工作', phonetic: '' }
        ],
        grammar: { title: 'Ser vs Estar（是 vs 在）入门', examples: ['Soy de China. 我来自中国。', 'Estoy en Madrid. 我在马德里。', 'Ella es estudiante. 她是学生。'] },
        dialogue: [
          { es: '¿Cómo te llamas?', zh: '你叫什么？' },
          { es: 'Me llamo Carlos. Vivo en Barcelona.', zh: '我叫卡洛斯。我住在巴塞罗那。' }
        ]
      },
      {
        id: 'es-b-3', title: '数字、时间与塔帕斯', type: 'numbers', duration: 25,
        vocabulary: [
          { word: 'uno / dos / tres', translation: '一 / 二 / 三', phonetic: '' },
          { word: 'diez / veinte / cien', translation: '十 / 二十 / 一百', phonetic: '' },
          { word: 'hora', translation: '小时，点', phonetic: '' },
          { word: 'café', translation: '咖啡', phonetic: '' },
          { word: 'tapa', translation: '塔帕斯（小食）', phonetic: '' },
          { word: 'cuenta', translation: '账单', phonetic: '' }
        ],
        grammar: { title: 'Qué hora es? 询问时间', examples: ['Es la una. 一点。', 'Son las tres y media. 三点半。', 'Es mediodía. 中午。'] },
        dialogue: [
          { es: '¿Qué quieres tomar?', zh: '你想喝点/吃点什么？' },
          { es: 'Un café con leche y una tapa de jamón, por favor.', zh: '一杯拿铁和一份火腿塔帕斯，谢谢。' },
          { es: '¿La cuenta? – Son 7 euros.', zh: '要账单吗？—7欧元。' }
        ]
      },
      {
        id: 'es-b-4', title: '旅行场景：问路与地铁', type: 'scenario', duration: 28,
        vocabulary: [
          { word: 'aeropuerto', translation: '机场', phonetic: '' },
          { word: 'metro', translation: '地铁', phonetic: '' },
          { word: 'hotel', translation: '酒店', phonetic: '' },
          { word: 'derecha / izquierda', translation: '右 / 左', phonetic: '' },
          { word: 'todo recto', translation: '直走', phonetic: '' },
          { word: 'cerca', translation: '近', phonetic: '' }
        ],
        grammar: { title: '方位前置词：cerca de, al lado de, enfrente de', examples: ['El hotel está cerca del metro.', 'Está a la derecha.'] },
        dialogue: [
          { es: 'Perdón, ¿dónde está el metro?', zh: '抱歉，请问地铁在哪里？' },
          { es: 'Todo recto, luego a la izquierda. Está muy cerca.', zh: '直走，然后左转。非常近。' }
        ]
      }
    ]
  },
  {
    id: 'es-intermediate',
    language: 'es',
    languageName: '西班牙语',
    level: 'intermediate',
    levelName: '进阶级',
    title: '西班牙语进阶：过去时与拉美西语特色',
    description: 'Pretérito Imperfecto vs Indefinido、命令式、拉丁西语，对标 CEFR B1',
    cover: '💃',
    color: 'from-rose-500 to-orange-500',
    lessons: [
      {
        id: 'es-i-1', title: '过去时辨析：Pretérito Indefinido vs Imperfecto', type: 'grammar', duration: 30,
        vocabulary: [
          { word: 'fui / fuiste / fue', translation: '我/你/他去过', phonetic: '' },
          { word: 'era / eras / era', translation: '我/你/他过去是', phonetic: '' },
          { word: 'comí', translation: '我吃了', phonetic: '' },
          { word: 'comía', translation: '我（过去经常/当时）吃', phonetic: '' }
        ],
        grammar: { title: '叙述 vs 背景：Indefinido（一次性完成）vs Imperfecto（持续/习惯）', examples: ['Ayer fui al cine. (一次性)', 'De niño, iba al parque todos los sábados. (小时候每周习惯性)'] },
        dialogue: [
          { es: '¿Qué hiciste el fin de semana?', zh: '你周末做了什么？' },
          { es: 'El sábado fui a una fiesta y bailé salsa toda la noche.', zh: '周六我去了一个派对，一整夜跳萨尔萨舞。' }
        ]
      },
      {
        id: 'es-i-2', title: '命令式：给朋友的建议与安排', type: 'grammar', duration: 28,
        vocabulary: [
          { word: '¡Ven!', translation: '来吧！', phonetic: '' },
          { word: '¡Dime!', translation: '告诉我！', phonetic: '' },
          { word: '¡Vamos!', translation: '走吧！', phonetic: '' },
          { word: '¡Escribe!', translation: '写下来！', phonetic: '' }
        ],
        grammar: { title: 'Tú 命令式（熟悉）：肯定 vs 否定', examples: ['¡Ven aquí! → No vengas tarde.', '¡Dime la verdad! → No me digas mentiras.'] },
        dialogue: [
          { es: '¡Oye! Ven a mi casa esta tarde, tenemos una paella.', zh: '喂！下午来我家吧，我们吃海鲜饭。' },
          { es: '¡Genial! Allí estaré a las 7. ¡Gracias por invitarme!', zh: '太棒了！我7点到。谢谢你邀请我！' }
        ]
      },
      {
        id: 'es-i-3', title: '拉美西语特色：vosotros vs ustedes', type: 'culture', duration: 25,
        vocabulary: [
          { word: 'ustedes (Latinoamérica)', translation: '你们（拉美用，代替vosotros）', phonetic: '' },
          { word: 'carro (México) = coche', translation: '汽车', phonetic: '' },
          { word: 'churrasco (Argentina)', translation: '巴西烤肉/阿根廷烤肉', phonetic: '' },
          { word: 'salsa / tango / cumbia', translation: '萨尔萨/探戈/昆比亚（舞蹈）', phonetic: '' }
        ],
        grammar: { title: 'Ustedes 变位：简化的拉美西语', examples: ['Españoles: ¿Vosotros venís? → Latinos: ¿Ustedes vienen?'] },
        dialogue: [
          { es: '¿Ustedes hablan con vosotros en España?', zh: '你们在西班牙用 vosotros 说话吗？' },
          { es: 'Sí, pero en México casi siempre decimos ustedes. ¡Es más fácil!', zh: '是的，但在墨西哥我们几乎都说 ustedes。更简单！' }
        ]
      },
      {
        id: 'es-i-4', title: '日常写作：Email & 留言', type: 'writing', duration: 28,
        vocabulary: [
          { word: 'Estimado/a', translation: '尊敬的（正式称谓）', phonetic: '' },
          { word: 'Quedar', translation: '见面，约见', phonetic: '' },
          { word: 'asunto', translation: '主题（邮件）', phonetic: '' },
          { word: 'Atentamente', translation: '此致敬礼（落款）', phonetic: '' }
        ],
        grammar: { title: '正式 vs 非正式邮件语气', examples: ['Estimado Sr. García: ... Atentamente', '¡Hola Juan! ... Un abrazo'] },
        dialogue: [
          { es: '¿Cómo te despides en un correo oficial?', zh: '你在正式邮件中如何落款？' },
          { es: 'Generalmente "Atentamente", seguido del nombre completo.', zh: '通常用 "此致敬礼"，然后是全名。' }
        ]
      }
    ]
  },
  {
    id: 'es-advanced',
    language: 'es',
    languageName: '西班牙语',
    level: 'advanced',
    levelName: '高阶级',
    title: '西班牙语高级：DELE B2 全题型冲刺',
    description: 'DELE B2 阅读、写作、听力与口语表达全面备考，对标 CEFR B2/C1',
    cover: '💃🏻',
    color: 'from-red-600 via-yellow-500 to-red-700',
    lessons: [
      {
        id: 'es-a-1', title: '虚拟式现在时：表达观点与情感', type: 'grammar', duration: 35,
        vocabulary: [
          { word: 'dudar que', translation: '怀疑……', phonetic: '' },
          { word: 'esperar que', translation: '希望……', phonetic: '' },
          { word: 'ojalá que', translation: '但愿……', phonetic: '' },
          { word: 'es necesario que', translation: '有必要……', phonetic: '' }
        ],
        grammar: { title: 'Subjuntivo（虚拟式）触发词', examples: ['Espero que vengas. 我希望你来。', 'Dudo que sea cierto. 我怀疑这是不是真的。', '¡Ojalá que llueva café!'] },
        dialogue: [
          { es: '¿Crees que apruebe el DELE B2?', zh: '你觉得我能通过DELE B2吗？' },
          { es: 'Sí, ¡estoy seguro! Pero dudo que lo hagas sin estudiar. 😉', zh: '当然能！但我怀疑不学习能通过。😉' }
        ]
      },
      {
        id: 'es-a-2', title: 'DELE B2 阅读：报刊文章理解', type: 'writing', duration: 35,
        vocabulary: [
          { word: 'artículo', translation: '文章', phonetic: '' },
          { word: 'opinión', translation: '观点', phonetic: '' },
          { word: 'autor', translation: '作者', phonetic: '' },
          { word: 'conclusión', translation: '结论', phonetic: '' }
        ],
        grammar: { title: '阅读策略：Skim (主旨) / Scan (细节) / Infer (推断)', examples: ['Lee el título y el primer párrafo → idea general', 'Busca palabras clave → información concreta'] },
        dialogue: [
          { es: '¿Cómo abordas una lectura del DELE?', zh: '你怎么处理DELE阅读题？' },
          { es: 'Primero título, luego preguntas, después el texto. ¡Tiempo es oro!', zh: '先看标题，然后问题，再看文章。时间就是金钱！' }
        ]
      },
      {
        id: 'es-a-3', title: 'DELE B2 写作 Tarea 1 & 2', type: 'writing', duration: 35,
        vocabulary: [
          { word: 'carta al director', translation: '致编辑信', phonetic: '' },
          { word: 'ensayo argumentativo', translation: '议论文', phonetic: '' },
          { word: 'introducción / desarrollo / conclusión', translation: '引 / 展 / 结', phonetic: '' }
        ],
        grammar: { title: '议论文模板：4段式 + 辩证结构', examples: ['Introducción (tema+tesis) → Argumentos a favor → Argumentos en contra → Conclusión'] },
        dialogue: [
          { es: '¿Qué estructura sigues en el ensayo?', zh: '你在议论文中遵循什么结构？' },
          { es: 'Clásica: 4 párrafos. Tesis → Pruebas → Contraargumento → Conclusión personal.', zh: '经典：4段。论点 → 论据 → 反论点 → 个人结论。' }
        ]
      },
      {
        id: 'es-a-4', title: 'DELE B2 口语：图片描述 + 对话', type: 'speaking', duration: 38,
        vocabulary: [
          { word: 'en primer plano / al fondo', translation: '前景 / 背景', phonetic: '' },
          { word: 'a la izquierda / derecha', translation: '左 / 右', phonetic: '' },
          { word: 'parece que / me da la impresión de que', translation: '看起来…… / 我感觉……', phonetic: '' }
        ],
        grammar: { title: '图片描述 + 观点表达 + 辩论句式', examples: ['En la foto podemos ver...', 'A mi juicio...', 'Por un lado... Por otro lado...'] },
        dialogue: [
          { es: '¿Cómo preparas la prueba oral del DELE?', zh: '你如何准备DELE口试？' },
          { es: 'Describo fotos todos los días, y debato con amigos: es clave la fluidez.', zh: '我每天描述图片，和朋友辩论：流畅性是关键。' }
        ]
      }
    ]
  },
  // ===================== 考试备考专项冲刺班 =====================
  {
    id: 'en-ielts-65',
    language: 'en',
    languageName: '英语',
    level: 'exam',
    levelName: 'IELTS 6.5+ 冲刺',
    title: '雅思 IELTS 6.5+ 冲刺班（剑雅15-19）',
    description: '听/说/读/写 四科精讲 + 大小作文批改 + 口语模拟，剑雅15-19 真题全刷',
    cover: '🎓',
    color: 'from-rose-500 to-red-600',
    lessons: [
      {
        id: 'ielts-1', title: '雅思考试全解析 + 首考 7 分备考规划', type: 'strategy', duration: 35,
        vocabulary: [
          { word: 'Band score', translation: '分数段', phonetic: '' },
          { word: 'TR / CC / LR / GRA', translation: '任务完成/连贯/词汇/语法（写作）', phonetic: '' },
          { word: 'FC / LR / P / G', translation: '流利/词汇/发音/语法（口语）', phonetic: '' }
        ],
        grammar: { title: '评分标准深度解读', examples: ['写作 Task 2：40 分钟 ≥ 250 词', '口语 Part 2：2 分钟独白，需含故事线'] },
        dialogue: [
          { en: 'What band do you need for university admission?', zh: '你大学入学需要几分？' },
          { en: 'Overall 6.5, with no sub-score below 6.0.', zh: '总分6.5，单项不低于6.0。' }
        ]
      },
      {
        id: 'ielts-2', title: '听力：Section 3/4 学术对话与填空策略', type: 'listening', duration: 40,
        vocabulary: [
          { word: 'distractor', translation: '干扰项', phonetic: '' },
          { word: 'signposting words', translation: '路标词', phonetic: '' },
          { word: 'prediction', translation: '词性预测', phonetic: '' }
        ],
        grammar: { title: '填空三步法：预读 → 预测 → 锁定信号词', examples: ['But / However → 转折后往往是答案', 'In fact / What\'s more → 强调信号'] },
        dialogue: [
          { en: 'I keep missing answers in Section 4. Any tips?', zh: '我一直错过Section 4的答案，有什么技巧吗？' },
          { en: 'Predict part of speech BEFORE the audio plays, and listen for signposting words.', zh: '音频播放前先预测词性，并留意路标词。' }
        ]
      },
      {
        id: 'ielts-3', title: '阅读：Matching / T/F/NG / List of Headings', type: 'reading', duration: 40,
        vocabulary: [
          { word: 'scanning', translation: '扫读', phonetic: '' },
          { word: 'skimming', translation: '略读', phonetic: '' },
          { word: 'paraphrase', translation: '同义改写', phonetic: '' }
        ],
        grammar: { title: 'T/F/NG 区别：NOT GIVEN 的典型陷阱', examples: ['F = 与文中观点矛盾', 'NG = 文中未提及，不能推断'] },
        dialogue: [
          { en: 'The most difficult one is NG for me.', zh: '对我来说最难的是NG。' },
          { en: 'If there is no evidence in the passage, it is NOT GIVEN — never guess with outside knowledge.', zh: '如果文中没有证据，就是 NOT GIVEN — 绝不要用课外知识猜测。' }
        ]
      },
      {
        id: 'ielts-4', title: '写作 Task 1：折线 / 柱状 / 表格 数据图', type: 'writing', duration: 45,
        vocabulary: [
          { word: 'peak / trough', translation: '峰值 / 谷值', phonetic: '' },
          { word: 'fluctuate / remain stable', translation: '波动 / 保持稳定', phonetic: '' },
          { word: 'account for', translation: '占（比例）', phonetic: '' }
        ],
        grammar: { title: '高分结构：Introduction + Overview + Details × 2', examples: ['Overall → highlight main trends', 'In detail → compare specific numbers'] },
        dialogue: [
          { en: 'Is overview really that important?', zh: '概述真的那么重要吗？' },
          { en: 'Without a clear overview you cap at Band 5 for Task Achievement.', zh: '没有清晰概述，任务完成度最高只能到5分。' }
        ]
      },
      {
        id: 'ielts-5', title: '写作 Task 2：议论文 4 段式 + 观点表达', type: 'writing', duration: 45,
        vocabulary: [
          { word: 'thesis / topic sentence / concession', translation: '论点 / 段首句 / 让步', phonetic: '' },
          { word: 'admittedly', translation: '诚然（让步词）', phonetic: '' },
          { word: 'nevertheless', translation: '然而（转折词）', phonetic: '' }
        ],
        grammar: { title: '辩证 4 段：Intro → Body 1 (Agree) → Body 2 (Disagree/Concession) → Conclusion', examples: ['In conclusion, although X, I firmly believe that Y...'] },
        dialogue: [
          { en: 'Should I give a one-sided or balanced view?', zh: '我应该给出单边观点还是平衡观点？' },
          { en: 'Slightly one-sided with a concession paragraph is safer for a Band 7.', zh: '带让步段的轻微偏向性结构更稳拿7分。' }
        ]
      },
      {
        id: 'ielts-6', title: '口语 Part 1/2/3 全题型 + 模考', type: 'speaking', duration: 50,
        vocabulary: [
          { word: 'extended answer', translation: '展开回答（P1 3-4句）', phonetic: '' },
          { word: 'cue card', translation: '题卡（P2）', phonetic: '' },
          { word: 'abstract discussion', translation: '抽象讨论（P3）', phonetic: '' }
        ],
        grammar: { title: 'Part 2 1分钟笔记结构：PEEL (Point-Example-Experience-Link)', examples: ['I\'d like to talk about... For example... I remember... This made me realize that...'] },
        dialogue: [
          { en: 'I can\'t speak for 2 minutes straight in Part 2.', zh: '我Part 2说不到2分钟。' },
          { en: 'Use a short story from your own experience — stories are easier to expand.', zh: '用你亲身经历的小故事——故事更容易展开。' }
        ]
      }
    ]
  },
  {
    id: 'ja-jlpt-n2',
    language: 'ja',
    languageName: '日语',
    level: 'exam',
    levelName: 'JLPT N2 冲刺',
    title: 'JLPT N2 冲刺班（新完全掌握 + 10年真题）',
    description: 'N2 核心 3000 词 + 语法 300 条精讲、阅读理解对策、听解突破 + 写作备考',
    cover: '⛩️',
    color: 'from-rose-600 to-red-700',
    lessons: [
      {
        id: 'jlpt-1', title: 'JLPT N2 合格线策略 & 100 日复习计划', type: 'strategy', duration: 35,
        vocabulary: [
          { word: '言語知識（文字・語彙・文法）', translation: '语言知识（文字/词汇/语法）', phonetic: '' },
          { word: '読解', translation: '阅读', phonetic: '' },
          { word: '聴解', translation: '听力', phonetic: '' }
        ],
        grammar: { title: '合格目标分配：语言知识 80% / 阅读 70% / 听解 65%', examples: ['3 月冲刺 → 1 日 3 节：1 词汇语法、1 阅读、1 听力'] },
        dialogue: [
          { ja: 'N2に一発合格するには、どう計画を立てるべきですか？', zh: '要一次通过N2，应该如何规划？' },
          { ja: '100日計画で、朝1時間語彙、夜1時間過去問、通勤で聴解がおすすめ。', zh: '建议100天计划：早上1小时词汇，晚上1小时真题，通勤时听听力。' }
        ]
      },
      {
        id: 'jlpt-2', title: '文字词汇：10 大高频词根 & 外来语', type: 'vocabulary', duration: 40,
        vocabulary: [
          { word: '経緯（けいい）', translation: '来龙去脉，原委', phonetic: 'keii' },
          { word: '推奨（すいしょう）', translation: '推荐', phonetic: 'suishō' },
          { word: '準拠（じゅんきょ）', translation: '遵照，依据', phonetic: 'junkyo' },
          { word: 'コンプライアンス', translation: '合规（外来语）', phonetic: 'compliance' }
        ],
        grammar: { title: 'N2 文字高频词根：経・推・準・対・基・拠', examples: ['推進する / 推測する / 推薦状', '対策 / 対応 / 対面'] },
        dialogue: [
          { ja: '漢字が苦手で、覚えられません…', zh: '我汉字很差，记不住……' },
          { ja: '語呂合わせや、接頭語・接尾語ごとにまとめると定着しやすい。', zh: '谐音记忆或按前缀/后缀分组记忆更牢固。' }
        ]
      },
      {
        id: 'jlpt-3', title: 'N2 核心语法 300 条精讲（上篇）', type: 'grammar', duration: 45,
        vocabulary: [
          { word: '～ざるを得ない', translation: '不得不……', phonetic: 'zaru o enai' },
          { word: '～につれて', translation: '随着……', phonetic: 'ni tsurete' },
          { word: '～をもとに', translation: '基于……', phonetic: 'o moto ni' },
          { word: '～わけではない', translation: '并不是说……', phonetic: 'wake dewa nai' }
        ],
        grammar: { title: 'N2 必出 5 大语法群：推量・譲歩・原因・条件・傾向', examples: ['～にもかかわらず（譲歩）', '～おかげで / ～せいで（原因）'] },
        dialogue: [
          { ja: '「ざるを得ない」は日常で使いますか？', zh: '「ざるを得ない」会在日常生活中使用吗？' },
          { ja: 'はい、やむを得ない時によく使います。「残業せざるを得なかった」のように。', zh: '是的，在不得已时常用。比如「不得不加班」。' }
        ]
      },
      {
        id: 'jlpt-4', title: 'N2 核心语法 300 条精讲（下篇）', type: 'grammar', duration: 45,
        vocabulary: [
          { word: '～に反して', translation: '与……相反', phonetic: 'ni hanshite' },
          { word: '～に際して', translation: '在……之际', phonetic: 'ni saishite' },
          { word: '～かねない', translation: '有……的危险', phonetic: 'kanenai' },
          { word: '～にこたえて', translation: '响应……', phonetic: 'ni kotaete' }
        ],
        grammar: { title: '敬语 N2 必出：尊敬語・謙譲語・丁寧語・美化語', examples: ['お＋Vます＋になる（尊敬）', 'お＋Vます＋する（謙譲）'] },
        dialogue: [
          { ja: '敬語が難しすぎます！', zh: '敬语太难了！' },
          { ja: 'まず基本の尊敬・謙譲15組だけ暗記 → 過去問を回すのが最速。', zh: '先只背基础敬语15组 → 刷真题是最快的。' }
        ]
      },
      {
        id: 'jlpt-5', title: '读解：情報検索・内容理解・統合理解', type: 'reading', duration: 45,
        vocabulary: [
          { word: '要旨（ようし）', translation: '要旨，核心', phonetic: 'yōshi' },
          { word: '主張（しゅちょう）', translation: '主张', phonetic: 'shuchō' },
          { word: '根拠（こんきょ）', translation: '根据', phonetic: 'konkyo' }
        ],
        grammar: { title: '阅读 5 大题型对策：速読 → 精読 → 検証', examples: ['情報検索：先看题干关键词，定位原文', '内容理解（評論）：逆接の後＝主張'] },
        dialogue: [
          { ja: '読解の時間が足りません。', zh: '阅读时间不够。' },
          { ja: '本文を読む前に問題文を先読みしよう。正解はほとんど逆接の後！', zh: '先读题干再看文章。正确答案几乎都在转折后！' }
        ]
      },
      {
        id: 'jlpt-6', title: '听解 & 模考：课题理解 / ポイント理解 / 概要理解', type: 'listening', duration: 50,
        vocabulary: [
          { word: '課題理解（聞き取り）', translation: '课题理解', phonetic: '' },
          { word: '即時応答', translation: '即时应答（三选一）', phonetic: '' },
          { word: '音声メモ', translation: '听力速记', phonetic: '' }
        ],
        grammar: { title: '听解 4 大题型得分法：先读选项 + 预测内容', examples: ['即時応答：相手の発言にふさわしい返答（敬語・態度）', '概要理解：結論は最後！'] },
        dialogue: [
          { ja: '即時応答がよく分かりません。', zh: '即时应答题型经常搞不懂。' },
          { ja: '「いつもお世話になっております」→ 「こちらこそ！」が最も多いパターン。', zh: '「一直承蒙关照」→「我才是！」是最高频的模式。' }
        ]
      }
    ]
  },
  {
    id: 'ko-topik4',
    language: 'ko',
    languageName: '韩语',
    level: 'exam',
    levelName: 'TOPIK II 4 级冲刺',
    title: 'TOPIK II 4 级冲刺班（真题 66-72 回精讲 + 写作模板）',
    description: 'TOPIK 2 词汇语法全过 + 阅读 5 大题型 + 写作 51/52/53/54 题模板 + 听力抓关键词',
    cover: '🎖️',
    color: 'from-blue-600 to-indigo-700',
    lessons: [
      {
        id: 'topik-1', title: 'TOPIK II 结构解析 & 4 级合格备考路线', type: 'strategy', duration: 32,
        vocabulary: [
          { word: '어휘·문법', translation: '词汇语法（30题）', phonetic: '' },
          { word: '쓰기', translation: '写作（4题）', phonetic: '' },
          { word: '듣기 / 읽기', translation: '听力 / 阅读（各50题）', phonetic: '' }
        ],
        grammar: { title: '4 级合格线：单科平均 ≥ 50 分，总分 ≥ 200', examples: ['写作 ≥ 45 分 → 背 4 篇模板 + 连接词汇总'] },
        dialogue: [
          { ko: '4급 따려면 얼마나 공부해야 하나요?', zh: '要拿4级需要学多久？' },
          { ko: '보통 3~6개월, 매일 2시간씩. 어휘 1시간, 쓰기 30분, 듣기 30분 추천!', zh: '一般3-6个月，每天2小时。推荐词汇1小时，写作30分钟，听力30分钟！' }
        ]
      },
      {
        id: 'topik-2', title: '词汇语法：4 级 1000 核心词 & 语法 200 条', type: 'vocabulary', duration: 40,
        vocabulary: [
          { word: '-에 비해', translation: '与……相比', phonetic: 'e bihae' },
          { word: '-는 반면에', translation: '……而另一方面（对比）', phonetic: 'neun banmyeone' },
          { word: '-다 보니', translation: '……着（结果）发现', phonetic: 'da boni' },
          { word: '-을/를 통해', translation: '通过……', phonetic: 'eul/reul tonghae' }
        ],
        grammar: { title: 'TOPIK 高频「对比/让步/条件/目的」4 大语法群', examples: ['-더라도（譲歩）', '-기 위해서（目的）', '-는 대신（代替/反対）'] },
        dialogue: [
          { ko: '문법이 너무 많아서 외우기 힘들어요.', zh: '语法太多背不下来。' },
          { ko: '비슷한 의미끼리 묶어서 예문과 함께 암기하는 것이 가장 좋아요!', zh: '最好把意思相近的语法分组，配合例句一起记！' }
        ]
      },
      {
        id: 'topik-3', title: '듣기：选图 / 对话综合 / 新闻主题抓关键词', type: 'listening', duration: 40,
        vocabulary: [
          { word: '중요 키워드', translation: '重要关键词', phonetic: '' },
          { word: '하지만 / 그런데 / 그래서', translation: '但是 / 不过 / 所以（信号词）', phonetic: '' },
          { word: '선택지 미리 읽기', translation: '提前读选项', phonetic: '' }
        ],
        grammar: { title: '听力 4 步法：先读选项 → 预判 → 听关键词 → 匹配同义改写', examples: ['新闻主题：정부 발표 / 기자 / 대책 / 경제 등 → 주제는 첫 3초에'] },
        dialogue: [
          { ko: '뉴스 듣기만 하면 너무 빨라요.', zh: '一放新闻类就太快了。' },
          { ko: '주제는 보통 첫 문장에! 끝까지 집중하면 결론은 마지막에 반복돼요.', zh: '主题一般在第一句！集中听到最后，结论往往在末尾重复。' }
        ]
      },
      {
        id: 'topik-4', title: '읽기：빈칸 / 문장 순서 / 주제 찾기', type: 'reading', duration: 40,
        vocabulary: [
          { word: '주제 / 요지', translation: '主题 / 要旨', phonetic: '' },
          { word: '흐름 파악', translation: '把握脉络', phonetic: '' },
          { word: '내용 일치', translation: '内容一致', phonetic: '' }
        ],
        grammar: { title: '阅读高分：5 大题型得分策略', examples: ['주제 찾기：첫문장과 마지막문장을 합쳐서 중심어 찾기', '내용 일치：원문과 완전히 같은 선택지 = 보통 틀림（동의어）'] },
        dialogue: [
          { ko: '읽기 시간이 부족해요.', zh: '阅读时间不够。' },
          { ko: '어휘 문법 20분 → 쓰기 30분 → 읽기 70분 분배! 어려운 문제는 건너뛰기.', zh: '词汇语法20分→写作30分→阅读70分分配！难题先跳过。' }
        ]
      },
      {
        id: 'topik-5', title: '쓰기 51/52 题：填空句式 & 连接词模板', type: 'writing', duration: 38,
        vocabulary: [
          { word: '-ㄴ/는 반면,', translation: '而另一方面', phonetic: '' },
          { word: '-거나 / -ㄹ 뿐만 아니라', translation: '或 / 不仅……而且', phonetic: '' },
          { word: '따라서 / 그럼으로써', translation: '因此 / 借此', phonetic: '' }
        ],
        grammar: { title: '51 题（情景填空）：尊敬 + 句型；52 题（说明填空）：逻辑连接词', examples: ['51 题：「아/어/여 주시겠어요?」「부탁드립니다」', '52 题：「그러나 / 이는 / 왜냐하면」'] },
        dialogue: [
          { ko: '52번 빈칸이 항상 틀려요.', zh: '52题填空每次都错。' },
          { ko: '앞/뒤 문장을 보고 대조/인과/예시 중 어떤 연결인지 판단하면 쉬워요!', zh: '看前后句子，判断是对比/因果/举例关系就简单了！' }
        ]
      },
      {
        id: 'topik-6', title: '쓰기 53/54 题：图表写作 & 议论文（700字）模板', type: 'writing', duration: 45,
        vocabulary: [
          { word: '그래프 설명', translation: '图表描述（53题）', phonetic: '' },
          { word: '서론 / 본론 / 결론', translation: '引论 / 本论 / 结论（54题）', phonetic: '' },
          { word: '찬성 / 반대', translation: '赞成 / 反对', phonetic: '' }
        ],
        grammar: { title: '53题：도입 → 자료설명 → 전망/원인。54题：4段结构（辩证）', examples: ['54题模板：찬성 측 주장과 근거 → 반대 측 주장과 근거 → 나의 의견으로 마무리'] },
        dialogue: [
          { ko: '54번 700자 쓰기가 너무 어려워요.', zh: '54题700字写作太难了。' },
          { ko: '형식을 암기하세요! 첫 단락은 주제 제시 → 2,3단락 장단점 → 마지막 개인 의견. 매우 안정적!', zh: '背模板！第一段提出主题→2、3段优缺点→最后个人意见。非常稳！' }
        ]
      }
    ]
  },
  {
    id: 'fr-delf-b2',
    language: 'fr',
    languageName: '法语',
    level: 'exam',
    levelName: 'DELF B2 冲刺',
    title: '法语 DELF B2 证书冲刺班（DELF 250 真题精讲 + 口语辩论模拟）',
    description: 'DELF B2 听/说/读/写 4 科全面备考，辩论提纲训练 + 写作范文 + 口语批改',
    cover: '🗼',
    color: 'from-blue-700 to-indigo-800',
    lessons: [
      {
        id: 'delf-1', title: 'DELF B2 全面解析 + 分数分配与战术', type: 'strategy', duration: 32,
        vocabulary: [
          { word: 'Compréhension orale / écrite', translation: '听力/阅读理解', phonetic: '' },
          { word: 'Production orale / écrite', translation: '口语/写作输出', phonetic: '' },
          { word: 'Point /25 × 4 = 100', translation: '4科×25=100分（及格：50/100，单科≥5）', phonetic: '' }
        ],
        grammar: { title: 'DELF B2 通过标准：50/100 分 + 每科最低 5 分', examples: ['Production écrite : 250 mots（论点 / 反论点 / 结论）', 'Production orale : 10 分钟 exposé + 10 分钟 débat'] },
        dialogue: [
          { fr: 'Dois-je utiliser un langage très soutenu à l\'oral ?', zh: '口语时我需要用非常正式的表达吗？' },
          { fr: 'Naturel mais structuré : utilisez les connecteurs, pas besoin de mots rares.', zh: '自然但有结构：用连接词，不需要罕见词汇。' }
        ]
      },
      {
        id: 'delf-2', title: 'Compréhension orale : 采访 & 报告抓重点', type: 'listening', duration: 40,
        vocabulary: [
          { word: 'idée principale', translation: '主旨', phonetic: '' },
          { word: 'arguments pour / contre', translation: '支持/反对论点', phonetic: '' },
          { word: 'interview', translation: '采访', phonetic: '' }
        ],
        grammar: { title: '听力 2 步法：先读题 → 抓论点标记词', examples: ['Tout d\'abord… Ensuite… Enfin…（结构）', 'Mais / Pourtant / Par contre…（反論）'] },
        dialogue: [
          { fr: 'J\'oublie l\'idée générale quand je prends des notes.', zh: '我记笔记的时候就忘了主旨。' },
          { fr: 'Ne notez que les mots-clés : le reste viendra à l\'esprit.', zh: '只记关键词：剩下的会自动浮现。' }
        ]
      },
      {
        id: 'delf-3', title: 'Compréhension écrite & Production écrite : 辩证写作', type: 'writing', duration: 45,
        vocabulary: [
          { word: 'argumenter / réfuter', translation: '论证 / 反驳', phonetic: '' },
          { word: 'opinion / contre-opinion', translation: '观点 / 反观点', phonetic: '' },
          { word: 'plan dialectique', translation: '辩证结构（正→反→合）', phonetic: '' }
        ],
        grammar: { title: '写作模板：Thèse → Antithèse → Synthèse（三段式）', examples: ['Si d\'un côté…, d\'un autre côté… Pour conclure…'] },
        dialogue: [
          { fr: 'Je n\'arrive pas à écrire 250 mots en une heure.', zh: '我无法在1小时内写满250词。' },
          { fr: 'Préparez 4 connecteurs, 1 paragraphe = 1 argument → ça coule de source.', zh: '准备4个连接词，1段=1个论点→自然流淌。' }
        ]
      },
      {
        id: 'delf-4', title: 'Production orale : 10 分钟 exposé 结构', type: 'speaking', duration: 45,
        vocabulary: [
          { word: 'plan I. II. III.', translation: '结构提纲（罗马数字）', phonetic: '' },
          { word: 'introduction', translation: '引言（hook→sujet→plan）', phonetic: '' },
          { word: 'exemples concrets', translation: '具体例子', phonetic: '' }
        ],
        grammar: { title: '结构模板：Introduction → Développement (3 arg) → Conclusion', examples: ['Intro : Hook + Annoncer le plan', 'Dev : 1 argument = 1 paragraphe + exemple concret'] },
        dialogue: [
          { fr: 'Je bloque souvent à l\'introduction.', zh: '我经常卡在开头。' },
          { fr: 'Commencez par une question ou une citation. Exemple : Saviez-vous que... ?', zh: '用一个问题或一句引用开头。比如：你知道……吗？' }
        ]
      },
      {
        id: 'delf-5', title: 'Production orale : 10 分钟 débat 技巧', type: 'speaking', duration: 45,
        vocabulary: [
          { word: 'être d\'accord / pas d\'accord', translation: '同意 / 不同意', phonetic: '' },
          { word: 'relever un contre-exemple', translation: '举出反例', phonetic: '' },
          { word: 'puisque / car / étant donné que', translation: '因为（多种表达）', phonetic: '' }
        ],
        grammar: { title: '辩论连接词 + 反驳语料', examples: ['Je comprends votre point, toutefois…', 'Ce serait vrai si X, mais en réalité Y…'] },
        dialogue: [
          { fr: 'Que dire si on me contredit sur mon exemple ?', zh: '如果对方反驳我的例子怎么办？' },
          { fr: 'Souriez et donnez un autre exemple. L\'essentiel est la structure, pas l\'exemple.', zh: '微笑，再举另一个例子。关键是结构，不是例子本身。' }
        ]
      },
      {
        id: 'delf-6', title: 'DELF B2 全科模考 & 批改复盘', type: 'speaking', duration: 50,
        vocabulary: [
          { word: 'bilan', translation: '复盘', phonetic: '' },
          { word: 'points forts / points faibles', translation: '强项 / 弱项', phonetic: '' },
          { word: 'auto-correction', translation: '自我纠正', phonetic: '' }
        ],
        grammar: { title: '考前一周节奏：1 套模考 + 逐题复盘（≥ 3 遍）', examples: ['J+7 : 模考 1', 'J+3 : 模考 2 + 弱点强化', 'J-1 : 1 范文 + 1 口语提纲'] },
        dialogue: [
          { fr: 'Que faire la veille de l\'examen ?', zh: '考试前一天做什么？' },
          { fr: 'Révision légère, bonne nuit, et une bonne alimentation. Le jour J, c\'est la confiance qui gagne.', zh: '轻度复习，良好睡眠，好好吃饭。考试当天，信心是胜利的关键。' }
        ]
      }
    ]
  },
  {
    id: 'de-testdaf',
    language: 'de',
    languageName: '德语',
    level: 'exam',
    levelName: '德福 TestDaF 4×4 冲刺',
    title: '德福 TestDaF 4×4 冲刺班（德福高频主题 + 图表写作 + 口语表达）',
    description: '德福 4 科 Lesen / Hören / Schreiben / Sprechen 全面突破，目标：4×4（每项≥TDN 4）',
    cover: '🏰',
    color: 'from-amber-700 to-red-800',
    lessons: [
      {
        id: 'testdaf-1', title: '德福 TestDaF 全面解析 + 8 周备考路线图', type: 'strategy', duration: 35,
        vocabulary: [
          { word: 'TDN 3 / 4 / 5', translation: '德福成绩等级（DaF 3/4/5）', phonetic: '' },
          { word: 'Prüfungsbereiche LV / HV / SA / MA', translation: '考试部分：阅读/听力/写作/口语', phonetic: '' },
          { word: 'Universität / Hochschule / Studium', translation: '大学/高等学院/学业（德福高频主题）', phonetic: '' }
        ],
        grammar: { title: '目标：4×4 = 每项至少 TDN 4（DSH-2 水平）', examples: ['第1-4周：主题词汇+范文', '第5-6周：模考 1-2 套', '第7-8周：错题复盘 + 冲刺'] },
        dialogue: [
          { de: 'Was ist wichtiger bei TestDaF - Spezialwörter oder Struktur?', zh: '德福备考更重要的是——专业词汇还是结构？' },
          { de: 'Struktur zuerst! Fachvokabular kommt im Training automatisch hinzu.', zh: '结构优先！专业词汇在训练中会自然增加。' }
        ]
      },
      {
        id: 'testdaf-2', title: 'Leseverstehen：文本类型 × 3（大学网站/报刊/书评）', type: 'reading', duration: 40,
        vocabulary: [
          { word: 'Bewerbung / Zulassung', translation: '申请 / 录取', phonetic: '' },
          { word: 'Studiengang', translation: '大学专业', phonetic: '' },
          { word: 'Leserbrief / Buchbesprechung', translation: '读者信 / 书评', phonetic: '' }
        ],
        grammar: { title: '答题策略：先题后文，关键词定位', examples: ['第一部分：找信息（快速扫描）', '第二部分：匹配段落与陈述', '第三部分：Ja / Nein / Text sagt dazu nichts'] },
        dialogue: [
          { de: 'Lesen 3 Text sagt dazu nichts — ist das wie IELTS NG?', zh: '阅读第三部分 "文中未提" 就像雅思的NOT GIVEN吗？' },
          { de: 'Genau. Wenn es keine Belege gibt, wähle "...dazu nichts", auch wenn du es logisch vermutest.', zh: '完全正确。如果没有证据，就选文中未提，即使你逻辑上推测。' }
        ]
      },
      {
        id: 'testdaf-3', title: 'Hörverstehen：Mitschnitt 1/2/3 抓关键词', type: 'listening', duration: 40,
        vocabulary: [
          { word: 'Mitschnitt', translation: '录音（德福听力 3 种录音）', phonetic: '' },
          { word: 'Interview / Dialog', translation: '访谈 / 对话', phonetic: '' },
          { word: 'Redewendung', translation: '惯用语', phonetic: '' }
        ],
        grammar: { title: '3 步法：先读题 → 预测 → 记笔记关键词', examples: ['Mitschnitt 1：每日校园广播（2遍）', 'Mitschnitt 2：多人讨论（1遍！）', 'Mitschnitt 3：学术采访（2遍）'] },
        dialogue: [
          { de: 'Mitschnitt 2 ist nur einmal — ich vergesse sofort!', zh: '录音2只放一遍——我马上就忘！' },
          { de: 'Schreibe Stichwörter, keine Sätze. 4-5 Wörter pro Antwort reichen!', zh: '只写关键词，不写句子。每个答案4-5个词足够！' }
        ]
      },
      {
        id: 'testdaf-4', title: 'Schriftlicher Ausdruck：Grafikbeschreibung + Stellungnahme', type: 'writing', duration: 45,
        vocabulary: [
          { word: 'Grafikbeschreibung', translation: '图表描述', phonetic: '' },
          { word: 'Stellungnahme', translation: '立场观点', phonetic: '' },
          { word: 'Überleitung', translation: '过渡句', phonetic: '' }
        ],
        grammar: { title: '写作结构：Einleitung → Grafik → Argumente → Fazit', examples: ['Grafik：Thema → Quelle → Überblick → Daten → Auswertung', 'Argumente：Pro und Contra mit Beispiel → eigene Meinung'] },
        dialogue: [
          { de: 'Muss ich die Grafik bis ins Detail beschreiben?', zh: '我需要把图表描述得非常细节吗？' },
          { de: 'Nein! Beschreibe Haupttrends, Extremwerte und Vergleiche.', zh: '不！只描述主要趋势、极端值和对比。' }
        ]
      },
      {
        id: 'testdaf-5', title: 'Mündlicher Ausdruck：Aufgaben 1-7 答题模板', type: 'speaking', duration: 45,
        vocabulary: [
          { word: 'Hinweis / Plan', translation: '提示和提纲（每题前30秒准备）', phonetic: '' },
          { word: 'Meinung äußern', translation: '表达观点', phonetic: '' },
          { word: 'Vorschlag / Empfehlung', translation: '提议 / 推荐', phonetic: '' }
        ],
        grammar: { title: '7 题结构模板（全部背熟）：Hallo → Thema → Punkt 1/2/3 → Abschluss', examples: ['Aufgabe 1 : 正式咨询图书馆 → 敬语', 'Aufgabe 3 : Grafik beschreiben → Thema, Quelle, Trends', 'Aufgabe 4 : Pro/Contra 立场'] },
        dialogue: [
          { de: 'Ich rede zu schnell und habe Fehler!', zh: '我讲太快并且犯错！' },
          { de: 'Pausen machen ist OK! Und Fehler sind normal — Korrektur in gleichen Satz ist erlaubt.', zh: '停顿一下没关系！错误很正常——在同一句中自我纠正是允许的。' }
        ]
      },
      {
        id: 'testdaf-6', title: '德福高频主题：Universität / Beruf / Umwelt / Digitalisierung', type: 'vocabulary', duration: 45,
        vocabulary: [
          { word: 'Studiengebühren', translation: '大学学费', phonetic: '' },
          { word: 'Fernstudium', translation: '远程学习', phonetic: '' },
          { word: 'Umweltschutz / Nachhaltigkeit', translation: '环保 / 可持续', phonetic: '' },
          { word: 'Digitalisierung', translation: '数字化', phonetic: '' }
        ],
        grammar: { title: '每主题 10 句固定表达（直接背）', examples: ['Die Digitalisierung verändert unsere Arbeitswelt grundlegend.', 'Die Nachhaltigkeit ist die größte Herausforderung der Zukunft.'] },
        dialogue: [
          { de: 'Welches Thema kommt am häufigsten bei TestDaF?', zh: '德福最常考什么主题？' },
          { de: 'Universität, Studium und das Lernen an sich! Dann Umwelt, Digitalisierung und Familien.', zh: '大学、学业本身！然后是环境、数字化和家庭。' }
        ]
      }
    ]
  },
  {
    id: 'es-dele-b2',
    language: 'es',
    languageName: '西班牙语',
    level: 'exam',
    levelName: 'DELE B2 冲刺',
    title: '西班牙语 DELE B2 冲刺班（Cronómetro DELE + 全题型写作口语模考）',
    description: 'DELE B2 四科 Comprensión / Expresión 全面突破，虚拟式 + 条件式 + 表达结构，目标：60/100 通过',
    cover: '💃🏻',
    color: 'from-red-700 via-orange-500 to-yellow-600',
    lessons: [
      {
        id: 'esdele-1', title: 'DELE B2 结构、评分 & 3 个月备考路线', type: 'strategy', duration: 32,
        vocabulary: [
          { word: 'Puntuación total: 100 puntos', translation: '总分 100 分（及格 ≥60，两部分各 ≥30）', phonetic: '' },
          { word: 'Destrezas 1', translation: '技能组 1：阅读+写作（60%）', phonetic: '' },
          { word: 'Destrezas 2', translation: '技能组 2：听力+口语（40%）', phonetic: '' }
        ],
        grammar: { title: '及格线：Destrezas 1 ≥ 30 / 60，Destrezas 2 ≥ 20 / 40', examples: ['月 1：语法+词汇基础', '月 2：写作+口语模板', '月 3：5 套 Cronómetro 模考+复盘'] },
        dialogue: [
          { es: '¿Aprobé DELE si saqué 62 total pero 28 en destreza 1?', zh: '如果总分62但技能组1只有28，算通过吗？' },
          { es: '¡No! Hay que superar el mínimo EN CADA DESTREZA (30/60 + 20/40).', zh: '不算！每一大组都必须超最低（30/60 和 20/40）。' }
        ]
      },
      {
        id: 'esdele-2', title: 'Comprensión de lectura：Tarea 1-4 全题型攻略', type: 'reading', duration: 40,
        vocabulary: [
          { word: 'idea principal / idea secundaria', translation: '主旨 / 细节', phonetic: '' },
          { word: 'definición / sinonimia', translation: '词义理解 / 同义词', phonetic: '' },
          { word: 'insertar oraciones', translation: '句子插入（Tarea 3）', phonetic: '' }
        ],
        grammar: { title: '4 大题型：先题干 → 关键词定位 + 同义改写', examples: ['Tarea 3（6选5）：前後文照应 + 连接词', 'Tarea 4（专家意见配对）：捕捉立场词（Estoy a favor de... / Por el contrario）'] },
        dialogue: [
          { es: 'Tarea 3 me sale fatal, ¿truco?', zh: 'Tarea 3（句子插入）做得很差，有技巧吗？' },
          { es: 'Lee la oración que vas a insertar: NO debe romper la lógica (referentes, conectores, tema de la oración previa y posterior).', zh: '先读要插入的句子：不能打断前后句子的逻辑（指代、连接词、主题）。' }
        ]
      },
      {
        id: 'esdele-3', title: 'Comprensión auditiva：Entrevista / 不选 + Tarea 5 选项', type: 'listening', duration: 40,
        vocabulary: [
          { word: 'entrevista', translation: '采访', phonetic: '' },
          { word: 'tono / actitud del hablante', translation: '说话人语气 / 态度', phonetic: '' },
          { word: 'información específica', translation: '具体信息', phonetic: '' }
        ],
        grammar: { title: '听力 4 步法：预读选项 → 预判 → 关键词 → 同义改写', examples: ['Tarea 3（观点+人物匹配）：边听边打草稿，名字写下来'] },
        dialogue: [
          { es: 'Escuchan dos veces en DELE, ¿verdad?', zh: 'DELE听力放两遍，对吗？' },
          { es: 'Tareas 1, 3 y 4 sí, pero Tarea 2 SÓLO UNA VEZ. ¡Ojo!', zh: 'T1,3,4放两遍，但T2只放一遍。注意！' }
        ]
      },
      {
        id: 'esdele-4', title: 'Expresión escrita：Carta al director + Ensayo argumentativo', type: 'writing', duration: 45,
        vocabulary: [
          { word: 'carta formal al director', translation: '致编辑信（Tarea1）', phonetic: '' },
          { word: 'ensayo de opinión / argumentativo', translation: '观点/议论文（Tarea2）', phonetic: '' },
          { word: 'tesis / antítesis / síntesis', translation: '正 / 反 / 合（经典辩证结构）', phonetic: '' }
        ],
        grammar: { title: '写作结构（Tarea1：150-180词；Tarea2：180-220词）', examples: ['Tarea2：Introducción (40词) → 2× Argumentos (80词) → Contra(40) → Conclusión(40)'] },
        dialogue: [
          { es: '¿Debo escribir de más o de menos?', zh: '应该写多还是写少？' },
          { es: '¡Ni un solo párrafo fuera de rango! Si escribes más, no lo lean. ¡Manténte entre mínimo y máximo + 10 palabras!', zh: '一字不可超出范围！写多了考官直接不看。保持在最小值和最大值+10词之间！' }
        ]
      },
      {
        id: 'esdele-5', title: 'Expresión e interacción orales：4 任务全流程', type: 'speaking', duration: 45,
        vocabulary: [
          { word: 'Tarea 1: Relato de fotos', translation: 'T1：图片描述（2-3 min）', phonetic: '' },
          { word: 'Tarea 2: Diálogo con el examinador', translation: 'T2：与考官对话（2 min）', phonetic: '' },
          { word: 'Tarea 3: Elección de tema (3 opciones)', translation: 'T3：选主题（2-3 min 独白）', phonetic: '' },
          { word: 'Tarea 4: Debate sobre T3', translation: 'T4：围绕 T3 辩论（3 min）', phonetic: '' }
        ],
        grammar: { title: '口语 4 任务时间分配 + 连接词', examples: ['T1 图片：En primer plano / Al fondo / A la izquierda...', 'T4 辩论：Estoy de acuerdo, sin embargo / Por un lado / Por otro lado'] },
        dialogue: [
          { es: 'Tengo miedo de no saber seguir el debate en T4.', zh: '我担心T4辩论跟不上。' },
          { es: 'Si no entiendes, pide repetición: "¿Podría repetirlo, por favor?". ¡Esto no baja puntos!', zh: '如果没懂，请求重复：「麻烦重复一下好吗？」。这不扣分！' }
        ]
      },
      {
        id: 'esdele-6', title: 'DELE B2 全科目模考 + 虚拟式 & 条件式综合练习', type: 'speaking', duration: 50,
        vocabulary: [
          { word: 'Subjuntivo + indicativo', translation: '虚拟式+直陈式（B2核心）', phonetic: '' },
          { word: 'Condicional simple / compuesto', translation: '简单 / 复合条件式', phonetic: '' },
          { word: 'Ojalá / Dudar que / Es probable que', translation: '触发虚拟式的常见短语', phonetic: '' }
        ],
        grammar: { title: '最后一周：模考 1 套 × 3 遍 → 错题 & 范文深度复盘', examples: ['J + 7: Cronómetro Test 5', 'J + 3: Test 6 + 纠正所有 Subjuntivo 错误', 'J-1: 口语 T3 5 套提纲 + 作文 2 篇重写'] },
        dialogue: [
          { es: '¿Qué haría usted el día antes?', zh: '换作您，考前一天会做什么？' },
          { es: 'Salir a caminar, dormir 8 horas y desayuno completo. La confianza es el 50% del examen. ¡Ánimo!', zh: '去散步，睡8小时，吃一顿丰盛早餐。信心是考试的50%！加油！' }
        ]
      }
    ]
  }
];

// ===================== 元数据注入：CEFR / JLPT / TOPIK / DELF / 德福 难度对标 =====================
// 难度对标（按语种和级别自动标注）
const DIFFICULTY_MAP = {
  en: { beginner: 'A1', intermediate: 'B1', advanced: 'C1', exam: 'IELTS 6.5 (B2+)' },
  ja: { beginner: 'N5', intermediate: 'N4', advanced: 'N3', exam: 'JLPT N2 (B2)' },
  ko: { beginner: 'TOPIK I-1', intermediate: 'TOPIK I-2', advanced: 'TOPIK II-4', exam: 'TOPIK II-4 (B2)' },
  fr: { beginner: 'A1', intermediate: 'B1', advanced: 'C1', exam: 'DELF B2' },
  de: { beginner: 'A1', intermediate: 'B1', advanced: 'C1', exam: 'TestDaF 4×4' },
  es: { beginner: 'A1', intermediate: 'B1', advanced: 'C1', exam: 'DELE B2' }
};
// 学习目标标签（按课程主题智能识别）
const GOAL_KEYWORDS = {
  travel: ['购物', '交通', '旅行', '度假', '餐厅', '就餐', '天气', '外出', '出行', '购物场景', '机场', '酒店'],
  business: ['商务', '工作', '职场', '谈判', '电话', '邮件', '写作', '新闻', '公共', '演讲', '报告', '合同'],
  study: ['语法', '写作', '赏析', '深入', '高级', '表达', '文化', '文学', '考', 'TOPIK', 'JLPT', 'IELTS', '雅思', 'DELF', 'DALF', '德福', 'TestDaF', 'DELE', '备考', '冲刺', '真题', '模考', '写作批改', '口语模拟'],
  conversation: ['问候', '介绍', '对话', '家庭', '成员', '兴趣', '娱乐', '社交', '流行', '情景']
};
// 教材版本映射
const TEXTBOOK_MAP = {
  en: { beginner: '新概念英语 第一册', intermediate: '新概念英语 第二册', advanced: '剑桥英语高级', exam: '剑桥 IELTS 15-19 真题精讲' },
  ja: { beginner: '标准日本语 初级上', intermediate: '标准日本语 初级下', advanced: '标准日本语 中级', exam: '新完全掌握 JLPT N2 系列' },
  ko: { beginner: '首尔大学韩国语 1', intermediate: '首尔大学韩国语 2', advanced: '首尔大学韩国语 3', exam: 'TOPIK 官方真题 66-72 回解析' },
  fr: { beginner: 'Le Nouveau Taxi A1', intermediate: 'Le Nouveau Taxi B1', advanced: 'Le Nouveau Taxi C1', exam: 'DELF B2 250 真题集' },
  de: { beginner: 'Menschen A1', intermediate: 'Menschen B1', advanced: 'Menschen C1', exam: '德福高频主题 + Mit Erfolg zum TestDaF' },
  es: { beginner: 'Aula Internacional 1 (A1)', intermediate: 'Aula Internacional 3 (B1)', advanced: 'Aula Internacional 5 (C1)', exam: 'Cronómetro DELE B2 + 真题汇编' }
};

function detectGoals(course) {
  const goals = new Set(['conversation']);
  const text = (course.title + ' ' + course.description + ' ' +
    course.lessons.map(l => l.title + ' ' + (l.type || '')).join(' ')).toLowerCase();
  for (const lesson of course.lessons) {
    const lessonText = (lesson.title || '').toLowerCase();
    for (const [goal, keywords] of Object.entries(GOAL_KEYWORDS)) {
      if (keywords.some(k => lessonText.includes(k))) goals.add(goal);
    }
  }
  return Array.from(goals);
}

function durationCategory(count) {
  if (count <= 6) return 'short';
  if (count <= 15) return 'medium';
  return 'long';
}

// 为每门课程注入元数据
courses.forEach(c => {
  c.difficulty = DIFFICULTY_MAP[c.language]?.[c.level] || 'A1';
  c.textbook = TEXTBOOK_MAP[c.language]?.[c.level] || '通用教材';
  c.goals = detectGoals(c);
  c.durationCategory = durationCategory(c.lessons.length);
  c.previewAvailable = true; // 所有课程首课免费
  c.previewScreenshots = [
    { caption: '课程导览与学习目标', emoji: '🎯' },
    { caption: '核心词汇与发音示范', emoji: '🔤' },
    { caption: '情景对话与互动练习', emoji: '💬' }
  ];
  // 每课注入随堂测验（基于该课词汇和语法）
  c.lessons.forEach(l => {
    if (!l.quiz) {
      const vocab = l.vocabulary || [];
      const examples = (l.grammar && l.grammar.examples) || [];
      const quizItems = [];
      // 词汇选择题
      vocab.slice(0, 2).forEach(v => {
        const distractors = vocab.filter(x => x.word !== v.word).slice(0, 3).map(x => x.translation);
        while (distractors.length < 3) distractors.push('其他');
        quizItems.push({
          type: 'vocab',
          question: `"${v.word}" 的中文意思是？`,
          options: [v.translation, ...distractors.slice(0, 3)].slice(0, 4),
          answer: 0
        });
      });
      // 语法判断题
      if (examples.length > 0) {
        const correct = examples[0];
        const wrongs = examples.slice(1, 3);
        if (wrongs.length > 0) {
          const allOpts = [correct, ...wrongs].slice(0, 4);
          quizItems.push({
            type: 'grammar',
            question: `下列哪一句语法使用是正确的？`,
            options: allOpts,
            answer: 0
          });
        }
      }
      l.quiz = quizItems.slice(0, 4);
    }
  });
});

// ===================== AI 情景对话剧本 =====================
const SCENARIO_DIALOGS = {
  cafe: {
    name: '☕ 咖啡馆点单',
    icon: '☕',
    bg: 'from-amber-100 to-orange-100',
    steps: [
      { speaker: '店员', en: 'Welcome! What can I get for you today?', ja: 'いらっしゃいませ！何になさいますか？', ko: '어서오세요! 주문하시겠어요?', zh: '欢迎光临！请问需要点什么？', fr: 'Bienvenue ! Qu\'est-ce que je vous sers aujourd\'hui ?', de: 'Willkommen! Was darf es heute sein?', es: '¡Bienvenido! ¿Qué le pongo hoy?' },
      { speaker: '我',  en: 'I would like a cappuccino, please.', ja: 'カプチーノをください。', ko: '카푸치노 주세요.', zh: '我想要一杯卡布奇诺。', fr: 'Je voudrais un cappuccino, s\'il vous plaît.', de: 'Ich hätte gerne einen Cappuccino, bitte.', es: 'Quisiera un cappuccino, por favor.' },
      { speaker: '店员', en: 'Sure. For here or to go?', ja: '店内でお召し上がりですか？お持ち帰りですか？', ko: '매장에서 드릴까요? 가져가실까요?', zh: '好的，堂食还是外带？', fr: 'Bien sûr. Sur place ou à emporter ?', de: 'Natürlich. Hier oder zum Mitnehmen?', es: 'Claro. ¿Para tomar aquí o para llevar?' },
      { speaker: '我',  en: 'For here, thank you.', ja: 'ここで食べます、ありがとう。', ko: '매장에서요, 감사합니다.', zh: '堂食，谢谢。', fr: 'Sur place, merci.', de: 'Hier, danke.', es: 'Para tomar aquí, gracias.' },
      { speaker: '店员', en: 'Anything else?', ja: '他にご注文はありますか？', ko: '더 필요하신 거 있으세요?', zh: '还需要别的吗？', fr: 'Autre chose ?', de: 'Noch etwas?', es: '¿Algo más?' },
      { speaker: '我',  en: 'A chocolate croissant, please.', ja: 'チョコクロワッサンもください。', ko: '초콜릿 크루아상도 주세요.', zh: '再来一个巧克力可颂。', fr: 'Un croissant au chocolat, s\'il vous plaît.', de: 'Ein Schokocroissant dazu, bitte.', es: 'Un cruasán de chocolate, por favor.' }
    ]
  },
  airport: {
    name: '✈️ 机场值机',
    icon: '✈️',
    bg: 'from-sky-100 to-blue-100',
    steps: [
      { speaker: '职员', en: 'Good morning. May I see your passport and ticket?', ja: 'おはようございます。パスポートとチケットを拝見します。', ko: '좋은 아침입니다. 여권과 티켓을 보여주실 수 있나요?', zh: '早上好，请出示您的护照和机票。', fr: 'Bonjour. Puis-je voir votre passeport et votre billet ?', de: 'Guten Morgen. Darf ich Ihren Pass und Ihr Ticket sehen?', es: 'Buenos días. ¿Puedo ver su pasaporte y su billete?' },
      { speaker: '我',  en: 'Here you are.', ja: 'はい、どうぞ。', ko: '여기 있습니다.', zh: '给您。', fr: 'Tenez.', de: 'Bitte sehr.', es: 'Aquí tiene.' },
      { speaker: '职员', en: 'How many bags will you check in?', ja: 'お預けになる荷物はいくつですか？', ko: '위탁하실 짐은 몇 개인가요?', zh: '您要托运几件行李？', fr: 'Combien de bagages enregistrez-vous ?', de: 'Wie viele Taschen möchten Sie einchecken?', es: '¿Cuántas maletas va a facturar?' },
      { speaker: '我',  en: 'One suitcase, please.', ja: 'スーツケース1つをお願いします。', ko: '캐리어 1개요.', zh: '一件行李箱。', fr: 'Une valise, s\'il vous plaît.', de: 'Einen Koffer, bitte.', es: 'Una maleta, por favor.' },
      { speaker: '职员', en: 'Your gate is B12. Boarding starts at 10:30.', ja: '搭乗口はB12、搭乗開始は10時30分です。', ko: '탑승구는 B12, 탑승 시작은 10시 30분입니다.', zh: '您的登机口是B12，10:30开始登机。', fr: 'Votre porte est B12. L\'embarquement commence à 10h30.', de: 'Ihr Gate ist B12. Boarding beginnt um 10:30 Uhr.', es: 'Su puerta es la B12. El embarque empieza a las 10:30.' },
      { speaker: '我',  en: 'Thank you very much!', ja: 'どうもありがとうございました！', ko: '정말 감사합니다!', zh: '非常感谢！', fr: 'Merci beaucoup !', de: 'Vielen Dank!', es: '¡Muchas gracias!' }
    ]
  },
  office: {
    name: '💼 办公室日常',
    icon: '💼',
    bg: 'from-slate-100 to-indigo-100',
    steps: [
      { speaker: '同事', en: 'Good morning! How was your weekend?', ja: 'おはよう！週末はどうだった？', ko: '좋은 아침! 주말은 어땠어?', zh: '早上好！周末过得怎么样？', fr: 'Bonjour ! Comment s\'est passé ton week-end ?', de: 'Guten Morgen! Wie war dein Wochenende?', es: '¡Buenos días! ¿Qué tal el fin de semana?' },
      { speaker: '我',  en: 'Pretty good, I recharged a lot.', ja: '元気だったよ、ゆっくり休めた。', ko: '꽤 좋았어, 푹 쉬었거든.', zh: '挺好的，我好好休息了一下。', fr: 'Très bien, j\'ai beaucoup rechargé les batteries.', de: 'Sehr gut, ich habe mich richtig erholt.', es: 'Muy bien, he recuperado muchas energías.' },
      { speaker: '同事', en: 'Are you ready for the meeting at 10?', ja: '10時の会議の準備できた？', ko: '10시 회의 준비됐어?', zh: '10点的会议准备好了吗？', fr: 'Tu es prêt pour la réunion de 10h ?', de: 'Bist du bereit für das Meeting um 10 Uhr?', es: '¿Estás listo para la reunión de las 10?' },
      { speaker: '我',  en: 'Almost done. I will send the slides in a minute.', ja: 'あと少し。すぐスライド送るね。', ko: '거의 다 됐어. 슬라이드 바로 보낼게.', zh: '差不多了，我马上发幻灯片。', fr: 'Presque fini. J\'envoie les slides dans une minute.', de: 'Fast fertig. Ich schicke die Präsentation sofort.', es: 'Casi terminado. Envío las diapositivas en un minuto.' },
      { speaker: '同事', en: 'Great, see you in the meeting room.', ja: '了解、会議室で会おう。', ko: '좋아, 회의실에서 보자.', zh: '好的，会议室见。', fr: 'Parfait, on se voit dans la salle de réunion.', de: 'Super, bis gleich im Besprechungsraum.', es: 'Genial, nos vemos en la sala de reuniones.' }
    ]
  }
};

module.exports = { courses, SCENARIO_DIALOGS };