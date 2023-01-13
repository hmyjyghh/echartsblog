import{V as _}from"./framework.e9b226b1.js";import{_ as I,b as J,A as L,I as B,aK as K,G as N,o as U,g as n,f as t}from"./plugin-vue_export-helper.bec912ab.js";import"./framework.e4c32923.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:u,createElementVNode:p,renderList:w,Fragment:x,openBlock:d,createElementBlock:m,resolveComponent:l,normalizeClass:f,createVNode:T,normalizeStyle:q,withCtx:y}=_,R={class:"app"},S={style:{display:"flex","align-items":"center"}},j={style:{display:"flex","flex-direction":"column","align-items":"center"}};function z(s,h){const g=l("van-icon"),v=l("Tables");return d(),m("div",null,[p("div",R,[T(v,{finished:s.finished,"finished-text":s.finishedText,loading:s.loading,rules:s.rules,data:s.processChartList,onOnLoad:s.onLoad,onTrClick:s.handleTrClick},{voteNum:y(({scoped:{item:o}})=>[p("div",S,[p("span",null,u(o.name),1),p("div",j,[(d(),m(x,null,w(2,(r,e)=>T(g,{key:e,ref_for:!0,ref:"calendar"+e,class:f(s.sortActive===e?`calendar-${e} sortActive`:`calendar-${e}`),name:"play",onClick:i=>s.handleSort(e)},null,8,["class","onClick"])),64))])])]),totalBillCount:y(({scoped:{item:o}})=>[p("span",null,u(o.totalBillCount>=100?s.unitConversion(o.totalBillCount)+"\u4E07":o.totalBillCount),1)]),occupancyRate:y(({scoped:{item:o}})=>[p("p",null,u(o.occupancyRate+"%"),1),p("div",null,[p("p",{style:q({width:o.occupancyRate+"%"})},null,4)])]),_:1},8,["finished","finished-text","loading","rules","data","onOnLoad","onTrClick"])])])}const{defineComponent:O,onMounted:Z,reactive:nn,ref:c,computed:$}=_,M=O({name:"App",setup(){const s=$(()=>a=>(a/100).toFixed(2)),h=c(-1),g=a=>{h.value=a,C.value.sort((k,F)=>a?F.totalBillCount-k.totalBillCount:k.totalBillCount-F.totalBillCount)},v=a=>{alert("\u8DF3\u8F6C\u65B9\u6CD5")},o=c(!1),r=c(!1),e=c("\u6CA1\u6709\u66F4\u591A\u4E86"),i=c(0),E=c(20),A=c(0),V={menuFiexd:!0,menuList:[{name:"\u5BA2\u6237\u540D\u79F0",sort:!1,width:30},{name:"\u603B\u7968\u6570\uFF08\u4EF6\uFF09",sort:!0,prop:"voteNum",width:40},{name:"\u5360\u6BD4",sort:!1,width:30}],columnList:[{prop:"statisticObjectName",slot:!1,width:30},{prop:"totalBillCount",slot:!0,width:40},{prop:"occupancyRate",slot:!0,width:30}]},C=c([]);function G(a){return new Promise((k,F)=>{let D=[];for(let b=0;b<E.value;b++)D.push({statisticObjectName:"\u5F20\u4E09"+(b*1+1),totalBillCount:Math.floor(Math.random()*130)+1,occupancyRate:35});setTimeout(()=>{k({code:1,total:30,records:D})},a)})}async function P(){await G(1e3).then(a=>{o.value=!1,a&&a.records.length?(A.value=a.total,C.value.push(...a.records),e.value="\u6CA1\u6709\u66F4\u591A\u4E86"):a||(e.value="\u52A0\u8F7D\u5931\u8D25",r.value=!0)})}return{unitConversion:s,processChartList:C,finished:r,finishedText:e,loading:o,rules:V,onLoad:async()=>{o.value=!0,i.value&&A.value<=i.value*E.value?r.value=!0:(i.value++,await P())},handleTrClick:v,handleSort:g,sortActive:h}}});return{render:z,...M}}()}},en='{"title":"\u5C5E\u6027\u503C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027\u503C","slug":"\u5C5E\u6027\u503C"},{"level":2,"title":"Option \u5C5E\u6027\u503C","slug":"option-\u5C5E\u6027\u503C"}],"relativePath":"components/Tables/index.md","lastUpdated":1665311223139}',H=n("div",null,[t("\u4F7F\u7528"),n("code",null,"dataModel"),t("\uFF0C"),n("code",null,"dataTotalList"),t("\uFF0C"),n("code",null,"dataDetailList"),t("\u6765\u5B9A\u4E49 CustomerDataOverview \u7684\u6837\u5F0F")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("app"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Tables")]),t(`
              `),n("span",{class:"token attr-name"},":finished"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("finished"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},":finished-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("finishedText"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rules"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("processChartList"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},"@on-load"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onLoad"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},"@tr-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleTrClick"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#voteNum"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ scoped: { item } }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("{{ item.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" column"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("van-icon")]),t(`
                      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(key, index) in 2"),n("span",{class:"token punctuation"},'"')]),t(`
                      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(`
                      `),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("calendar' + index"),n("span",{class:"token punctuation"},'"')]),t(`
                      `),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\n                        sortActive === index ? `calendar-${index} sortActive` : `calendar-${index}`\n                      "),n("span",{class:"token punctuation"},'"')]),t(`
                      `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("play"),n("span",{class:"token punctuation"},'"')]),t(`
                      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSort(index)"),n("span",{class:"token punctuation"},'"')]),t(`
                    `),n("span",{class:"token punctuation"},"/>")]),t(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#totalBillCount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ scoped: { item } }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`{{
                  item.totalBillCount >= 100
                    ? unitConversion(item.totalBillCount) + '\u4E07'
                    : item.totalBillCount
                }}`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#occupancyRate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ scoped: { item } }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ item.occupancyRate + '%' }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ width: item.occupancyRate + '%' }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Tables")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`

`),n("span",{class:"token comment"},"// import { defineComponent } from 'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t("computed "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'App'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
     `),n("span",{class:"token keyword"},"const"),t(" unitConversion "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"num"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token comment"},"//\u5347\u5E8F\u964D\u5E8F"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" sortActive "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSort"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"sortType"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      sortActive`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` sortType
      processChartList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"a"),n("span",{class:"token operator"},":"),t(" any"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"b"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" sortType "),n("span",{class:"token operator"},"?"),t(" b"),n("span",{class:"token punctuation"},"."),t("totalBillCount "),n("span",{class:"token operator"},"-"),t(" a"),n("span",{class:"token punctuation"},"."),t("totalBillCount "),n("span",{class:"token operator"},":"),t(" a"),n("span",{class:"token punctuation"},"."),t("totalBillCount "),n("span",{class:"token operator"},"-"),t(" b"),n("span",{class:"token punctuation"},"."),t(`totalBillCount
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token comment"},"//\u8DF3\u8F6C"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleTrClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
     `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8DF3\u8F6C\u65B9\u6CD5'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token comment"},"//\u83B7\u53D6\u8868\u683C\u5217\u8868"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" finished "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" finishedText "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6CA1\u6709\u66F4\u591A\u4E86'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      size `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      total `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" rules "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"menuFiexd"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"menuList"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5BA2\u6237\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"sort"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
           `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u603B\u7968\u6570\uFF08\u4EF6\uFF09'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"sort"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'voteNum'"),n("span",{class:"token punctuation"},","),t(`
           `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5360\u6BD4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"sort"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
           `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"columnList"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'statisticObjectName'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"slot"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'totalBillCount'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"slot"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
           `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'occupancyRate'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"slot"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
           `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"processChartList"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"timeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"times"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t("reject")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"let"),t(" records "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t("i"),n("span",{class:"token operator"},"<"),t("size"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t("i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
          records`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"statisticObjectName"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token operator"},"+"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"totalBillCount"),n("span",{class:"token operator"},":"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"130"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"occupancyRate"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"35"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"total"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(`
              records
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t("times"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
     `),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"GetTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"timeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
          loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
          `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("res "),n("span",{class:"token operator"},"&&"),t(" res"),n("span",{class:"token punctuation"},"."),t("records"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            total`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},"."),t(`total
            processChartList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),t("res"),n("span",{class:"token punctuation"},"."),t("records"),n("span",{class:"token punctuation"},")"),t(`
            finishedText`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u6CA1\u6709\u66F4\u591A\u4E86'"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            finishedText`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u52A0\u8F7D\u5931\u8D25'"),t(`
            finished`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onLoad"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token comment"},"// \u5F02\u6B65\u66F4\u65B0\u6570\u636E"),t(`
      `),n("span",{class:"token comment"},"// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("current"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"&&"),t(" total"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"<="),t(" current"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"*"),t(" size"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        finished`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        current`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
        `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"GetTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      unitConversion`),n("span",{class:"token punctuation"},","),t(`
     processChartList`),n("span",{class:"token punctuation"},","),t(`
      finished`),n("span",{class:"token punctuation"},","),t(`
      finishedText`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      rules`),n("span",{class:"token punctuation"},","),t(`
      onLoad`),n("span",{class:"token punctuation"},","),t(`
      handleTrClick`),n("span",{class:"token punctuation"},","),t(`
     
      handleSort`),n("span",{class:"token punctuation"},","),t(`
      sortActive`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".calendar-0"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" $font14"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t(" 3px"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token function"},"rotate"),n("span",{class:"token punctuation"},"("),t("-90deg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".calendar-1"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" $font14"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t(" -3px"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token function"},"rotate"),n("span",{class:"token punctuation"},"("),t("90deg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),t(" -1px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".sortActive"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #e60012"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".infoTab"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #f5f6f9"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".TicketVolumeTrend"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),t("100% - 24px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 5px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0 auto"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #fff"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".app  .TicketTable .td_occupancyRate"),t(),n("span",{class:"token punctuation"},"{"),t(`
   
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" normal "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),t(" wrap"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"align-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" flex-end"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token selector"},"> p"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"padding-bottom"),n("span",{class:"token punctuation"},":"),t(" 5px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token selector"},"div"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 4.17px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #e4e4e4"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token selector"},"> p"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #e60012"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
 `),n("span",{class:"token selector"},".TicketTable"),t(),n("span",{class:"token punctuation"},"{"),t(`
   `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t("375px "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
   `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t("667px"),n("span",{class:"token punctuation"},";"),t(`
   `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t("1px solid #ddd"),n("span",{class:"token punctuation"},";"),t(`
   `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t("auto"),n("span",{class:"token punctuation"},";"),t(`
  
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".TicketTable th,.TicketTable td"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t("none "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".TicketTable tr"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t("none "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".TicketTable tr td:nth-child(2)"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" space-around"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},"thead th"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t("center"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=K('<h2 id="\u5C5E\u6027\u503C" tabindex="-1">\u5C5E\u6027\u503C <a class="header-anchor" href="#\u5C5E\u6027\u503C" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>option</code></td><td>true</td><td>Object</td><td><code>\u5217\u914D\u7F6E</code></td></tr><tr><td><code>data</code></td><td>true</td><td>Array</td><td><code>\u8868\u683C\u6570\u636E</code></td></tr><tr><td><code>dialogClass</code></td><td>false</td><td>Number</td><td><code>\u5F39\u7A97class</code></td></tr><tr><td><code>value</code></td><td>false</td><td>String</td><td><code>\u5F39\u7A97\u8868\u5355\u4F20\u5165\u7684\u503C</code></td></tr><tr><td><code>spanMethod</code></td><td>false</td><td>Function</td><td><code>\u5408\u5E76\u5355\u5143\u683C\u7684\u65B9\u6CD5</code></td></tr><tr><td><code>summaryMethod</code></td><td>false</td><td>Function</td><td><code>\u5408\u8BA1\u7684\u65B9\u6CD5</code></td></tr><tr><td><code>beforeClose</code></td><td>false</td><td>Function</td><td><code>\u5F39\u7A97\u5173\u95ED\u4E4B\u524D</code></td></tr><tr><td><code>beforeOpen</code></td><td>false</td><td>Function</td><td><code>\u5F39\u7A97\u5F00\u542F\u4E4B\u524D</code></td></tr><tr><td><code>rowClassName</code></td><td>false</td><td>Function</td><td><code>\u884C\u7C7B\u540D</code></td></tr><tr><td><code>cellClassName</code></td><td>false</td><td>Function</td><td><code>\u5355\u5143\u683C\u7C7B\u540D</code></td></tr><tr><td><code>headerCellClassName</code></td><td>false</td><td>Function</td><td><code>\u884C\u7C7B\u540D</code></td></tr><tr><td><code>uploadBefore</code></td><td>false</td><td>Function</td><td><code>\u5F00\u59CB\u4E0A\u4F20\u4E4B\u524D</code></td></tr><tr><td><code>uploadAfter</code></td><td>false</td><td>Function</td><td><code>\u4E0A\u4F20\u540E</code></td></tr><tr><td><code>page</code></td><td>false</td><td>Object</td><td><code>\u5206\u9875\u5BF9\u8C61{size, current, total}</code></td></tr><tr><td><code>tableLoading</code></td><td>false</td><td>Boolean</td><td><code>\u8868\u683C\u72B6\u6001</code></td></tr><tr><td><code>exportLoading</code></td><td>false</td><td>Boolean</td><td><code>\u5BFC\u51FA\u72B6\u6001</code></td></tr><tr><td><code>pageLoading</code></td><td>false</td><td>Boolean</td><td><code>\u5206\u9875\u72B6\u6001</code></td></tr></tbody></table><h2 id="option-\u5C5E\u6027\u503C" tabindex="-1">Option \u5C5E\u6027\u503C <a class="header-anchor" href="#option-\u5C5E\u6027\u503C" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E.</th></tr></thead><tbody><tr><td><code>defaultMaxWidth</code></td><td>false</td><td>Number</td><td>90</td><td><code>\u8868\u683C\u5217\u5934\u7701\u7565\u63D0\u793A\u9608\u503C\uFF08\u5F53\u5217\u5C0F\u4E8E10\uFF0C\u9ED8\u8BA4\u662F140\u7684\u5BBD\u5EA6\uFF09</code></td></tr><tr><td><code>dynamicColumnTableId</code></td><td>false</td><td>String</td><td>&#39;&#39;</td><td><code>\u8868\u683C\u6807\u8BC6id\uFF0C\u5EFA\u8BAE\uFF0C\u8DEF\u7531+\u6A21\u5757\u540D\u79F0\u6765\u533A\u5206\uFF08basic-authSetting\uFF09</code></td></tr><tr><td><code>isOpenNewDynamicColumn</code></td><td>false</td><td>Boolean</td><td>false</td><td><code>\u662F\u5426\u6253\u5F00\u52A8\u6001\u5217\uFF08\u56FD\u5185JMS\u8FD8\u9700\u8981\u66F4\u6362\u7EC4\u4EF6\u540D\u79F0\uFF1Aavue-new-table\uFF09</code></td></tr><tr><td><code>column</code></td><td>false</td><td>Array</td><td>[]</td><td><code>\u8868\u683C/\u8868\u5355\u7684\u5B57\u6BB5\u914D\u7F6E</code></td></tr></tbody></table>',4);function Y(u,p,w,x,d,m){const l=N("render-demo-0"),f=N("demo");return U(),J("div",null,[L(f,{sourceCode:`
<template>

    <div class="app">
  <Tables
              :finished="finished"
              :finished-text="finishedText"
              :loading="loading"
              :rules="rules"
              :data="processChartList"
              @on-load="onLoad"
              @tr-click="handleTrClick"
            >
              <template #voteNum="{ scoped: { item } }">
                <div style="display: flex; align-items: center">
                  <span>{{ item.name }}</span>
                  <div style="display: flex; flex-direction: column; align-items: center">
                    <van-icon
                      v-for="(key, index) in 2"
                      :key="index"
                      :ref="'calendar' + index"
                      :class="
                        sortActive === index ? \`calendar-\${index} sortActive\` : \`calendar-\${index}\`
                      "
                      name="play"
                      @click="handleSort(index)"
                    />
                  </div>
                </div>
              </template>

              <template #totalBillCount="{ scoped: { item } }">
                <span>{{
                  item.totalBillCount >= 100
                    ? unitConversion(item.totalBillCount) + '\u4E07'
                    : item.totalBillCount
                }}</span>
              </template>
              <template #occupancyRate="{ scoped: { item } }">
                <p>{{ item.occupancyRate + '%' }}</p>
                <div><p :style="{ width: item.occupancyRate + '%' }"></p></div>
              </template>
            </Tables>
  </div>
</template>
<script lang="ts">

// import { defineComponent } from 'vue'
import { defineComponent, onMounted, reactive, ref,computed } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
     const unitConversion = computed(() => (num: number) => {
      return (num / 100).toFixed(2)
    })
    //\u5347\u5E8F\u964D\u5E8F
    const sortActive = ref(-1)
    const handleSort = (sortType: number) => {
      sortActive.value = sortType
      processChartList.value.sort((a: any, b: any) => {
        return sortType ? b.totalBillCount - a.totalBillCount : a.totalBillCount - b.totalBillCount
      })
    }
    //\u8DF3\u8F6C
    const handleTrClick = (item: any) => {
     alert('\u8DF3\u8F6C\u65B9\u6CD5')
    }

    //\u83B7\u53D6\u8868\u683C\u5217\u8868
    const loading = ref(false)
    const finished = ref(false)
    const finishedText = ref('\u6CA1\u6709\u66F4\u591A\u4E86')
    const current = ref(0),
      size = ref(20),
      total = ref(0)
    const rules = {
      menuFiexd: true,
      menuList: [
        {
          name: '\u5BA2\u6237\u540D\u79F0',
          sort: false,
           width:30,
        },
        {
          name: '\u603B\u7968\u6570\uFF08\u4EF6\uFF09',
          sort: true,
          prop: 'voteNum',
           width:40,
        },
        {
          name: '\u5360\u6BD4',
          sort: false,
           width:30,
        },
      ],
      columnList: [
        {
          prop: 'statisticObjectName',
          slot: false,
          width:30,
        },
        {
          prop: 'totalBillCount',
          slot: true,
           width:40,
        },
        {
          prop: 'occupancyRate',
          slot: true,
           width:30,
        },
      ],
    }
    const processChartList: any = ref([])

    function timeout(times){
      return new Promise((resolve,reject)=>{
        let records = []
        for(let i =0;i<size.value;i++){
          records.push({
            statisticObjectName:'\u5F20\u4E09'+(i*1+1),
            totalBillCount:Math.floor(Math.random() * 130) + 1,
            occupancyRate:35
          })
        }
        setTimeout(()=>{
            resolve({
              code:1,
              total:30,
              records
            })
      },times)
      })
    }
     async function GetTableData() {
        await timeout(1000).then(res=>{
          loading.value = false
          if (res && res.records.length) {
            total.value = res.total
            processChartList.value.push(...res.records)
            finishedText.value = '\u6CA1\u6709\u66F4\u591A\u4E86'
          } else if (!res) {
            finishedText.value = '\u52A0\u8F7D\u5931\u8D25'
            finished.value = true
          }
        })
    }
    const onLoad = async () => {
      loading.value = true
      // \u5F02\u6B65\u66F4\u65B0\u6570\u636E
      // \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210

      if (current.value && total.value <= current.value * size.value) {
        finished.value = true
      } else {
        current.value++
        await GetTableData()
      }
    }

    return {
      unitConversion,
     processChartList,
      finished,
      finishedText,
      loading,
      rules,
      onLoad,
      handleTrClick,
     
      handleSort,
      sortActive,
    }
  },
})
<\/script>
<style scoped lang="scss">
.calendar-0 {
  font-size: $font14;
  transform: translate(0, 3px) rotate(-90deg);
}
.calendar-1 {
  font-size: $font14;
  transform: translate(0, -3px) rotate(90deg);
  margin-left: -1px;
}
.sortActive {
  color: #e60012;
}
.infoTab {
  height: 100%;
  background: #f5f6f9;
}
.TicketVolumeTrend {
  width: calc(100% - 24px);
  border-radius: 5px;
  margin: 0 auto;
  background: #fff;
}

.app  .TicketTable .td_occupancyRate {
   
    line-height: normal !important;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
    > p {
      width: 50px;
      text-align: center;
      float: right;
      padding-bottom: 5px;
    }
    div {
      float: right;
      width: 50px;
      height: 4.17px;
      background: #e4e4e4;
      > p {
        height: 100%;
        width: 100%;
        background: #e60012;
      }
    }
}
</style>
<style>
 .TicketTable {
   width:375px !important;
   height:667px;
   border:1px solid #ddd;
   margin:auto;
  
}
.TicketTable th,.TicketTable td{
  border:none !important;
}
.TicketTable tr {
    background:none !important;
}
.TicketTable tr td:nth-child(2) {
    justify-content: space-around;
}
thead th{
  align-items:center;
}
</style>
`},{description:B(()=>[H]),highlight:B(()=>[Q]),default:B(()=>[L(l)]),_:1}),X])}var pn=I(W,[["render",Y]]);export{en as __pageData,pn as default};
