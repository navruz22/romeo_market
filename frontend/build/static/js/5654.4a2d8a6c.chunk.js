"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1181,5654],{5068:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var r=a(221),l=a(9092),i=a(579);const n=function(e){let{readExcel:t}=e;const{t:a}=(0,l.B)(["common"]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{children:(0,i.jsxs)("label",{htmlFor:"import-field",className:"importButton",children:[a("Import"),(0,i.jsx)("span",{className:"btn-icon bg-white-900 p-[8px] text-primary-800",children:(0,i.jsx)(r.R2D,{size:"1rem"})})]})}),(0,i.jsx)("input",{type:"file",className:"hidden ",id:"import-field",onClick:e=>e.target.value=null,onChange:e=>{const a=e.target.files[0];t(a)}})]})}},8952:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var r=a(5043),l=a(3237),i=a(5068),n=a(1238),o=a(4964),c=a(2039),s=a(9456),u=a(4235),d=a(8054),m=a(1605),g=a(1154),h=a(3978),p=a(1800),x=a(3734),f=a(6694),v=a(5618),P=a(7630),y=a(4012),b=a(9092),C=a(579);const S=function(e){let{searchBarcode:t,stickyForm:a,handleChangeCodeOfProduct:r,codeOfProduct:l,handleChangeNameOfProduct:i,nameOfProduct:n,numberOfProduct:o,handleChangeNumberOfProduct:c,unitOfProduct:s,handleChangeUnitOfProduct:u,handleChangePriceOfProduct:d,priceOfProduct:m,sellingPriceOfProduct:g,handleChangeSellingPriceOfProduct:h,handleEdit:p,addNewProduct:x,clearForm:f,pageName:v,unitOptions:S,categoryOfProduct:j,categoryOptions:O,handleChangeCategoryOfProduct:N,checkOfProduct:k,handleChangeCheckOfProduct:w,tradePrice:A,handleChangeTradePrice:E,minimumCount:B,handleChangeMinimumCount:M,sellingPriceOfProcient:z,handleChangeSellingPriceOfProcient:U,handleChangeTradePriceProcient:D,tradePriceProcient:$}=e;const{t:Y}=(0,b.B)(["common"]);return(0,C.jsxs)("form",{className:"bg-[white] flex pl-[20px] gap-[1.25rem] shadow-none  flex-col mainPadding   duration-200 "+(a?"stickyForm":""),children:[(0,C.jsxs)("div",{className:"flex flex-wrap gap-[2.5rem]",children:[(0,C.jsx)(P.A,{label:Y("Shtrix kodi"),placeholder:`${Y("misol")}: 123456789`,onChange:w,value:k,maxWidth:"lg:w-[10rem] w-[90vw]",onKeyUp:t}),(0,C.jsx)(P.A,{value:j,onChange:N,label:Y("Kategoriya nomi"),placeholder:Y("tanlang..."),select:!0,options:O,maxWidth:"lg:w-[15rem] w-[90vw]"}),(0,C.jsx)(P.A,{label:Y("Maxsulot kodi"),placeholder:`${Y("misol")}: 1234`,onChange:r,value:l,type:"text",maxWidth:"lg:w-[8.5rem] w-[90vw]"}),(0,C.jsx)(P.A,{label:Y("Maxsulot nomi"),placeholder:`${Y("misol")}: Acer`,onChange:i,value:n})]}),(0,C.jsxs)("div",{className:"flex flex-wrap gap-[2.5rem] items-end",children:[(0,C.jsx)(P.A,{value:s,onChange:u,label:Y("O'lchov birligi"),placeholder:Y("tanlang..."),select:!0,options:S}),"accept"!==v&&(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(P.A,{value:o,onChange:c,label:Y("Maxsulot soni"),placeholder:`${Y("misol")}: 100`,type:"text"})}),"accept"!==v&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(P.A,{value:m,onChange:d,label:Y("Keltirilgan narxi"),placeholder:`${Y("misol")}: 100`,type:"text"}),(0,C.jsx)(P.A,{value:g,onChange:h,label:Y("Sotish narxi"),placeholder:`${Y("misol")}: 200`,type:"text"}),(0,C.jsx)(P.A,{value:z,onChange:U,label:Y("Sotish foizi"),placeholder:`${Y("misol")}: 30 %`,type:"text"})]})]}),(0,C.jsxs)("div",{className:"flex flex-wrap gap-[2.5rem] items-end",children:[(0,C.jsx)(P.A,{value:$,onChange:D,label:Y("Optom foizi"),placeholder:`${Y("misol")}: 30 %`,type:"text"}),(0,C.jsx)(P.A,{value:A,onChange:E,label:Y("Optom narxi"),placeholder:`${Y("misol")}: 300`,type:"text"}),(0,C.jsx)(P.A,{value:B,onChange:M,label:Y("Minimum qiymat"),placeholder:`${Y("misol")}: 300`,type:"text"}),(0,C.jsxs)("div",{className:"flex gap-[1.25rem] min-w-[20rem]",children:[(0,C.jsx)(y.A,{onClick:a?p:x,add:!a,edit:a,text:Y(a?"Saqlash":"Yangi maxsulot qo'shish")}),(0,C.jsx)(y.A,{onClick:f,text:Y("Tozalash")})]})]})]})};var j=a(5842),O=a(200),N=a(7424),k=a(6490),w=a(2300),A=a(7624),E=a(3536),B=a(7160),M=a(5369),z=a(3297),U=a(8069);const D=function(){const{t:e}=(0,b.B)(["common"]),t=(0,s.wA)(),{market:{_id:a}}=(0,s.d4)((e=>e.login)),{units:P}=(0,s.d4)((e=>e.units)),{allcategories:y}=(0,s.d4)((e=>e.category)),{currency:D,currencyType:$}=(0,s.d4)((e=>e.currency)),{products:Y,total:Z,loading:F,lastProductCode:T,searchedProducts:q,totalSearched:_,loadingExcel:K}=(0,s.d4)((e=>e.products)),{barcode:I}=(0,s.d4)((e=>e.barcode)),[W,Q]=(0,r.useState)(Y),[J,L]=(0,r.useState)(q),[R,V]=(0,r.useState)(""),[G,H]=(0,r.useState)(""),[X,ee]=(0,r.useState)(""),[te,ae]=(0,r.useState)(""),[re,le]=(0,r.useState)(""),[ie,ne]=(0,r.useState)(""),[oe,ce]=(0,r.useState)(""),[se,ue]=(0,r.useState)(""),[de,me]=(0,r.useState)(""),[ge,he]=(0,r.useState)(""),[pe,xe]=(0,r.useState)(""),[fe,ve]=(0,r.useState)(""),[Pe,ye]=(0,r.useState)(""),[be,Ce]=(0,r.useState)(""),[Se,je]=(0,r.useState)("10"),[Oe,Ne]=(0,r.useState)(0),[ke,we]=(0,r.useState)(Z),[Ae,Ee]=(0,r.useState)(!1),[Be,Me]=(0,r.useState)(null),[ze,Ue]=(0,r.useState)(!1),[De,$e]=(0,r.useState)(null),[Ye,Ze]=(0,r.useState)(null),[Fe,Te]=(0,r.useState)([]),[qe,_e]=(0,r.useState)([]),[Ke,Ie]=(0,r.useState)([]),[We,Qe]=(0,r.useState)([]),[Je,Le]=(0,r.useState)(""),[Re,Ve]=(0,r.useState)({filter:"",sort:"",count:0}),[Ge,He]=(0,r.useState)(window.innerWidth<=768),[Xe,et]=(0,r.useState)(!1),[tt,at]=(0,r.useState)(""),[rt,lt]=(0,r.useState)(""),[it,nt]=(0,r.useState)(""),[ot,ct]=(0,r.useState)(""),[st,ut]=(0,r.useState)(""),[dt,mt]=(0,r.useState)(!1),[gt,ht]=(0,r.useState)(!1),pt=()=>Ue(!ze),xt=[{title:e("\u2116")},{filter:"productdata.barcode",title:e("Shtrix kodi")},{title:e("Kategoriyasi"),filter:e("category.code")},{title:e("Kodi"),filter:"productdata.code"},{title:e("Nomi"),filter:"productdata.name"},{title:e("Soni"),filter:"total"},{title:e("Olish"),filter:"UZS"===$?"price.incomingpriceuzs":"price.incomingprice"},{title:e("Sotish"),filter:"UZS"===$?"price.sellingpriceuzs":"price.sellingprice"},{title:e("Optom"),filter:"UZS"===$?"price.tradeprice":"price.tradepriceuzs"},{title:e("Minimum qiymat"),filter:"minimumcount",styles:"w-[5%]"},{title:""}];(0,r.useEffect)((()=>{const e=()=>{He(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const ft=e=>{let t=e.target.value;f.C.test(t)&&V(e.target.value)},vt=e=>{let t=e.target.value;f.C.test(t)&&H(t)},Pt=e=>{ee(e.target.value)},yt=e=>{let t=Number(e.target.value);f.C.test(t)&&ae(t)},bt=(e,t,a)=>{a&&W?(ce((0,O.Df)(t+t*a/100)),he((0,O.tE)(e+e*a/100))):(ce(""),he(""))},Ct=e=>{let t=e.target.value;f.C.test(t)&&("UZS"===$?(ne(t),me((0,O.Ch)(t,D)),bt((0,O.Ch)(t,D),Number(t),Number(se))):(me(t),ne((0,O.IQ)(t,D)),bt(Number(t),(0,O.IQ)(t,D),Number(se))))},St=e=>{let t=e.target.value;f.C.test(t)&&("UZS"===$?(ce(t),he((0,O.Ch)(t,D))):(he(t),ce((0,O.IQ)(t,D))))},jt=e=>{let t=e.target.value;ue(t),bt(Number(de),Number(ie),Number(t))},Ot=e=>{le(e)},Nt=e=>{xe(e);const a={categoryId:e.value};t((0,h.jm)(a))},kt=e=>{let t=e.target.value;f.C.test(t)&&at(t)},wt=e=>{let t=e.target.value;f.C.test(t)&&("UZS"===$?(nt(t),lt((0,O.Ch)(t,D))):(lt(t),nt((0,O.IQ)(t,D))))},At=e=>{let t=e.target.value;var a,r,l;ct(t),a=Number(de),r=Number(ie),(l=Number(t))&&W?(nt((0,O.Df)(r+r*l/100)),lt((0,O.tE)(a+a*l/100))):(nt(""),lt(""))},Et=e=>{let a=e.target.value,r=a.replace(/\s+/g," ").trim();if(ve(a),(J.length>0||_>0)&&t((0,h.$g)()),""===r)Q(Y),we(Z);else{const e=(0,E.filter)(Y,(e=>e.productdata.code.includes(r)));Q(e),we(e.length)}},Bt=e=>{let a=e.target.value,r=a.replace(/\s+/g," ").trim();if(Le(a),(J.length>0||_>0)&&t((0,h.$g)()),""===r)Q(Y),we(Z);else{const e=(0,E.filter)(Y,(e=>{var t;return null===(t=e.productdata)||void 0===t?void 0:t.barcode.includes(r)}));Q(e),we(e.length)}},Mt=e=>{let a=e.target.value,r=a.replace(/\s+/g," ").trim();if(Ce(a),(J.length>0||_>0)&&t((0,h.$g)()),""===r)Q(Y),we(Z);else{const e=(0,E.filter)(Y,(e=>e.category.code.includes(r)));Q(e),we(e.length)}},zt=e=>{let a=e.target.value,r=a.toLowerCase().replace(/\s+/g," ").trim();if(ye(a),(J.length>0||_>0)&&t((0,h.$g)()),""===r)Q(Y),we(Z);else{const e=(0,E.filter)(Y,(e=>e.productdata.name.toLowerCase().includes(r)));Q(e),we(e.length)}},Ut=e=>{if("Enter"===e.key){Ne(0);const e={currentPage:0,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()},product:{code:G,name:X.replace(/\s+/g," ").trim(),unit:re.value,market:a}};t((0,h.Yp)(e))}},Dt=e=>{if("Enter"===e.key){Ne(0);const e={currentPage:0,countPage:Se,search:{barcode:Je.replace(/\s+/g," ").trim()},product:{code:G,name:X.replace(/\s+/g," ").trim(),unit:re.value,market:a}};t((0,h.Yp)(e))}},$t=e=>{let{value:t}=e;je(t),Ne(0)},Yt=e=>{if("Enter"===e.key){const a={code:e.target.value};t((0,w.nN)(a))}},Zt=r=>{if(r.preventDefault(),D){const{failed:r,message:l}=(0,O.py)([{value:R,message:e("Maxsulot shtrix kodi")},{value:G,message:e("Maxsulot kodi")},{value:X,message:e("Maxsulot nomi")},{value:re,message:e("Maxsulot o'lchov birligi")},{value:pe,message:e("Maxsulot kategoriyasi")},{value:ie,message:e("Maxsulot kelish narxi")},{value:oe,message:e("Maxsulot sotish narxi")},{value:rt,message:e("Maxsulot optom narxi")},{value:tt,message:e("Maxsulot minimal miqdori")}]);if(r)(0,x.EB)(l);else{const e={currentPage:Oe,countPage:Se,category:pe.value,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()},product:{code:G,name:X.replace(/\s+/g," ").trim(),total:te,unit:re.value,category:pe.value,market:a,incomingprice:de,sellingprice:ge,incomingpriceuzs:ie,sellingpriceuzs:oe,barcode:R,tradeprice:rt,tradepriceuzs:it,minimumcount:tt}};t((0,h.Bj)(e)).then((e=>{let{error:a}=e;a||(Ft(),Wt(),t((0,B.AS)()))}))}}else(0,x.QC)()},Ft=e=>{e&&e.preventDefault(),H(""),ee(""),V(""),ae(""),ne(""),ce(""),me(""),he(""),le(""),xe(""),lt(""),nt(""),at(""),Me(null),Ee(!1),ue(""),ct("")},Tt=a=>{a.preventDefault();const{failed:r,message:l}=(0,O.py)([{value:R,message:e("Maxsulot shtrix kodi")},{value:G,message:e("Maxsulot kodi")},{value:X,message:e("Maxsulot nomi")},{value:re,message:e("Maxsulot o'lchov birligi")},{value:pe,message:e("Maxsulot kategoriyasi")},{value:ie,message:e("Maxsulot kelish narxi")},{value:oe,message:e("Maxsulot sotish narxi")},{value:rt,message:e("Maxsulot optom narxi")},{value:tt,message:e("Maxsulot minimal miqdori")}]);if(r)(0,x.EB)(l);else{const e={product:{...Be,name:X.replace(/\s+/g," ").trim(),code:G,category:pe.value,unit:re.value,priceid:Be.price._id,productdata:Be.productdata._id,incomingprice:de,sellingprice:ge,incomingpriceuzs:ie,sellingpriceuzs:oe,total:te,barcode:R,tradeprice:rt,tradepriceuzs:it,minimumcount:tt},currentPage:Oe,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()}};t((0,h.vc)(e)).then((e=>{let{error:a}=e;if(!a){Ft(),Ee(!1);const e={currentPage:Oe,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()}};t((0,h.d$)(e)).then((()=>{document.querySelector(`#${st}`).scrollIntoView({block:"center"})}))}}))}},qt=e=>{["xls","xlsx"].includes(e.name.split(".").pop())?(et(!0),new Promise(((t,a)=>{const r=new FileReader;r.readAsArrayBuffer(e),r.onload=e=>{const a=e.target.result,r=n.LF(a,{type:"buffer"}),l=r.SheetNames[0],i=r.Sheets[l],o=n.Wp.sheet_to_json(i);t(o)},r.onerror=e=>{(0,x.lY)("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0444\u0430\u0439\u043b\u0430","error"),a(e)}})).then((e=>{e.length>0?(Ie(e),Ze("import"),pt()):(0,x.lY)("Jadvalda ma`lumot mavjud emas","error"),et(!1)}))):(0,x.lY)("Fayl formati noto'g'ri","error")},_t=(e,t)=>{ut(e),Me(t),Ee(!0)},Kt=e=>{const t={...e,currentPage:Oe,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()},name:X.replace(/\s+/g," ").trim(),productdata:e.productdata._id};$e(t),Ze("approve"),pt()},It=()=>{Ue(!1),$e(null),setTimeout((()=>{Ze(null)}),500)},Wt=()=>{Ue(!1),setTimeout((()=>{Ze(null)}),500)},Qt=e=>{if(e===Re.filter)switch(Re.count){case 1:Ve({filter:e,sort:"1",count:2}),(0,O.Yc)(J.length>0?J:W,J.length>0?L:Q,e,1,J.length>0?q:Y);break;case 2:Ve({filter:e,sort:"",count:0}),(0,O.Yc)(J.length>0?J:W,J.length>0?L:Q,e,"",J.length>0?q:Y);break;default:Ve({filter:e,sort:"-1",count:1}),(0,O.Yc)(J.length>0?J:W,J.length>0?L:Q,e,-1,J.length>0?q:Y)}else Ve({filter:e,sort:"-1",count:1}),(0,O.Yc)(J.length>0?J:W,J.length>0?L:Q,e,-1,J?q:Y,J.length>0)},Jt=()=>{const a=[e("\u2116"),e("Shtrix kodi"),e("Mahsulot kategoriyasi"),e("Mahsulot kodi"),e("Mahsulot nomi"),e("Soni"),e("O'lchov birligi"),e("Kelish narxi USD"),e("Kelish narxi UZS"),e("Sotish narxi USD"),e("Sotish narxi UZS"),e("Optom narxi USD"),e("Optom narxi UZS"),e("Minimum qiymat"),e("ID")],r={search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()}};t((0,h.cA)(r)).then((e=>{let{error:t,payload:r}=e;if(!t)if((null===r||void 0===r?void 0:r.length)>0){const e=(0,E.map)(r,((e,t)=>{var a,r,l,i,n,o,c,s,u,d,m;return{nth:t+1,barcode:(null===e||void 0===e||null===(a=e.productdata)||void 0===a?void 0:a.barcode)||"",category:(null===e||void 0===e||null===(r=e.category)||void 0===r?void 0:r.code)||"",code:(null===e||void 0===e||null===(l=e.productdata)||void 0===l?void 0:l.code)||"",name:(null===e||void 0===e||null===(i=e.productdata)||void 0===i?void 0:i.name)||"",total:(null===e||void 0===e?void 0:e.total)||"",unit:(null===e||void 0===e||null===(n=e.unit)||void 0===n?void 0:n.name)||"",incomingprice:(null===e||void 0===e||null===(o=e.price)||void 0===o?void 0:o.incomingprice)||"",incomingpriceuzs:(null===e||void 0===e||null===(c=e.price)||void 0===c?void 0:c.incomingpriceuzs)||"",sellingprice:(null===e||void 0===e||null===(s=e.price)||void 0===s?void 0:s.sellingprice)||"",sellingpriceuzs:(null===e||void 0===e||null===(u=e.price)||void 0===u?void 0:u.sellingpriceuzs)||"",tradeprice:(null===e||void 0===e||null===(d=e.price)||void 0===d?void 0:d.tradeprice)||"",tradepriceuzs:(null===e||void 0===e||null===(m=e.price)||void 0===m?void 0:m.tradepriceuzs)||"",minimumcount:(null===e||void 0===e?void 0:e.minimumcount)||"",id:(null===e||void 0===e?void 0:e._id)||""}}));(0,O.m1)(e,"Maxsulotlar",a)}else(0,x.lY)("Jadvalda ma'lumot mavjud emas !","warning")}))};return(0,r.useEffect)((()=>{const e={currentPage:Oe,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()}};t((0,h.d$)(e))}),[Oe,Se,t]),(0,r.useEffect)((()=>{t((0,p.YU)()),t((0,j.QU)()),t((0,A.OY)())}),[t]),(0,r.useEffect)((()=>{Q(Y)}),[Y]),(0,r.useEffect)((()=>{we(Z)}),[Z]),(0,r.useEffect)((()=>{if(Be){const{productdata:{name:e,code:t,barcode:a},unit:r,total:l,category:i,minimumcount:n,price:{sellingprice:o,incomingprice:c,sellingpriceuzs:s,incomingpriceuzs:u,tradeprice:d,tradepriceuzs:m}}=Be;H(t),ee(e),ae(l),le({value:r._id,label:r.name}),xe({value:i._id,label:`${i.code} - ${i.name}`}),ne(u),ce(s),me(c),he(o),V(a||""),at(n||0),lt(d||0),nt(m||0)}}),[Be]),(0,r.useEffect)((()=>{Te((0,E.map)(P,(e=>({value:e._id,label:e.name}))))}),[P]),(0,r.useEffect)((()=>{_e((0,E.map)(y,(e=>({value:e._id,label:e.code+""+(e.name?` - ${e.name}`:"")}))))}),[y]),(0,r.useEffect)((()=>{T&&(H(T),0===R.length&&(null===pe||void 0===pe?void 0:pe.label)&&V("47800"+pe.label.slice(0,3)+T))}),[T]),(0,r.useEffect)((()=>{L(q)}),[q]),(0,r.useEffect)((()=>{I&&ee(I.name)}),[I]),(0,C.jsxs)(m.P.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:[Xe&&(0,C.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[50] top-0 left-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full",children:(0,C.jsx)(u.A,{})}),K&&(0,C.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,C.jsx)(u.A,{})}),(0,C.jsx)(v.A,{toggleModal:pt,body:Ye,headerText:"approve"===Ye&&e("Mahsulotni o`chirishni tasdiqlaysizmi?"),title:"approve"===Ye&&e("O`chirilgan mahsulotni tiklashning imkoni mavjud emas!"),approveFunction:"approve"===Ye?()=>{t((0,h.DD)(De)).then((e=>{let{error:a}=e;if(!a){It();const e={currentPage:Oe,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()}};t((0,h.d$)(e))}}))}:()=>{const e=Object.keys(Ke[0]),a=(0,E.map)(We,(e=>{const t={};for(const a in e)t[a]=e[a];return t}));a.forEach((t=>e.forEach((e=>t.hasOwnProperty(e)&&delete t[e]))));const r={products:[...a],currentPage:Oe,countPage:Se,search:{name:Pe.replace(/\s+/g," ").trim(),code:fe.replace(/\s+/g," ").trim(),category:be.replace(/\s+/g," ").trim()}};t((0,h.bS)(r)).then((e=>{let{error:a}=e;a||(Wt(),t((0,B.AS)()))}))},closeModal:"approve"===Ye?It:Wt,isOpen:ze,excelData:Ke,headers:[{name:"Shtrix kodi",value:"barcode"},{name:"Kategoriyasi",value:"category"},{name:"Kodi",value:"code"},{name:"Nomi",value:"name"},{name:"Soni",value:"total"},{name:"O'lchov birligi",value:"unit"},{name:"Kelish narxi USD",value:"incomingprice"},{name:"Kelish narxi UZS",value:"incomingpriceuzs"},{name:"Sotish narxi USD",value:"sellingprice"},{name:"Sotish narxi UZS",value:"sellingpriceuzs"},{name:"Optom narxi USD",value:"tradeprice"},{name:"Optom narxi UZS",value:"tradepriceuzs"},{name:"Minimum qiymat",value:"minimumcount"}],createdData:We,setCreatedData:Qe}),Ge&&(0,C.jsx)("button",{onClick:()=>mt(!0),className:"hover:bg-green-200 lg:ms-[20px] lg:mt-[10px] lg:mb-[60px] mt-[60px] bg-green-300 focus-visible:outline-none w-[90%]  m-auto lg:w-[200px] lg:h-[33px] h=[40px] createElement",children:e("Yangi maxsulot qo'shish")}),Ge?dt&&(0,C.jsxs)("section",{className:"absolute lg:h-[100vh]  w-[100%] bg-[white] z-50 top-0 left-0",children:[(0,C.jsx)("div",{className:"flex justify-end p-[25px]",children:(0,C.jsx)(g.hvQ,{onClick:()=>mt(!1),className:"cursor-pointer text-3xl"})}),(0,C.jsx)(S,{nameOfProduct:X,unitOfProduct:re,categoryOfProduct:pe,codeOfProduct:G,checkOfProduct:R,tradePriceProcient:ot,handleChangeTradePriceProcient:At,handleChangeCheckOfProduct:ft,priceOfProduct:"UZS"===$?ie:de,sellingPriceOfProduct:"UZS"===$?oe:ge,sellingPriceOfProcient:se,numberOfProduct:te,handleChangeSellingPriceOfProduct:St,handleChangeSellingPriceOfProcient:jt,handleChangePriceOfProduct:Ct,handleChangeNumberOfProduct:yt,stickyForm:Ae,clearForm:Ft,handleEdit:Tt,addNewProduct:Zt,handleChangeCodeOfProduct:vt,handleChangeNameOfProduct:Pt,handleChangeUnitOfProduct:Ot,handleChangeCategoryOfProduct:Nt,pageName:"products",unitOptions:Fe,categoryOptions:qe,searchBarcode:Yt,minimumCount:tt,handleChangeMinimumCount:kt,tradePrice:"USD"===$?rt:it,handleChangeTradePrice:wt})]}):(0,C.jsx)(S,{nameOfProduct:X,unitOfProduct:re,categoryOfProduct:pe,codeOfProduct:G,checkOfProduct:R,tradePriceProcient:ot,handleChangeTradePriceProcient:At,handleChangeCheckOfProduct:ft,priceOfProduct:"UZS"===$?ie:de,sellingPriceOfProduct:"UZS"===$?oe:ge,sellingPriceOfProcient:se,numberOfProduct:te,handleChangeSellingPriceOfProduct:St,handleChangeSellingPriceOfProcient:jt,handleChangePriceOfProduct:Ct,handleChangeNumberOfProduct:yt,stickyForm:Ae,clearForm:Ft,handleEdit:Tt,addNewProduct:Zt,handleChangeCodeOfProduct:vt,handleChangeNameOfProduct:Pt,handleChangeUnitOfProduct:Ot,handleChangeCategoryOfProduct:Nt,pageName:"products",unitOptions:Fe,categoryOptions:qe,searchBarcode:Yt,minimumCount:tt,handleChangeMinimumCount:kt,tradePrice:"USD"===$?rt:it,handleChangeTradePrice:wt}),Ge?(0,C.jsx)("div",{className:"flex lg:mt-[-113px] pl-[20px] mt-0 flex-wrap lg:justify-start justify-center lg:ms-[200px] items-center mainPadding",children:(0,C.jsxs)("div",{className:"flex gap-[1rem] ms-[1rem]  mb-[15px] ",children:[(0,C.jsx)(l.A,{onClick:Jt}),(0,C.jsx)(i.A,{readExcel:qt}),Ge?(0,C.jsxs)("button",{onClick:()=>ht(!0),className:"hover:bg-blue-200  bg-blue-400 focus-visible:outline-none w-[90px] h-[33px]  createElement",children:[(0,C.jsx)(M.YsJ,{})," ",e("izlash")]}):null]})}):(0,C.jsxs)("div",{className:"flex px-4 py-2 gap-2",children:[(0,C.jsx)(l.A,{onClick:Jt}),(0,C.jsx)(i.A,{readExcel:qt}),Ge?(0,C.jsxs)("button",{onClick:()=>ht(!0),className:"hover:bg-blue-200  bg-blue-400 focus-visible:outline-none w-[90px] h-[33px]  createElement",children:[(0,C.jsx)(M.YsJ,{})," ",e("izlash")]}):null]}),gt?(0,C.jsxs)("div",{className:"absolute lg:p-[50px] w-[100vw]  h-[100vh]  flex justify-evenly flex-wrap items-center  top-0\tleft-0 z-50 bg-[white]\t",children:[(0,C.jsx)(g.hvQ,{onClick:()=>ht(!1),className:" absolute right-[20px]  top-[20px]  text-4xl cursor-pointer"}),(0,C.jsx)(N.A,{filterBy:["total","barcode","category","code","name","doubleDate"],filterByCode:Et,filterByCodeAndNameAndCategoryWhenPressEnter:Ut,filterByName:zt,filterByTotal:$t,searchByCode:fe,searchByName:Pe,searchByCategory:be,filterByCategory:Mt,barCode:Je,filterByBarcode:Bt,filterByBarcodeWhenPressEnter:Dt}),(0,C.jsxs)("button",{onClick:()=>{ht(!1)},className:"d-block  hover:bg-green-200  bg-green-400 mt-[-200px] lg:mt-[25px] focus-visible:outline-none w-[150px] h-[40px] createElement ",children:[(0,C.jsx)(M.YsJ,{})," ",e("izlash")]})]}):null,(0,C.jsxs)("span",{className:"flex items-center  mb-3 ml-2 ",children:[(0,C.jsx)("div",{className:"lg:mt-[30px]",children:(0,C.jsx)(U.A,{label:"mas",onSelect:$t},"total_1")}),Ge?null:(0,C.jsx)(N.A,{filterBy:["total","barcode","category","code","name","doubleDate"],filterByCode:Et,filterByCodeAndNameAndCategoryWhenPressEnter:Ut,filterByName:zt,filterByTotal:$t,searchByCode:fe,searchByName:Pe,searchByCategory:be,filterByCategory:Mt,barCode:Je,filterByBarcode:Bt,filterByBarcodeWhenPressEnter:Dt})]}),(0,C.jsx)("div",{className:"lg:p-[20px] p-0",children:F?(0,C.jsx)(u.A,{}):0===W.length&&0===J.length?(0,C.jsx)(d.A,{text:"Maxsulot mavjud emas"}):Ge?(0,C.jsx)(z.A,{currencyType:$,headers:xt,Edit:_t,Delete:Kt,page:"product",data:J.length>0?J:W,Sort:Qt,sortItem:Re,currentPage:Oe,countPage:Se,currency:$,modalOpen:mt}):(0,C.jsx)(c.A,{currencyType:$,headers:xt,Edit:_t,Delete:Kt,page:"product",data:J.length>0?J:W,Sort:Qt,sortItem:Re,currentPage:Oe,countPage:Se,currency:$,modalOpen:mt})}),(0,C.jsx)("div",{className:"flex justify-center mb-[10px] mt-[20px]",children:(0!==ke||0!==_)&&(0,C.jsx)(o.A,{countPage:Number(Se),totalDatas:_||ke,currentPage:Oe,setCurrentPage:Ne})}),(0,C.jsx)(k.A,{onError:()=>{(0,x.lY)(`${e("Mahsulot kodi o'qilmadi!")}`,"warning")},onScan:e=>{V(e.toString());const a={code:e};t((0,w.nN)(a)).then((e=>{let{error:t}=e;if(t)return ee("")}))}})]},"content")}}}]);
//# sourceMappingURL=5654.4a2d8a6c.chunk.js.map