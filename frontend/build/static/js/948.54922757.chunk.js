"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[948,1181],{270:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var l=s(5043),r=s(9456),i=s(5618),a=s(2039),n=s(3297),c=s(200),o=s(2096),u=s(4235),d=s(1108),f=s(3216),h=s(579);const m=()=>{const[e,t]=(0,l.useState)(window.innerWidth<=768);(0,l.useEffect)((()=>{const e=()=>{t(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const s=(0,r.wA)(),m=(0,f.zy)(),{market:g,user:p}=(0,r.d4)((e=>e.login)),{clients_info:S}=(0,r.d4)((e=>e.clients)),{sellings:w}=(0,r.d4)((e=>e.sellings)),{currencyType:b,currency:y}=(0,r.d4)((e=>e.currency)),[x,k]=(0,l.useState)(0),[v,j]=(0,l.useState)(10),[z,P]=(0,l.useState)({id:"",client:""}),[A,C]=(0,l.useState)(S);console.log(S);const[T,E]=(0,l.useState)(!1),[Y,I]=(0,l.useState)({filter:"",sort:"",count:0}),[L,N]=(0,l.useState)(S),[D,M]=(0,l.useState)(""),[W,q]=(0,l.useState)(null),[J,O]=(0,l.useState)({usd:0,uzs:0}),[Q,_]=(0,l.useState)(!1),[B,F]=(0,l.useState)({}),G=[{title:"\u2116"},{title:(0,o.t)("Sana"),filter:"createdAt"},{title:(0,o.t)("ID"),filter:"id"},{title:(0,o.t)("Mijoz")},{title:(0,o.t)("Jami")},{title:(0,o.t)("Chegirma")},{title:(0,o.t)("Qarz")},{title:"",styles:"w-[7rem]"}],H=e=>{M("checkSell"),q(e),E(!T)},K=e=>{if(e===Y.filter)switch(Y.count){case 1:I({filter:e,sort:"1",count:2}),(0,c.Yc)(A,C,e,1,L);break;case 2:I({filter:e,sort:"",count:0}),(0,c.Yc)(A,C,e,"",L);break;default:I({filter:e,sort:"-1",count:1}),(0,c.Yc)(A,C,e,-1,L)}else I({filter:e,sort:"-1",count:1}),(0,c.Yc)(A,C,e,-1,L)};return(0,l.useEffect)((()=>{const e=m.state;let t={market:g,clientId:e};s((0,d.LY)(t))}),[s,g]),(0,l.useEffect)((()=>{C(S)}),[S]),(0,h.jsxs)("div",{className:"relative overflow-auto ",children:[Q&&(0,h.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,h.jsx)(u.A,{})}),(0,h.jsx)("div",{className:"lg:ps-[20px] lg:tableContainerPadding ",children:A.length>0&&(e?(0,h.jsx)(n.A,{page:"clientssales",headers:G,data:A,currentPage:x,countPage:v,currency:b,reports:!0,Print:H,Sort:K,sortItem:Y}):(0,h.jsx)(a.A,{page:"clientssales",headers:G,data:A,currentPage:x,countPage:v,currency:b,reports:!0,Print:H,Sort:K,sortItem:Y,totalDebt:J}))}),(0,h.jsx)(i.A,{body:D,toggleModal:"sell"===D?()=>{M(""),E(!T),setTimeout((()=>{}),500)}:"complete"===D?()=>{E(!1),setTimeout((()=>{M("")}),500)}:"allChecks"===D?()=>{E(!T),M(""),M(null)}:()=>{E(!T),M(""),q(null)},isOpen:T,payment:W,printedSelling:"dailySaleCheck"===D?B:W,product:W,headers:G,headerText:"complete"===D&&"To'lovni amalga oshirishni tasdiqlaysizmi?",title:"complete"===D&&"To'lovni amalga oshirgach bu ma`lumotlarni o'zgaritirib bo'lmaydi!"})]})}}}]);
//# sourceMappingURL=948.54922757.chunk.js.map