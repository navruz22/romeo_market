"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1181,9834],{5188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var s=a(5043),l=a(7630),r=a(4012),n=a(7424),o=a(4235),i=a(8054),c=a(2039),g=a(9456),d=a(6694),u=a(200),m=a(5618),h=a(1605),p=a(9092),f=a(5369),x=a(579);const y=function(e){let{data:t}=e;const{t:a}=(0,p.B)(["common"]);return(0,x.jsxs)("button",{onClick:()=>t(!0),className:" hover:bg-blue-200  bg-blue-400 focus-visible:outline-none w-[100px] lg:h-[33px] h=[40px] createElement ",children:[(0,x.jsx)(f.YsJ,{})," ",a("izlash")]})};a(192);var v=a(3734),j=a(5842),w=a(4964),D=a(3536),C=a(3237),S=a(8069),b=a(1154),k=a(3297);const A=()=>{const{t:e}=(0,p.B)(["common"]),t=[{title:e("\u2116"),styles:"w-[10%]"},{title:e("Kategoriya kodi"),filter:"code"},{title:e("Kategoriya nomi"),filter:"name"},{title:e("Sotilganlar soni"),filter:"totalproducts"},{title:e("Sotilganlar jami"),filter:"totalsales"},{title:e("Sof foyda"),filter:"profit"},{title:"",styles:"w-[15%]"}],a=(0,g.wA)(),{categories:A,errorGetCategories:P,searchedCategories:N,loading:E,total:B,totalSearched:Y,errorAddCategory:K,successAddCategory:z,successUpdateCategory:F,errorUpdateCategory:U,successDeleteCategory:W,errorDeleteCategory:L}=(0,g.d4)((e=>e.category)),[M,q]=(0,s.useState)(A),[T,J]=(0,s.useState)(N),[$,_]=(0,s.useState)(""),[G,I]=(0,s.useState)(""),[O,Q]=(0,s.useState)(""),[R,V]=(0,s.useState)(""),[H,X]=(0,s.useState)("10"),[Z,ee]=(0,s.useState)(0),[te,ae]=(0,s.useState)(B),[se,le]=(0,s.useState)(!1),[re,ne]=(0,s.useState)({filter:"",sort:"",count:0}),[oe,ie]=(0,s.useState)(null),[ce,ge]=(0,s.useState)(null),[de,ue]=(0,s.useState)(!1),[me,he]=(0,s.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[pe,fe]=(0,s.useState)(new Date),[xe,ye]=(0,s.useState)(!1),[ve,je]=(0,s.useState)(window.innerWidth<=768),we=()=>ue(!de);(0,s.useEffect)((()=>{const e=()=>{je(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const De=e=>{let{value:t}=e;X(t),ee(0)},Ce=e=>{ie(e),_(e.code),I(e.name),le(!0)},Se=e=>{const t={...e,currentPage:Z,countPage:H,search:{name:R.replace(/\s+/g," ").trim(),code:O.replace(/\s+/g," ").trim()}};ge(t),we()},be=()=>{ue(!1),ge(null)},ke=e=>{e&&e.preventDefault(),_(""),I(""),ie(null),le(!1)},Ae=e=>{let t=e.target.value,s=t.replace(/\s+/g," ").trim();if(Q(t),(T.length>0||Y>0)&&a((0,j.rU)()),""===s)q(A),ae(B);else{const e=(0,D.filter)(A,(e=>e.code.includes(s)));q(e),ae(e.length)}},Pe=e=>{let t=e.target.value,s=t.toLowerCase().replace(/\s+/g," ").trim();if(V(t),(T.length>0||Y>0)&&a((0,j.rU)()),""===s)q(A),ae(B);else{const e=(0,D.filter)(A,(e=>e.name&&e.name.toLowerCase().includes(s)));q(e),ae(e.length)}},Ne=e=>{if("Enter"===e.key){ee(0);const e={currentPage:0,countPage:H,search:{name:R.replace(/\s+/g," ").trim(),code:O.replace(/\s+/g," ").trim()}};a((0,j.Gq)(e))}},Ee=e=>{if(e===re.filter)switch(re.count){case 1:ne({filter:e,sort:"1",count:2}),(0,u.Yc)(T.length>0?T:M,T.length>0?J:q,e,1,T.length>0?N:A);break;case 2:ne({filter:e,sort:"",count:0}),(0,u.Yc)(T.length>0?T:M,T.length>0?J:q,e,"",T.length>0?N:A);break;default:ne({filter:e,sort:"-1",count:1}),(0,u.Yc)(T.length>0?T:M,T.length>0?J:q,e,-1,T.length>0?N:A)}else ne({filter:e,sort:"-1",count:1}),(0,u.Yc)(T.length>0?T:M,T.length>0?J:q,e,-1,T?N:A,T.length>0)};return(0,s.useEffect)((()=>{P&&((0,v.dz)(),a((0,j.V9)())),K&&((0,v.lY)(K,"error"),a((0,j.Lo)())),z&&((0,v.EU)(),a((0,j.kF)()),ke()),F&&((0,v.wn)(),a((0,j.iY)()),ke()),U&&((0,v.lY)(U,"error"),a((0,j.FU)())),L&&((0,v.lY)(L,"error"),a((0,j.vE)())),W&&((0,v.iR)(),a((0,j.AA)()))}),[a,P,K,z,F,U,L,W]),(0,s.useEffect)((()=>{const e={currentPage:Z,countPage:H,search:{name:R.replace(/\s+/g," ").trim(),code:O.replace(/\s+/g," ").trim()},startDate:me,endDate:pe};a((0,j.bW)(e))}),[Z,H,a,me,pe]),(0,s.useEffect)((()=>{q(A)}),[A]),(0,s.useEffect)((()=>{ae(B)}),[B]),(0,s.useEffect)((()=>{J(N)}),[N]),(0,x.jsxs)(h.P.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[(0,x.jsx)(m.A,{body:"approve",toggleModal:we,headerText:`${ce&&ce.code} - ${e("kategoriyani o`chirishni tasdiqlaysizmi?")}`,title:e("O`chirilgan kategoriyalarni tiklashning imkoni mavjud emas!"),approveFunction:()=>{a((0,j.K7)(ce)),be()},closeModal:be,isOpen:de}),(0,x.jsx)("form",{className:"flex gap-[1.25rem] mt-[40px] bg-background ps-[20px] flex-col mainPadding transition ease-linear duration-200 "+(se?"stickyForm":""),children:(0,x.jsxs)("div",{className:"supplier-style",children:[(0,x.jsx)("span",{className:"lg:w-[400px] w-[90vw]",children:(0,x.jsx)(l.A,{value:$,onChange:e=>{let t=e.target.value;d.C.test(t)&&_(t)},label:e("Kategoriya kodi"),placeholder:`${e("misol")}: 000000`,className:"input-category "})}),(0,x.jsx)(l.A,{value:G,label:e("Kategoriya nomi"),placeholder:"",maxWidth:"w-[29rem]",type:"string",onChange:e=>{I(e.target.value)}}),(0,x.jsxs)("div",{className:"flex gap-[1.25rem] grow",children:[(0,x.jsx)("span",{className:"lg:w-[300px]",children:(0,x.jsx)(r.A,{onClick:se?t=>{t.preventDefault();const{failed:s,message:l}=(0,u.py)([{value:$,message:e("Kategoriya kodi")},{value:G,message:e("Kategoriya nomi")}]);if(s)(0,v.EB)(l);else{const e={currentPage:Z,countPage:H,search:{name:R.replace(/\s+/g," ").trim(),code:O.replace(/\s+/g," ").trim()},category:{name:G,code:$,_id:oe._id}};a((0,j.st)(e))}}:t=>{t.preventDefault();const{failed:s,message:l}=(0,u.py)([{value:$,message:e("Kategoriya kodi")},{value:G,message:e("Kategoriya nomi")}]);if(s)(0,v.EB)(l);else{const e={currentPage:Z,countPage:H,category:{name:G,code:$},search:{name:R.replace(/\s+/g," ").trim(),code:O.replace(/\s+/g," ").trim()}};a((0,j.Ah)(e))}},add:!se,edit:se,text:e(se?"Saqlash":"Yangi kategoriya qo'shish")})}),(0,x.jsx)("span",{className:"w-[200px] me-[-100px]",children:(0,x.jsx)(r.A,{onClick:ke,text:e("Tozalash")})})]})]})}),(0,x.jsx)(x.Fragment,{children:xe?(0,x.jsxs)("div",{className:"absolute lg:p-[50px] w-[100vw]  h-[100vh]  flex justify-evenly flex-wrap items-center  top-0\tleft-0 z-50 bg-[white]\t",children:[(0,x.jsx)(b.hvQ,{onClick:()=>ye(!1),className:" absolute right-[20px]  top-[20px]  text-4xl cursor-pointer"}),(0,x.jsx)(n.A,{filterBy:["total","category","name","startDate","endDate"],filterByTotal:De,filterByCategory:Ae,filterByName:Pe,filterByCodeAndNameAndCategoryWhenPressEnter:Ne,startDate:me,setStartDate:he,endDate:pe,setEndDate:fe}),(0,x.jsxs)("button",{onClick:()=>{ye(!1)},className:"d-block  hover:bg-green-200  bg-green-400 mt-[-200px] lg:mt-[25px]  focus-visible:outline-none w-[150px] h-[40px] createElement ",children:[(0,x.jsx)(f.YsJ,{})," ",e("izlash")]})]}):null}),(0,x.jsxs)("div",{className:"  flex flex-nowrap justify-evenly mb-2 gap-2 items-center lg:justify-start",children:[(0,x.jsx)(S.A,{onSelect:De},"total_1"),ve?(0,x.jsx)(y,{data:ye}):null,(0,x.jsx)(C.A,{onClick:()=>{const e=["\u2116","Kodi","Nomi"];if((null===M||void 0===M?void 0:M.length)>0){const t=(0,D.map)(M,((e,t)=>({nth:t+1,code:(null===e||void 0===e?void 0:e.code)||"",name:(null===e||void 0===e?void 0:e.name)||""})));(0,u.m1)(t,"Kategoriyalar",e)}else(0,v.lY)("Jadvalda ma'lumot mavjud emas !","warning")}})]}),ve?null:(0,x.jsx)(n.A,{filterBy:["total","category","name","startDate","endDate"],filterByTotal:De,filterByCategory:Ae,filterByName:Pe,filterByCodeAndNameAndCategoryWhenPressEnter:Ne,startDate:me,setStartDate:he,endDate:pe,setEndDate:fe}),ve?(0,x.jsx)("div",{className:"",children:E?(0,x.jsx)(o.A,{}):0===M.length&&0===T.length?(0,x.jsx)(i.A,{text:e("Maxsulot mavjud emas")}):(0,x.jsx)(k.A,{headers:t,Edit:Ce,Delete:Se,page:"category",data:T.length>0?T:M,Sort:Ee,sortItem:re,currentPage:Z,countPage:H,startDate:me,endDate:pe})}):(0,x.jsx)("div",{className:" tableContainerPadding ",children:E?(0,x.jsx)(o.A,{}):0===M.length&&0===T.length?(0,x.jsx)(i.A,{text:e("Maxsulot mavjud emas")}):(0,x.jsx)(c.A,{headers:t,Edit:Ce,Delete:Se,page:"category",data:T.length>0?T:M,Sort:Ee,sortItem:re,currentPage:Z,countPage:H,startDate:me,endDate:pe})}),(0,x.jsxs)("div",{className:" pagination-supplier ps-[0px] mainPadding flex flex-nowrap justify-center ",children:[(0,x.jsx)("p",{className:"supplier-title",children:e("")}),(0!==te||0!==Y)&&(0,x.jsx)(w.A,{countPage:Number(H),totalDatas:Y||te,currentPage:Z,setCurrentPage:ee})]})]},"content")}}}]);
//# sourceMappingURL=9834.aed8ef7e.chunk.js.map