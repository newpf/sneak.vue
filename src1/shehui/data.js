// JavaScript Document

var data = { //招聘信息数据
		add0: function(n){
			return n<10 ? "0"+n:""+n
    },
    
		formateDate : function(arr,n){ //格式化时间。
    
    
//  		2016-11-11 => 2016年11月11日
//  		2016.11.11 => 2016年11月11日
//  		2016/11/11 => 2016年11月11日
			var s = '';

			var n = n || 0;
			var aStr = ['年月日时分秒','-- ::','// ::'];

			if(n>aStr.length-1)n=aStr.length-1;

			for(var i=0; i<arr.length; i++){
				s += arr[i] + aStr[n].charAt(i);
				if(i==2&&n==0)s += ' ';
			}

			if(s.charAt(s.length-1) == '-'||s.charAt(s.length-1) == '/'){
				s = s.substring(0,s.length-1);
			}

			return s;
		},

		list : [
			{
				lx : 'sh',
				text : '社会招聘',
				eng:"society"
			},
			{
				lx : 'xy',
				text : '校园招聘',
				eng:"campus"
			}
		],

    email : 'liuyajuan@fulan.com.cn',

    sh : { //社会招聘
      img : 'img/shzp.gif',
      name : 'sh',
      text : [
        {
        	zw : '前端工程师11【社会招聘】',
        	jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","07","12"],
					lx : '社会招聘',
         	info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            }
          ]
        },

        {
          zw : '前端工程师22【社会招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '2',
					dy : '面议',
					sj : ["2013","07","23"],
					lx : '社会招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师33【社会招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '4',
					dy : '面议',
					sj : ["2013","06","30"],
					lx : '社会招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师44【社会招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '5',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '社会招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。',
                '从事计算机软件的开发工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师55【社会招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj :["2013","8","17"],
					lx : '社会招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师66【社会招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '2',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '社会招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师77【社会招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '6',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '社会招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        }

      ]

    },

    xy : { //校园招聘

      img : 'img/xyzp.gif',
      name : 'xy',
      text : [
        {
          zw : '前端工程师11【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '2',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师22【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师33【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师44【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '12',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师55【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '6',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },

        {
          zw : '前端工程师66【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },
				{
          zw : '前端工程师77【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },
				{
          zw : '前端工程师88【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        },
				{
          zw : '前端工程师99【校园招聘】',
          jj : '#',
					gs : '北京智信创通信息技术有限公司',
					xz : '股份制公司',
					gz : '全职',
					dd : '上海',
					jy : '3年以上',
					xl : '本科及以上',
					rs : '3',
					dy : '面议',
					sj : ["2013","8","17"],
					lx : '校园招聘',
          info : [
            {
              t : '岗位要求：',
              l : [
                '1.计算机或相关专业本科以上学历；',
                '2.从事软件测试工作3年及以上；',
                '3.具备良好的沟通能力和快速学习能力；',
                '4.精通测试策略和方法、测试用例设计；',
                '5.熟悉DB2、AIX等平台的基本操作；',
                '6.具备2年以上金融IT行业经验，特别是有金融行业相关业务的测试或者开发工作经验者优先。'
              ]
            },
            {
              t : '工作职责：',
              l : [
                '从事计算机软件的测试工作。'
              ]
            }

          ]
        }

      ]
    }
  }
export default data;