export interface RowInfo {
  key: string;
  image: string;
}

export interface ColInfo {
  key: string;
  image: string;
}

export interface CharacterInfo {
  name: string;
  rank: number;
  element: string;
  weapon: string;
  image: string;
}

export interface CharacterTableData {
  version: string;
  rows: RowInfo[];
  cols: ColInfo[];
  characters: CharacterInfo[];
}

const CHARACTERS: CharacterTableData = {
  version: '7.1',
  rows: [
    {
      key: '风',
      image: 'elements/anemo.png',
    },
    {
      key: '岩',
      image: 'elements/geo.png',
    },
    {
      key: '雷',
      image: 'elements/electro.png',
    },
    {
      key: '草',
      image: 'elements/dendro.png',
    },
    {
      key: '水',
      image: 'elements/hydro.png',
    },
    {
      key: '火',
      image: 'elements/pyro.png',
    },
    {
      key: '冰',
      image: 'elements/cryo.png',
    },
  ],
  cols: [
    {
      key: '单手剑',
      image: 'weapons/sword.webp',
    },
    {
      key: '双手剑',
      image: 'weapons/claymore.webp',
    },
    {
      key: '弓',
      image: 'weapons/bow.webp',
    },
    {
      key: '长柄武器',
      image: 'weapons/polearm.webp',
    },
    {
      key: '法器',
      image: 'weapons/catalyst.webp',
    },
  ],
  characters: [
    // 1.0
    { name: '琴', rank: 5, element: '风', weapon: '单手剑', image: 'characters/琴.avif' },
    {
      name: '迪卢克',
      rank: 5,
      element: '火',
      weapon: '双手剑',
      image: 'characters/迪卢克.avif',
    },
    {
      name: '七七',
      rank: 5,
      element: '冰',
      weapon: '单手剑',
      image: 'characters/七七.avif',
    },
    { name: '莫娜', rank: 5, element: '水', weapon: '法器', image: 'characters/莫娜.avif' },
    {
      name: '刻晴',
      rank: 5,
      element: '雷',
      weapon: '单手剑',
      image: 'characters/刻晴.avif',
    },
    { name: '安柏', rank: 4, element: '火', weapon: '弓', image: 'characters/安柏.avif' },
    {
      name: '凯亚',
      rank: 4,
      element: '冰',
      weapon: '单手剑',
      image: 'characters/凯亚.avif',
    },
    { name: '丽莎', rank: 4, element: '雷', weapon: '法器', image: 'characters/丽莎.avif' },
    {
      name: '芭芭拉',
      rank: 4,
      element: '水',
      weapon: '法器',
      image: 'characters/芭芭拉.avif',
    },
    {
      name: '雷泽',
      rank: 4,
      element: '雷',
      weapon: '双手剑',
      image: 'characters/雷泽.avif',
    },
    {
      name: '香菱',
      rank: 4,
      element: '火',
      weapon: '长柄武器',
      image: 'characters/香菱.avif',
    },
    {
      name: '北斗',
      rank: 4,
      element: '雷',
      weapon: '双手剑',
      image: 'characters/北斗.avif',
    },
    {
      name: '行秋',
      rank: 4,
      element: '水',
      weapon: '单手剑',
      image: 'characters/行秋.avif',
    },
    { name: '凝光', rank: 4, element: '岩', weapon: '法器', image: 'characters/凝光.avif' },
    {
      name: '菲谢尔',
      rank: 4,
      element: '雷',
      weapon: '弓',
      image: 'characters/菲谢尔.avif',
    },
    {
      name: '班尼特',
      rank: 4,
      element: '火',
      weapon: '单手剑',
      image: 'characters/班尼特.avif',
    },
    {
      name: '诺艾尔',
      rank: 4,
      element: '岩',
      weapon: '双手剑',
      image: 'characters/诺艾尔.avif',
    },
    {
      name: '重云',
      rank: 4,
      element: '冰',
      weapon: '双手剑',
      image: 'characters/重云.avif',
    },
    { name: '砂糖', rank: 4, element: '风', weapon: '法器', image: 'characters/砂糖.avif' },
    { name: '温迪', rank: 5, element: '风', weapon: '弓', image: 'characters/温迪.avif' },
    { name: '可莉', rank: 5, element: '火', weapon: '法器', image: 'characters/可莉.avif' },

    //  1.1
    {
      name: '达达利亚',
      rank: 5,
      element: '水',
      weapon: '弓',
      image: 'characters/达达利亚.avif',
    },
    {
      name: '迪奥娜',
      rank: 4,
      element: '冰',
      weapon: '弓',
      image: 'characters/迪奥娜.avif',
    },
    {
      name: '钟离',
      rank: 5,
      element: '岩',
      weapon: '长柄武器',
      image: 'characters/钟离.avif',
    },
    {
      name: '辛焱',
      rank: 4,
      element: '火',
      weapon: '双手剑',
      image: 'characters/辛焱.avif',
    },

    //  1.2
    {
      name: '阿贝多',
      rank: 5,
      element: '岩',
      weapon: '单手剑',
      image: 'characters/阿贝多.avif',
    },
    { name: '甘雨', rank: 5, element: '冰', weapon: '弓', image: 'characters/甘雨.avif' },

    //  1.3
    { name: '魈', rank: 5, element: '风', weapon: '长柄武器', image: 'characters/魈.avif' },
    {
      name: '胡桃',
      rank: 5,
      element: '火',
      weapon: '长柄武器',
      image: 'characters/胡桃.avif',
    },

    //  1.4
    {
      name: '罗莎莉亚',
      rank: 4,
      element: '冰',
      weapon: '长柄武器',
      image: 'characters/罗莎莉亚.avif',
    },

    //  1.5
    { name: '烟绯', rank: 4, element: '火', weapon: '法器', image: 'characters/烟绯.avif' },
    {
      name: '优菈',
      rank: 5,
      element: '冰',
      weapon: '双手剑',
      image: 'characters/优菈.avif',
    },

    //  1.6
    {
      name: '枫原万叶',
      rank: 5,
      element: '风',
      weapon: '单手剑',
      image: 'characters/枫原万叶.avif',
    },

    //  2.0
    {
      name: '神里绫华',
      rank: 5,
      element: '冰',
      weapon: '单手剑',
      image: 'characters/神里绫华.avif',
    },
    { name: '宵宫', rank: 5, element: '火', weapon: '弓', image: 'characters/宵宫.avif' },
    {
      name: '早柚',
      rank: 4,
      element: '风',
      weapon: '双手剑',
      image: 'characters/早柚.avif',
    },

    //  2.1
    {
      name: '雷电将军',
      rank: 5,
      element: '雷',
      weapon: '长柄武器',
      image: 'characters/雷电将军.avif',
    },
    {
      name: '九条裟罗',
      rank: 4,
      element: '雷',
      weapon: '弓',
      image: 'characters/九条裟罗.avif',
    },
    {
      name: '珊瑚宫心海',
      rank: 5,
      element: '水',
      weapon: '法器',
      image: 'characters/珊瑚宫心海.avif',
    },

    //  2.2
    {
      name: '托马',
      rank: 4,
      element: '火',
      weapon: '长柄武器',
      image: 'characters/托马.avif',
    },

    //  2.3
    {
      name: '荒泷一斗',
      rank: 5,
      element: '岩',
      weapon: '双手剑',
      image: 'characters/荒泷一斗.avif',
    },
    { name: '五郎', rank: 4, element: '岩', weapon: '弓', image: 'characters/五郎.avif' },

    //  2.4
    {
      name: '申鹤',
      rank: 5,
      element: '冰',
      weapon: '长柄武器',
      image: 'characters/申鹤.avif',
    },
    {
      name: '云堇',
      rank: 4,
      element: '岩',
      weapon: '长柄武器',
      image: 'characters/云堇.avif',
    },

    //  2.5
    {
      name: '八重神子',
      rank: 5,
      element: '雷',
      weapon: '法器',
      image: 'characters/八重神子.avif',
    },

    //  2.6
    {
      name: '神里绫人',
      rank: 5,
      element: '水',
      weapon: '单手剑',
      image: 'characters/神里绫人.avif',
    },

    //  2.7
    { name: '夜兰', rank: 5, element: '水', weapon: '弓', image: 'characters/夜兰.avif' },
    {
      name: '久岐忍',
      rank: 4,
      element: '雷',
      weapon: '单手剑',
      image: 'characters/久岐忍.avif',
    },

    //  2.8
    {
      name: '鹿野院平藏',
      rank: 4,
      element: '风',
      weapon: '法器',
      image: 'characters/鹿野院平藏.avif',
    },

    //  3.0
    {
      name: '提纳里',
      rank: 5,
      element: '草',
      weapon: '弓',
      image: 'characters/提纳里.avif',
    },
    { name: '柯莱', rank: 4, element: '草', weapon: '弓', image: 'characters/柯莱.avif' },
    {
      name: '多莉',
      rank: 4,
      element: '雷',
      weapon: '双手剑',
      image: 'characters/多莉.avif',
    },

    //  3.1
    {
      name: '赛诺',
      rank: 5,
      element: '雷',
      weapon: '长柄武器',
      image: 'characters/赛诺.avif',
    },
    {
      name: '坎蒂丝',
      rank: 4,
      element: '水',
      weapon: '长柄武器',
      image: 'characters/坎蒂丝.avif',
    },
    {
      name: '妮露',
      rank: 5,
      element: '水',
      weapon: '单手剑',
      image: 'characters/妮露.avif',
    },

    //  3.2
    {
      name: '纳西妲',
      rank: 5,
      element: '草',
      weapon: '法器',
      image: 'characters/纳西妲.avif',
    },
    {
      name: '莱依拉',
      rank: 4,
      element: '冰',
      weapon: '单手剑',
      image: 'characters/莱依拉.avif',
    },

    //  3.3
    {
      name: '流浪者',
      rank: 5,
      element: '风',
      weapon: '法器',
      image: 'characters/流浪者.avif',
    },
    {
      name: '珐露珊',
      rank: 4,
      element: '风',
      weapon: '弓',
      image: 'characters/珐露珊.avif',
    },

    //  3.4
    {
      name: '艾尔海森',
      rank: 5,
      element: '草',
      weapon: '单手剑',
      image: 'characters/艾尔海森.avif',
    },
    {
      name: '瑶瑶',
      rank: 4,
      element: '草',
      weapon: '长柄武器',
      image: 'characters/瑶瑶.avif',
    },

    //  3.5
    {
      name: '迪希雅',
      rank: 5,
      element: '火',
      weapon: '双手剑',
      image: 'characters/迪希雅.avif',
    },
    {
      name: '米卡',
      rank: 4,
      element: '冰',
      weapon: '长柄武器',
      image: 'characters/米卡.avif',
    },

    //  3.6
    { name: '白术', rank: 5, element: '草', weapon: '法器', image: 'characters/白术.avif' },
    {
      name: '卡维',
      rank: 4,
      element: '草',
      weapon: '双手剑',
      image: 'characters/卡维.avif',
    },

    //  3.7
    {
      name: '绮良良',
      rank: 4,
      element: '草',
      weapon: '单手剑',
      image: 'characters/绮良良.avif',
    },

    //  4.0
    { name: '林尼', rank: 5, element: '火', weapon: '弓', image: 'characters/林尼.avif' },
    {
      name: '琳妮特',
      rank: 4,
      element: '风',
      weapon: '单手剑',
      image: 'characters/琳妮特.avif',
    },
    {
      name: '菲米尼',
      rank: 4,
      element: '冰',
      weapon: '双手剑',
      image: 'characters/菲米尼.avif',
    },

    //  4.1
    {
      name: '那维莱特',
      rank: 5,
      element: '水',
      weapon: '法器',
      image: 'characters/那维莱特.avif',
    },
    {
      name: '莱欧斯利',
      rank: 5,
      element: '冰',
      weapon: '法器',
      image: 'characters/莱欧斯利.avif',
    },

    //  4.2
    {
      name: '芙宁娜',
      rank: 5,
      element: '水',
      weapon: '单手剑',
      image: 'characters/芙宁娜.avif',
    },
    {
      name: '夏洛蒂',
      rank: 4,
      element: '冰',
      weapon: '法器',
      image: 'characters/夏洛蒂.avif',
    },

    //  4.3
    {
      name: '娜维娅',
      rank: 5,
      element: '岩',
      weapon: '双手剑',
      image: 'characters/娜维娅.avif',
    },
    {
      name: '夏沃蕾',
      rank: 4,
      element: '火',
      weapon: '长柄武器',
      image: 'characters/夏沃蕾.avif',
    },

    //  4.4
    { name: '闲云', rank: 5, element: '风', weapon: '法器', image: 'characters/闲云.avif' },
    {
      name: '嘉明',
      rank: 4,
      element: '火',
      weapon: '双手剑',
      image: 'characters/嘉明.avif',
    },

    //  4.5
    {
      name: '千织',
      rank: 5,
      element: '岩',
      weapon: '单手剑',
      image: 'characters/千织.avif',
    },

    //  4.6
    {
      name: '阿蕾奇诺',
      rank: 5,
      element: '火',
      weapon: '长柄武器',
      image: 'characters/阿蕾奇诺.avif',
    },

    //  4.7
    {
      name: '克洛琳德',
      rank: 5,
      element: '雷',
      weapon: '单手剑',
      image: 'characters/克洛琳德.avif',
    },
    {
      name: '赛索斯',
      rank: 4,
      element: '雷',
      weapon: '弓',
      image: 'characters/赛索斯.avif',
    },
    {
      name: '希格雯',
      rank: 5,
      element: '水',
      weapon: '弓',
      image: 'characters/希格雯.avif',
    },

    //  4.8
    {
      name: '艾梅莉埃',
      rank: 5,
      element: '草',
      weapon: '长柄武器',
      image: 'characters/艾梅莉埃.avif',
    },

    //  5.0
    {
      name: '玛拉妮',
      rank: 5,
      element: '水',
      weapon: '法器',
      image: 'characters/玛拉妮.avif',
    },
    {
      name: '卡齐娜',
      rank: 4,
      element: '岩',
      weapon: '长柄武器',
      image: 'characters/卡齐娜.avif',
    },
    {
      name: '基尼奇',
      rank: 5,
      element: '草',
      weapon: '双手剑',
      image: 'characters/基尼奇.avif',
    },

    //  5.1
    {
      name: '希诺宁',
      rank: 5,
      element: '岩',
      weapon: '单手剑',
      image: 'characters/希诺宁.avif',
    },

    //  5.2
    {
      name: '恰斯卡',
      rank: 5,
      element: '风',
      weapon: '弓',
      image: 'characters/恰斯卡.avif',
    },
    {
      name: '欧洛伦',
      rank: 4,
      element: '雷',
      weapon: '弓',
      image: 'characters/欧洛伦.avif',
    },

    //  5.3
    {
      name: '玛薇卡',
      rank: 5,
      element: '火',
      weapon: '双手剑',
      image: 'characters/玛薇卡.avif',
    },
    {
      name: '茜特菈莉',
      rank: 5,
      element: '冰',
      weapon: '法器',
      image: 'characters/茜特菈莉.avif',
    },
    { name: '蓝砚', rank: 4, element: '风', weapon: '法器', image: 'characters/蓝砚.avif' },

    //  5.4
    {
      name: '梦见月瑞希',
      rank: 5,
      element: '风',
      weapon: '法器',
      image: 'characters/梦见月瑞希.avif',
    },

    //  5.5
    {
      name: '瓦雷莎',
      rank: 5,
      element: '雷',
      weapon: '法器',
      image: 'characters/瓦雷莎.avif',
    },
    {
      name: '伊安珊',
      rank: 4,
      element: '雷',
      weapon: '长柄武器',
      image: 'characters/伊安珊.avif',
    },

    //  5.6
    {
      name: '爱可菲',
      rank: 5,
      element: '冰',
      weapon: '长柄武器',
      image: 'characters/爱可菲.avif',
    },
    { name: '伊法', rank: 4, element: '风', weapon: '法器', image: 'characters/伊法.avif' },

    //  5.7
    {
      name: '丝柯克',
      rank: 5,
      element: '冰',
      weapon: '单手剑',
      image: 'characters/丝柯克.avif',
    },
    {
      name: '塔利雅',
      rank: 4,
      element: '水',
      weapon: '单手剑',
      image: 'characters/塔利雅.avif',
    },

    //  5.8
    {
      name: '伊涅芙',
      rank: 5,
      element: '雷',
      weapon: '长柄武器',
      image: 'characters/伊涅芙.avif',
    },

    //  月之一（6.0）
    {
      name: '菈乌玛',
      rank: 5,
      element: '草',
      weapon: '法器',
      image: 'characters/菈乌玛.avif',
    },
    {
      name: '菲林斯',
      rank: 5,
      element: '雷',
      weapon: '长柄武器',
      image: 'characters/菲林斯.avif',
    },
    {
      name: '爱诺',
      rank: 4,
      element: '水',
      weapon: '双手剑',
      image: 'characters/爱诺.avif',
    },

    //  月之二（6.1）
    {
      name: '奈芙尔',
      rank: 5,
      element: '草',
      weapon: '法器',
      image: 'characters/奈芙尔.avif',
    },

    //  月之三（6.2）
    {
      name: '杜林',
      rank: 5,
      element: '火',
      weapon: '单手剑',
      image: 'characters/杜林.avif',
    },
    {
      name: '雅珂达',
      rank: 4,
      element: '风',
      weapon: '弓',
      image: 'characters/雅珂达.avif',
    },

    //  月之四（6.3）
    {
      name: '哥伦比娅',
      rank: 5,
      element: '水',
      weapon: '法器',
      image: 'characters/哥伦比娅.avif',
    },
    {
      name: '兹白',
      rank: 5,
      element: '岩',
      weapon: '单手剑',
      image: 'characters/兹白.avif',
    },
    {
      name: '叶洛亚',
      rank: 4,
      element: '岩',
      weapon: '长柄武器',
      image: 'characters/叶洛亚.avif',
    },

    //  月之五（6.4）
    {
      name: '法尔伽',
      rank: 5,
      element: '风',
      weapon: '双手剑',
      image: 'characters/法尔伽.avif',
    },

    //  月之六（6.5）
    {
      name: '莉奈娅',
      rank: 5,
      element: '岩',
      weapon: '弓',
      image: 'characters/莉奈娅.avif',
    },

    //  月之七（6.6）
    { name: '尼可', rank: 5, element: '火', weapon: '法器', image: 'characters/尼可.avif' },
    {
      name: '洛恩',
      rank: 5,
      element: '冰',
      weapon: '长柄武器',
      image: 'characters/洛恩.avif',
    },

    //  月之八（6.7）
    {
      name: '桑多涅',
      rank: 5,
      element: '冰',
      weapon: '双手剑',
      image: 'characters/桑多涅.avif',
    },

    //  7.0
    {
      name: '奥黛塔',
      rank: 5,
      element: '冰',
      weapon: '单手剑',
      image: 'characters/奥黛塔.avif',
    },
    {
      name: '阿罗夏',
      rank: 4,
      element: '冰',
      weapon: '长柄武器',
      image: 'characters/阿罗夏.avif',
    },

    //  7.1
    {
      name: '薇斯纳',
      rank: 5,
      element: '风',
      weapon: '单手剑',
      image: 'characters/奥黛塔.avif',
    },
    {
      name: '沃雅妮莎',
      rank: 5,
      element: '水',
      weapon: '法器',
      image: 'characters/沃雅妮莎.avif',
    },
  ],
};

export default CHARACTERS;
