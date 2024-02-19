"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),$=require("../../utils/debounce.js");require("./style/index.css");const P={class:"fz-scroll"},I={class:"fz-scroll-container"},q=["data-index"],W=e.defineComponent({name:"fz-scroll",__name:"index",props:{list:{},step:{default:800},modelValue:{type:Boolean,default:!0},wheel:{type:Boolean,default:!0},hover:{type:Boolean,default:!0},delay:{default:0},waitTime:{default:0}},emits:["update:modelValue"],setup(S,{emit:L}){const o=S,z=L,w=e.computed({get(){return o.modelValue},set(t){z("update:modelValue",t)}}),i=e.ref(1),N=e.computed(()=>Array(i.value).fill(1).map((t,n)=>({id:n+t,list:o.list})));let l;const v=new IntersectionObserver(t=>{t.forEach(u=>{u.target.getAttribute("data-name")==="box"&&(i.value=u.intersectionRatio<1?2:1,e.nextTick(()=>{setTimeout(k,o.delay)}))});const n=t.filter(u=>u.target.getAttribute("data-index")),s=n.find(u=>u.intersectionRatio===1);s&&(a.value=Number(s.target.getAttribute("data-index"))),n.forEach(u=>{v.unobserve(u.target)})}),r=e.ref(null),B=e.ref([]),c=e.ref([]),a=e.ref(0),f=e.computed(()=>[0,...c.value.slice(1,Math.floor(c.value.length/i.value)+1).map(t=>t.offsetTop)]),d=$.debounce(()=>{i.value=1,l==null||l.cancel(),l=void 0,e.nextTick(()=>{r.value&&(v.unobserve(r.value),v.observe(r.value))})},200),y=e.ref(!1),E=e.ref(!1),T=()=>{var t,n;if(B.value.length>1){if(y.value)return;if(l){l.play();return}if(a.value){l=(t=r.value)==null?void 0:t.animate([{transform:`translateY(${-1*f.value[a.value]}px)`},{transform:"translateY(-50%)"}],{duration:o.step*(o.list.length-a.value),easing:"linear "});const s=()=>{a.value=0,l==null||l.removeEventListener("finish",s),l=void 0,T()};l==null||l.addEventListener("finish",s);return}l=(n=r.value)==null?void 0:n.animate([{transform:"translateY(0px)"},{transform:"translateY(-50%)"}],{duration:o.step*o.list.length,iterations:1/0,easing:"linear "})}},V=()=>{l&&(l.pause(),E.value||(c.value.forEach(t=>{v.observe(t)}),E.value=!0))},x=()=>{y.value=!1,E.value=!1,T()};let m=null;const p=t=>{if(r.value){if(typeof t=="number"||typeof t>"u"){r.value.style.transition=`transform ${t??o.step}ms linear`;return}r.value.style.transition=t}},b=()=>{m=setTimeout(()=>{a.value>=f.value.length-1&&(p(0),a.value=-1,g(1,!1)),setTimeout(()=>{p(),g(1,!1)},100)},o.waitTime)},_=()=>{m&&(clearTimeout(m),m=null),r.value&&(p(0),r.value.removeEventListener("transitionend",b,!0))},M=()=>{r.value&&(p(),b(),r.value.addEventListener("transitionend",b,!0))},g=(t,n=!0)=>{r.value&&(a.value+=t,t===-1&&a.value<0&&(a.value=f.value.length-2),t===1&&a.value>f.value.length-(n?2:1)&&(a.value=0),r.value.style.transform=`translateY(${-1*f.value[a.value]}px)`)},Y=t=>{i.value!==1&&(y.value=!0,l==null||l.cancel(),l=void 0,t.deltaY>0?g(1):g(-1))},k=()=>{if(!(!w.value||i.value===1)){if(!o.waitTime){x();return}M()}},R=()=>{if(!o.waitTime){V();return}_()};return e.onMounted(()=>{d(),window.addEventListener("resize",d)}),e.onBeforeUnmount(()=>{window.removeEventListener("resize",d),_()}),e.watch(()=>o.list,()=>{d()}),e.watch(w,t=>{if(t){k();return}R()}),(t,n)=>(e.openBlock(),e.createElementBlock("div",P,[e.createElementVNode("div",I,[e.createElementVNode("div",{ref_key:"boxRef",ref:r,class:"fz-scroll-container-box","data-name":"box",onWheel:n[0]||(n[0]=s=>t.wheel&&t.hover&&Y(s)),onMouseover:n[1]||(n[1]=s=>t.hover&&R()),onMouseleave:n[2]||(n[2]=s=>t.hover&&k())},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(N.value,s=>(e.openBlock(),e.createElementBlock("div",{key:s.id,ref_for:!0,ref_key:"listRefs",ref:B,class:"fz-scroll-container-box__list"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.list,(u,h)=>(e.openBlock(),e.createElementBlock("div",{key:h,ref_for:!0,ref_key:"itemRefs",ref:c,"data-index":h,class:"fz-scroll-container-box__list-item"},[e.renderSlot(t.$slots,"default",{index:h,data:u},()=>[e.createElementVNode("div",null,e.toDisplayString(u),1)])],8,q))),128))]))),128))],544)])]))}});exports.default=W;