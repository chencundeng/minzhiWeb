$(function(){

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var num = getQueryString("id") || 1;
    new Vue({
        el:'#recruitingDetail',
        data:{
            jiaoxue:[
                {
                    id:'1',
                    name:'教学主管'
                },
                {
                    id:'2',
                    name:'国画教师'
                },
                {
                    id:'3',
                    name:'书法教师'
                },
                {
                    id:'4',
                    name:'国学教师'
                },
                {
                    id:'5',
                    name:'围棋教师'
                },
                {
                    id:'6',
                    name:'古筝教师'
                },
                {
                    id:'7',
                    name:'茶艺教师'
                }
            ],
            kecheng:[
                {
                    id:'8',
                    name:'课程顾问'
                }
            ],
            shichang:[
                {
                    id:'9',
                    name:'市场主管'
                },
                {
                    id:'10',
                    name:'市场线上专员'
                },
                {
                    id:'11',
                    name:'客服专员'
                }
            ],
            details:[
                {
                    id:'1',
                    info:'<p class="title ">教学主管</p>' +
                        '<p>1名</p>' +
                        '<p class="title">岗位职责</p>' +
                        '<p>1.根据学校制定的教学大纲进行标准化教学方案的进行，负责校区学科小组的团队管理，提高各学科教师的授课饱和率，加快教学进度</p>' +
                        '<p>2.熟悉各级别课程的教学进度，管理教室资源，保证各教室的充分利用率；</p>' +
                        '<p>3.管理教室资源，协调和配合校区学科教师授课，使各教师的产能最大化；</p>' +
                        '<p>4.管理各校区的教材资源，负责校区的所有教材的出入库管理；</p>' +
                        '<p>5.讲义管理，负责校区的所有讲义数量、用途、出处的管理；</p>' +
                        '<p>6.保持和学员及家长的良好沟通，处理教学投诉，解决问题，提升学员及家长对学校的满意度，提高学员的出勤率；</p>' +
                        '<p>7.配合学校完成其他交办的工作。</p>' +
                        '<p class="title">任职要求</p>' +
                        '<p>1.形象气质佳、亲和力强、知识广，在教育培训行业从事过教学管理者优先考虑；</p>' +
                        '<p>2.良好的沟通协调能力、教师团队的建设维护；</p>' +
                        '<p>3.有独立的工作能力并能承受工作压力，适应弹性的工作时间；</p>' +
                        '<p>4.熟练的计算机操作能力和信息搜索能力；</p>' +
                        '<p>5.正规师范类大学本科及以上学历，普通话标准，有教师资格证者优先录用。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险一金+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>教学主管-中心副校长-中心校长</p>'
                },
                {
                    id:'2',
                    info:'<p class="title">国画教师</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的教学大纲进行备课，授课工作；</p>'+
                        '<p>2.开班前了解班级学员的情况，制定相应的授课计划；</p>'+
                        '<p>3.严格掌控各班级、各级别的学习进度，保质保量完成教学计划，努力提高学员等级考试的通过率；</p>'+
                        '<p>4.积极与家长、学员反馈上课情况，按照校区要求定期进行成果汇报工作；</p>'+
                        '<p>5.完善校区国画课程的教研工作，定期参加培训，提出有效合理的教学建议；</p>'+
                        '<p>6.严格遵守教师守则，努力配合校区运营，提高教学质量，确保学员续单率；</p>'+
                        '<p>7.上级交办的其他事务。</p>'+
                        '<p class="title">任职要求</p>'+
                        '<p>1.美院、师范类院校书画专业毕业，有参赛经验及获得中国画登记证书者；</p>'+
                        '<p>2.有深厚的国画功底，或有教师资格证、且有相关书画教育经验者，可放宽条件，择优录取；</p>'+
                        '<p>3.善于引导4-12岁少儿及青少年对书画的学习兴趣，并灵活应用教学方法，因材施教；</p>'+
                        '<p>4.形象佳、亲和力强、普通话标准，有责任心，有耐心，具有较强的团队合作精神，善于沟通；</p>'+
                        '<p>5.热爱中国传统文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>'+
                        '<p>加入明志书院，我们为您提供：</p>'+
                        '<p>1.保底薪资+丰厚奖金</p>'+
                        '<p>2.五险+双休</p>'+
                        '<p>3.团队建设+岗位培训</p>'+
                        '<p>4.带薪年假+法定节假日</p>'+
                        '<p>5.广阔的发展空间+公平晋升机制</p>'+
                        '<p>6.温馨的工作环境+团队氛围</p>'+
                        '<p class="title">晋升通道</p>'+
                        '<p>普通教师-高级教师-资深教师-教学主管</p>'
                },
                {
                    id:'3',
                    info:'<p class="title ">书法教师</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的教学大纲进行备课，授课工作；</p>'+
                        '<p>2.开班前了解班级学员的情况，制定相应的授课计划；</p>'+
                        '<p>3.严格掌控各班级、各级别的学习进度，保质保量完成教学计划，努力提高学员等级考试的通过率；</p>'+
                        '<p>4.积极与家长、学员反馈上课情况，按照校区要求定期进行成果汇报工作；</p>'+
                        '<p>5.完善校区书法课程的教研工作，定期参加培训，提出有效合理的教学建议；</p>'+
                        '<p>6.严格遵守教师守则，努力配合校区运营，提高教学质量，确保学员续单率；</p>'+
                        '<p>7.上级交办的其他事务。</p>'+
                        '<p class="title">任职要求</p>' +
                        '<p>1.美院、师范类院校相关专业毕业，参赛经验及获得中国画登记证书者；</p>' +
                        '<p>2.有深厚的书法功底、教师资格证、相关书法教育经验者优先录取；</p>' +
                        '<p>3.有软笔书法中级及以上水平，中国书法家协会会员者，可放宽条件，择优录取；</p>' +
                        '<p>4.善于引导4-12岁少儿及青少年对书法的学习兴趣，并灵活应用教学方法，因材施教；</p>' +
                        '<p>5.形象佳、亲和力强、普通话标准，有责任心，有耐心，具有较强的团队合作精神，善于沟通；</p>' +
                        '<p>6.热爱中国传统文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>普通教师-高级教师-资深教师-教学主管</p>'
                },
                {
                    id:'4',
                    info:'<p class="title ">国学教师</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的教学大纲进行备课，授课工作；</p>'+
                        '<p>2.开班前了解班级学员的情况，制定相应的授课计划；</p>'+
                        '<p>3.严格掌控各班级、各级别的学习进度，保质保量完成教学计划，努力提高学员等级考试的通过率；</p>'+
                        '<p>4.积极与家长、学员反馈上课情况，按照校区要求定期进行成果汇报工作；</p>'+
                        '<p>5.完善校区国学课程的教研工作，定期参加培训，提出有效合理的教学建议；</p>'+
                        '<p>6.严格遵守教师守则，努力配合校区运营，提高教学质量，确保学员续单率；</p>'+
                        '<p>7.上级交办的其他事务。</p>'+
                        '<p class="title">任职要求</p>' +
                        '<p>1.汉语言相关专业、师范类院校毕业，基本功扎实，普通话标准，知识面广泛；</p>' +
                        '<p>2.有相关教学3年以上经验者，或有教师资格证，可放宽条件，择优录取；</p>' +
                        '<p>3.善于引导4-12岁少儿及青少年对国学的学习兴趣，并灵活应用教学方法，因材施教；</p>' +
                        '<p>4.形象佳、亲和力强、普通话标准，有责任心，有耐心，具有较强的团队合作精神，善于沟通；</p>' +
                        '<p>5.热爱中国传统文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>普通教师-高级教师-资深教师-教学主管</p>'
                },
                {
                    id:'5',
                    info:'<p class="title ">围棋教师</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的教学大纲进行备课，授课工作；</p>'+
                        '<p>2.开班前了解班级学员的情况，制定相应的授课计划；</p>'+
                        '<p>3.严格掌控各班级、各级别的学习进度，保质保量完成教学计划，努力提高学员等级考试的通过率；</p>'+
                        '<p>4.积极与家长、学员反馈上课情况，按照校区要求定期进行成果汇报工作；</p>'+
                        '<p>5.完善校区围棋课程的教研工作，定期参加培训，提出有效合理的教学建议；</p>'+
                        '<p>6.严格遵守教师守则，努力配合校区运营，提高教学质量，确保学员续单率；</p>'+
                        '<p>7.上级交办的其他事务。</p>'+
                        '<p class="title">任职要求</p>' +
                        '<p>1.围棋业余四段及以上段位，中国围棋协会会员或国家专业段位优先录取；</p>' +
                        '<p>2.有相关教学经验，少儿围棋小班授课经验者，可放宽条件，择优录取；</p>' +
                        '<p>3.善于引导4-12岁少儿及青少年对围棋的学习兴趣，并灵活应用教学方法，因材施教；</p>' +
                        '<p>4.形象佳、亲和力强、普通话标准，有责任心，有耐心，具有较强的团队合作精神，善于沟通；</p>' +
                        '<p>5.热爱中国传统文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>普通教师-高级教师-资深教师-教学主管</p>'
                },
                {
                    id:'6',
                    info:'<p class="title ">古筝教师</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的教学大纲进行备课，授课工作；</p>'+
                        '<p>2.开班前了解班级学员的情况，制定相应的授课计划；</p>'+
                        '<p>3.严格掌控各班级、各级别的学习进度，保质保量完成教学计划，努力提高学员等级考试的通过率；</p>'+
                        '<p>4.积极与家长、学员反馈上课情况，按照校区要求定期进行成果汇报工作；</p>'+
                        '<p>5.完善校区古筝课程的教研工作，定期参加培训，提出有效合理的教学建议；</p>'+
                        '<p>6.严格遵守教师守则，努力配合校区运营，提高教学质量，确保学员续单率；</p>'+
                        '<p>7.上级交办的其他事务。</p>'+
                        '<p class="title">任职要求</p>' +
                        '<p>1.音乐学院相关专业毕业，有参赛经验及获得古筝十级证书者优先录取；</p>' +
                        '<p>2.有培训机构、少年宫、琴行等相关古筝技能培训教学经验者，可放宽条件，择优录取；</p>' +
                        '<p>3.善于引导4-12岁少儿及青少年对古筝的学习兴趣，并灵活应用教学方法，因材施教；</p>' +
                        '<p>4.形象佳、亲和力强、普通话标准，有责任心，有耐心，具有较强的团队合作精神，善于沟通；</p>' +
                        '<p>5.热爱中国民乐文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>普通教师-高级教师-资深教师-教学主管</p>'
                },
                {
                    id:'7',
                    info:'<p class="title">茶艺教师</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的教学大纲进行备课，授课工作；</p>'+
                        '<p>2.开班前了解班级学员的情况，制定相应的授课计划；</p>'+
                        '<p>3.严格掌控各班级、各级别的学习进度，保质保量完成教学计划，努力提高学员等级考试的通过率；</p>'+
                        '<p>4.积极与家长、学员反馈上课情况，按照校区要求定期进行成果汇报工作；</p>'+
                        '<p>5.完善校区茶艺课程的教研工作，定期参加培训，提出有效合理的教学建议；</p>'+
                        '<p>6.严格遵守教师守则，努力配合校区运营，提高教学质量，确保学员续单率；</p>'+
                        '<p>7.上级交办的其他事务。</p>'+
                        '<p class="title">任职要求</p>' +
                        '<p>1.热爱茶叶和茶文化，熟悉各类茶叶冲泡、品饮艺术、对茶文化的了解有一定深度；</p>' +
                        '<p>2.有相关的教学经验、有相应的茶艺资格证书者优先录取；</p>' +
                        '<p>3.形象佳、亲和力强、普通话标准，有责任心，有耐心，具有较强的团队合作精神，善于沟通；</p>' +
                        '<p>4.热爱中国传统文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>普通教师-高级教师-资深教师-教学主管</p>'
                },
                {
                    id:'8',
                    info:'<p class="title ">课程顾问</p>' +
                        '<p>2-5名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1.根据学校制定的月度业绩指标，通过电话邀约、市场活动、续费、转介绍等渠道完成业绩目标；</p>'+
                        '<p>2.接待来访学员及家长做相应的课程介绍与制定学习计划，并完成客户签约付费；</p>'+
                        '<p>3.跟踪已到访未报名的学员，促成签单；</p>'+
                        '<p>4.常规销售数据的统计及系统录入；</p>'+
                        '<p>5.定期参加培训，提高业务能力；</p>'+
                        '<p>6.积极与家长、学员保持沟通，良好互动，按照校区要求定期进行回访工作；</p>' +
                        '<p class="title">任职要求</p>' +
                        '<p>1.形象佳，亲和力强，具有良好的沟通能力及洞察力，迅速了解学员及家长的需求；</p>' +
                        '<p>2.中专及以上学历，如有呼叫中心或有教育培训行业销售相关经验者优先；</p>' +
                        '<p>3.具备独立工作能力并能承受各项压力，适应弹性制工作时间，敢于挑战高薪；</p>' +
                        '<p>4.热爱中国传统文化及教育事业，具备高尚的教师职业操守，诚实守信，能承受各项压力。</p>' +
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>' +
                        '<p class="title">晋升通道</p>' +
                        '<p>课程顾问-资深课程顾问-课程主管-中心副校长-中心校长</p>'
                },
                {
                    id:'9',
                    info:'<p class="title">市场主管</p>' +
                        '<p>1名</p>'+
                        '<p class="title">岗位职责</p>'+
                        '<p>1、执行校区周/月/季度市场计划及业绩反馈；</p>'+
                        '<p>2、校区周边市场宣传（广告牌、短信、网络论坛、派单、booth点、异业合作等）；</p>'+
                        '<p>3、负责策划、组织及跟踪执行相关市场、宣传活动，与周边商场、社区保持互动；</p>'+
                        '<p>4、校区拉访（考勤、指标下发、现场督导、会议、激励等）；</p>'+
                        '<p>5、校园渠道工作开展（公校、幼儿园渠道建立等）；</p>'+
                        '<p>6、熟悉国学行业的市场环境，准确快速做出市场反应。</p>'+

                        '<p class="title">任职要求</p>'+
                        '<p>1、大专以上学历，市场营销相关专业毕业，具有2-3年的教育行业市场推广与营销工作经验者优先；</p>'+
                        '<p>2、形象气质良好，性格开朗，高度责任心和亲和力；</p>'+
                        '<p>3、具备良好的客户服务意识与沟通能力，能熟练掌握最基本的待人接物礼仪；；</p>'+
                        '<p>4、有较强的执行力，组织能力，计划、控制协调和人际交往能力、应变能力；</p>'+
                        '<p>5、抗压能力强，有统筹规划能力，工作主动。</p>'+
                        '<p>6、有较强的责任心，有良好的团队合作精神，吃苦耐劳，热爱教育行业。</p>'+
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>'
                },
                {
                    id:'10',
                    info:'<p class="title ">市场线上专员</p>' +
                        '<p>1名</p>' +
                        '<p class="title">岗位职责</p>'+
                        '<p>1.熟练运用电脑，热情接待网络来客和网络留言，做好登记登记及传达工作；</p>'+
                        '<p>2.熟知学校课程体系，按照工作流程，以专业水准向咨询者介绍相关问题，介绍学校课程；</p>'+
                        '<p>3.运用所掌握的知识和技巧，获得咨询者的基础信息和联系方式（电话、QQ、微信等），提高转化率；</p>'+
                        '<p>4.品牌宣传，文化建设等设计类的工作内容，进行微信公众号的内容发布与维护；</p>'+
                        '<p>5.与相关部门紧密结合，协调沟通。</p>'+
                        '<p class="title">任职要求</p>'+
                        '<p>1.会平面设计，男女不限，欢迎应届毕业生；</p>'+
                        '<p>2.沟通能力强，有亲和力，工作积极主动，乐观开朗；</p>'+
                        '<p>3.做事认真负责，为人正直诚恳，有良好的团队合作精神；</p>'+
                        '<p>4.有较强的学习能力。</p>'+
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>'

                },
                {
                    id:'11',
                    info:'<p class="title">客服专员/电话邀约专员/TMK</p>' +
                        '<p></p>' +
                        '<p class="title">岗位职责</p>'+
                        '<p>1.接听和拨出电话</p>'+
                        '<p>2.在电话中为客户提供专业的咨询</p>'+
                        '<p>3.预约客户到书院访问</p>'+
                        '<p>4.在系统中准确记录客户基本资料并及时跟进预约及回访工作</p>'+
                        '<p class="title">任职要求</p>'+
                        '<p>1.高中以上学历</p>'+
                        '<p>2.1年以上相关工作经验，有同行业相关工作经验者优先考虑，优秀应届生可考虑</p>'+
                        '<p>3.积极乐观的人生态度，较强的抗压能力</p>'+
                        '<p>4.综合素质良好，懂得基本的礼仪</p>'+
                        '<p>5.工作认真负责，有良好的职业道德</p>'+
                        '<p>加入明志书院，我们为您提供：</p>' +
                        '<p>1.保底薪资+丰厚奖金</p>' +
                        '<p>2.五险+双休</p>' +
                        '<p>3.团队建设+岗位培训</p>' +
                        '<p>4.带薪年假+法定节假日</p>' +
                        '<p>5.广阔的发展空间+公平晋升机制</p>' +
                        '<p>6.温馨的工作环境+团队氛围</p>'
                }
            ],
            num:num,
        },
        methods: {
            tab(index) {
                console.log(index)
                this.num = index;
            }
        }
    });

    $('.recruitingTab').on('click','h5',function(){
        var that = $(this);
        var index = that.index();
        switch(index){
            case 0:
                $('.recruitingTab ul').eq(0).toggle();
                break;
            case 2:
                $('.recruitingTab ul').eq(1).toggle();
                break;
            case 4:
                $('.recruitingTab ul').eq(2).toggle();
                break;
        }
        console.log(that)
    })
})
