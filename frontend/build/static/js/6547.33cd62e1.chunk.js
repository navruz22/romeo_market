"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1181,6547],{200:(e,s,t)=>{t.d(s,{Ch:()=>i,D$:()=>p,Df:()=>u,Hl:()=>h,IQ:()=>o,Yc:()=>r,m1:()=>d,py:()=>c,tE:()=>m});var n=t(6694),a=t(3536),l=t(1238);const r=(e,s,t,n,l)=>{const r=t.split(".");s(n?(0,a.orderBy)([...e],(e=>3===r.length?e[r[0]][r[1]][r[2]]:2===r.length?e[r[0]][r[1]]:e[t]),[-1===n?"desc":"asc"]):l)},o=(e,s)=>Math.round(e*s),i=(e,s)=>Math.round(e/s*1e3)/1e3,c=e=>{let s={failed:!1,message:""};for(let t=0;t<e.length;t++)if(n.T.test(e[t].value)){s={message:e[t].message,failed:!0};break}return s},d=(e,s,t)=>{const n=(a=e,Object.keys(a[0]).map(((e,s)=>{let n=Math.max(...a.map((s=>s[e].toString().length)));return{wch:t[s].length>n?t[s].length+1:n+4}})));var a;const r=l.Wp.book_new(),o=l.Wp.json_to_sheet([]);o["!cols"]=n,l.Wp.sheet_add_aoa(o,[t]),l.Wp.sheet_add_json(o,e,{origin:"A2",skipHeader:!0}),l.Wp.book_append_sheet(r,o,"Maxsulotlar"),l._h(r,`${s}-${(new Date).toLocaleDateString()}.xlsx`)},u=e=>Math.round(1*e)/1,m=e=>Math.round(1e3*e)/1e3,p=(e,s)=>(0,a.reduce)(e,((e,t)=>e+t[s]),0),h=(e,s)=>u(e/s)},6166:(e,s,t)=>{t.d(s,{A:()=>l});t(5043);var n=t(221),a=t(579);const l=function(e){let{type:s,onClick:t,active:l}=e;const r={product:{icon:(0,a.jsx)(n.Ua$,{className:"shopIcons"}),bgColor:"bg-[#12B76A]"},selling:{icon:(0,a.jsx)(n.zIN,{className:"shopIcons"}),bgColor:"bg-[#F79009]"},payments:{icon:(0,a.jsx)(n.IY5,{className:"shopIcons"}),bgColor:"bg-[#00B4CC]"},income:{icon:(0,a.jsx)(n.HdM,{className:"shopIcons"}),bgColor:"bg-[#00B4CC]"}};return(0,a.jsx)("button",{onClick:t,className:`${l?"filial-active":r[s].bgColor} shopButton`,children:r[s].icon})}},6899:(e,s,t)=>{t.d(s,{A:()=>a});var n=t(579);const a=function(e){let{placeholder:s,type:t,value:a,onChange:l,label:r,disabled:o,onKeyUp:i}=e;return(0,n.jsx)("div",{className:"w-full",children:(0,n.jsxs)("label",{children:[r,(0,n.jsx)("input",{disabled:o,className:"tableInput lg:h-[auto]  h-[30px]",placeholder:s,type:t,value:a,onChange:l,onKeyUp:i,onWheel:e=>e.target.blur(),min:0})]})})}},6694:(e,s,t)=>{t.d(s,{C:()=>n,T:()=>a});const n=/^\d*\.?\d*$/,a=/^\s*$/},2344:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var n=t(5043),a=t(6166),l=t(9456),r=t(579);const o=function(e){let{border:s=!1,navbarExpended:t,director:n=null}=e;const a=(0,l.d4)((e=>e.login.user)),o=e=>0===e.indexOf("http://")||0===e.indexOf("https://");return(0,r.jsx)(r.Fragment,{children:s&&n?(0,r.jsx)("div",{className:"flex items-center gap-[1.25rem] p-[1.25rem]",children:(0,r.jsx)("div",{className:"avatar-border rounded-[50%] p-[0.625rem] overflow-hidden",children:(0,r.jsx)("div",{className:"avatar-image flex items-center justify-center w-[50px] h-[50px] rounded-full overflow-hidden",children:n.image&&o(n.image)?(0,r.jsx)("img",{src:n.image,alt:n.firstname,className:"pointer-events-none"}):`${n.firstname[0].toUpperCase()+n.lastname[0].toUpperCase()}`})})}):(0,r.jsx)("div",{className:"w-full flex items-center gap-[10px]",children:(0,r.jsx)("div",{className:"avatar-image flex items-center justify-center transition-all ease-linear duration-300 w-[50px] h-[50px] rounded-full overflow-hidden shadow-[0_10px_10px_rgba(0,0,0,0.15)]",children:null!==a&&void 0!==a&&a.image&&o(null===a||void 0===a?void 0:a.image)?(0,r.jsx)("img",{src:null===a||void 0===a?void 0:a.image,alt:null===a||void 0===a?void 0:a.firstname,className:"pointer-events-none"}):`${(null===a||void 0===a?void 0:a.firstname[0].toUpperCase())+(null===a||void 0===a?void 0:a.lastname[0].toUpperCase())}`})})})};var i=t(5475),c=t(2096);const d=e=>{var s,t;let{active:n,market:l}=e;return(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"shops_card flex gap-[1.25rem] "+(n?"active_shop":""),children:[(0,r.jsx)(o,{border:!0,director:null===l||void 0===l?void 0:l.director}),(0,r.jsxs)("div",{className:"product-cost",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsxs)("p",{className:"product",children:[(0,c.t)("Do'kon")," INN"]}),(0,r.jsx)("p",{className:"product-number",children:null===l||void 0===l?void 0:l.name})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("p",{className:"product",children:(0,c.t)("Direktor")}),(0,r.jsxs)("div",{className:"flex gap-[5px]",children:[(0,r.jsx)("p",{className:"product-number",children:null===l||void 0===l||null===(s=l.director)||void 0===s?void 0:s.firstname}),(0,r.jsx)("p",{className:"product-number",children:null===l||void 0===l||null===(t=l.director)||void 0===t?void 0:t.lastname})]})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("p",{className:"product",children:(0,c.t)("Telefon")}),(0,r.jsx)("p",{className:"product-number",children:null===l||void 0===l?void 0:l.phone})]})]}),(0,r.jsxs)("div",{className:"shop-name flex flex-col w-[13.4375rem]",children:[(0,r.jsx)("div",{className:"shop-title",children:(0,r.jsxs)("p",{children:["INN: ",null===l||void 0===l?void 0:l.inn.toLocaleString("ru-RU")]})}),(0,r.jsxs)("div",{className:"filial-btn",children:[(0,r.jsx)(i.N_,{to:`/dukonlar/hamkorlar/mahsulotlar/${l._id}`,children:(0,r.jsx)(a.A,{type:"product"})}),(0,r.jsx)(i.N_,{to:`/dukonlar/hamkorlar/hamkormahsulotlari/${l._id}`,children:(0,r.jsx)(a.A,{type:"selling"})}),(0,r.jsx)(i.N_,{to:"/dukonlar/hamkorlar/buyurtma",children:(0,r.jsx)(a.A,{type:"payments"})})]})]})]})})};var u=t(7630),m=t(4012),p=t(9092),h=t(5618),x=t(6694),v=t(1466),f=t(7424),g=t(3536);const j=function(){const{t:e}=(0,p.B)(["common"]),s=(0,l.wA)(),{marketByInn:t,connections:a,sendingRequests:o,incomingRequests:i,countOfNewRequests:c}=(0,l.d4)((e=>e.connections)),{market:j}=(0,l.d4)((e=>e.login)),[N,b]=(0,n.useState)(!1),[k,C]=(0,n.useState)(""),[y,w]=(0,n.useState)("requestconnection"),[_,A]=(0,n.useState)([]),[q,I]=(0,n.useState)([]),[M,B]=(0,n.useState)([]),D=e=>{s((0,v.xL)({connection:e})).then((e=>{let{error:t}=e;t||(s((0,v.y3)()),s((0,v.cX)()),s((0,v.WC)()))}))};return(0,n.useEffect)((()=>{s((0,v.cX)()),s((0,v.y3)()),s((0,v.Eo)()),s((0,v.WC)())}),[s]),(0,n.useEffect)((()=>{A(a)}),[a]),(0,n.useEffect)((()=>{I(o)}),[o]),(0,n.useEffect)((()=>{B(i)}),[i]),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.A,{body:y,marketByInn:t,toggleModal:()=>b(!N),approveFunction:()=>{const e={firstMarket:j._id,secondMarket:t._id};s((0,v.hn)(e)).then((e=>{let{error:t}=e;t||((0,v.OP)(),b(!1),C(""),s((0,v.Eo)()))}))},closeModal:()=>{b(!1),(0,v.OP)()},isOpen:N,sendingRequests:q,handleDeleteRequest:e=>{s((0,v.iF)({connectionId:e})).then((e=>{let{error:t}=e;t||(s((0,v.Eo)()),s((0,v.y3)()))}))},incomingRequests:M,handleAcceptRequest:e=>{D({...e,accept:!0,rejected:!1,request:!1})},handleRejectRequest:e=>{D({...e,accept:!1,rejected:!0,request:!1})}}),(0,r.jsx)("form",{className:"flex gap-[1.25rem] bg-background flex-col mainPadding transition ease-linear duration-200",children:(0,r.jsxs)("div",{className:"supplier-style",children:[(0,r.jsx)(u.A,{value:k,onChange:e=>{let s=e.target.value;x.C.test(s)&&C(s)},label:e("Do'kon INN raqami"),placeholder:`${e("misol")}: 123 456 789`,border:!0}),(0,r.jsxs)("div",{className:"flex gap-[1.25rem] grow",children:[(0,r.jsx)(m.A,{onClick:e=>{e.preventDefault(),s((0,v.V8)({inn:k})).then((e=>{let{error:s}=e;s||(b(!0),w("requestconnection"))}))},add:!0,text:e("Yangi do'kon qo'shish")}),(0,r.jsx)(m.A,{edit:!0,text:e("Yuborilganlar"),onClick:e=>{e.preventDefault(),b(!0),w("sendingApplication")}}),(0,r.jsx)(m.A,{count:c.count,bell:!0,text:e("So'rovlar"),onClick:e=>{e.preventDefault(),b(!0),w("requestApplication")}})]})]})}),(0,r.jsx)("div",{className:"mainPadding",children:(0,r.jsx)("p",{className:"supplier-title text-center",children:e("Hamkor do'konlar")})}),(0,r.jsx)(f.A,{filterBy:["marketName","inn","directorName","lastname"],filterByMarketName:e=>{const s=e.target.value.toLowerCase(),t=(0,g.filter)(a,(e=>e.name.toLowerCase().includes(s)));A(t)},filterByMarketInn:e=>{const s=e.target.value.toLowerCase(),t=(0,g.filter)(a,(e=>e.inn.toString().toLowerCase().includes(s)));A(t)},filterByDirectorName:e=>{const s=e.target.value.toLowerCase(),t=(0,g.filter)(a,(e=>e.director.firstname.toLowerCase().includes(s)||e.director.lastname.toLowerCase().includes(s)));A(t)}}),(0,r.jsx)("div",{className:"mainPadding",children:_&&(0,g.map)(_,(e=>(0,r.jsx)("div",{className:"pb-4",children:(0,r.jsx)(d,{market:e})},(0,g.uniqueId)("markets"))))})]})}}}]);
//# sourceMappingURL=6547.33cd62e1.chunk.js.map