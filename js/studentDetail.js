$(function(){
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var num = getQueryString("id") || 1;
    console.log(num)
    new Vue({
        el:'#courseDetail',
        data:{
            names:[
                '王陈馨嘉',
                '王弈辰',
                '崔智杰'
            ],
            details: [
                {
                    personalInfo:{
                        img:'images/chenxinjia.png',
                        name:'王陈馨嘉',
                        kecheng:'学生书法',
                        age:'10岁 ',
                        schoolAge:' 3个月 '
                    },
                    otherInfo:[
                        {
                            title:'王陈馨嘉作品欣赏',
                            content:'<img src="images/wcxjimg1.jpg"/>' +
                                '<img src="images/wcxjimg2.jpg"/>'
                        },
                        {
                            title:'学习感受',
                            content:'<p class="text">王陈馨嘉: 感觉在这里学习就像在游乐场玩一样，而且一边玩一边还能收获知识，很好！</p>' +
                                '<p class="text">王陈馨嘉的父母: 很不错的学院，老师负责，孩子爱学。</p>'
                        },
                        {
                            title:'家庭名言',
                            content:'<p class="text">你若不努力，就会被淘汰；</p>' +
                                '<p class="text">现在不吃苦，以后苦的就是自己。</p>'
                        },
                        {
                            title:'家长寄语',
                            content:'<p class="text">作为家长，我很高兴看到孩子的进步，希望这个进步只是一个开始，在今后能够延续这样才能不负老师和我们的期望，感谢张老师对孩子的关爱，谢谢！</p>'
                        },
                        {
                            title:'教师点评',
                            content:'<p class="text">王陈馨嘉在学习中，认真思考，勤奋学习，从课堂到家庭作业都一丝不苟，进步显著。</p>'
                        },
                        {
                            title:'寄语',
                            content:'<p class="text">所有功夫，都是由慢开始，一笔一划，踏踏实实，积跬步，至千里。</p>'
                        }
                    ]

                },

                {
                    personalInfo:{
                        img:'images/wangyichen.jpg',
                        name:'王弈辰',
                        kecheng:'国画',
                        age:'6周岁 ',
                        schoolAge:' 16周 '
                    },
                    otherInfo:[
                        {
                            title:'王弈辰作品欣赏',
                            content:'<img src="images/wyc1.jpg"/>' +
                                '<img src="images/wyc2.jpg"/>'
                        },
                        {
                            title:'学习感受',
                            content:'<p class="text">王弈辰: 我喜欢画画，我会好好学</p>' +
                                '<p class="text">王弈辰的父母: 孩子很喜欢国画，\n' +
                                ' 也喜欢阅读，\n' +
                                ' 家中随处都有书架。\n' +
                                ' 在老师的引领下，\n' +
                                ' 进步很快，我很欣慰。\n' +
                                ' 希望孩子能好好感受美，创造美。\n</p>'
                        },
                        {
                            title:'教师寄语',
                            content:'<p class="text">经过一段时间的学习，王弈辰小朋友的进步很大。对于一位六周岁的孩子来说，在画丝瓜的时候，勾线是有一定难度的，但他非常认真有耐心，慢慢地他的线条掌握趋于稳定，画的也比从前流畅，画的意境也能很好的表现出来了。国画的学习上讲求意境，而此意境可以用北宋王安石的一首诗来描绘：“远看山有色，近听水无声。春去花还在，人来鸟不惊。”书画同源，这是我们明志所追求的境界。王同学虽然还很小、但他能用清澈的眼眸、纯净的心灵体会到真髓，教学相长是最好的方式。</p>'
                        }
                    ]

                },

                {
                    personalInfo:{
                        img:'images/cuizhijie.jpg',
                        name:'崔智杰',
                        kecheng:'蒙学',
                        age:'10岁 ',
                        schoolAge:' 2个月'
                    },
                    otherInfo:[

                    ]

                }
            ],
            num: num
        },
        methods: {
            tab(index) {
                console.log(index)
                this.num = index;
            }
        }
    })
})
