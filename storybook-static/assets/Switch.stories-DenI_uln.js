import{f as Y}from"./index-D_Ss_HUe.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css             */import{c as g}from"./clsx-B-dksMZM.js";import{r as Z}from"./index-D4lIrffr.js";const ee="_switch__circle_1frjq_17",se="_switch__label_1frjq_58",ae="_switch__input_1frjq_89",te="_switch__track_1frjq_95",re="_switch__thumb_1frjq_99",e={switch:"_switch_1frjq_5","switch--light":"_switch--light_1frjq_11","switch--dark":"_switch--dark_1frjq_14",switch__circle:ee,"switch--s":"_switch--s_1frjq_23","switch--m":"_switch--m_1frjq_30","switch--checked":"_switch--checked_1frjq_34",switch__label:se,"switch__label--light":"_switch__label--light_1frjq_76","switch__label--dark":"_switch__label--dark_1frjq_79","switch__label--right":"_switch__label--right_1frjq_82","switch__label--disabled":"_switch__label--disabled_1frjq_85",switch__input:ae,switch__track:te,switch__thumb:re},G=({theme:_,checked:m,defaultChecked:u,disabled:d,label:p,labelPosition:J="left",size:K="s",onChange:Q})=>{const[f,U]=Z.useState(m||u),W=X=>{U(!f),Q(X)};return s.jsxs("label",{className:g(e.switch__label,e[`switch__label--${J}`],e[`switch__label--${_}`],d?e["switch__label--disabled"]:""),children:[p,s.jsx("input",{type:"checkbox",className:e.switch__input,defaultChecked:u,checked:m,disabled:d,onChange:W,"aria-checked":m,"aria-disabled":d,"aria-label":p}),s.jsx("div",{className:g(e.switch,e[`switch--${_}`],e[`switch--${K}`],f?e["switch--checked"]:""),children:s.jsx("div",{className:g(e.switch__circle)})})]})};G.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},theme:{required:!0,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const he={title:"Switch/Switch",component:G,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onChange:Y()}},a={args:{label:"Toggle",theme:"light",size:"m",defaultChecked:!1,disabled:!1,checked:!0}},t={args:{label:"Toggle",theme:"light",size:"m",defaultChecked:!0,disabled:!1,checked:!1}},r={args:{label:"Toggle",theme:"light",size:"m",defaultChecked:!1,checked:!1,disabled:!1}},l={args:{label:"Toggle",theme:"dark",size:"m"},parameters:{backgrounds:{default:"dark"}}},i={args:{label:"Toggle",theme:"light",size:"m",disabled:!0}},c={args:{label:"Toggle",theme:"light",size:"m",labelPosition:"left"}},n={args:{label:"Toggle",theme:"light",size:"m",labelPosition:"right"}},o={args:{label:"Toggle",theme:"light",size:"s"}},h={args:{label:"Toggle",theme:"light",size:"m"}};var b,w,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    defaultChecked: false,
    disabled: false,
    checked: true
  }
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,q,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    defaultChecked: true,
    disabled: false,
    checked: false
  }
}`,...(j=(q=t.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var C,z,v;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    defaultChecked: false,
    checked: false,
    disabled: false
  }
}`,...(v=(z=r.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var S,y,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "dark",
    size: "m"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var E,P,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    disabled: true
  }
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var D,R,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    labelPosition: "left"
  }
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var M,N,$;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    labelPosition: "right"
  }
}`,...($=(N=n.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var H,V,O;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "s"
  }
}`,...(O=(V=o.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var A,B,F;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Toggle",
    theme: "light",
    size: "m"
  }
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const me=["Checked","DefaultChecked","LightTheme","DarkTheme","Disabled","LeftPosition","RightPosition","S","M"];export{a as Checked,l as DarkTheme,t as DefaultChecked,i as Disabled,c as LeftPosition,r as LightTheme,h as M,n as RightPosition,o as S,me as __namedExportsOrder,he as default};
