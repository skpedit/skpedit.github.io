var q=Object.create;var k=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,v=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),w=a=>{throw TypeError(a)};var o=(a,b,c)=>b in a?k(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,z=(a,b)=>{for(var c in b||={})n.call(b,c)&&o(a,c,b[c]);if(j)for(var c of j(b))p.call(b,c)&&o(a,c,b[c]);return a},A=(a,b)=>r(a,t(b));var B=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var C=(a,b)=>{var c={};for(var d in a)n.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&j)for(var d of j(a))b.indexOf(d)<0&&p.call(a,d)&&(c[d]=a[d]);return c};var D=(a,b)=>()=>(a&&(b=a(a=0)),b);var E=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),F=(a,b)=>{for(var c in b)k(a,c,{get:b[c],enumerable:!0})},x=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of u(b))!n.call(a,e)&&e!==c&&k(a,e,{get:()=>b[e],enumerable:!(d=s(b,e))||d.enumerable});return a};var G=(a,b,c)=>(c=a!=null?q(v(a)):{},x(b||!a||!a.__esModule?k(c,"default",{value:a,enumerable:!0}):c,a));var H=(a,b,c)=>new Promise((d,e)=>{var f=g=>{try{i(c.next(g))}catch(l){e(l)}},h=g=>{try{i(c.throw(g))}catch(l){e(l)}},i=g=>g.done?d(g.value):Promise.resolve(g.value).then(f,h);i((c=c.apply(a,b)).next())}),y=function(a,b){this[0]=a,this[1]=b};var I=a=>{var b=a[m("asyncIterator")],c=!1,d,e={};return b==null?(b=a[m("iterator")](),d=f=>e[f]=h=>b[f](h)):(b=b.call(a),d=f=>e[f]=h=>{if(c){if(c=!1,f==="throw")throw h;return h}return c=!0,{done:!1,value:new y(new Promise(i=>{var g=b[f](h);g instanceof Object||w("Object expected"),i(g)}),1)}}),e[m("iterator")]=()=>e,d("next"),"throw"in b?d("throw"):e.throw=f=>{throw f},"return"in b&&d("return"),e};export{z as a,A as b,B as c,C as d,D as e,E as f,F as g,G as h,H as i,I as j};