import{d as C,o as l,c as n,f as t,u as R,a as A,j as L,k as U,l as M,m as N,b as u,w as _,e,R as p,h as k,t as g,n as S}from"./index-CKbVKtIV.js";const B={class:"social-media-links"},E="https://www.linkedin.com/in/amine-errafii-a575019b/",V="https://github.com/amine01993",P=C({__name:"SocialMedia",setup(r){return(i,s)=>(l(),n("div",B,[t("div",{class:"media-item"},[t("a",{href:E,target:"_blank"},s[0]||(s[0]=[t("i",{class:"bi bi-linkedin"},null,-1)]))]),t("div",{class:"media-item"},[t("a",{href:V,target:"_blank"},s[1]||(s[1]=[t("i",{class:"bi bi-github"},null,-1)]))])]))}}),j=""+new URL("portfolio-logo-Cz_oGjGl.svg",import.meta.url).href,z=""+new URL("portfolio-logo-dark-gJ8UC9Zk.svg",import.meta.url).href,G={class:"logo"},H={key:0,src:j},T={key:1,src:z},$={class:"menu"},D={class:"menu-item"},F={class:"menu-item"},I={class:"menu-item"},J={class:"menu-item"},O={class:"menu-item"},W={key:0,class:"bi bi-sun"},Z={key:1,class:"bi bi-moon"},Q=C({__name:"AppHeader",setup(r){const{t:i,locale:s}=R({useScope:"global"}),{open:h,openMenu:m,closeMenu:a,theme:v,toggleTheme:b,toggleLocale:x}=A(),w=L(),d=U(),f=M(()=>"Amine Errafii | "+i("Web developer"));N(f,()=>{document.title=f.value});function y(){x(s,w,d)}return d.params.locale&&typeof d.params.locale=="string"&&(s.value=d.params.locale),(q,o)=>(l(),n("div",{class:S(["app-header",{open:e(h)}])},[t("div",G,[u(e(p),{to:{name:"home",params:{locale:e(s)==="en"?"":e(s)}},onClick:e(a)},{default:_(()=>[e(v)==="light"?(l(),n("img",H)):(l(),n("img",T))]),_:1},8,["to","onClick"])]),t("div",$,[t("div",D,[u(e(p),{exactActiveClass:"highlighted",to:{name:"home",params:{locale:e(s)==="en"?"":e(s)}},onClick:e(a)},{default:_(()=>[k(g(e(i)("Home")),1)]),_:1},8,["to","onClick"])]),t("div",F,[u(e(p),{exactActiveClass:"highlighted",to:{name:"about",params:{locale:e(s)==="en"?"":e(s)}},onClick:e(a)},{default:_(()=>[k(g(e(i)("About")),1)]),_:1},8,["to","onClick"])]),t("div",I,[u(e(p),{exactActiveClass:"highlighted",to:{name:"contact",params:{locale:e(s)==="en"?"":e(s)}},onClick:e(a)},{default:_(()=>[k(g(e(i)("Contact")),1)]),_:1},8,["to","onClick"])]),t("div",J,[t("div",{class:"locale",onClick:y},g(e(s)==="en"?"EN":"FR"),1)]),t("div",O,[t("div",{class:"theme",onClick:o[0]||(o[0]=(...c)=>e(b)&&e(b)(...c))},[e(v)==="light"?(l(),n("i",W)):(l(),n("i",Z))])])]),t("div",{class:"close-menu",onClick:o[1]||(o[1]=(...c)=>e(a)&&e(a)(...c))},o[3]||(o[3]=[t("i",{class:"bi bi-x-lg"},null,-1)])),t("div",{class:"open-menu",onClick:o[2]||(o[2]=(...c)=>e(m)&&e(m)(...c))},o[4]||(o[4]=[t("i",{class:"bi bi-list"},null,-1)]))],2))}}),X=(r,i)=>{const s=r.__vccOpts||r;for(const[h,m]of i)s[h]=m;return s};export{Q as _,P as a,X as b};
