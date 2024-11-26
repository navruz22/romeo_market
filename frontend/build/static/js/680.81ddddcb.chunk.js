"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[680],{680:(e,l,t)=>{t.r(l),t.d(l,{default:()=>p});var r=t(5043),n=t(7595),a=t(411),o=t(9092),s=t(579);const i=function(e){let{arr:l,label:t}=e;const{t:r}=(0,o.B)(["common"]);n.t1.register(n.PP,n.kc,n.FN,n.No,n.hE,n.m_,n.dN,n.s$);const i={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"bottom"},datalabels:{display:!1},title:{display:!0,text:t,padding:{bottom:30},font:{size:16,lineHeight:2},color:"rgba(28, 28, 28, 0.7)"},tooltip:{mode:"index",intersect:!1}},hover:{mode:"index",intersect:!1},scales:{y:{min:0,ticks:{callback:e=>e.toLocaleString("ru-Ru"),beginAtZero:!0}}}},d={labels:[r("Yanvar"),r("Fevral"),r("Mart"),r("Aprel"),r("May"),r("Iyun"),r("Iyul"),r("Avgust"),r("Sentabr"),r("Oktabr"),r("Noyabr"),r("Dekabr")].slice(0,(new Date).getMonth()+1),datasets:[{fill:!0,data:l,borderColor:"rgb(0,144,163)",backgroundColor:"rgba(0, 180, 204, 0.5)"}]};return(0,s.jsx)(a.N1,{options:i,data:d})};const d=function(e){let{label:l,text:t,nth:r}=e;return(0,s.jsx)("div",{className:`daily-circle p-2 rounded-full border-[5.5px] bg-transparent shadow-inner-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[1px] flex items-center justify-center ${(e=>{switch(e){case 1:return"border-warning-400 shadow-[0_0_25px_rgba(253,176,34,0.5)]";case 2:return"border-success-400 shadow-[0_0_25px_rgba(18,183,106,0.5)]";case 3:return"border-error-400 shadow-[0_0_25px_rgba(240,68,56,0.5)]";default:return"border-primary-700 shadow-[0_0_25px_rgba(0,180,204,0.5)]"}})(r)}`,children:(0,s.jsxs)("div",{className:"main-circle w-[10.625rem] h-[10.625rem] bg-background shadow-[0_30px_50px_rgba(0,0,0,0.25)] hover:shadow-none transition-all ease-linear duration-200 rounded-full flex items-center justify-center flex-col",children:[(0,s.jsx)("h3",{className:"text-black-700 font-medium text-[1.5rem] leading-[2.375rem]",children:t}),(0,s.jsx)("h5",{className:"text-black-500 text-[1rem] leading-[1.75rem]",children:l})]})})};var u=t(9456),c=t(6752),v=t(7624),m=t(3536),x=t(7893);const g=function(e){let{arr:l=[0]}=e;const{t:t}=(0,o.B)(["common"]),{currencyType:r}=(0,u.d4)((e=>e.currency));n.t1.register(n.Bs,n.m_,n.s$,x.A);const i={labels:[t("Xarajatlar"),t("Sof foyda")],datasets:[{data:l,datalabels:{font:{size:18},color:l.length>1&&l.some((e=>0!==e))?"#ffffff":"#1c1c1c",formatter:e=>(null===e||void 0===e?void 0:e.toLocaleString("ru-Ru"))+"\n"+r,textAlign:"center",clamp:!0,align:"center"},backgroundColor:["rgba(240, 68, 56, 0.5)","rgba(18, 183, 106, 0.5)"],borderColor:["rgba(240, 68, 56, 1)","rgba(18, 183, 106, 1)"],borderWidth:1}]};return(0,s.jsx)(a.Fq,{data:i,options:{responsive:!0,maintainAspectRatio:!1}})};const p=function(){var e,l,t,n,a,x,p,b,h,f,y,w,S,j,_,k,N;const{t:D}=(0,o.B)(["common"]),R=[D("Yanvar"),D("Fevral"),D("Mart"),D("Aprel"),D("May"),D("Iyun"),D("Iyul"),D("Avgust"),D("Sentabr"),D("Oktabr"),D("Noyabr"),D("Dekabr")],A=(0,u.wA)(),{reports:L,monthlyReport:z}=(0,u.d4)((e=>e.reports)),{currencyType:M}=(0,u.d4)((e=>e.currency)),$=()=>z?"USD"===M?(0,m.map)(z.salesSum,(e=>e.usd)):(0,m.map)(z.salesSum,(e=>e.uzs)):[];return(0,r.useEffect)((()=>{const e={startDate:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()).toISOString(),endDate:(new Date).toISOString()};A((0,c.Q4)(e)),A((0,v.OY)()),A((0,c.er)())}),[A]),(0,s.jsxs)("section",{className:" mt-[30px]  flex  flex-col gap-[5rem] overflow-y-auto ",children:[(0,s.jsxs)("div",{className:"circle-mobile flex lg:justify-center p-[30px]  gap-[3.1rem]",children:[(0,s.jsx)(d,{text:null===L||void 0===L||null===(e=L.sale)||void 0===e?void 0:e.salecount,label:D("Sotuvlar soni")}),(0,s.jsx)(d,{nth:1,text:"UZS"===M?null===L||void 0===L||null===(l=L.sale)||void 0===l||null===(t=l.saleuzs)||void 0===t?void 0:t.toLocaleString("ru-Ru"):null===L||void 0===L||null===(n=L.sale)||void 0===n||null===(a=n.sale)||void 0===a?void 0:a.toLocaleString("ru-Ru"),label:D("Sotuv summasi")}),(0,s.jsx)(d,{nth:2,text:"UZS"===M?null===L||void 0===L||null===(x=L.income)||void 0===x||null===(p=x.incomeuzs)||void 0===p?void 0:p.toLocaleString("ru-Ru"):null===L||void 0===L||null===(b=L.income)||void 0===b||null===(h=b.income)||void 0===h?void 0:h.toLocaleString("ru-Ru"),label:D("Sof foyda")}),(0,s.jsx)(d,{nth:3,text:"UZS"===M?null===L||void 0===L||null===(f=L.expenses)||void 0===f||null===(y=f.expensesuzs)||void 0===y?void 0:y.toLocaleString("ru-Ru"):null===L||void 0===L||null===(w=L.expenses)||void 0===w||null===(S=w.expenses)||void 0===S?void 0:S.toLocaleString("ru-Ru"),label:D("Xarajatlar")})]}),(0,s.jsx)("div",{className:"h-[25rem] p-[20px]  mt-[-100px]  lg:mt-[0px]",children:(0,s.jsx)(i,{label:[D("Oylik sotuvlar soni"),`${R[(new Date).getMonth()]} : ${(null===z||void 0===z?void 0:z.sales.length)>0?z.sales[z.sales.length-1]:0}`],arr:null===z||void 0===z?void 0:z.sales})}),(0,s.jsxs)("div",{className:"flex p-[20px] lg:flex-nowrap flex-wrap gap-[5%] h-[25rem]",children:[(0,s.jsx)("div",{className:"lg:w-[60%] w-[100%] h-[25rem] mb-8",children:(0,s.jsx)(i,{label:[D("Oylik sotuvlar summasi"),`${R[(new Date).getMonth()]} : ${(()=>{const e=$();return e.length>0?e[e.length-1].toLocaleString("ru-Ru"):0})()} ${M}`],arr:$()})}),(0,s.jsx)("div",{className:"lg:w-[30%] w-[50rem] h-[25rem]  pb-5",children:(0,s.jsx)(g,{arr:["UZS"===M?null===z||void 0===z||null===(j=z.monthExpense)||void 0===j?void 0:j.uzs:null===z||void 0===z||null===(_=z.monthExpense)||void 0===_?void 0:_.usd,"UZS"===M?null===z||void 0===z||null===(k=z.monthProfit)||void 0===k?void 0:k.uzs:null===z||void 0===z||null===(N=z.monthProfit)||void 0===N?void 0:N.usd]})})]})]})}}}]);
//# sourceMappingURL=680.81ddddcb.chunk.js.map