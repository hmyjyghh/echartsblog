import{V as m}from"./framework.e9b226b1.js";import{_ as C,b as B,A as h,I as p,aK as b,G as E,o as v,g as t,f as n}from"./plugin-vue_export-helper.bec912ab.js";import"./framework.e4c32923.js";var w="/echartsblog/images/lineone.png";const S={name:"component-doc",components:{"render-demo-0":function(){const{openBlock:u,createElementBlock:c}=m;function l(g,e){return u(),c("div")}const{defineComponent:r,onMounted:F,reactive:f,ref:i}=m,o=r({name:"App",setup(){return{drawLine:(e,k)=>{xAxisData=k.map(s=>s.name),yAxisData=k.map(s=>s.value);let d=new Array(yAxisData.length).fill(5);d[yAxisData.length-1]=7,window.onresize=function(){e.resize()};const x={title:{subtext:props.subtext?props.subtext:"",left:"2%",top:"-1%",subtextStyle:{fontSize:14,color:"#3c3c3c"}},color:["#E60012","#426DFF","#FFA53F"],toolbox:{show:!1,feature:{saveAsImage:{show:!0}}},tooltip:{trigger:"axis",formatter(s){let a=s[0],A=a.name,y="";return y=`<div>${A}</div><div>${props.legendData}\uFF1A${a.value}${props.unit}</div>`,y},backgroundColor:"rgba(0,0,0,0.65)",borderWidth:0,padding:[2,8],textStyle:{color:"#fff",fontSize:12},confine:!0,axisPointer:{type:"line",lineStyle:{color:"#E6262C",type:"dashed"},width:2}},xAxis:{type:"category",axisTick:{show:!0},axisLabel:{show:!0,color:"#999999",fontSize:10},boundaryGap:!1,splitLine:{show:!1},axisLine:{lineStyle:{color:"#e4e4e4"}},data:xAxisData},yAxis:{name:"",show:!!yAxisData.length,nameTextStyle:{color:"#A0A4AA",padding:[0,30,0,0]},type:"value",axisTick:{show:!1},axisLabel:{color:"#A0A4AA",fontSize:sizeScale(.5),formatter(s){return s=s.toString(),`${s}${props.unit}`}},min:0,splitNumber:4,axisLine:{lineStyle:{color:"#eee"}},splitLine:{show:!0,lineStyle:{color:["#eee"],width:1,type:"dashed"}}},grid:{left:"4%",right:"8%",bottom:"8%",top:props.subtext?"18%":"10%",containLabel:!0},series:[{type:"line",smooth:!0,emphasis:{itemStyle:{color:"#E6262C",borderWidth:1,position:"center"}},symbolSize:(s,a)=>props.chartTime!==2?(a.symbolSize=d[a.dataIndex],a.symbolSize):5,label:{show:yAxisData.length<8,fontSize:10,color:"#E6262C",formatter(s){return props.unit=="%"?s.dataIndex===yAxisData.length-1?`{a|${s.value}${props.unit}}`:`{b|${s.value}${props.unit}}`:s.dataIndex===yAxisData.length-1?"{a|"+s.value+"}":"{b|"+s.value+"}"},rich:{a:{fontSize:12,fontWeight:"bold"},b:{fontSize:10}}},lineStyle:{width:2,color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#E6262C"},{offset:1,color:"#E6262C"}],global:!1}},data:yAxisData}]};e.setOption(x,!0)}}}});return{render:l,...o}}()}},I='{"title":"\u6298\u7EBF\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6298\u7EBF\u56FE","slug":"\u6298\u7EBF\u56FE"},{"level":2,"title":"\u8981\u603B\u7ED3\u7684\u5730\u65B9\uFF1A","slug":"\u8981\u603B\u7ED3\u7684\u5730\u65B9\uFF1A"},{"level":2,"title":"\u5C5E\u6027\u503C","slug":"\u5C5E\u6027\u503C"},{"level":3,"title":"legend\u5C5E\u6027","slug":"legend\u5C5E\u6027"},{"level":3,"title":"tooltip\u5C5E\u6027","slug":"tooltip\u5C5E\u6027"},{"level":3,"title":"xAxis\u5C5E\u6027","slug":"xaxis\u5C5E\u6027"},{"level":3,"title":"yAxis\u5C5E\u6027","slug":"yaxis\u5C5E\u6027"},{"level":3,"title":"grid\u5C5E\u6027","slug":"grid\u5C5E\u6027"},{"level":3,"title":"series\u5C5E\u6027","slug":"series\u5C5E\u6027"}],"relativePath":"echarts/line.md","lastUpdated":1673511225644}',D=b('<h2 id="\u6298\u7EBF\u56FE" tabindex="-1">\u6298\u7EBF\u56FE <a class="header-anchor" href="#\u6298\u7EBF\u56FE" aria-hidden="true">#</a></h2><ol><li>\u8FD115\u5929\u6570\u636E\u9694\u70B9\u663E\u793A</li><li>\u5E73\u5747\u7EBF\uFF0C\u5C55\u793A\u4E3A\u865A\u7EBF\uFF0C\u6700\u540E\u4E00\u4E2A\u70B9\u663E\u793A\u6570\u503C\uFF0C\u5706\u5708\u52A0\u7C97\u653E\u5927\u663E\u793A\uFF0C\u5B57\u53F7\u653E\u5927</li><li>tooltip\u5F39\u51FA\u6846\u6BCF\u4E00\u4E2A\u9879\u62FC\u63A5\u7684\u5355\u4F4D\u4E0D\u540C</li></ol><h2 id="\u8981\u603B\u7ED3\u7684\u5730\u65B9\uFF1A" tabindex="-1">\u8981\u603B\u7ED3\u7684\u5730\u65B9\uFF1A <a class="header-anchor" href="#\u8981\u603B\u7ED3\u7684\u5730\u65B9\uFF1A" aria-hidden="true">#</a></h2><ol><li>\u9526\u9F99\u5C01\u88C5\u7684\u56FE\u8868\u7EC4\u4EF6 \u81EA\u5B9A\u4E49formatter</li><li>Rn\u91CC\u9762\u4F7F\u7528\u56FE\u8868\u7EC4\u4EF6</li><li>\u603B\u7ED3\u5E38\u7528\u7684\u5C5E\u6027\uFF0C\u5404\u4E2A\u5C5E\u6027\u662F\u5904\u7406\u4EC0\u4E48\u573A\u666F\u7684\uFF0C\u4EC0\u4E48\u4F5C\u7528</li><li>Vue \u7248\u672C Rn\u7248\u672C</li></ol><p><img src="'+w+'" alt="lineEchart"></p>',5),z=t("div",null,"echarts-\u56FE\u8868-\u6298\u7EBF\u56FE",-1),L=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" onMounted"),t("span",{class:"token punctuation"},","),n(" reactive"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'App'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawLine"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("lineChart"),t("span",{class:"token punctuation"},","),n(" lineList")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      xAxisData `),t("span",{class:"token operator"},"="),n(" lineList"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"v"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(" v"),t("span",{class:"token punctuation"},"."),n("name"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      yAxisData `),t("span",{class:"token operator"},"="),n(" lineList"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"v"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(" v"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"let"),n(" sizeArr "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("yAxisData"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},")"),n(`
      sizeArr`),t("span",{class:"token punctuation"},"["),n("yAxisData"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"7"),n(`
      window`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function-variable function"},"onresize"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        lineChart`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resize"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" option "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"subtext"),t("span",{class:"token operator"},":"),n(" props"),t("span",{class:"token punctuation"},"."),n("subtext "),t("span",{class:"token operator"},"?"),n(" props"),t("span",{class:"token punctuation"},"."),n("subtext "),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"left"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"2%"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"top"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"-1%"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"subtextStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#3c3c3c"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},'"#E60012"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},'"#426DFF"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},'"#FFA53F"'),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"toolbox"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"feature"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"saveAsImage"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"tooltip"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"trigger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"axis"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function"},"formatter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"params"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"let"),n(" data "),t("span",{class:"token operator"},"="),n(" params"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
            `),t("span",{class:"token keyword"},"let"),n(" date "),t("span",{class:"token operator"},"="),n(" data"),t("span",{class:"token punctuation"},"."),n("name"),t("span",{class:"token punctuation"},";"),n(`
            `),t("span",{class:"token keyword"},"let"),n(" dom "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},";"),n(`
            dom `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"<div>"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("date"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"</div><div>"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("props"),t("span",{class:"token punctuation"},"."),n("legendData"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"\uFF1A"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("data"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("props"),t("span",{class:"token punctuation"},"."),n("unit"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"</div>"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},";"),n(`
            `),t("span",{class:"token keyword"},"return"),n(" dom"),t("span",{class:"token punctuation"},";"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"backgroundColor"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"rgba(0,0,0,0.65)"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"borderWidth"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"padding"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"textStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#fff"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"confine"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//\u5BB9\u5668\u5185\u663E\u793A"),n(`
          `),t("span",{class:"token literal-property property"},"axisPointer"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token comment"},"// \u5750\u6807\u8F74\u6307\u793A\u5668\uFF0C\u5750\u6807\u8F74\u89E6\u53D1\u6709\u6548"),n(`
            `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"line"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// \u9ED8\u8BA4\u4E3A\u76F4\u7EBF\uFF0C\u53EF\u9009\u4E3A\uFF1A'line' | 'shadow'"),n(`
            `),t("span",{class:"token literal-property property"},"lineStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token comment"},"// \u76F4\u7EBF\u6307\u793A\u5668\u6837\u5F0F\u8BBE\u7F6E"),n(`
              `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#E6262C"'),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"dashed"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"xAxis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"category"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"axisTick"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//x\u5750\u6807\u8F74\u523B\u7EBF"),n(`
          `),t("span",{class:"token literal-property property"},"axisLabel"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token comment"},"// interval: 0,"),n(`
            `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#999999"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"boundaryGap"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"splitLine"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//\u7F51\u683C\u7EBF"),n(`
          `),t("span",{class:"token literal-property property"},"axisLine"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"lineStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#e4e4e4"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"data"),t("span",{class:"token operator"},":"),n(" xAxisData"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"yAxis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token comment"},'// name: props.unit ? `(${props.unit})` : "",'),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(" yAxisData"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"?"),n(),t("span",{class:"token boolean"},"true"),n(),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"nameTextStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#A0A4AA"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"padding"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"value"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"axisTick"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//y\u5750\u6807\u8F74\u523B\u7EBF"),n(`
          `),t("span",{class:"token literal-property property"},"axisLabel"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#A0A4AA"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"sizeScale"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0.5"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token function"},"formatter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"v"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
              v `),t("span",{class:"token operator"},"="),n(" v"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toString"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
              `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("v"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("props"),t("span",{class:"token punctuation"},"."),n("unit"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},";"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"min"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token comment"},"// scale: true,"),n(`
          `),t("span",{class:"token literal-property property"},"splitNumber"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"axisLine"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"lineStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#eee"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"splitLine"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//\u7F51\u683C\u7EBF"),n(`
            `),t("span",{class:"token literal-property property"},"lineStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},'"#eee"'),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"dashed"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"grid"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"left"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"4%"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"right"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"8%"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"bottom"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"8%"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"top"),t("span",{class:"token operator"},":"),n(" props"),t("span",{class:"token punctuation"},"."),n("subtext "),t("span",{class:"token operator"},"?"),n(),t("span",{class:"token string"},'"18%"'),n(),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"10%"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"containLabel"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"series"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"line"'),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"smooth"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"emphasis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"itemStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token comment"},"// \u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u56FE\u4E0A\u7684\u5706\u70B9"),n(`
                `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#E6262C"'),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"borderWidth"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"center"'),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token function-variable function"},"symbolSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("rawValue"),t("span",{class:"token punctuation"},","),n(" params")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("props"),t("span",{class:"token punctuation"},"."),n("chartTime "),t("span",{class:"token operator"},"!=="),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
                params`),t("span",{class:"token punctuation"},"."),n("symbolSize "),t("span",{class:"token operator"},"="),n(" sizeArr"),t("span",{class:"token punctuation"},"["),n("params"),t("span",{class:"token punctuation"},"."),n("dataIndex"),t("span",{class:"token punctuation"},"]"),n(`
                `),t("span",{class:"token keyword"},"return"),n(" params"),t("span",{class:"token punctuation"},"."),n(`symbolSize
              `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token number"},"5"),n(`
              `),t("span",{class:"token punctuation"},"}"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"show"),t("span",{class:"token operator"},":"),n(" yAxisData"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"8"),n(),t("span",{class:"token operator"},"?"),n(),t("span",{class:"token boolean"},"true"),n(),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#E6262C"'),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token function"},"formatter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"v"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("props"),t("span",{class:"token punctuation"},"."),n("unit "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token string"},'"%"'),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("v"),t("span",{class:"token punctuation"},"."),n("dataIndex "),t("span",{class:"token operator"},"==="),n(" yAxisData"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'{a|'"),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("v"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("props"),t("span",{class:"token punctuation"},"."),n("unit"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token string"},"'}'"),t("span",{class:"token punctuation"},";"),n(`
                  `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'{b|'"),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("v"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("props"),t("span",{class:"token punctuation"},"."),n("unit"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token string"},"'}'"),t("span",{class:"token punctuation"},";"),n(`
                  `),t("span",{class:"token punctuation"},"}"),n(`
                `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("v"),t("span",{class:"token punctuation"},"."),n("dataIndex "),t("span",{class:"token operator"},"==="),n(" yAxisData"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'{a|'"),n(),t("span",{class:"token operator"},"+"),n(" v"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token string"},"'}'"),t("span",{class:"token punctuation"},";"),n(`
                  `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'{b|'"),n(),t("span",{class:"token operator"},"+"),n(" v"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token string"},"'}'"),t("span",{class:"token punctuation"},";"),n(`
                  `),t("span",{class:"token punctuation"},"}"),n(`
                `),t("span",{class:"token punctuation"},"}"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"rich"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"a"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"fontWeight"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'bold'"),n(`
                `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"b"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"fontSize"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),n(`
                `),t("span",{class:"token punctuation"},"}"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"lineStyle"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"linear"'),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"x"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"y"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"x2"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"y2"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"colorStops"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
                  `),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token literal-property property"},"offset"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
                    `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#E6262C"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// 0% \u5904\u7684\u989C\u8272"),n(`
                  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token literal-property property"},"offset"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                    `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"#E6262C"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// 100% \u5904\u7684\u989C\u8272"),n(`
                  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"global"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// \u7F3A\u7701\u4E3A false"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"data"),t("span",{class:"token operator"},":"),n(" yAxisData"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token comment"},"// \u8BBE\u7F6E\u5B9E\u4F8B\u53C2\u6570"),n(`
      lineChart`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setOption"),t("span",{class:"token punctuation"},"("),n("option"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

   
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      drawLine
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"scoped"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scss"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},`
`)]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`

`)])])],-1),$=b('<h2 id="\u5C5E\u6027\u503C" tabindex="-1">\u5C5E\u6027\u503C <a class="header-anchor" href="#\u5C5E\u6027\u503C" aria-hidden="true">#</a></h2><h3 id="legend\u5C5E\u6027" tabindex="-1">legend\u5C5E\u6027 <a class="header-anchor" href="#legend\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>option</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>data</code></td><td>true</td><td>Array</td><td><code>\u8868\u683C\u6570\u636E</code></td></tr><tr><td><code>dialogClass</code></td><td>false</td><td>Number</td><td><code>\u5F39\u7A97class</code></td></tr></tbody></table><h3 id="tooltip\u5C5E\u6027" tabindex="-1">tooltip\u5C5E\u6027 <a class="header-anchor" href="#tooltip\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>data</code></td><td>true</td><td>Array</td><td><code>\u8868\u683C\u6570\u636E</code></td></tr><tr><td><code>dialogClass</code></td><td>false</td><td>Number</td><td><code>\u5F39\u7A97class</code></td></tr></tbody></table><h3 id="xaxis\u5C5E\u6027" tabindex="-1">xAxis\u5C5E\u6027 <a class="header-anchor" href="#xaxis\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>boundaryGap</code></td><td>false</td><td>Boolean</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>splitLine</code></td><td>false</td><td>Object</td><td><code>\u7F51\u683C\u7EBF</code></td></tr><tr><td><code>dialogClass</code></td><td>false</td><td>Number</td><td><code>\u5F39\u7A97class</code></td></tr></tbody></table><h3 id="yaxis\u5C5E\u6027" tabindex="-1">yAxis\u5C5E\u6027 <a class="header-anchor" href="#yaxis\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>axisTick</code></td><td>true</td><td>Array</td><td><code>y\u5750\u6807\u8F74\u523B\u7EBF</code></td></tr><tr><td><code>axisLabel</code></td><td>true</td><td>Object</td><td><code>formatter\u4E5F\u8981\u6574\u7406</code></td></tr><tr><td><code>axisLine</code></td><td>false</td><td>Number</td><td><code>lineStyle\u4E2D\u7684color\u5C5E\u6027</code></td></tr><tr><td><code>splitLine</code></td><td>true</td><td>Object</td><td><code>\u7F51\u683C\u7EBF</code></td></tr><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>formatter</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr></tbody></table><h3 id="grid\u5C5E\u6027" tabindex="-1">grid\u5C5E\u6027 <a class="header-anchor" href="#grid\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>left</code></td><td>false</td><td>Boolean</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>right</code></td><td>false</td><td>Object</td><td><code>\u7F51\u683C\u7EBF</code></td></tr><tr><td><code>bottom</code></td><td>false</td><td>Number</td><td><code>\u5F39\u7A97class</code></td></tr><tr><td><code>top</code></td><td>false</td><td>Number</td><td><code>\u63A7\u5236\u548Clegend\u4E4B\u95F4\u7684\u95F4\u8DDD</code></td></tr><tr><td><code>containLabel</code></td><td>false</td><td>Boolean</td><td><code>\u8981\u641C\u4E0B\u8FD9\u4E2A\u5C5E\u6027\u7684\u4F5C\u7528</code></td></tr></tbody></table><h3 id="series\u5C5E\u6027" tabindex="-1">series\u5C5E\u6027 <a class="header-anchor" href="#series\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>emphasis</code></td><td>false</td><td>Object</td><td>{}</td><td><code>\u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u56FE\u4E0A\u7684\u5706\u70B9</code></td></tr><tr><td><code>symbolSize</code></td><td>false</td><td>Function</td><td>symbolSize: () =&gt; {}</td><td><code>\u6298\u7EBF\u56FE\u6700\u540E\u4E00\u4E2A\u70B9\u653E\u5927\u663E\u793A\uFF0C\u5B57\u53F7\u8BBE\u7F6E</code></td></tr><tr><td><code>label</code></td><td>false</td><td>Object</td><td>[]</td><td><code>formatter fontSize color \u7B49\u5C5E\u6027\u7ECF\u5E38\u7528\u5230</code></td></tr></tbody></table>',13);function _(u,c,l,r,F,f){const i=E("render-demo-0"),o=E("demo");return v(),B("div",null,[D,h(o,{sourceCode:`<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const drawLine = (lineChart, lineList) => {
      xAxisData = lineList.map((v) => v.name);
      yAxisData = lineList.map((v) => v.value);
      let sizeArr = new Array(yAxisData.length).fill(5)
      sizeArr[yAxisData.length - 1] = 7
      window.onresize = function () {
        lineChart.resize();
      };
      const option = {
        title: {
          subtext: props.subtext ? props.subtext : "",
          left: "2%",
          top: "-1%",
          subtextStyle: {
            fontSize: 14,
            color: "#3c3c3c",
          },
        },
        color: ["#E60012", "#426DFF", "#FFA53F"],
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {
              show: true,
            },
          },
        },
        tooltip: {
          trigger: "axis",
          formatter(params) {
            let data = params[0];
            let date = data.name;
            let dom = "";
            dom = \`<div>\${date}</div><div>\${props.legendData}\uFF1A\${data.value}\${props.unit}</div>\`;
            return dom;
          },
          backgroundColor: "rgba(0,0,0,0.65)",
          borderWidth: 0,
          padding: [2, 8],
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          confine: true, //\u5BB9\u5668\u5185\u663E\u793A
          axisPointer: {
            // \u5750\u6807\u8F74\u6307\u793A\u5668\uFF0C\u5750\u6807\u8F74\u89E6\u53D1\u6709\u6548
            type: "line", // \u9ED8\u8BA4\u4E3A\u76F4\u7EBF\uFF0C\u53EF\u9009\u4E3A\uFF1A'line' | 'shadow'
            lineStyle: {
              // \u76F4\u7EBF\u6307\u793A\u5668\u6837\u5F0F\u8BBE\u7F6E
              color: "#E6262C",
              type: "dashed",
            },
            width: 2,
          },
        },
        xAxis: {
          type: "category",
          axisTick: { show: true }, //x\u5750\u6807\u8F74\u523B\u7EBF
          axisLabel: {
            show: true,
            // interval: 0,
            color: "#999999",
            fontSize: 10,
          },
          boundaryGap: false,
          splitLine: { show: false }, //\u7F51\u683C\u7EBF
          axisLine: {
            lineStyle: {
              color: "#e4e4e4",
            },
          },
          data: xAxisData,
        },
        yAxis: {
          // name: props.unit ? \`(\${props.unit})\` : "",
          name: "",
          show: yAxisData.length ? true : false,
          nameTextStyle: {
            color: "#A0A4AA",
            padding: [0, 30, 0, 0],
          },
          type: "value",
          axisTick: { show: false }, //y\u5750\u6807\u8F74\u523B\u7EBF
          axisLabel: {
            color: "#A0A4AA",
            fontSize: sizeScale(0.5),
            formatter(v) {
              v = v.toString();
              return \`\${v}\${props.unit}\`;
            },
          },
          min: 0,
          // scale: true,
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: "#eee",
            },
          },
          splitLine: {
            show: true, //\u7F51\u683C\u7EBF
            lineStyle: {
              color: ["#eee"],
              width: 1,
              type: "dashed",
            },
          },
        },
        grid: {
          left: "4%",
          right: "8%",
          bottom: "8%",
          top: props.subtext ? "18%" : "10%",
          containLabel: true,
        },
        series: [
          {
            type: "line",
            smooth: true,
            emphasis: {
              itemStyle: {
                // \u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u56FE\u4E0A\u7684\u5706\u70B9
                color: "#E6262C",
                borderWidth: 1,
                position: "center",
              },
            },
            symbolSize: (rawValue, params) => {
              if (props.chartTime !== 2) {
                params.symbolSize = sizeArr[params.dataIndex]
                return params.symbolSize
              } else {
                return 5
              }
            },
            label: {
              show: yAxisData.length < 8 ? true : false,
              fontSize: 10,
              color: "#E6262C",
              formatter(v) {
                if (props.unit == "%") {
                  if (v.dataIndex === yAxisData.length - 1) {
                    return '{a|' + \`\${v.value}\${props.unit}\` + '}';
                  } else {
                    return '{b|' + \`\${v.value}\${props.unit}\` + '}';
                  }
                } else {
                  if (v.dataIndex === yAxisData.length - 1) {
                    return '{a|' + v.value + '}';
                  } else {
                    return '{b|' + v.value + '}';
                  }
                }
              },
              rich: {
                a: {
                  fontSize: 12,
                  fontWeight: 'bold'
                },
                b: {
                  fontSize: 10
                }
              },
            },
            lineStyle: {
              width: 2,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#E6262C", // 0% \u5904\u7684\u989C\u8272
                  },
                  {
                    offset: 1,
                    color: "#E6262C", // 100% \u5904\u7684\u989C\u8272
                  },
                ],
                global: false, // \u7F3A\u7701\u4E3A false
              },
            },
            data: yAxisData,
          },
        ],
      };
      // \u8BBE\u7F6E\u5B9E\u4F8B\u53C2\u6570
      lineChart.setOption(option, true);
    }

   
    return {
      drawLine
    }
  },
})
<\/script>
<style scoped lang="scss">
</style>

`},{description:p(()=>[z]),highlight:p(()=>[L]),default:p(()=>[h(i)]),_:1}),$])}var N=C(S,[["render",_]]);export{I as __pageData,N as default};
