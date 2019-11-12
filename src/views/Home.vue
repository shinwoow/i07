<template>
  <section>
    <div class="content">
      <!-- 导航区域 -->
      <div class="block">
        <el-steps direction="vertical" :active="active">
          <el-step class="step" title="个人简介"></el-step>
          <el-step class="step" title="海口云医社" description="2018年3月-2019年3月"></el-step>
          <el-step class="step" title="个人音乐app" description="2019年4月-2019年10月"></el-step>
          <el-step class="step" title="个人网站" description="2019年7月-2019年12月"></el-step>
          <el-step class="step" title="答题卡识别系统" description="2019年6月-2019年7月"></el-step>
          <el-step class="step" title="斗鱼爬虫" description="2019年10月-2019年10月"></el-step>
        </el-steps>
      </div>

      <div class="module" ref="module">
        <!-- 个人信息模块 -->
        <el-container class="contain person" ref="personal">
          <el-header class="header">
            <i class="fa fa-dot-circle-o next-icon-tint" aria-hidden="true"></i>
          </el-header>
          <el-main class="main personal">
            <div>
              <el-tag>昵称</el-tag>
              <b style="margin-left: 10px;">shin</b>
              <span style="color:#9099AB;margin-left:20px;">在学习中实践，在实践中学习</span>
              <img style="width:100px; height:100px;float:right;" src="../assets/touxian.jpg" />
            </div>

            <div>
              <el-tag type="warning">岗位</el-tag>
              <span>
                <b style="color:#365FDC;">WEB前端</b>
              </span>
            </div>

            <div>
              <el-tag type="success">个人网站</el-tag>
              <a href="http://www.i07.xyz">i07.xyz</a>
            </div>

            <div>
              <el-tag type="danger">证书</el-tag>
              <span>CET-4&nbsp;&nbsp;&nbsp;国家计算机二级</span>
            </div>

            <div>
              <el-tag type="info">爱好</el-tag>
              <span>篮球&nbsp;&nbsp;&nbsp;吉他</span>
              <div class="gif" @click="changeImg">
                <img style="height:200px;width:200px;" src="../assets/basketball.gif" />
              </div>
            </div>

            <div>
              <el-tag>学校</el-tag>
              <el-popover
                placement="top-start"
                title="简介"
                width="200"
                trigger="hover"
                content="统招全日制本科&nbsp;地址：长沙市开福区洪山街道98号"
              >
                <span slot="reference">长沙大学&nbsp;&nbsp;&nbsp;电子信息工程</span>
              </el-popover>
            </div>

            <div>
              <el-tag type="danger">Github</el-tag>
              <a href="https://github.com/shinwoow">https://github.com/shinwoow</a>
            </div>
            <div>
              <el-tag type="success">所获荣誉</el-tag>
              <div style="display:inline">
                <span>
                  实用新型专利-人体静电收集装置&nbsp;专利号-CN201820991559.9
                  <br />省级实践创新项目-MFC污水处理系统
                </span>
              </div>
            </div>
          </el-main>
          <el-footer class="footer">
            <i
              class="fa fa-angle-double-up fa-2x next-icon-up"
              aria-hidden="true"
              @click="handleNext"
            ></i>
          </el-footer>
        </el-container>

        <!-- 项目列表模块 -->
        <!-- 海口云医社 -->
        <el-container class="contain haikouyun">
          <el-header class="header">
            <i class="fa fa-dot-circle-o next-icon-tint" aria-hidden="true"></i>
          </el-header>
          <el-main class="main">
            <div>
              <el-tag type="success">
                <h2>海口云医社微信服务号</h2>
              </el-tag>
              <img style="height:120px;width:120px;float:right" src="../assets/haikouyun.gif" />
            </div>

            <div>
              <el-tag>预览</el-tag>
              <a href="#">微信扫描右侧二维码</a>
            </div>

            <div>
              <el-tag>项目介绍</el-tag>
            </div>

            <div>
              <figure class="introduce-img">
                <img src="../assets/touxian.jpg" />
              </figure>
              <p>海口云医社综合门诊部的微信服务平台，实现线上挂号、问诊、支付等一系列医疗服务，紧随时代发展，开启网上医疗平台，已上线运行1年多，</p>
              <p>主要负责前端界面的设计与开发，使用Vue全家桶搭配Vux开发微信服务号界面，搭配Element-ui开发后台管理界面,同时联合后端人员，参与需求分析、SQL设计，实现前后端的联合开发</p>
              <p>备注：公司上线项目，属公司无形资产，暂未开源。已退出项目开发，所以无医生端截图信息</p>
            </div>
          </el-main>
          <el-footer class="footer">
            <i
              class="fa fa-angle-double-up fa-2x next-icon-up"
              aria-hidden="true"
              @click="handleNext"
            ></i>
          </el-footer>
        </el-container>

        <!-- shin-music -->
        <el-container class="contain shin-music">
          <el-header class="header">
            <i class="fa fa-dot-circle-o next-icon-tint" aria-hidden="true"></i>
          </el-header>
          <el-main class="main">
            <div>
              <el-tag type="success">
                <h2>个人音乐App&nbsp;shin-music</h2>
              </el-tag>
            </div>

            <div>
              <el-tag>GitHub地址</el-tag>
              <a href="https://github.com/shinwoow/app-shin-music">Vuejs前端</a>
              <a href="https://github.com/shinwoow/shin-music-nodejs">nodejs后端</a>
            </div>

            <div>
              <el-tag>预览</el-tag>
              <a href="http://www.music.i07.xyz">music.i07.xyz</a>
            </div>

            <div>
              <el-tag>项目介绍</el-tag>
            </div>

            <div>
              <p>个人音乐APP，实现文件分类上传，音乐播放等主要功能</p>
              <p>
                使用Vue技术栈，搭配vant组件库开发前端界面，将audio对象保存在vuex中实现全局调用。
                koa2开发后台api，使用stream实现音乐的上传，对于音乐文件上传到music目录（文件大小限制了超时时间12s，由于服务器空间较小、服务器2M网，故暂不修复），
                其他文件上传到后缀名文件夹中，并映射到MySQL。
                koa-static共享静态文件实现音乐播放，使用腾讯云服务器部署项目，nginx反向代理跨域访问，
                监听7777端口并映射到二级域名music.i07.xyz上，pm2持久运行代码
              </p>

              <p>短期目标：使用Hbuilder打包成手机app，实现更多的动效设计</p>
              <img />
            </div>
          </el-main>
          <el-footer class="footer">
            <i
              class="fa fa-angle-double-up fa-2x next-icon-up"
              aria-hidden="true"
              @click="handleNext"
            ></i>
          </el-footer>
        </el-container>

        <!-- i07.xyz -->
        <el-container class="contain i07">
          <el-header class="header">
            <i class="fa fa-dot-circle-o next-icon-tint" aria-hidden="true"></i>
          </el-header>
          <el-main class="main">
            <div>
              <el-tag type="success">
                <h2>个人网站&nbsp;i07.xyz</h2>
              </el-tag>
            </div>

            <div>
              <el-tag>GitHub地址</el-tag>
              <a href="https://github.com/shinwoow/i07">https://github.com/shinwoow/i07</a>
            </div>

            <div>
              <el-tag>预览地址</el-tag>
              <a href="https://i07.xyz">href = "#"</a>
            </div>

            <div>
              <el-tag>项目介绍</el-tag>
            </div>

            <div>
              <p>在线个人简历，展示个人作品，记录自我发展</p>
              <p>使用Vue全家桶，element-ui组件库对页面进行开发，单页面应用，未使用后台api，数据量过大，加载时间较长，故使用loading页面过渡（未找到合适的骨架屏方案）</p>
              <p>短期目标：使用音乐app的静态资源替换固定图片，实现懒加载</p>
            </div>
          </el-main>
          <el-footer class="footer">
            <i
              class="fa fa-angle-double-up fa-2x next-icon-up"
              aria-hidden="true"
              @click="handleNext"
            ></i>
          </el-footer>
        </el-container>

        <!-- python智能答题卡识别系统 -->
        <el-container class="contain answer">
          <el-header class="header">
            <i class="fa fa-dot-circle-o next-icon-tint" aria-hidden="true"></i>
          </el-header>
          <el-main class="main">
            <div>
              <el-tag type="success">
                <h2>python智能答题卡识别系统</h2>
              </el-tag>
            </div>

            <div>
              <el-tag>GitHub地址</el-tag>
              <a href>暂未上传</a>
            </div>

            <div>
              <el-tag>项目介绍</el-tag>
            </div>

            <div>
              <figure class="introduce-img">
                <img src="../assets/touxian.jpg" />
              </figure>
              <p>使用python实现对试卷的遍历阅卷，将照片命名为学生姓名，并放在固定文件夹下，运行主程序可自动遍历试卷文件夹并生成Excel保存学生成绩</p>
            </div>
          </el-main>
          <el-footer class="footer">
            <i
              class="fa fa-angle-double-up fa-2x next-icon-up"
              aria-hidden="true"
              @click="handleNext"
            ></i>
          </el-footer>
        </el-container>

        <!-- python斗鱼爬虫 -->
        <el-container class="contain douyu">
          <el-header class="header">
            <i class="fa fa-dot-circle-o next-icon-tint" aria-hidden="true"></i>
          </el-header>
          <el-main class="main">
            <div>
              <el-tag type="success">
                <h2>python斗鱼爬虫</h2>
              </el-tag>
            </div>

            <div>
              <el-tag>GitHub地址</el-tag>
              <a href="https://github.com/shinwoow/douyu-python">douyu-python</a>
            </div>

            <div>
              <el-tag>项目介绍</el-tag>
            </div>

            <div>
              <figure class="introduce-img">
                <img src="../assets/touxian.jpg" />
              </figure>
              <p>使用python爬取整个页面，搭配beautiful soup格式化页面代码，获取所需标签、类名等，提取所需数据，生成Excel文件</p>
            </div>
          </el-main>
          <el-footer class="footer">
            <i
              class="fa fa-angle-double-up fa-2x next-icon-up"
              aria-hidden="true"
              @click="handleNext"
            ></i>
          </el-footer>
        </el-container>

        <!-- 底部备案信息 -->
        <div class="home-footer">
          <a
            target="_blank"
            href="http://www.beian.miit.gov.cn/"
            style="color:#fff;"
          >湘ICP备19013483号-1</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      pageList: [],
      imgSrc: ["../assets/haikouyun.gif", "../assets/guitar.gif"]
    };
  },
  created() {},
  mounted() {
    this.handleElTop();
    this.handleNext();
    this.handleStepList();

    /**
     * 监听页面滚动
     * */
    this.module = this.$refs.module;
    let harfH = (this.pageList[1] - this.pageList[0]) / 2;
    this.module.addEventListener("scroll", () => {
      this.pageList.forEach((v, i) => {
        if (this.module.scrollTop >= v - harfH) {
          this.active = i;
          return;
        }
      });
    });
  },
  methods: {
    /**
     * 点击下一页，滑动到下一页
     */
    handleNext() {
      let that = this;
      let elNextList = document.getElementsByClassName("next-icon-up");
      let i = 0;
      for (let item of elNextList) {
        item.index = i++;
        item.onclick = function() {
          that.handleNextAnimate(
            this.index + 1 >= elNextList.length ? 0 : this.index + 1
          );
        };
      }
    },

    /**
     * 实现页面滚动效果的js代码
     * @param {Number} index 需要滚动到的页面页码
     */
    //js动画，使页面滑动
    handleNextAnimate(index) {
      let that = this;
      let el = document.getElementsByClassName("module")[0];
      let start = el.scrollTop;

      if (start < this.pageList[index]) {
        let timer = setInterval(function() {
          el.scrollTop = el.scrollTop + 50;
          //清除定时器
          let clearTimer = setTimeout(function() {
            clearInterval(timer);
            clearInterval(clearTimer);
          }, 900);
          if (el.scrollTop >= that.pageList[index]) {
            el.scrollTop = that.pageList[index];
            clearInterval(timer);
            clearInterval(clearInterval);
          }
        }, 8);
      } else {
        let timer = setInterval(function() {
          el.scrollTop = el.scrollTop - 50;
          //清除定时器
          let clearTimer = setTimeout(function() {
            clearInterval(timer);
            clearInterval(clearTimer);
          }, 900);
          if (el.scrollTop <= that.pageList[index]) {
            el.scrollTop = that.pageList[index];
            clearInterval(timer);
            clearInterval(clearInterval);
          }
        }, 8);
      }
    },

    /**
     * @param {Number} clientHeight 视窗高度
     * @param {Number} elHeight 元素高度
     * @param {Number} elScrolltop 元素顶部位置
     */
    handleScrollTop(clientHeight, elHeight, elScrolltop) {
      return elHeight >= clientHeight
        ? elScrolltop
        : (clientHeight - elHeight) / 2 + elScrolltop;
    },

    /**
     * 获取页面的滑动位置
     */
    handleElTop() {
      //获取视窗高度
      let clientHeight = (clientHeight =
        document.body.clientHeight > document.documentElement.clientHeight
          ? document.body.clientHeight
          : document.documentElement.clientHeight);
      let elList = document.getElementsByClassName("contain");
      let elHeight = elList[0].scrollHeight;
      let initElScrolltop = elList[0].offsetTop;
      let initH = this.handleScrollTop(clientHeight, elHeight, initElScrolltop);
      for (let item of elList) {
        //获取每个页面的scrollTop值
        let elScrolltop = item.offsetTop;
        this.pageList.push(
          this.handleScrollTop(clientHeight, elHeight, elScrolltop) - initH
        );
      }
    },

    /**
     * 步骤条点击事件
     */
    handleStepList() {
      let that = this;
      let stepList = document.getElementsByClassName("step");
      let i = 0;
      for (let item of stepList) {
        item.index = i++;
        item.onclick = function() {
          that.handleNextAnimate(this.index);
        };
      }
    },

    changeImg() {
      t;
    }
  }
};
</script>
<style lang="less" scoped>
/**
 *  手机平板隐藏左侧导航栏
 */

/* Custom, iPhone Retina */
@media only screen and (min-width: 320px) and (max-width: 479px) {
  .block {
    display: none;
  }
}

/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .block {
    display: none;
  }
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .block {
    display: none;
  }
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .block {
    flex: 1;
    margin: 60px auto;
    margin-left: 20px;
    background-color: #fff;
    height: 555px;
    width: auto;
    border-radius: 5px;
    padding: 20px 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
  .block {
    flex: 1;
    margin: 60px auto;
    margin-left: 20px;
    background-color: #fff;
    height: 555px;
    width: auto;
    border-radius: 5px;
    padding: 20px 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.content {
  display: flex;
  height: 100vh;
  width: 100%;
}

.module {
  flex: 4;
  height: 100vh;
  overflow: scroll;
  right: -17px;
  text-align: center;

  //去除滚动条
  -ms-overflow-style: none;
  // firefoxoverflow: -moz-scrollbars-none;
}
.module::-webkit-scrollbar {
  width: 0 !important;
}

.contain {
  margin: 40px auto;
  margin-bottom: 13vh;
  height: 40rem;
  width: 60rem;
  border-radius: 3px;
  box-shadow: 0 10px 10px #5a5a61;
}
.header {
  height: 20%;
  width: 100%;
}

.header i {
  padding-top: 15px;
}
.main {
  height: auto;
  width: 100%;
  background-color: #fff;
  text-align: left;
}
.footer {
  height: 20%;
  width: 100%;
  // background-image: linear-gradient(#fff, #9198e5);
}

/**
 * 介绍模块图片样式
 */
.introduce-img {
  height: 300px;
  width: 170px;
  float: right;
  overflow: hidden;
  margin-left: 10px;
}

.introduce-img img {
  height: inherit;
  width: inherit;
  overflow: inherit;
}

.next-icon-tint {
  height: 0px;
  width: auto;
}

.next-icon-up {
  position: relative;

  height: 0px;
  width: auto;
  animation: mymove 2s infinite;
  opacity: 0.7;

  /**
    * 适配浏览器
    */
  // -webkit-animation: mymove 5s infinite; /*Safari and Chrome*/
  // -moz-animation: mymove 5s infinite; /*Safari and Chrome*/
  // -o-animation: mymove 5s infinite; /*Safari and Chrome*/
}
@keyframes mymove {
  100% {
    bottom: -5px;
  }
  90% {
    bottom: -5.15px;
  }
  80% {
    bottom: -5.6px;
  }
  70% {
    bottom: -6.35px;
  }
  60% {
    bottom: -7.4px;
  }
  50% {
    bottom: -8.75px;
  }
  40% {
    bottom: -10.4px;
  }
  30% {
    bottom: -12.35px;
  }
  20% {
    bottom: -14.6px;
  }
  10% {
    bottom: -17.15px;
  }
  0% {
    bottom: -20px;
  }
}

.home-footer {
  height: auto;
  width: 100%;

  margin: 10px auto;
  display: block;
  text-align: center;
}

.main div {
  margin: 18px auto;
  background-image: linear-gradient(to right, #f4f4f4, #fff);
}

.main div p {
  padding: 8px 10px;
}

.personal div span {
  display: inline-block;
}

.personal div p {
  display: inline-block;
}

.main div a {
  padding: 10px;
}

a {
  padding: 10px;
}

.gif {
  float: right;
  height: 202px;
  width: 202px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.step :hover {
  background-color: #f4f4f4;
}

/**
 * 各个模块头部颜色
 */
.person .footer,
.person .header {
  background-color: #86c166;
}

.haikouyun .footer,
.haikouyun .header {
  background-color: #caad5f;
}

.shin-music .footer,
.shin-music .header {
  background-color: #cb4042;
}

.i07 .footer,
.i07 .header {
  background-color: #b481bb;
}

.answer .footer,
.answer .header {
  background-color: #e03c8a;
}

.douyu .footer,
.douyu .header {
  background-color: #bec23f;
}
</style>