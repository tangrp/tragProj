class Model {
    static get(key) {
        let datas = {};
        switch(key) {
            case 'home': 
                datas = {
                    "imgNames":[
                      "首页1.png",
                      "首页2.png",
                      "首页3.png"
                    ],
                    "texts": [
                      "成都，简称“蓉”，四川省省会，副省级市，国家区域中心城市（西南），1993年被国务院确定为西南地区的科技、商贸、金融中心和交通及通信枢纽，综合实力西部第一。",
                      "成都位于中国华西地区东部，西南地区最大平原——成都平原腹地，境内地势平坦、河网纵横、物产丰富、水系发达，自古就有“天府之国”的美誉，是国家首批历史文化名城和中国最佳旅游城市。",
                      "成都有着4500余年的文明史，2600年左右的建城史。三国蜀汉、五代前后蜀及北宋李顺、明末张献忠大西等割据政权先后在此建都，唐朝和中华民国时曾作为临时首都而存在。早在北宋年间成都人联合发行了世界最早的纸币“交子”，官府在成都设立了世界最早的管理储蓄银行“交子务”。"
                    ]
                }  
            break;
            case 'recommend': 
                datas = [
                    {
                      "logoImage":"theplace_coffee_logo.png",
                      "detailImage":"theplace_coffee_detail.png",
                      "des":"the place\n\n毕业一年多的时间里\n为着梦想一直奋斗，坚持\n初始，在星巴克工作半年\n偶然一个机会\n与合伙人决定开一间小小咖啡馆\n就这样The Place渐渐的成形了\n\n不知不觉中，The Place已经试运营三个月了\n只希望趁这个小小的机会\n感谢这一路走来朋友们的支持\n给予The Place的认可及建议\n\n每次看见朋友们\n将The Place分享给身边的朋友\n带着爱的眼光欣赏着The Place里的每一样东西\n懂得我们的用心\n为我们的用心而感动时\n我们更感动\n\n同时我们也发现\n朋友们比我们更能发现The Place的美\n下面分享一些朋友们的分享给大家\n\n再次感谢\n每一位到访过The Place的朋友\n---- 小佳\n"
                    },
                    {
                      "logoImage":"starbucks_coffee_logo.png",
                      "detailImage":"starbucks_coffee_detail.png",
                      "des":"星巴克\n\n星巴克（Starbucks）是美国一家连锁咖啡公司的名称，1971年成立，为全球最大的咖啡连锁店，其总部坐落美国华盛顿州西雅图市。星巴克旗下零售产品包括30多款全球顶级的咖啡豆、手工制作的浓缩咖啡和多款咖啡冷热饮料、新鲜美味的各式糕点食品以及丰富多样的咖啡机、咖啡杯等商品。星巴克在全球范围内已经有近12,000间分店遍布北美、南美洲、欧洲、中东及太平洋区。2012年3月，星巴克在美国的两款甜点被曝用胭脂虫当着色剂，专家称或令哮喘者过敏。2012年4月，星巴克表示停用该着色剂。"
                    },
                    {
                      "logoImage":"man_coffee_logo.png",
                      "detailImage":"man_coffee_detail.png",
                      "des":"漫咖啡：\n\nMAAN COFFEE漫咖啡一直本着为人们提供最优雅的休息环境、高品质的咖啡甜点，培养最有素养的专业服务人员来开设高档次咖啡店。自第一家MAAN COFFEE漫咖啡店营业以来漫咖啡的品质以及服务...漫咖啡取自中文词汇“浪漫”中的“漫”字意指浪漫，同时在现代的快节奏生活中漫咖啡希望以自己的特色提供人们一个放松、悠闲的“慢”空间。漫咖啡以安逸自由、崇尚自然别具一格的设计理念，在自然的元素上添加了土耳其、东南亚风格的灯饰，搭配形式各异的座椅，让顾客体验咖啡文化新理念、让所有人享受浪漫和空闲时光。"
                    },
                    {
                      "logoImage":"goodwoods_coffee_logo.png",
                      "detailImage":"goodwoods_coffee.detail.png",
                      "des":"良木缘：\n\n良木缘自1998年创牌发展至今，在成都及北京、西安、重庆、厦门、武汉、拉萨等全国主要城市已有近70家直营店和特许加盟连锁店，成为目前最具实力的咖啡饮料连锁零售企业之一。 公司依据协业与分业的原则，以强势的品牌形象、浓郁的文化氛围、准确的市场定位、独特的运作模式全面启动咖啡连锁市场，以咖啡馆为载体，为顾客倾心营造亲切、温馨、文化、优雅的第三生活空间。"
                    },
                    {
                      "logoImage":"winshare_logo.png",
                      "detailImage":"winshare_detail.png",
                      "des":"轩客会\n\n新华文轩旗下子品牌“轩客会·格调书店”，以“都市文化客厅”为打造目标。“在浓厚的生活艺术氛围中，读者不但再无老式书店一座难求的烦恼，还可以在店内书吧品尝进口红茶、西式茶点，享受“慢读生活新体验”。新华文轩计划在3年内投入1.5亿元在全省范围内建立100家类似书店。"
                    }
                  ]
            break;
            case 'attractions': 
                datas = [
                    {
                      "logo":"宽窄巷子.jpg",
                      "title":"宽窄巷子",
                      "tel":"028-0000-0000",
                      "address":"成都市蜀都大道西端金河宾馆北面",
                      "imgs":[
                        "宽窄巷子1.jpg",
                        "宽窄巷子2.jpg",
                        "宽窄巷子3.jpg"
                      ],
                      "des":"“宽窄巷子”是成都市三大历史文化保护区之一，由宽巷子、窄巷子和井巷子三条平行排列的城市老式街道及其之间的四合院群落组成，于上世纪80年代列入《成都历史文化名城保护规划》。2008年6月，为期三年的宽窄巷子改造工程全面竣工。修葺一新的宽窄巷子由45个清末民初风格的四合院落、兼具艺术与文化底蕴的花园洋楼、新建的宅院式精品酒店等各具特色的建筑群落组成。"
                    },
                    {
                      "logo":"杜甫草堂.jpg",
                      "title":"杜甫草堂",
                      "tel":"028-0000-0001",
                      "address":"成都市青华路38号，成都市外西草堂路",
                      "imgs":[
                        "杜甫草堂1.jpg",
                        "杜甫草堂2.jpg",
                        "杜甫草堂3.jpg"
                      ],
                      "des":"成都杜甫草堂，是中国唐代大诗人杜甫流寓成都时的居所。公元759年冬天，杜甫为避 “安史之乱”，携家带口由陇右 (今甘肃省南部)入蜀辗转来到成都。次年春，在友人的帮助下，在成都西郊风景如画的浣花溪畔修建茅屋居住。第二年春天，茅屋落成，称 “成都草堂”。他的诗“万里桥西一草堂，百花潭水即沧浪”（《狂夫》）中提到的便是成都草堂。他在这里先后居住了将近四年，因曾被授“检校工部员外郎”之衔，而又被称做杜工部。765年，严武病逝，失去唯一依靠的杜甫只得携家带口告别成都，两年后经三峡流落荆、湘等地。"
                    },
                    {
                      "logo":"欢乐谷.jpg",
                      "title":"欢乐谷",
                      "tel":"028-0000-0003",
                      "address":"成都市金牛区西华大道16号",
                      "imgs":[
                        "欢乐谷1.jpg",
                        "欢乐谷2.jpg",
                        "欢乐谷3.jpg"
                      ],
                      "des":"成都欢乐谷主题公园（英文：Chengdu Happy Valley）是成都市文化产业重点项目和旅游产业重点项目。位于成都市金牛区西华大道16号，即北三环路一段与西华大道（交大路北延线）的交界处，距天府广场6.6公里，至成都市中心商务区（CBD）车行十余分钟，至成绵、成渝高速入口车行时间分别为15和20分钟。项目占地47万平方米。 园区由阳光港、欢乐时光、加勒比旋风、巴蜀迷情、飞行岛、魔幻城堡、飞跃地中海等七大主题区域组成，其中设置了130余项体验观赏项目，包括43项娱乐设备设施、58处人文生态景观、10项艺术表演、20项主题游戏和商业辅助性项目。"
                    },
                    {
                      "logo":"武侯祠.jpg",
                      "title":"武侯祠",
                      "tel":"028-0000-0004",
                      "address":"四川省成都市南门武侯祠大街",
                      "imgs":[
                        "武侯祠1.jpg",
                        "武侯祠2.jpg",
                        "武侯祠3.jpg"
                      ],
                      "des":"武侯祠（汉昭烈庙）位于成都市武侯区，肇始于公元223年修建刘备惠陵时，它是中国唯一的一座君臣合祀祠庙和最负盛名的诸葛亮、刘备及蜀汉英雄纪念地，也是全国影响最大的三国遗迹博物馆。1961年国务院公布为首批全国重点文物保护单位，2008年评选为首批国家一级博物馆。成都武侯祠现占地15万平方米，由三国历史遗迹区（文物区）、西区（三国文化体验区）以及锦里民俗区（锦里）三部分组成，享有“三国圣地”的美誉。"
                    },
                    {
                      "logo":"熊猫基地.jpg",
                      "title":"熊猫基地",
                      "tel":"028-0000-0005",
                      "address":"成都北郊斧头山",
                      "imgs":[
                        "熊猫基地1.jpg",
                        "熊猫基地2.jpg",
                        "熊猫基地3.jpg"
                      ],
                      "des":"成都大熊猫繁育研究基地，是一个专门从事濒危野生动物研究、繁育、保护教育和教育旅游的非营利性机构。基地位于成都北郊斧头山，距市区10公里，有一条宽阔的熊猫大道与市区相连，大熊猫博物馆内珍贵的资料、丰富的展品举世无双，是认识大熊猫、回归大自然、观光旅游、休闲娱乐的极佳场所。四周翠竹葱笼，绿树成荫，花香鸟语，空气清新，山野风光和人工景观巧妙融合。大熊猫、小熊猫、黑颈鹤等珍稀濒危动物在这里悠然自得地生息繁衍。馆舍内、草坪上，大熊猫或卧或坐，或饮或嬉，或进或出，各得其所，令人陶醉。"
                    },
                    {
                      "logo":"锦里.jpg",
                      "title":"锦里",
                      "tel":"028-0000-0006",
                      "address":"成都武侯祠大街中段",
                      "imgs":[
                        "锦里1.jpg",
                        "锦里2.jpg",
                        "锦里3.jpg"
                      ],
                      "des":"传说中锦里曾是西蜀历史上最古老、最具有商业气息的街道之一，早在秦汉、三国时期便闻名全国。现在，锦里占地30000余平方米，建筑面积14000余万平方米，街道全长550米，以明末清初川西民居作外衣，三国文化与成都民俗作内涵，集旅游购物、休闲娱乐为一体。"
                    }
                ]
            break;
            default: {}
        }
        return datas;
    }
}
export default Model;