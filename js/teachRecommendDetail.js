var vm =new Vue({
    el: '#teachRecommendDetail',
    data: {
        names: ['董骐','冯志刚','卢天娥','吴亚男','吴婧婧','汪梦圆','张汝杰','庄忠华','张源'],
        details: [
            {   name: '董骐',
                post:'围棋老师',
                remarks:'学无止境',
                info:['围棋业余5段',
                    '曾师从朱菊菲五段',
                    '围棋教学六年经验',
                    '杭州“菊花杯”第二名',
                    '代表杭州业余围棋队参加浙江省锦标赛'
                ],
                imgUrl:'images/dongqiTeacher.jpg'

            },
            {
                name: '冯志刚' ,
                post:'书法老师',
                remarks:'古之学者必严其师,师严然后道尊',
                info:['河南大学汉语言文学专业',
                    '自幼喜爱书法艺术',
                    '擅长楷，隶，篆等书体',
                    '长期从事书法教育工作',
                    '为中国美院书法博士郭建党"晋堂书法工作室"成员'
                ],
                imgUrl:'images/fengzhigangTeacher.jpg'
            },
            {
                name: '卢天娥',
                post:'书法老师',
                remarks:'积一时之跬步,臻千里之遥程',
                info:['浙江师范大学汉语言文学专业',
                    '自幼学习书法',
                    '从颜真卿多宝塔入手 打下坚实的楷书基础',
                    '先后受业于陈向民、醒醉先生',
                    '2013年荣获浙江省师范技能竞赛二等奖',
                    '2015年荣获第九届多社联合三笔字大赛硬笔组一等奖',
                    '曾获荣誉：',
                    '2015年荣获第九届多社联合三笔字大赛硬笔组一等奖',
                    '2013年荣获浙江省师范技能竞赛二等奖。'
                ],
                imgUrl:'images/lutianeTeacher.jpg'
            },
            {
                name: '吴亚男' ,
                post:'茶艺老师',
                remarks:'以茶可行道,以茶可雅志',
                info:['国家高级茶艺师',
                    '国家高级评茶员',
                    '农业大学茶学专业',
                    '从事茶文化传播5年有余'
                ],
                imgUrl:'images/wuyananTeacher.jpg'
            },
            {
                name: '吴婧婧' ,
                post:'国画老师',
                remarks:'学艺之道无它,锻炼意志第一',
                info:['生于书香世家',
                    '自幼学习国画书法，热爱传统文化',
                    '中学美术教师资格证',
                    '从事国画教学五年有余',
                    '教学，考级经验丰富',
                    '学生考级参赛收获颇丰，深得学生家长的认可'
                ],
                imgUrl:'images/wujingjingTeacher.jpg'
            },
            {
                name: '汪梦圆',
                post:'古筝老师',
                remarks:'不可有傲气,不可无傲骨',
                info:['高级教师资格证',
                    '自幼习筝，曾多次获奖',
                    '信任大赛民乐组优秀表演奖',
                    '闪亮新星古筝组金奖'
                ],
                imgUrl:'images/wangmengyuanTeacher.jpg'
            },
            {
                name: '张汝杰' ,
                post:'书法老师',
                remarks:'踏遍红尘千万朵,且以华墨述平生',
                info:['自幼学习书画',
                    '师从李志平教授',
                    '尤胜书法教学',
                    '六年书法教学经验',
                    '擅长楷书结体讲解',
                    '独特专业的教学方法'
                ],
                imgUrl:'images/zhangrujieTeacher.jpg'
            },
            {
                name: '庄忠华',
                post:'书画老师',
                remarks:'骐骥一跃,不能十步;驽马十驾,功在不舍',
                info:['自幼研习国画',
                    '毕业于中国画学院（现中央美术学院）',
                    '修习中国画三十余年',
                    '从事书法教学近二十年载'
                ],
                imgUrl:'images/zhuangzhonghuaTeacher.jpg'
            },
            {
                name: '张源' ,
                post:'围棋老师',
                remarks:'棋雅小道,品德最尊',
                info:['业余五转，美籍华人',
                    '曾在美国西雅图开办围棋培训班',
                    '曾任职于美中交流理事会文化机构',
                    '负责中美围棋文化交流'
                ],
                imgUrl:'images/zhangyuanTeacher.jpg'
            }
        ],
        num: 0
    },
    methods: {
        tab(index) {
            console.log(index)
            this.num = index;
        }
    }
});