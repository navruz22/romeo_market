"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[919,6895],{4012:(e,a,t)=>{t.d(a,{A:()=>n});t(5043);var s=t(7805),l=t(7149),r=t(579);const n=e=>{let{onClick:a,text:t,add:n,edit:i,bell:o,count:c}=e;return(0,r.jsxs)("button",{onClick:a,className:"focus-visible:outline-none "+(n?"createElement":i?"edit-button":"clearElement"),children:[o?(0,r.jsxs)("div",{className:"plusIcon relative pr-2",children:[(0,r.jsx)(s.Jk1,{size:18}),0!==c&&(0,r.jsx)("span",{className:"absolute bg-primary-800 text-white-900 w-[15px] h-[15px] rounded-full text-[10px] top-0",children:c})]}):n&&!i?(0,r.jsx)("div",{className:"plusIcon",children:(0,r.jsx)(s.Ca6,{})}):n||i?"":(0,r.jsx)("div",{className:"plusIcon",children:(0,r.jsx)(l.rOP,{})}),t]})}},126:(e,a,t)=>{t.d(a,{A:()=>n});var s=t(221),l=t(9092),r=t(579);const n=function(e){let{onClick:a,isDisabled:t}=e;const{t:n}=(0,l.B)(["common"]);return(0,r.jsxs)("button",{className:"group print-btn-style ml-auto min-w-max  "+(t?"pointer-events-none":"pointer-events-auto"),onClick:a,disabled:t,children:[(0,r.jsx)("span",{className:"print-text-style",children:n("Chop etish")}),(0,r.jsx)("span",{className:"print-icon-style ",children:(0,r.jsx)(s.wv0,{size:"1.125rem",className:"text-primary-800 text-lg transition-all ease-in-out duration-200 group-hover:text-primary-900"})})]})}},6926:(e,a,t)=>{t.d(a,{Z:()=>n,g:()=>r});t(5043);var s=t(2127),l=t(579);const r=e=>{let{onClick:a,text:t}=e;return(0,l.jsxs)("button",{onClick:a,className:"bg-warning-500 shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all ease-in-out duration-200 active:shadow-none hover:bg-warning-600 p-[10px] flex items-center justify-center gap-[0.3125rem] text-white-900 rounded-[0.5rem]",children:[(0,l.jsx)(s.Mqx,{className:"text-white-900",size:"1.125rem"})," ",(0,l.jsx)("span",{className:"text-sm leading-[1.125rem]",children:t})]})},n=e=>{let{onClick:a,text:t}=e;return(0,l.jsxs)("button",{onClick:a,className:"bg-primary-800 flex items-center gap-[0.3125rem] justify-center p-[10px] text-white-900 rounded-[0.5rem] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all ease-in-out duration-200 active:shadow-none hover:bg-primary-900",children:[(0,l.jsx)(s.o_h,{className:"text-white-900",size:"1.125rem"})," ",(0,l.jsx)("span",{className:"text-sm leading-[1.125rem]",children:t})]})}},7990:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(221),l=t(579);const r=function(e){let{onChange:a,value:t,label:r,id:n}=e;return(0,l.jsxs)("div",{className:"checkbox",children:[(0,l.jsx)("input",{type:"checkbox",className:"hidden",id:n,onChange:a,checked:t}),(0,l.jsx)("label",{htmlFor:n,children:(0,l.jsx)("span",{className:"checkbox-icon",children:(0,l.jsx)(s.KDk,{size:"1rem"})})}),(0,l.jsx)("span",{className:"checkbox-label",children:r})]})}},9762:(e,a,t)=>{t.d(a,{A:()=>i});t(5043);var s=t(1899),l=t.n(s),r=t(221),n=(t(5015),t(579));const i=function(e){let{value:a,onChange:t,placeholder:s,maxWidth:i}=e;return(0,n.jsxs)("div",{className:`group relative ${i||"grow"}`,children:[(0,n.jsx)(l(),{selected:a,placeholderText:s,onChange:t,className:"datePickerStyle",dateFormat:"dd.MM.yyyy"}),(0,n.jsx)(r.ib,{size:"0.625rem",className:"datePickerIcon group-hover:text-blue-500"})]})}},7630:(e,a,t)=>{t.d(a,{A:()=>n});var s=t(7623),l=t(919),r=t(579);const n=function(e){let{star:a,maxWidth:t,value:n,onChange:i,label:o,placeholder:c,type:d,select:h,disabled:m,options:u,border:x,onKeyUp:p,autoComplete:g}=e;return(0,r.jsx)("div",{className:t?`${t}   `:"grow",children:h?(0,r.jsx)(l.A,{placeholder:c,onSelect:i,label:o,isDisabled:m,options:u,value:n}):(0,r.jsx)(s.A,{star:a,type:d||"text",value:n,onChange:i,label:o,placeholder:c,onKeyUp:p,disabled:m,autoComplete:g})})}},2926:(e,a,t)=>{t.d(a,{A:()=>l});t(5043);var s=t(579);const l=function(e){let{label:a,element:t,grow:l}=e;return(0,s.jsxs)("div",{className:" "+(l?"grow ":""),children:[a&&(0,s.jsxs)("h3",{className:" font-light mb-[10px]  text-blue-700 leading-[1rem] text-sm",children:[a,":"]}),t]})}},7623:(e,a,t)=>{t.d(a,{A:()=>n});var s=t(5043),l=t(221),r=t(579);const n=function(e){let{star:a,placeholder:t,type:n,value:i,onChange:o,password:c,label:d,onKeyUp:h,disabled:m,autoComplete:u}=e;const[x,p]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:"input-container",children:[d&&(0,r.jsx)("label",{className:"labelClass leading-[1.125rem] "+(a?" after:content-['*'] after:text-[#F04438] after:pl-[0.25rem]":""),children:d}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{placeholder:t,type:x?"text":n,value:i,onChange:o,onKeyUp:h,disabled:m,className:(m?"disabled-class":"")+" inputClass shadow-[0_10px_10px_rgba(0,0,0,0.05)] leading-[1.125rem]",onWheel:e=>e.target.blur(),min:0,autoComplete:u||"off"}),c&&(0,r.jsx)("button",{className:"iconButton",type:"button",onClick:()=>{p(!x)},children:x?(0,r.jsx)(l.GNz,{className:"iconClass"}):(0,r.jsx)(l.Xyd,{className:"iconClass"})})]})]})}},827:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(221),l=t(579);const r=function(e){let{placeholder:a,value:t,onChange:r,someClasses:n,onKeyUp:i,disabled:o}=e;return(0,l.jsxs)("div",{className:`${o?"disabled-class":"searchInput-container"}  ${n||""}`,children:[(0,l.jsx)(s.ZYA,{className:"searchIcon text-[1.31rem] text-blue-200"}),(0,l.jsx)("input",{className:"search-input lg:w-[100%] w-[55vw]",placeholder:a,type:"search",value:t,onChange:r,onKeyUp:i,disabled:o,onWheel:e=>e.target.blur(),min:0})]})}},8054:(e,a,t)=>{t.d(a,{A:()=>l});t(5043);var s=t(579);const l=function(e){let{text:a}=e;return(0,s.jsx)("div",{className:"text-center py-10",children:(0,s.jsxs)("h3",{className:"text-black-300 text-[xl] leading-[1.875rem]",children:[a,"..."]})})}},7424:(e,a,t)=>{t.d(a,{A:()=>x});var s=t(827),l=(t(8069),t(2926)),r=t(7630),n=t(126),i=t(6926),o=t(9762),c=t(9092),d=t(3536),h=t(919),m=(t(7990),t(221)),u=t(579);const x=function(e){let{filterByPackman:a,searchByPackmans:t,filterByTotal:x,searchByCode:p,searchById:g,searchByDelivererName:v,filterByDelivererName:f,filterByDelivererNameWhenPressEnter:b,searchByClientName:y,filterByClientName:j,filterByClientNameWhenPressEnter:w,filterById:C,filterByIdWhenPressEnter:N,filterByCode:k,filterByCodeAndNameAndCategoryWhenPressEnter:A,searchByName:S,filterByName:D,filterBy:B,searchByCategory:_,filterByCategory:P,numberOfChecks:W,setNumberOfChecks:E,clickPrintBtn:K,startDate:I,endDate:z,setStartDate:F,setEndDate:q,date:U,setDate:T,clickConfirmBtn:M,barcode:Y,filterByBarcode:$,filterByBarcodeWhenPressEnter:L,searchByDirectorName:R,filterByDirectorName:Z,filterByDirectorNameWhenPressEnter:O,searchByMarketName:V,filterByMarketName:H,searchBySellerName:J,filterBySellerName:Q,filterBySellerNameWhenPressEnter:G,searchByMarketInn:X,filterByMarketInn:ee,filterByMarketInnWhenPressEnter:ae,filterByMarketNameWhenPressEnter:te,check:se,handleChangeCheck:le,checkboxLabel:re}=e;const{t:ne}=(0,c.B)(["common"]);return(0,u.jsx)("div",{className:"pl-[20px] flex justify-center items-end gap-[1.5rem] mainPadding lg:flex-nowrap grow flex-wrap",children:(0,d.map)(B,(e=>(e=>{switch(e){case"category":return(0,u.jsx)(l.A,{label:ne("Kategoriya"),element:(0,u.jsx)(r.A,{placeholder:`${ne("misol")}: 000000`,type:"text",value:_,onChange:P,maxWidth:"w-[90vw] lg:w-[20rem]",onKeyUp:A})},"category_1");case"code":return(0,u.jsx)(l.A,{label:ne("Maxsulot kodi"),element:(0,u.jsx)(r.A,{placeholder:`${ne("misol")}: 000000`,type:"text",maxWidth:"lg:w-[10rem] w-[90vw]",value:p,onChange:k,onKeyUp:A})},"code_1");case"id":return(0,u.jsx)(l.A,{label:ne("ID"),element:(0,u.jsx)(r.A,{placeholder:ne("misol: 101"),type:"text",maxWidth:"lg:w-[6.8125rem] w-[90vw]",value:g,onChange:C,onKeyUp:N})},"id_1");case"name":return(0,u.jsx)(s.A,{placeholder:ne("qidirish..."),someClasses:"grow",value:S,onChange:D,onKeyUp:A},"search_1");case"checkbox":return(0,u.jsxs)("div",{className:"checkbox mb-4",children:[(0,u.jsx)("input",{type:"checkbox",className:"hidden",id:"checkbox-1",onChange:le,checked:se}),(0,u.jsx)("label",{htmlFor:"checkbox-1",children:(0,u.jsx)("span",{className:"checkbox-icon",children:(0,u.jsx)(m.KDk,{size:"1rem"})})}),(0,u.jsx)("span",{className:"checkbox-label",children:re})]});case"delivererName":return(0,u.jsx)(s.A,{placeholder:ne("Yetkazuvchi ismi"),someClasses:"grow",value:v,onChange:f,onKeyUp:b},"yetkazuvchi_ismi_1");case"clientName":return(0,u.jsx)(s.A,{placeholder:ne("mijoz ismi..."),someClasses:"grow basis-1/6",value:y,onChange:j,onKeyUp:w},"mijoz_ismi_1");case"sellerName":return(0,u.jsx)(s.A,{placeholder:ne("sotuvchi ismi..."),someClasses:"grow basis-1/6",value:J,onChange:Q,onKeyUp:G},"sotuvchi_ismi_1");case"checks":return(0,u.jsx)(l.A,{label:ne("Cheklar soni"),element:(0,u.jsx)(r.A,{placeholder:ne("misol: 101"),type:"text",maxWidth:"flex-1",value:W,onChange:E})},"cheklar_soni_1");case"printBtn":return(0,u.jsx)(n.A,{onClick:K},"print_btn_1");case"startDate":return(0,u.jsx)(l.A,{label:ne("Boshlang'ich sana"),element:(0,u.jsx)(o.A,{value:I,onChange:F,placeholder:"01.01.2021",maxWidth:"lg:w-[10rem] w-[40vw]"})},"start_date_1");case"endDate":return(0,u.jsx)(l.A,{label:ne("Tugash sana"),element:(0,u.jsx)(o.A,{value:z,onChange:q,placeholder:"05.06.2022",maxWidth:"lg:w-[10rem] w-[40vw]"})},"end_date_1");case"singleDate":return(0,u.jsx)(l.A,{label:ne("Sanani tanlang"),element:(0,u.jsx)(o.A,{value:U,onChange:T,placeholder:ne("misol: 02.02.2022"),maxWidth:"w-[9.6875rem]"})},"single_date_1");case"confirmBtn":return(0,u.jsx)(i.Z,{text:ne("Yakunlash"),onClick:M},"confirm_btn_1");case"barcode":return(0,u.jsx)(l.A,{label:ne("Shtrix kodi"),element:(0,u.jsx)(r.A,{placeholder:ne("misol: 101"),type:"text",value:Y,onChange:$,maxWidth:"lg:w-[10rem] w-[90vw]",onKeyUp:L})},"barcode_1");case"directorName":return(0,u.jsx)(s.A,{value:R,onChange:Z,placeholder:"Direktor ismi yoki familyasi...",someClasses:"grow",onKeyUp:O},"director_name_1");case"marketName":return(0,u.jsx)(s.A,{value:V,onChange:H,placeholder:`${ne("Do'kon nomi...")}`,someClasses:"grow",onKeyUp:te},"market_name_1");case"inn":return(0,u.jsx)(s.A,{value:X,onChange:ee,placeholder:"Do'kon INN si...",someClasses:"grow",onKeyUp:ae},"market_inn_1");case"select":return(0,u.jsx)(h.A,{placeholder:ne("Yetkazib beruvchi"),onSelect:a,options:t});default:return null}})(e)))})}},919:(e,a,t)=>{t.d(a,{A:()=>c});t(5043);var s=t(1318),l=t(2234),r=t(221),n=t(579);const i=e=>(0,n.jsx)(l.c.DropdownIndicator,{...e,children:(0,n.jsx)(r.QDT,{size:"0.625rem",color:"#86A7E9"})}),o={container:e=>({...e,height:"100%"}),control:(e,a)=>{let{isDisabled:t}=a;return{...e,width:"100%",height:"100%",padding:".625rem .58rem",borderRadius:".25rem",fontSize:".875rem",fontWeight:"400",color:"#86A7E9",outline:"none",boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.05)",cursor:"pointer","&:hover":{backgroundColor:"#EAEAEA"},"&:focus-within":{outline:"4px solid #A9C0EF",backgroundColor:"#ffffff"},backgroundColor:t?"rgba(28, 28, 28, 0.2)":"#fff",border:t?"none":"1px solid #86A7E9"}},option:(e,a)=>{let{isFocused:t,isSelected:s}=a;return{...e,fontSize:".875rem",fontWeight:"400",color:s||t?"#ffffff":"#071F45",backgroundColor:s?"#0090A3":t?"#00B4CC":"#ffffff",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer"}},menu:e=>({...e,zIndex:30}),singleValue:e=>({...e,color:"#1c1c1c",fontSize:".875rem",lineHeight:"1.25rem",fontWeight:"400",margin:0}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,a)=>{let{isFocused:t}=a;return{...e,padding:0,paddingRight:".625rem",color:t?"#193F8A":"#071F45"}},placeholder:(e,a)=>{let{isDisabled:t}=a;return{...e,margin:0,color:t?"rgba(28, 28, 28, 0.2)":"#86A7E9"}},input:e=>({...e,padding:0,display:"flex",lineHeight:"1.25rem",margin:0})},c=e=>{let{onSelect:a,options:t,isDisabled:l,label:r,placeholder:c,value:d}=e;return(0,n.jsxs)("div",{className:"grow ",children:[r&&(0,n.jsx)("label",{className:"w-[90%] text-blue-700 block leading-[1.125rem] mb-[.625rem]",children:r}),(0,n.jsx)(s.Ay,{onChange:a,styles:o,value:d,defaultValue:"",options:t,isDisabled:l,placeholder:c,components:{IndicatorSeparator:()=>null,DropdownIndicator:i}})]})}},8069:(e,a,t)=>{t.d(a,{A:()=>d});t(5043);var s=t(1318),l=t(2234),r=t(221),n=t(579);const i=e=>(0,n.jsx)(l.c.DropdownIndicator,{...e,children:(0,n.jsx)(r.QDT,{size:"0.625rem",color:"86A7E9"})}),o={control:(e,a)=>{let{isDisabled:t}=a;return{...e,borderRadius:".5rem",fontSize:".875rem",fontWeight:"400",padding:"0.6875rem 0.625rem",color:"#071F45",outline:"none",border:"none",boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.05)",cursor:"pointer",height:"100%","&:hover":{backgroundColor:"#EAEAEA"},backgroundColor:t?"rgba(28, 28, 28, 0.2)":"#fff"}},container:e=>({...e,height:"100%",width:"max-content",marginLeft:"0.75rem"}),option:(e,a)=>{let{isFocused:t,isSelected:s}=a;return{...e,fontSize:".875rem",fontWeight:"400",color:s||t?"#ffffff":"#071F45",backgroundColor:s?"#0090A3":t?"#00B4CC":"#ffffff",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer"}},menu:e=>({...e,width:"5rem",overflow:"hidden"}),singleValue:(e,a)=>{let{isDisabled:t}=a;return{...e,fontSize:".875rem",fontWeight:"400",margin:0,color:t?"rgba(28, 28, 28, 0.2)":"#071F45"}},valueContainer:e=>({...e,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}),indicatorsContainer:e=>({...e,marginLeft:"5px"}),dropdownIndicator:(e,a)=>{let{isFocused:t,isDisabled:s}=a;return{...e,padding:0,color:t?"#193F8A":"rgba(28, 28, 28, 0.2)"}}};var c=t(9092);t(192),t(2096);const d=e=>{let{onSelect:a,isDisabled:t}=e;const{t:l}=(0,c.B)(["common"]),r=[{value:10,label:10},{value:20,label:20},{value:50,label:50},{value:100,label:100},{value:1e5,label:l("Barchasi")}];return(0,n.jsxs)("div",{className:"flex  items-center  justify-center",children:[(0,n.jsx)("label",{htmlFor:"select",className:"text-[0.875rem] font-light text-blue-700 leading-[1rem]",children:l("")}),(0,n.jsx)(s.Ay,{onChange:a,styles:o,isSearchable:!1,defaultValue:r[0],options:r,isDisabled:t,id:"select",components:{IndicatorSeparator:()=>null,DropdownIndicator:i}})]})}},4235:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(579);const l=function(){return(0,s.jsx)("div",{className:"flex items-center justify-center mt-14",children:(0,s.jsx)("div",{className:"clock-loader"})})}},6895:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var s=t(5043),l=t(7630),r=t(4012),n=t(2039),i=t(3297),o=t(9456),c=t(4235),d=t(8054),h=t(200),m=t(1605),u=t(3734),x=t(9092),p=t(2512),g=t(3216),v=t(7424),f=t(1154),b=t(579);const y=function(){const{t:e}=(0,x.B)(["common"]),a=(0,o.wA)(),t=(0,g.Zp)(),{errorSellings:y,sellers:j,loading:w,successAddSelling:C,successUpdateSelling:N}=(0,o.d4)((e=>e.sellers)),{currencyType:k}=(0,o.d4)((e=>e.currency)),{user:A}=(0,o.d4)((e=>e.login));console.log(A);const S=[{title:"\u2116",styles:"w-[8%] text-left"},{title:e("Ismi"),styles:"w-[21%]"},{title:e("Familiyasi"),styles:"w-[21%]"},{title:e("Telefon raqami"),styles:"w-[21%]"},{title:e("Sotuvlar")},{title:e("Summa")},{title:e("Sof foyda")},{title:"",styles:"w-[8%]"}],[D,B]=(0,s.useState)(window.innerWidth<=768);(0,s.useEffect)((()=>{const e=()=>{B(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const[_,P]=(0,s.useState)(!1),[W,E]=(0,s.useState)([]),[K,I]=(0,s.useState)(""),[z,F]=(0,s.useState)(""),[q,U]=(0,s.useState)(""),[T,M]=(0,s.useState)(""),[Y,$]=(0,s.useState)(""),[L,R]=(0,s.useState)(""),[Z,O]=(0,s.useState)(""),[V,H]=(0,s.useState)(!1),[J,Q]=(0,s.useState)(!1),[G,X]=(0,s.useState)(new Date((new Date).setDate((new Date).getDate()-10))),[ee,ae]=(0,s.useState)(new Date),te=t=>{t&&t.preventDefault();const{failed:s,message:l}=(0,h.py)([{value:K,message:e("Sotuvchi ismi")},{value:z,message:e("Sotuvchi familiyasi")},{value:q,message:e("Sotuvchi telefon raqami")},{value:T,message:e("Sotuvchi logini")},{value:Y,message:e("Sotuvchi paroli")},{value:L,message:e("Sotuvchi parolini tasdiqlash")}]);if(s)(0,u.EB)(l);else if(Y!==L)(0,u.lY)(e("Sotuvchining paroli bilan tasdiqlash paroli mos kelmadi"),"warning");else{const e={login:T,firstname:K,lastname:z,fathername:A.lastname,phone:q,password:Y,type:"Seller",user:A._id,isIncomePage:J};a((0,p.Zh)(e))}},se=t=>{t&&t.preventDefault();const{failed:s,message:l}=(0,h.py)([{value:K,message:e("Sotuvchi ismi")},{value:z,message:e("Sotuvchi familiyasi")},{value:q,message:e("Sotuvchi telefon raqami")},{value:T,message:e("Sotuvchi logini")},{value:Y,message:e("Sotuvchi paroli")},{value:L,message:e("Sotuvchi parolini tasdiqlash")}]);if(s)(0,u.EB)(l);else if(Y!==L)(0,u.lY)(e("Sotuvchining paroli bilan tasdiqlash paroli mos kelmadi"),"warning");else{const e={_id:Z._id,login:T,firstname:K,lastname:z,fathername:A.lastname,phone:q,password:Y,type:"Seller",user:A._id,isIncomePage:J};a((0,p.t3)(e))}},le=e=>{e&&e.preventDefault(),I(""),F(""),U(""),M(""),$(""),R(""),Q(!1)},re=e=>{le(),O(e),P(!0),I(e.firstname),F(e.lastname),U(e.phone),M(e.login),Q(e.isIncomePage)},ne=e=>{t(`/hamkorlar/sotuvchilar/${e}`)};return(0,s.useEffect)((()=>{y&&((0,u.lY)(y,"error"),a((0,p._C)())),C&&((0,u.LE)(),a((0,p.HY)()),le()),N&&((0,u.nD)(),a((0,p.bI)()),P(!1),le(),O(""))}),[a,y,C,N]),(0,s.useEffect)((()=>{a((0,p.dW)({startDate:G,endDate:ee}))}),[a,G,ee]),(0,s.useEffect)((()=>{E(j)}),[j]),(0,b.jsxs)(m.P.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[D?null:(0,b.jsxs)("form",{className:`unitFormStyle  ${_&&"stickyForm"} flex gap-[1.25rem] bg-background flex-col mainPadding transition ease-linear duration-200`,children:[(0,b.jsxs)("div",{className:"exchangerate-style w-full",children:[(0,b.jsx)(l.A,{value:K,onChange:e=>{I(e.target.value)},label:e("Ismi"),placeholder:e("Jasurbek"),maxWidth:"w-[21.75rem]",type:"text",border:!0,onKeyPress:""}),(0,b.jsx)(l.A,{value:z,onChange:e=>{F(e.target.value)},label:e("Familiyasi"),placeholder:e("Toshev"),maxWidth:"w-[21.75rem]",type:"text",border:!0,onKeyPress:()=>{}}),(0,b.jsx)(l.A,{value:q,onChange:e=>{U(e.target.value)},label:e("Telefon raqami"),placeholder:"+998 99 123 45 67",type:"number",border:!1,onKeyPress:()=>{}})]}),(0,b.jsxs)("div",{className:"exchangerate-style mt-[1.25rem]",children:[(0,b.jsx)(l.A,{value:T,onChange:e=>{M(e.target.value)},label:e("Login"),placeholder:"123456",maxWidth:"12.75rem",type:"text",border:!0,onKeyPress:()=>{}}),(0,b.jsx)(l.A,{value:Y,onChange:e=>{$(e.target.value)},label:e("Parol"),placeholder:"123456",maxWidth:"12.75rem",type:"text",border:!0,onKeyPress:()=>{}}),(0,b.jsx)(l.A,{value:L,onChange:e=>{R(e.target.value)},label:e("Parolni tasdiqlash"),placeholder:"123456",maxWidth:"12.75rem",type:"text",border:!1,onKeyPress:()=>{}}),(0,b.jsx)("div",{className:"flex justify-end items-start",children:(0,b.jsxs)("div",{className:"checkbox-card sale-toggle-container",children:[(0,b.jsxs)("p",{className:"toggleText",children:[e("Maxsulot hisoboti")," :"]}),(0,b.jsx)("input",{type:"checkbox",checked:J,onChange:()=>Q(!J)})]})}),(0,b.jsxs)("div",{className:"flex gap-[1.25rem] grow w-[19.5rem]",children:[(0,b.jsx)(r.A,{onClick:_?se:te,add:!_,edit:_,text:e(_?"Saqlash":"Yangi sotuvchi qo`shish")}),(0,b.jsx)(r.A,{onClick:le,text:e("Tozalash")})]})]})]}),D?(0,b.jsx)("div",{className:" mt-[40px] ps-[20px] text-[1.25rem]  mainPadding",children:(0,b.jsx)("button",{onClick:()=>H(!0),className:" createElement ",children:e("Yangi sotuvchi qo'shish")})}):null,(0,b.jsx)("div",{className:"flex lg:justify-start justify-center lg:ms-[20px]",children:(0,b.jsx)("div",{className:"mt-[-10px] flex justify-start ",children:(0,b.jsx)(v.A,{filterBy:["startDate","endDate"],startDate:G,setStartDate:X,endDate:ee,setEndDate:ae})})}),D&&V?(0,b.jsxs)("div",{className:"absolute lg:p-[50px] w-[100vw]   h-[100vh]  flex justify-evenly flex-wrap items-center  top-0\tleft-0 z-50 bg-[white]\t",children:[(0,b.jsx)(f.hvQ,{onClick:()=>H(!1),className:" absolute right-[20px]  top-[20px]  text-4xl cursor-pointer"}),(0,b.jsxs)("form",{className:`unitFormStyle bg-[white] mt-[-100px] w-[90vw]  ps-0 ${_&&""} flex gap-[1.25rem]  flex-wrap  transition `,children:[(0,b.jsxs)("div",{className:"exchangerate-style  flex-wrap",children:[(0,b.jsx)(l.A,{value:K,onChange:e=>{I(e.target.value)},label:e("Ismi"),placeholder:e("Jasurbek"),maxWidth:"w-[90vw]",type:"text",border:!0,onKeyPress:""}),(0,b.jsx)(l.A,{value:z,onChange:e=>{F(e.target.value)},label:e("Familiyasi"),placeholder:e("Toshev"),maxWidth:"w-[90vw]",type:"text",border:!0,onKeyPress:()=>{}}),(0,b.jsx)(l.A,{value:q,onChange:e=>{U(e.target.value)},label:e("Telefon raqami"),placeholder:"+998 99 123 45 67",type:"number",border:!1,onKeyPress:()=>{}})]}),(0,b.jsx)("div",{className:" unitFormStyle bg-[white]  ps-0  ",children:(0,b.jsxs)("div",{className:"exchangerate-style  flex flex-wrap ",children:[(0,b.jsx)(l.A,{value:T,onChange:e=>{M(e.target.value)},label:e("Login"),placeholder:"123456",type:"text",border:!0,onKeyPress:()=>{},maxWidth:"w-[90vw]"}),(0,b.jsx)(l.A,{value:Y,onChange:e=>{$(e.target.value)},label:e("Parol"),placeholder:"123456",maxWidth:"w-[42vw]",type:"text",border:!0,onKeyPress:()=>{}}),(0,b.jsx)(l.A,{value:L,onChange:e=>{R(e.target.value)},label:e("Parolni tasdiqlash"),placeholder:"123456",maxWidth:"w-[42vw]",type:"text",border:!1,onKeyPress:()=>{}}),(0,b.jsxs)("div",{className:"flex gap-[1.25rem] grow w-[19.5rem]",children:[(0,b.jsx)(r.A,{onClick:_?se:te,add:!_,edit:_,text:e(_?"Saqlash":"Yangi sotuvchi qo`shish")}),(0,b.jsx)(r.A,{onClick:le,text:e("Tozalash")})]})]})})]})]}):null,(0,b.jsx)("div",{className:"lg:tableContainerPadding",children:w?(0,b.jsx)(c.A,{}):0===j.length?(0,b.jsx)(d.A,{text:"Sotuvchilar mavjud emas"}):D?(0,b.jsx)(i.A,{page:"seller",data:W,currentPage:0,countPage:10,headers:S,Edit:re,linkToSellerReports:ne,currency:k,modalOpen1:H}):(0,b.jsx)(n.A,{page:"seller",data:W,currentPage:0,countPage:10,headers:S,Edit:re,linkToSellerReports:ne,currency:k})})]},"content")}},192:()=>{}}]);
//# sourceMappingURL=6895.686f8261.chunk.js.map