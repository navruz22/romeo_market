"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8751],{7623:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(5043),n=t(221),l=t(579);const r=function(e){let{star:a,placeholder:t,type:r,value:o,onChange:i,password:c,label:d,onKeyUp:u,disabled:m,autoComplete:b}=e;const[h,p]=(0,s.useState)(!1);return(0,l.jsxs)("div",{className:"input-container",children:[d&&(0,l.jsx)("label",{className:"labelClass leading-[1.125rem] "+(a?" after:content-['*'] after:text-[#F04438] after:pl-[0.25rem]":""),children:d}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{placeholder:t,type:h?"text":r,value:o,onChange:i,onKeyUp:u,disabled:m,className:(m?"disabled-class":"")+" inputClass shadow-[0_10px_10px_rgba(0,0,0,0.05)] leading-[1.125rem]",onWheel:e=>e.target.blur(),min:0,autoComplete:b||"off"}),c&&(0,l.jsx)("button",{className:"iconButton",type:"button",onClick:()=>{p(!h)},children:h?(0,l.jsx)(n.GNz,{className:"iconClass"}):(0,l.jsx)(n.Xyd,{className:"iconClass"})})]})]})}},8751:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var s=t(5043),n=t(5451),l=t(7623),r=t(3900),o=t(9456),i=t(9092),c=t(579);const d=function(){const{t:e}=(0,i.B)(["common"]),[a,t]=(0,s.useState)((new Date).toLocaleTimeString("uz-UZ",{hour12:!1})),n=[e("Yakshanba"),e("Dushanba"),e("Seshanba"),e("Chorshanba"),e("Payshanba"),e("Juma"),e("Shanba")],l=[e("Yanvar"),e("Fevral"),e("Mart"),e("Aprel"),e("May"),e("Iyun"),e("Iyul"),e("Avgust"),e("Sentabr"),e("Oktabr"),e("Noyabr"),e("Dekabr")];return setTimeout((()=>{t((new Date).toLocaleTimeString("uz-UZ",{hour12:!1}))}),1e3),(0,c.jsxs)("div",{className:"w-[60%] px-[2.5rem] py-[1.875rem] bg-loginButton rounded-[1.875rem] text-center text-white-900 flex flex-col gap-[1.25rem] shadow-[-23px_28px_15px_rgba(0,0,0,0.06)] absolute left-[79.5373665480427%] top-[6.761565836298932%] z-20",children:[(0,c.jsxs)("h5",{className:"font-bold text-[1.25rem] leading-[1.4375rem]",children:[n[(new Date).getDay()],", ",(new Date).getDate()," ",l[(new Date).getMonth()],", ",(new Date).getFullYear()," ",e("yil")]}),(0,c.jsx)("span",{className:"time-line block border-[1px] border-b-white-900"}),(0,c.jsx)("h3",{className:"leading-[1.75rem] font-bold text-[1.5rem]",children:a.replaceAll(":"," : ")})]})};var u=t(3734),m=t(7624);const b=function(){const{t:e}=(0,i.B)(["common"]),a=(0,o.wA)(),{loading:t,error:b}=(0,o.d4)((e=>e.login)),[h,p]=(0,s.useState)(""),[x,g]=(0,s.useState)(""),[f,w]=(0,s.useState)(window.innerWidth<=768);return(0,s.useEffect)((()=>{const e=()=>{w(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,s.useEffect)((()=>{b&&((0,u.lY)(b,"error"),setTimeout((()=>{a((0,r.ET)())}),1e3)),a((0,m.cL)())}),[b,a]),(0,c.jsx)("section",{className:"loginPage flex items-center justify-center",children:(0,c.jsxs)("div",{className:"loginCircle relative flex items-center justify-center",children:[(0,c.jsx)("div",{className:"login-circle-border bg-circle-1 w-full h-full rounded-full backdrop-blur-[10px] bg-white-400 absolute left-0 right-0 top-0 bottom-0"}),(0,c.jsxs)("div",{className:"login-circle bg-circle-2 rounded-full bg-white-900 z-20 flex flex-col gap-[1.875rem] justify-center items-center",children:[(0,c.jsx)("div",{className:"login-w logo-container w-[36.9%]",children:(0,c.jsx)("img",{src:n,className:"w-full pointer-events-none",alt:"Alo24 logo"})}),(0,c.jsxs)("form",{className:"login-f w-full px-[20%]",children:[(0,c.jsx)("div",{className:"mb-[1.25rem]",children:(0,c.jsx)(l.A,{label:e("Login"),type:"text",value:h,placeholder:"Loginni kiriting...",onChange:e=>{const a=e.target.value;p(a)}})}),(0,c.jsx)("div",{className:"mb-[1.25rem]",children:(0,c.jsx)(l.A,{label:e("Parol"),type:"password",value:x,placeholder:"Parolni kiriting...",password:!0,onChange:e=>{const a=e.target.value;g(a)}})}),(0,c.jsx)("button",{type:"submit",className:"w-[83.999999%] transition-all ease-in-out duration-200 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center py-[10px] bg-loginButton text-white-900 font-semibold shadow-[0_4px_5px_rgba(0,0,0,0.15)] rounded-[4px] mx-auto block enabled:hover:bg-success-500 enabled:active:bg-success-600 enabled:active:shadow-none leading-[1.125rem]",onClick:e=>{e.preventDefault();const t={login:h,password:x};a((0,r.Jv)(t))},disabled:t,children:t?(0,c.jsx)("span",{className:"animate-spin spinner mr-1"}):e("Kirish")})]})]}),f?null:(0,c.jsx)(d,{})]})})}}}]);
//# sourceMappingURL=8751.09805fb0.chunk.js.map