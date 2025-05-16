import{f as O}from"./index-D_Ss_HUe.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-D4lIrffr.js";function L(t){var s,a,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(s=0;s<i;s++)t[s]&&(a=L(t[s]))&&(e&&(e+=" "),e+=a)}else for(a in t)t[a]&&(e&&(e+=" "),e+=a);return e}function d(){for(var t,s,a=0,e="",i=arguments.length;a<i;a++)(t=arguments[a])&&(s=L(t))&&(e&&(e+=" "),e+=s);return e}const B="_switch__circle_1u8t4_16",F="_switch__label_1u8t4_34",G="_switch__input_1u8t4_65",J="_switch__track_1u8t4_71",K="_switch__thumb_1u8t4_75",r={switch:"_switch_1u8t4_1","switch--light":"_switch--light_1u8t4_7","switch--dark":"_switch--dark_1u8t4_10","switch--checked":"_switch--checked_1u8t4_13",switch__circle:B,switch__label:F,"switch__label--light":"_switch__label--light_1u8t4_52","switch__label--dark":"_switch__label--dark_1u8t4_55","switch__label--right":"_switch__label--right_1u8t4_58","switch__label--disabled":"_switch__label--disabled_1u8t4_61",switch__input:G,switch__track:J,switch__thumb:K},M=({theme:t,checked:s,defaultChecked:a,disabled:e,label:i,labelPosition:N,size:D="s",onChange:R})=>{const[m,$]=V.useState(s||a),H=P=>{$(!m),R(P)};return n.jsxs("label",{className:d(r.switch__label,r[`switch__label--${N}`],r[`switch__label--${t}`],e?r["switch__label--disabled"]:""),children:[i,n.jsx("input",{type:"checkbox",className:r.switch__input,defaultChecked:a,checked:s,disabled:e,onChange:H,"aria-checked":s,"aria-disabled":e,"aria-label":i}),n.jsx("div",{className:d(r.switch,r[`switch--${t}`],r[`switch--${D}`],m?r["switch--checked"]:""),children:n.jsx("div",{className:d(r.switch__circle)})})]})};M.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},theme:{required:!0,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const X={title:"Switch",component:M,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onChange:O()}},l={args:{label:"Autoupdate",theme:"light",size:"s",defaultChecked:!1,checked:!1,disabled:!1}},c={args:{label:"Autoupdate",theme:"dark",size:"s"}},o={args:{label:"Autoupdate",theme:"light",size:"s",disabled:!0}},u={args:{label:"Autoupdate",theme:"light",size:"s"}},h={args:{label:"Autoupdate",theme:"light",size:"s"}},_={args:{label:"Autoupdate",theme:"light",size:"m"}};var p,g,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Autoupdate",
    theme: "light",
    size: "s",
    defaultChecked: false,
    checked: false,
    disabled: false
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,f,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Autoupdate",
    theme: "dark",
    size: "s"
  }
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,v,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Autoupdate",
    theme: "light",
    size: "s",
    disabled: true
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var A,z,x;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Autoupdate",
    theme: "light",
    size: "s"
  }
}`,...(x=(z=u.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var C,S,E;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Autoupdate",
    theme: "light",
    size: "s"
  }
}`,...(E=(S=h.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var q,j,I;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Autoupdate",
    theme: "light",
    size: "m"
  }
}`,...(I=(j=_.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const Y=["LightTheme","DarkTheme","Disabled","Position","S","M"];export{c as DarkTheme,o as Disabled,l as LightTheme,_ as M,u as Position,h as S,Y as __namedExportsOrder,X as default};
