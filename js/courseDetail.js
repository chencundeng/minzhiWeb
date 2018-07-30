new Vue({
    el:'#courseDetail',
    data:{
        names:[
            '古琴',
            '围棋',
            '书法',
            '国画',
            '国学',
            '茶艺'
        ],
        details: [
            {
                imgUrl:'images/guzhengBg.png',
                introCon:[
                    {
                        title:'古筝简介',
                        textCon:
                            "<p>古筝是我国独特的、重要的民族乐器之一。它的音色优美，音域宽广、演奏技巧丰富，具有相当的表现力，因此它深受广大人民群众的喜爱。古筝是一件伴随我国悠久文化、在这片肥沃的黄土地上土生土长的古老民族乐器。早在公元前5世纪至公元前3世纪的战国时代，就在当时的秦国（现今的陕西）一带广泛流传，所以又叫秦筝。计算起来，它已经有2500年以上的历史了。</p>"
                    },
                    {
                        title:'课程设置',
                        textCon:
                            "<p>业余（1-10级） 适合年龄（4-18岁）</p>"
                    },
                    {
                        title:'儿童学习古筝的好处',
                        textCon:
                            "<p class='fuTit'>一、注意力的发展 </p>"+
                            "<p>幼儿在演奏时，眼要看乐谱，耳要听音乐，手指要在古筝上准确的移动，手臂要支持手指运动，身体要配合手臂的运动。在整个的过程中，儿童必须集中注意力，否则演奏就会失败。</p>" +
                            "<p class='fuTit'>二、思维力的发展  </p>"+
                            "<p>　在古筝乐曲中，至少包含两个平行发展的部分，分别由左右手来弹奏，这两部分既有联系又互不干扰，幼儿必须先分清各部分的关系，在头脑中建立起立体的结构图才能很好地弹奏乐曲。</p>" +
                            "<p class='fuTit'>三、想象力的发展  </p>"+
                            "<p>无论技巧、旋律多么简单，一首乐曲的演奏不是机械的手指运动或单纯模仿教师的演奏，它应该是演奏者对作品的再创造，必须建立在理解、内化乐曲的基础上，也就是我们常说的“未曾有声先有情”。幼儿的“情”来自对音乐的创造想象，同样是旋律，每个孩子的个人理解不同，想象也是不一样的，为了准确地表达自己的感受，儿童必然会在日常生活中丰富自己的现象，发展了想象力。</p>" +
                            "<p class='fuTit'>四、意志力的发展 </p>"+
                            "<p>俗话说：“勤能补拙”。由于勤奋，即使基础稍差，也能提高能力出成果，而且勤奋的关键在于意志力。古筝学习中技能技巧的熟练，需要坚持不懈的练习，一个难点有可能要经过上千次的正确的重复练习才能掌握，因此，学习古筝有利于培养儿童有坚忍不拔的意志品质和持之以恒的良好学习习惯。</p>" +
                            "<p class='fuTit'>五、增强身体协调能力  </p>"+
                            "<p>平时无论干什么，我们都是只使用一只手，而在练习古筝当中，左右手一起运动，还要注意相互配合，同时开发了左右脑，也锻炼了协调能力。</p>"
                    },

                ]

            },

            {
                imgUrl:'images/weiqiBg.png',
                introCon:[
                    {
                        title:'何为围棋？',
                        textCon:
                            '<p>围棋，起源于中国，中国古代称为弈，可以说是棋类之鼻祖，围棋至今已有4000多年的历史。</p>' +
                            '<p>围棋使用方形格状棋盘及黑白二色圆形棋子进行对弈，棋盘上有纵横各19条直线将棋盘分成361个交叉点，棋子走在交叉点上，双方交替行棋，落子后不能移动，以围地多者为胜。围棋在很大程度上反应了中国传统思想文化的精髓，是在中国发展最广的艺术，是中国的国粹，被认为是世界上最复杂的游戏之一。</p>'

                    },
                    {
                        title:'课程设置',
                        textCon:
                            '<p>业余（1-25级） 适合年龄（4-18岁）</p>'

                    },
                    {
                        title:'儿童学习围棋好处',
                        textCon:
                            '<p>幼儿时期孩子智力发展迅速，思维活跃，此时若进行智力锻炼和培养，对日后大有所助。而围棋就是一个很好的脑力锻炼方法，对弈的过程不仅可以锻炼孩子的集中力、思考力、创造力、计算力、记忆力等，还可以培养孩子的协调能力和独自解决问题的能力。</p>' +
                            '<p>1、学围棋的孩子更聪明.</p>' +
                            '<p>2、学围棋的孩子有修养.</p>' +
                            '<p>3、学围棋的孩子善交友.</p>' +
                            '<p>4、学围棋的孩子明大局.</p>' +
                            '<p>5、学围棋的孩子意志坚强.</p>'

                    },
                    {
                        title:'儿童如何学围棋',
                        textCon:
                            '<p> 想要培养出一个“思维型”的宝宝，不妨让他学学下围棋！围棋可以提高孩子的抽象思维能力和全局思考问题的习惯，可以培养孩子的耐心和细心，还有临危不乱的能力。那么，儿童如何学围棋？下面一起来了解下吧。</p>' +
                            '<p class="fuTit">一、培养孩子对围棋的兴趣</p>' +
                            '<p> 孩子在4周岁至7周岁之间极其好动，难以长时间坐下来去思考每一步棋的走法，甚至坐下来没几分钟，心里就想去玩其它方面的东西。这时，老师、父母不用着急，可用引导的方法去引导孩子对围棋的兴趣。</p>' +
                            '<p class="fuTit"> 二、父母应成为孩子学围棋的启蒙老师</p>' +
                            '<p> 大部分父母可能都没有系统地下过围棋，但是，父母可以与孩子一同到围棋学校去。父母的理解能力要比孩子强，回来后，可与孩子练习围棋中的基本定式与棋谱，让孩子感觉围棋、认识围棋、锻炼智力，去当好孩子的启蒙老师。</p>' +
                            '<p class="fuTit"> 三、让孩子在学围棋中找到快乐 </p>' +
                            '<p> 对于孩子学围棋，不但要让孩子在快乐地学围棋，而且要孩子在学围棋中找到下围棋的快乐，不能让孩子感到学围棋是一种负担，这一点非常重要。学棋的过程有时是枯燥无味的，长久以后，有的孩子就会坚持不下来。因此只有在下围棋中找到了快乐，孩子在围棋中才肯去思考，去坚持。</p>'

                    }
                ]

            },
            {
                imgUrl:'images/shufaBg.png',
                introCon:[
                    {
                        title:'何为书法？',
                        textCon:
                            '<p>书法是中国特有的一种传统艺术。中国汉字是劳动人民创造的，开始以图画记事，经过几千年的发展，演变成了当今的文字，又因祖先发明了用毛笔书写，便产生了书法，古往今来，均以毛笔书写汉字为主，至于其他书写形式，如硬笔、指书等，其书写规律与毛笔字相比，并非迥然不同，而是基本相通。康有为在《广艺舟双楫》中说：“唐言结构，宋尚意趣”，由此可知唐代书法的法度追求最高、最严谨，唐代书法成就也是书法史上最顶峰的。</p>' +
                            '<p>狭义而言，书法是指用毛笔书写汉字的方法和规律。包括执笔、运笔、点画、结构、布局（分布、行次、章法）等内容。例如，执笔指实掌虚，五指齐力；运笔中锋铺毫；点画意到笔随，润峭相同；结构以字立形，相安呼应；分布错综复杂，疏密得宜，虚实相生，全章贯气；款识字古款今，字大款小，宁高勿低等。</p>'

                    },
                    {
                        title:'课程设置',
                        textCon:
                            '<p>初级/中级/高级 适合年龄（4-18岁）</p>'

                    },
                    {
                        title:'儿童学习书法的好处',
                        textCon:
                            '<p> 我们中国书法历史悠久，源远流长，它既是一项独特的艺术，又是一项综合性艺术，通过学习书法，会使孩子从小产生民族自豪感和自信心。</p>'+
                            '<p class="fuTit">一、静心养气，有益于身体健康</p>' +
                            '<p>孩子在学习书法的过程中，主要是动手，尤其是训练手指、手腕和手臂的动作，达到协调性和灵活性，这些动作靠大脑指挥，经常有规律的训练，有益于大脑的生长发育。书写时，可以调理经络，匀畅呼吸，最后达到心手相应，以于身体健康。</p>' +
                            '<p class="fuTit">二、培养良好的道德情操</p>' +
                            '<p> 书法是中华民族的国粹，从最初文字的形成，到书法艺术的日臻完善，有着源远流长的发展史。在这悠久的语言文字长河中，各朝各代均出现了许多书体不同、风格迥异、品学兼优的大书法家，无论是他们那种勤奋好学的精神，还是他们做人的准则，都是我们学习的楷模。</p>' +
                            '<p class="fuTit"> 三、丰富学识，培养良好的学习习惯 </p>' +
                            '<p> 书法有严格的书写法则，孩子在学习识字的同时又学习书法，既可以巩固所学知识，又能促进文字书写水平的提高，把字写得更美观而又合乎规范。</p>' +
                            '<p class="fuTit"> 四、陶冶性情，锻炼意志</p>' +
                            '<p> 书法艺术，并非一蹴而就之事，古人云，宝剑锋从磨砺出，梅花香自苦寒来；古人学问无遗力，少壮工夫老始成；三更灯火五更鸡，正是男儿读书时。</p>' +
                            '<p class="fuTit">五、发展个性，培养创新精神</p>' +
                            '<p> 在学习欣赏别人、接纳别人心目中的美的同时，人们可以根据自己的喜好，取长补短来滋长自己心中的美，取得精神上的愉悦。同时，书法推崇创新，追求个性。</p>' +
                            '<p class="fuTit"> 六、提高审美素质</p>' +
                            '<p>人们在欣赏书法的同时，对于书法的美，或沉雄、豪劲，或清丽、和婉，或端庄、厚重，或高逸、幽雅，无形中受到熏陶，感情为所渗透，人格为所感染，心绪为所改变，嗜好为之提高，渐渐的将审美水平提高。</p>'

                    }
                ]

            },
            {
                imgUrl:'images/guohuaBg.png',
                introCon:[
                    {
                        title:'国画',
                        textCon:
                            '<p>国画，又称“中国画”，它是用毛笔、墨和中国画颜料在特制地宣纸或绢上作画，题材主要有人物、山水、花鸟，技法可分工笔和写意两种，富于传统特色。</p>' +
                            '<p>中国画在思想内容和艺术创作上，反映了中华民族的社会意识和审美情趣，体现了中国人对自然、社会及与之相关联的政治、哲学、宗教、道德、文艺等方面的认识。中国画强调“外师造化，中得心源”，要求“意存笔先，画尽意在”，强调融化物我，创制意境，达到以形写神，形神兼备，气韵生动。</p>'

                    },
                    {
                        title:'课程设置',
                        textCon:
                            '<p>初级/中级/高级 适合年龄（4-18岁）</p>'

                    },
                    {
                        title:'儿童学习国画的好处',
                        textCon:
                            '<p class="fuTit"> 一、提高兴趣爱好和想象力</p>' +
                            '<p>让儿童切身感受艺术来源于生活又高于生活的创作内涵，通过系统学习国画知识，对开发智力、发展个性、培养想象力，促进儿童全面发展十分有益。</p>' +
                            '<p class="fuTit">二、提高脑、眼、手的综合协调能力</p>' +
                            '<p>儿童在作画过程中根据所画内容的不同，需要用不同用途的毛笔和12种颜色，作画时根据画面的构图情况选用不同的毛笔，及调制颜色时根据绘画的内容自己动手调制。</p>' +
                            '<p class="fuTit">三、孩子的身心修养</p>' +
                            '<p>国画讲究的是意境，讲究内涵，讲究真，善，美的表现。培养气质，陶冶情操。</p>' +
                            '<p class="fuTit">四、培养孩子的判断能力</p>' +
                            '<p>培养孩子“胆大细心、求真求实”的思维能力和心理素质。</p>' +
                            '<p class="fuTit">五、锻炼思维能力</p>' +
                            '<p>国画形象是表现性的形象，是个人情感的抒发，是经过概括了的提炼的形象，是现实的升华和内心的表达。因此，学习国画会让孩子学会一种更高的艺术的思维方式。</p>' +
                            '<p class="fuTit">六、培养绘画艺术</p>' +
                            '<p>国画是我国传统绘画艺术，体现着博大精深的中华精神。今天，作为新时代下的接班人理应把这一文化瑰宝得以继承并发扬光大。</p>' +
                            '<p class="fuTit">七、养成持之以恒的处事态度</p>' +
                            '<p>国画欣赏性很强，工序复杂，绘画技术要求严格，完成一幅简单的儿童国画作品，从起稿—定稿—勾线—晕染—到绘画结束要用几个小时甚至十几个小时，能培养儿童养成耐心细致、持之以恒的做事态度。</p>'

                    }
                ]

            },
            {
                imgUrl:'images/guoxueBg.png',
                introCon:[
                    {
                        title:'何为国学？',
                        textCon:
                            '<p>“国学”又称“汉学”或“中国学”，泛指传统的中华文化与学术。国学包括中国古代的哲学、史学、宗教学、文学、礼俗学、考据学、伦理学以及中医学、农学、术数、地理、政治、经济及书画、音乐、建筑等诸多方面。</p>' +
                            '<p>国学是以先秦的经典及诸子学说为根基，涵盖了两汉经学、魏晋玄学、宋明理学和同时期的汉赋、六朝骈文、唐宋诗词、元曲与明清小说并历代史学等一套特有而完整的文化、学术体系。</p>'

                    },
                    {
                        title:'课程设置',
                        textCon:
                            '<p>1级—6级 适合年龄（4-18岁）</p>'

                    },
                    {
                        title:'儿童学习国学的好处',
                        textCon:
                            '<p class="fuTit">一、塑造人格，修身养性 </p>' +
                            '<p>经常诵读经典的孩子，会养成孝顺父母，懂礼貌，知礼仪，有教养的良好习惯。孩子的生活品位和人生内涵会从更高的起点上迈步，从而不仅身心健康，而且会使成功的几率明显增加。</p>' +
                            '<p class="fuTit">二、凝神聚力，提高效率</p>' +
                            '<p> 经常进行诵读经典的训练，会逐渐形成较高的专注力、内心宁静安详的良好读书习惯，《大学》中说“知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得”讲就是这个道理，从而使学习的效率和质量明显提高。</p>' +
                            '<p class="fuTit">三、增加兴趣，增强能力</p>' +
                            '<p> 背熟《弟子规》、《三字经》、《千字文》、《易经》、《论语》、《大学》、《孝经》、《老子》、《中庸》、《孟子》、《文学启蒙》等经典后，孩子的识字量将达到5000字左右。此后，孩子作文、发言时就会出口成章、引经据典，很有深度。读懂经典，孩子会形成博览群书的习惯许多诵读经典的孩子，在6岁-10岁时，能主动找书读。从而视野开阔，智慧流溢，比不诵读经典的孩子的智商高出许多倍。</p>' +
                            '<p class="fuTit">四、锻炼思维，事半功倍</p>' +
                            '<p>通过诵读经典，孩子的形象思维(右脑)获得全面的锻炼，从而为学习数学、物理、外语、化学等课程奠定坚实的基础。通过诵读经典，可使头脑里和躯体内的气血很好的畅通，健脑效果明显，大脑支配手指的能力得到了强化，从而在才艺、体育、劳动等技能的学习上会事半功倍。</p>' +
                            '<p class="fuTit">五、养成习惯，增进感情</p>' +
                            '<p>读经本身就是一个入静的过程，天天坚持读经，慢慢培养孩子学习的习惯，而良好的学习习惯的养成，对孩子一生的成长，将会具有深远的影响。</p>'

                    }
                ]

            },
            {
                imgUrl:'images/chayiBg.png',
                introCon:[
                    {
                        title:'何为茶艺？',
                        textCon:
                            '<p>茶艺是一种文化。茶艺在中国优秀文化的基础上又广泛吸收和借鉴了其它艺术形式，并扩展到文学、艺术等领域，形成了具有浓厚民族特色的中国茶文化。是包括茶叶品评技法和艺术操作手段的鉴赏以及品茗美好环境的领略等整个品茶过程的美好意境，其过程体现形式和精神的相互统一，是饮茶活动过程中形成的文化现象。茶艺包括：选茗、择水、烹茶技术、茶具艺术、环境的选择创造等一系列内容。茶艺背景是衬托主题思想的重要手段，它渲染茶性清纯、幽雅、质朴的气质，增强艺术感染力。不同的风格的茶艺有不同的背景要求，只有选对了背景才能更好地领会茶的滋味。</p>'

                    },
                    {
                        title:'学习茶艺的好处',
                        textCon:
                            '<p class="fuTit">1、静心神</p>' +
                            '<p>泡茶、喝茶讲究安静的环境，常处于这种环境中会给人一种心旷神怡的感觉，有助于使人静心神、修身性，感觉自身沉浸在文化当中，浮躁的心态逐渐变得平和、安静。</p>' +
                            '<p class="fuTit">2、重细节</p>' +
                            '<p>冲泡茶的过程是极为讲究的，而且非常注重当中的细节。在选择茶具、环境的格调、茶叶的多少、水温的高低、时间的把控等等这些环节上都需要小心操作、精心调理。在学习茶艺过程，可以慢慢培养一个人的细心、耐性。</p>' +
                            '<p class="fuTit">3、懂礼节</p>' +
                            '<p>在社会上，人与人之间的交流都要做到相互尊重，做好相互之间的礼节。泡茶也不例外，相互之间的礼节是不可缺少的，学习茶艺，经常泡茶容易培养成一种良好的礼节习惯，待人处事更懂礼仪。</p>' +
                            '<p class="fuTit">4、共和谐</p>' +
                            '<p>学茶艺、懂茶品的人，通常都不会直接评价一款茶的好坏，而是从客观上讲述茶叶的特点。如待人处事一般，不要轻易去评价别人。接触茶艺时间久了，就会养成言语谨慎的习惯，做事学会多分析、少评论，懂得更好地与人和谐相处。</p>' +
                            '<p class="fuTit">5、宜取舍</p>' +
                            '<p>茶道讲究天人合一、归于自然，学茶艺要懂得尊重其自然规律，循序渐进，冲泡过程不能急于求成。长期泡茶，就会懂得，需要综合自身的素养、能力，来做相对对自己合适的事。</p>'

                    }
                ]

            },
        ],
        num: 0
    },
    methods: {
        tab(index) {
            console.log(index)
            this.num = index;
        }
    }
})