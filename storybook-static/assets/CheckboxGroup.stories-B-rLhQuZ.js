import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as J}from"./clsx-B-dksMZM.js";import{r as k}from"./index-D4lIrffr.js";import{C as _}from"./Checkbox-BWT6pTsh.js";/* empty css             */const i={"checkbox-group":"_checkbox-group_su6h6_1","checkbox-group--horizontal":"_checkbox-group--horizontal_su6h6_18","checkbox-group--dark":"_checkbox-group--dark_su6h6_34","checkbox-group--m":"_checkbox-group--m_su6h6_37","checkbox-group__items":"_checkbox-group__items_su6h6_40"},H=({theme:h,size:g,orientation:M,groupLabel:V,options:I,onChange:e})=>{const[t,x]=k.useState(I),R=k.useCallback(r=>{x(o=>{const a=o.map((b,F)=>F===r?{...b,checked:!b.checked}:b);return e==null||e(a),a})},[e]),B=k.useCallback(()=>{const r=t.every(a=>a.checked),o=t.map(a=>({...a,checked:!r}));x(o),e==null||e(o)},[t,e]);return n.jsxs("div",{className:J(i[`checkbox-group--${M}`],i[`checkbox-group--${g}`],i[`checkbox-group--${h}`],i["checkbox-group"]),children:[n.jsx("span",{children:V}),n.jsx(_,{label:"Вcе",size:g,theme:h,checked:t.length>0&&t.every(r=>r.checked),onChange:B}),n.jsx("div",{className:i["checkbox-group__items"],children:t.map((r,o)=>n.jsx(_,{size:g,theme:h,label:r.label,checked:r.checked,onChange:()=>R(o)},o))})]})};H.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{orientation:{required:!0,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},theme:{required:!0,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""},groupLabel:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(options: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},name:"options"}],return:{name:"void"}}},description:""}}};const X={title:"Checkbox/CheckboxGroup",component:H,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{theme:{table:{disable:!0}},options:{table:{disable:!0}}}},s=[{label:"Москва",checked:!0},{label:"Санкт-Петербург",checked:!0},{label:"Екатеринбург",checked:!1}],c={args:{groupLabel:"Выберите город",orientation:"vertical",size:"s",theme:"light",options:s}},l={args:{groupLabel:"Выберите город",orientation:"horizontal",size:"s",theme:"light",options:s}},p={args:{groupLabel:"Выберите город",orientation:"vertical",size:"s",theme:"light",options:s}},u={args:{groupLabel:"Выберите город",orientation:"vertical",size:"m",theme:"light",options:s}},m={args:{groupLabel:"Выберите город",orientation:"vertical",size:"s",theme:"light",options:s}},d={args:{groupLabel:"Выберите город",orientation:"vertical",size:"s",theme:"dark",options:s},parameters:{backgrounds:{default:"dark"}}};var v,z,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "light",
    options: options
  }
}`,...(y=(z=c.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var L,f,S;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    groupLabel: "Выберите город",
    orientation: "horizontal",
    size: "s",
    theme: "light",
    options: options
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,T,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "light",
    options: options
  }
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var w,O,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "m",
    theme: "light",
    options: options
  }
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,E,G;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "light",
    options: options
  }
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var N,$,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "dark",
    options: options
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(D=($=d.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const Y=["Vertical","Horizontal","S","M","Light","Dark"];export{d as Dark,l as Horizontal,m as Light,u as M,p as S,c as Vertical,Y as __namedExportsOrder,X as default};
