import{s as M,t as F,y as s,aC as D,d2 as B,f as o,ad as i,L as O,ae as L,z as U,D as j}from"./index-B1wf86tJ.js";var q=function(d){M(t,d);function t(a){var e=d.call(this,a)||this;return e.state={collapsed:!1},a.mobileUI&&a.collapsible&&(e.state.collapsed=!0),e}return t.prototype.renderBody=function(){var a=this.props;a.type,a.className,a.style;var e=a.data;a.header;var C=a.body,c=a.render;a.bodyClassName,a.headerClassName,a.actionsClassName,a.footerClassName;var n=a.children;a.title,a.actions,a.footer,a.classPrefix;var h=a.formMode,p=a.formHorizontal,u=a.subFormMode,N=a.subFormHorizontal;a.id,a.themeCss,a.wrapperCustomStyle;var b=F(a,["type","className","style","data","header","body","render","bodyClassName","headerClassName","actionsClassName","footerClassName","children","title","actions","footer","classPrefix","formMode","formHorizontal","subFormMode","subFormHorizontal","id","themeCss","wrapperCustomStyle"]),v=s(s({data:e},D(b,B)),{formMode:u||h,formHorizontal:N||p});return n?typeof n=="function"?n(this.props):n:C?c("body",C,v):null},t.prototype.renderActions=function(){var a=this.props,e=a.actions,C=a.render;return Array.isArray(e)&&e.length?e.map(function(c,n){return C("action",c,{type:c.type||"button",key:n})}):null},t.prototype.render=function(){var a=this,e=this.props;e.type;var C=e.className,c=e.style,n=e.data,h=e.header;e.body;var p=e.render,u=e.bodyClassName,N=e.headerClassName,b=e.actionsClassName,v=e.footerClassName,R=e.footerWrapClassName,_=e.headerControlClassName,z=e.headerTitleControlClassName,H=e.bodyControlClassName,E=e.actionsControlClassName;e.children;var w=e.title,S=e.footer,T=e.affixFooter,A=e.classPrefix,r=e.classnames,l=e.id,x=e.collapsible,m=e.themeCss,g=e.wrapperCustomStyle,I=F(e,["type","className","style","data","header","body","render","bodyClassName","headerClassName","actionsClassName","footerClassName","footerWrapClassName","headerControlClassName","headerTitleControlClassName","bodyControlClassName","actionsControlClassName","children","title","footer","affixFooter","classPrefix","classnames","id","collapsible","themeCss","wrapperCustomStyle"]),P=s({data:n},I),f=[],y=this.state.collapsed;if(!y){var k=this.renderActions();k&&f.push(o.createElement("div",{key:"actions",className:r("Panel-btnToolbar",b||"Panel-footer",E)},k)),S&&f.push(o.createElement("div",{key:"footer",className:r(v||"Panel-footer",E)},p("footer",S,P)))}var W=f.length?o.createElement("div",{className:r("Panel-footerWrap",R,T?"Panel-fixedBottom":"",i(s(s({},this.props),{name:"footerControlClassName",id:l,themeCss:m})))},f):null;return o.createElement("div",{"data-id":l,className:r("Panel",C||"Panel--default",i(s(s({},this.props),{name:"baseControlClassName",id:l,themeCss:m})),i(s(s({},this.props),{name:"wrapperCustomStyle",id:l,themeCss:g}))),style:c},h?o.createElement("div",{className:r(N||"Panel-heading",_,i(s(s({},this.props),{name:"headerControlClassName",id:l,themeCss:m})))},p("header",h,P)):w?o.createElement("div",{className:r(N||"Panel-heading",_,{"is-collapsible":x},i(s(s({},this.props),{name:"headerControlClassName",id:l,themeCss:m})))},o.createElement("h3",{className:r("Panel-title",z,i(s(s({},this.props),{name:"titleControlClassName",id:l,themeCss:m})))},p("title",w,P)),x?o.createElement("span",{className:r("Panel-arrow-wrap"),onClick:function(){a.setState({collapsed:!y})}},o.createElement(O,{icon:"down-arrow-bold",className:r("Panel-arrow","icon",{"is-collapsed":y})})):null):null,y?null:o.createElement("div",{className:r(u||"Panel-body",H,i(s(s({},this.props),{name:"bodyControlClassName",id:l,themeCss:m})))},this.renderBody()),W,o.createElement(L,s({},this.props,{config:{wrapperCustomStyle:g,id:l,themeCss:m,classNames:[{key:"baseControlClassName"},{key:"bodyControlClassName"},{key:"headerControlClassName",weights:{default:{suf:".".concat(A,"Panel-heading")}}},{key:"titleControlClassName"},{key:"footerControlClassName"}]},env:this.props.env})))},t.propsList=["header","actions","children","headerClassName","footerClassName","footerWrapClassName","actionsClassName","bodyClassName"],t.defaultProps={},t}(o.Component),J=function(d){M(t,d);function t(){return d!==null&&d.apply(this,arguments)||this}return t=U([j({type:"panel"})],t),t}(q);export{J as PanelRenderer,q as default};