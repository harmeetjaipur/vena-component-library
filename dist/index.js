!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("@material-ui/core/styles"),require("@material-ui/core/Button"),require("@material-ui/core/CircularProgress"),require("@material-ui/core/TextField"),require("@material-ui/core/MenuItem"),require("@material-ui/core/FormControlLabel"),require("@material-ui/core/Switch"),require("@material-ui/core/InputAdornment")):"function"==typeof define&&define.amd?define(["react","@material-ui/core/styles","@material-ui/core/Button","@material-ui/core/CircularProgress","@material-ui/core/TextField","@material-ui/core/MenuItem","@material-ui/core/FormControlLabel","@material-ui/core/Switch","@material-ui/core/InputAdornment"],r):"object"==typeof exports?exports["vena-component-library"]=r(require("react"),require("@material-ui/core/styles"),require("@material-ui/core/Button"),require("@material-ui/core/CircularProgress"),require("@material-ui/core/TextField"),require("@material-ui/core/MenuItem"),require("@material-ui/core/FormControlLabel"),require("@material-ui/core/Switch"),require("@material-ui/core/InputAdornment")):e["vena-component-library"]=r(e.React,e["@material-ui/core/styles"],e["@material-ui/core/Button"],e["@material-ui/core/CircularProgress"],e["@material-ui/core/TextField"],e["@material-ui/core/MenuItem"],e["@material-ui/core/FormControlLabel"],e["@material-ui/core/Switch"],e["@material-ui/core/InputAdornment"])}(window,function(e,r,o,t,n,a,i,l,c){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=r,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=12)}([function(e,r,o){e.exports=o(10)()},function(r,o){r.exports=e},function(e,o){e.exports=r},function(e,r){e.exports=o},function(e,r){e.exports=t},function(e,r){e.exports=n},function(e,r){e.exports=a},function(e,r){e.exports=i},function(e,r){e.exports=l},function(e,r){e.exports=c},function(e,r,o){"use strict";var t=o(11);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,r,o,n,a,i){if(i!==t){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:n};return o.PropTypes=o,o}},function(e,r,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,o){"use strict";o.r(r);var t=o(1),n=o.n(t),a=o(0),i=o.n(a),l=o(2),c=o(3),s=o.n(c),u=o(4),d=o.n(u),p="#FFFFFF",b="#333333",f="#D8D8D8";function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function m(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function g(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function y(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?g(o,!0).forEach(function(r){x(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function x(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var C={root:{minHeight:"36px",borderRadius:"6px",fontWeight:"bold"}},v={root:{minHeight:"32px",borderRadius:"0",lineHeight:"20px",boxShadow:"none"}};function O(e){var r=e.classes,o=e.color,t=e.disabled,a=e.isLoading,i=e.iconClass,l=e.onClick,c=e.children,u=m(e,["classes","color","disabled","isLoading","iconClass","onClick","children"]),p="";switch(o){case"primary":p=r.primary;break;case"secondary":p=r.secondary;break;case"confirmation":p=r.confirmation;break;case"danger":p=r.danger;break;default:p=r.primary}return n.a.createElement(s.a,h({classes:{root:r.root,contained:p,label:a?r.loadingButtonLabel:null},variant:"contained",disabled:t||a,onClick:l},u),i&&n.a.createElement("i",{className:i+" "+r.icon}),a&&n.a.createElement("div",{className:r.loadingIconContainer},n.a.createElement(d.a,{color:"inherit",size:14})),c)}O.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},O.propTypes={classes:i.a.object.isRequired,color:i.a.oneOf(["primary","secondary","confirmation","danger"]),disabled:i.a.bool,isLoading:i.a.bool,iconClass:i.a.string,onClick:i.a.func.isRequired,children:i.a.node};var F=Object(l.withStyles)(function(e){return{root:y({minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",fontSize:"14px",color:p,textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto"}},"addin"===e.venaTheme?v.root:C.root),primary:{backgroundColor:"#0061BB","&:hover":{backgroundColor:"#00316E"},"&:disabled":{backgroundColor:"#76BDF5",color:p},"&:disabled&:hover":{backgroundColor:"#76BDF5",color:p}},secondary:{backgroundColor:f,color:b,"&:hover":{backgroundColor:"#B4B4B4"},"&:disabled":{backgroundColor:f,color:"#B4B4B4"},"&:disabled&:hover":{backgroundColor:f,color:"#B4B4B4"}},confirmation:{backgroundColor:"#009C49","&:hover":{backgroundColor:"#006E2A"},"&:disabled":{backgroundColor:"#7EAA93",color:p},"&:disabled&:hover":{backgroundColor:"#7EAA93",color:p}},danger:{backgroundColor:"#FF5555","&:hover":{backgroundColor:"#BC3C3C"},"&:disabled":{backgroundColor:"#FF7F84",color:p},"&:disabled&:hover":{backgroundColor:"#FF7F84",color:p}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible"}}})(O);function w(){return(w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function k(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function j(e){var r=e.classes,o=e.color,t=e.disabled,a=e.isLoading,i=e.iconClass,l=e.onClick,c=e.children,u=k(e,["classes","color","disabled","isLoading","iconClass","onClick","children"]),p="";switch(o){case"primary":p=r.primary;break;case"secondary":p=r.secondary;break;case"danger":p=r.danger;break;default:p=r.primary}return n.a.createElement(s.a,w({classes:{root:r.root,text:p,label:a?r.loadingButtonLabel:null},variant:"text",disabled:t||a,onClick:l},u),i&&n.a.createElement("i",{className:i+" "+r.icon}),a&&n.a.createElement("div",{className:r.loadingIconContainer},n.a.createElement(d.a,{color:"inherit",size:14})),c)}j.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},j.propTypes={classes:i.a.object.isRequired,color:i.a.oneOf(["primary","secondary","danger"]),disabled:i.a.bool,isLoading:i.a.bool,iconClass:i.a.string,onClick:i.a.func.isRequired,children:i.a.node};var T=Object(l.withStyles)(function(e){return{root:{minHeight:"36px",minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto",color:f},"&:disabled&:hover":{color:f}},primary:{color:"#0085FF","&:hover":{backgroundColor:"#D0E8FC"}},secondary:{color:b,"&:hover":{backgroundColor:f}},danger:{color:"#FF5555","&:hover":{backgroundColor:"#FFD2D4"}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible",color:b}}})(j),S=o(6),E=o.n(S),P=o(5),B=o.n(P);function R(e){return function(e){if(Array.isArray(e)){for(var r=0,o=new Array(e.length);r<e.length;r++)o[r]=e[r];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(e){var r=e.classes,o=e.placeholder,t=e.options,a=e.value,i=e.helperText,l=e.onChange,c=e.disabled,s=e.error,u=e.required,d=e.id,p=e.label,b=t;return o&&(b=[{value:o,menuListContent:n.a.createElement("div",{className:r.placeholder},o)}].concat(R(t))),n.a.createElement(B.a,{id:d,select:!0,label:p,disabled:c,error:s,value:a||b[0].value,onChange:l,FormHelperTextProps:{classes:{root:r.helperText}},InputProps:{disableUnderline:!0,classes:{root:r.inputRoot,input:r.inputInput,disabled:r.inputDisabled,error:r.inputError,formControl:r.inputFormControl,focused:r.inputFocused}},InputLabelProps:{shrink:!0,classes:{root:r.inputLabel},FormLabelClasses:{root:r.labelRoot,disabled:r.labelDisabled,error:r.labelError,focused:r.labelFocused},required:u},SelectProps:{classes:{select:r.select},MenuProps:{className:r.menu,classes:{paper:r.paper},MenuListProps:{className:r.listContainer}}},helperText:i,margin:"normal"},b.map(function(e){return n.a.createElement(E.a,{disableGutters:!0,classes:{root:r.listItem},key:e.value,value:e.value},e.menuListContent)}))}q.defaultProps={value:"",disabled:!1,required:!1,error:!1},q.propTypes={classes:i.a.object.isRequired,value:i.a.any,disabled:i.a.bool,required:i.a.bool,helperText:i.a.node,options:i.a.array.isRequired,placeholder:i.a.string,onChange:i.a.func,error:i.a.bool,id:i.a.string,label:i.a.string};var I=Object(l.withStyles)(function(e){return{listItem:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"3px 5px",fontSize:"14px"},paper:{top:"146px !important",left:"9px !important",boxShadow:"0px 1px 1px ".concat(f),borderRadius:0},select:{display:"flex",justifyContent:"flex-start",alignItems:"center","&:focus":{background:p}},listContainer:{padding:0,width:"320px"},inputLabel:{fontSize:"18px",color:b},placeholder:{color:"#6B6C67"},inputInput:{padding:"1px 20px 0 0"},inputRoot:{width:"320px",backgroundColor:p,border:"1px solid ".concat(f),boxSizing:"border-box",color:b,fontSize:"14px",height:"32px",marginTop:"24px",paddingLeft:"8px",paddingRight:"8px","&$inputFormControl":{marginTop:"24px"},"&:hover":{border:"1px solid ".concat("#6B6C67")},"&$inputDisabled":{border:"1px solid ".concat(f),backgroundColor:"#F2F2F2"},"&$inputError":{border:"1px solid ".concat("#FF5555")},"&$inputFocused":{border:"1px solid ".concat("#0085FF")}},inputDisabled:{},inputError:{},inputFormControl:{},inputFocused:{},helperText:{fontStyle:"italic"},labelRoot:{color:b,fontSize:"14px",transform:"scale(1)","&$labelDisabled":{color:b},"&$labelError":{color:b},"&$labelFocused":{color:b}},labelDisabled:{},labelError:{},labelFocused:{}}})(q),L=o(7),D=o.n(L),A=o(8),W=o.n(A),$=function(e){var r=e.classes,o=e.checked,t=e.onChange,a=e.enabledText,i=e.disabledText;return n.a.createElement(D.a,{control:n.a.createElement(W.a,{classes:{switchBase:r.switchBase,bar:r.switchBar,icon:r.switchIcon,iconChecked:r.switchIconChecked,checked:r.switchChecked},inputProps:{"aria-checked":o},checked:o,onChange:t}),label:o?a:i,classes:{label:o?r.switchLabelOn:r.switchLabelOff}})};$.defaultProps={checked:!1,onChange:function(){},enabledText:"ON",disabledText:"OFF"},$.propTypes={classes:i.a.object.isRequired,checked:i.a.bool,onChange:i.a.func.isRequired,enabledText:i.a.string,disabledText:i.a.string};var z=Object(l.withStyles)(function(e){return{switchBase:{"&$switchChecked":{color:p,"& + $switchBar":{backgroundColor:"#009C49"}},transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest,easing:e.transitions.easing.sharp})},switchChecked:{transform:"translateX(12px)","& + $switchBar":{opacity:1}},switchBar:{borderRadius:10,width:30,height:16,marginTop:-8,marginLeft:-4,backgroundColor:f,opacity:1},switchIcon:{width:12,height:12,marginLeft:23,boxShadow:"none"},switchLabelOn:{color:"#009C49",fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"},switchLabelOff:{color:"#B4B4B4",fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"}}})($),_=o(9),M=o.n(_);function N(){return(N=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function H(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function U(e){var r=e.classes,o=e.disabled,t=e.endAdornment,a=e.error,i=e.fullWidth,l=e.helperText,c=e.id,s=e.label,u=e.onChange,d=e.placeholder,p=e.readOnly,b=e.required,f=e.value,h=H(e,["classes","disabled","endAdornment","error","fullWidth","helperText","id","label","onChange","placeholder","readOnly","required","value"]);return n.a.createElement(B.a,N({disabled:o,error:a,fullWidth:i,helperText:l,id:c,label:s,onChange:u,placeholder:d,value:f,variant:"standard",InputLabelProps:{shrink:!0,FormLabelClasses:{root:r.labelRoot,disabled:r.labelDisabled,error:r.labelError,focused:r.labelFocused},required:b},InputProps:{classes:{root:r.inputRoot,input:r.inputInput,disabled:r.inputDisabled,error:r.inputError,formControl:r.inputFormControl,focused:r.inputFocused},disableUnderline:!0,endAdornment:t?n.a.createElement(M.a,{position:"end"},t):null,readOnly:p},classes:{root:r.formControlRoot,fullWidth:r.formControlFullWidth},FormHelperTextProps:{classes:{root:r.helperTextRoot,error:r.helperTextError}}},h))}U.defaultProps={disabled:!1,error:!1,readOnly:!1,required:!1},U.propTypes={classes:i.a.object.isRequired,disabled:i.a.bool,error:i.a.bool,endAdornment:i.a.node,fullWidth:i.a.bool,helperText:i.a.node,id:i.a.string,label:i.a.node,onChange:i.a.func,placeholder:i.a.string,readOnly:i.a.bool,required:i.a.bool,value:i.a.any};var G=Object(l.withStyles)(function(e){return{formControlRoot:{minWidth:"320px",margin:"16px 0 8px 0","&$formControlFullWidth":{minWidth:"0"}},formControlFullWidth:{},helperTextRoot:{color:"#6B6C67",fontSize:"12px",fontStyle:"italic","&$helperTextError":{color:"#FF5555"}},helperTextError:{},inputInput:{padding:"1px 0 0 0"},inputRoot:{backgroundColor:p,border:"1px solid ".concat(f),boxSizing:"border-box",color:b,fontSize:"14px",height:"32px",marginTop:"24px",paddingLeft:"8px",paddingRight:"8px","&$inputFormControl":{marginTop:"24px"},"&:hover":{border:"1px solid ".concat("#6B6C67")},"&$inputDisabled":{border:"1px solid ".concat(f),backgroundColor:"#F2F2F2"},"&$inputError":{border:"1px solid ".concat("#FF5555")},"&$inputFocused":{border:"1px solid ".concat("#0085FF")}},inputDisabled:{},inputError:{},inputFormControl:{},inputFocused:{},labelRoot:{color:b,fontSize:"14px",transform:"scale(1)","&$labelDisabled":{color:b},"&$labelError":{color:b},"&$labelFocused":{color:b}},labelDisabled:{},labelError:{},labelFocused:{}}})(U);o.d(r,"Button",function(){return F}),o.d(r,"FlatButton",function(){return T}),o.d(r,"Select",function(){return I}),o.d(r,"Switch",function(){return z}),o.d(r,"TextField",function(){return G})}])});