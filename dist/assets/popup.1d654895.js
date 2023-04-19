import{p as z,_ as k,i as ee}from"./windi.257525f4.js";import{o as G,c as K,a as I,b as _,E as R,r as F,d as f,w as x,e as D,t as N,f as te,i as ae,p as re}from"./vendor.9462d1b9.js";import{c as ne}from"./config.1f584f33.js";const ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},oe=I("path",{d:"M30.702 440.542V92.705C33.358 39.559 76.183.64 123.407 0h347.836c55.938 3.476 122.726 25.407 158.596 65.89l514.859 573.089c32.341 40.942 33.256 97.599 0 131.778l-403 403c-39.514 35.748-98.47 34.227-131.779 0L96.591 599.137C59.17 554.944 31.218 495.859 30.702 440.542zm150.933-200.734c2.193 51.71 42.984 89.029 88.875 89.641c51.859-2.316 89.028-43.651 89.641-89.641c-2.283-51.883-43.829-88.273-89.641-88.875c-51.735 2.161-88.276 43.163-88.875 88.875z",fill:"currentColor"},null,-1),se=[oe];function le(e,a){return G(),K("svg",ie,se)}var ce={name:"el-tag",render:le};function ue(e){if(!e)return 0;const a=[0,0,0,0,0];return e>=365*24*3600&&(a[0]=parseInt(e/(365*24*3600)),e%=365*24*3600),e>=24*3600&&(a[1]=parseInt(e/(24*3600)),e%=24*3600),e>=3600&&(a[2]=parseInt(e/3600)-8,e%=3600),e>=60&&(a[3]=parseInt(e/60),e%=60),e>0&&(a[4]=e),a}function de(e){const a=Math.round((new Date().getTime()+288e5)/1e3),t=ue(a-e);return`${t[1]}D  ${t[2]}H:${t[3]}M:${t[4]}S`}async function l(e){return new Promise((a,t)=>{try{chrome.storage.local.get(e,r=>{a(r[e])})}catch(r){t(r)}})}async function C(e){return new Promise((a,t)=>{try{chrome.storage.local.set(e,()=>{a()})}catch(r){t(r)}})}async function _e(){return await new Promise((e,a)=>{chrome.cookies.getAll({url:"https://twitter.com/"},function(t){var r="";t.forEach(function(n){r+=n.name+"="+encodeURIComponent(n.value)+";"}),e(r),console.log(t)})})}_.defaults.retry=30;_.defaults.retryDelay=6e3;_.defaults.shouldRetry=e=>e.message=="Network Error";_.interceptors.response.use(void 0,e=>{var a=e.config;if(!a||!a.retry||!a.shouldRetry||typeof a.shouldRetry!="function"||!a.shouldRetry(e)||(a.__retryCount=a.__retryCount||0,a.__retryCount>=a.retry))return Promise.reject(e);a.__retryCount+=1;var t=new Promise(function(r){setTimeout(function(){r()},a.retryDelay||1)});return t.then(function(){return _(a)})});async function Z(e){await C({service_url:e,service_url:e});var a;await _.get(e+"/twitter_config").then(i=>{a=i.data}).catch(i=>{console.log(i)});for(var t=0;t<a.length;t++){var r={},n=a[t];r[`${n.key}`]=n.value,localStorage.setItem(n.key,n.value),await C(r)}}async function Q(){const e=await l("screen_name");var a=await l("service_url");let t;return await _.get(a+"/twitter_host",{params:{screen_name:e}}).then(r=>{t=r.data,console.log(r)}).catch(r=>{console.log(r)}),t}async function M(e){let a;var t=await l("service_url");return await _.get(t+"/twitter_events",{params:e}).then(r=>{a=r.data}).catch(r=>{a=[],console.log(r)}),a}async function me(){const e=await l("screen_name"),a=await l("time");let t;return a?t=M({screen_name:e}):t=M({screen_name:e,time:Math.floor(new Date().getTime()/1e3)}),await C({time:Math.floor(new Date().getTime()/1e3)}),t}function X(e){return new Promise(a=>setTimeout(a,e))}function pe(e,a){const t=Math.floor(Math.random()*(a-e+1))+e;return a==0?0:t}async function W(e){var a=await me();if(a&&a.length>0)for(var t=0;t<a.length;t++){var r=a[t];console.log(r);const c=pe(1,e);try{const o=r.option_name;if(await X(c*60*1e3),o.startsWith("\u8F6C\u63A8")&&await be(r),o.startsWith("\u8BC4\u8BBA\u597D\u53CB")&&await Ce(r),o.startsWith("\u8BC4\u8BBA\u63A8\u6587")&&await qe(r),new String(o).startsWith("\u70B9\u8D5E")&&await xe(r),new String(o).startsWith("\u5173\u6CE8\u65B0\u589E\u597D\u53CB")&&await Se(r),new String(o).startsWith("\u53D1\u9001\u63A8\u6587")&&await Te(r),new String(o).startsWith("\u4FEE\u6539\u8D44\u6599")){var n=await Q();await De(r,n)}new String(o).startsWith("\u53D1\u9001\u79C1\u4FE1")&&await j(r),new String(o).startsWith("\u4E3B\u52A8\u4E92\u52A8")&&await Oe(r),new String(o).startsWith("\u5237\u65B0\u9875\u9762")&&await Ae(r),new String(o).startsWith("\u5F15\u7528\u63A8\u6587\u53D1\u9001")&&setTimeout(async function(){await Ie(r)},1e3)}catch(o){const m=await l("logList");if(m){var i=JSON.parse(m);r.state="\u6267\u884C\u5931\u8D25",r.log=o,i.push(r),await C({logList:JSON.stringify(i)})}else{const p=[];r.state="\u6267\u884C\u5931\u8D25",r.log=o,p.push(r),await C({logList:JSON.stringify(p)})}}}}async function A(e){const a=await l("screen_name");let t;var r=await l("service_url");return await _.get(r+"/twitter",{params:{account:a,name:e}}).then(n=>{t=n.data}).catch(n=>{console.log(n),console.log("/twitter")}),t}async function P(){const e=await l("logList");if(e){var a=JSON.parse(e);return a.length>100&&(a=a.slice(a.length-100)),a.reverse()}return[]}async function we(e){var a=await l("lastRettweet");if(a){var t=await l("retweet_time"),r=t*60+a;r<new Date().getTime()/1e3&&(await C({executeTask:new Date().getTime()}),await W(e))}else await C({executeTask:new Date().getTime()}),await W(e)}async function L(e){try{await we(e);var a=await l("service_url");const r=await l("screen_name");var t=await l("header");t.cookies=await _e();const n={screen_name:r,cookie:t};_.request({url:a+"/save_cookie",method:"POST",data:n})}catch(r){console.log("\u8C03\u7528execute\u65B9\u6CD5\u51FA\u9519\u4E86",r)}try{setTimeout(async function(){await L(e)},5*1e3*60)}catch{await L(e)}}async function H(e,a){const t=await l("screen_name");var r=await l("service_url");_.post(r+"/twitter_host",{screen_name:t,script_version:z.version,browser:e,host:a})}async function he(){var e=await l("executeTask");return e}async function E(e,a,t){var r=await l("service_url"),n;return await _.request({url:r+"/send_content",params:{label:t,screen_name:e,event_url_id:a},method:"POST"}).then(i=>{n=i.data}).catch(i=>{console.log(i)}),n}async function O(e,a,t,r){var n=await l("service_url"),i;return await _.request({url:n+"/send_object",params:{label:e,screen_name:r,event_url_id:a,amount:t},method:"POST",timeout:12e4}).then(c=>{i=c.data}).catch(async c=>{X(2e4),c.message=="ERR_NETWORK"&&await O(e,a,t,r)}),i}async function fe(){try{var e=await l("service_url");await Z(e)}catch(a){console.log(a)}}function ge(){var e=localStorage.getItem("script_version");return e||(e=z.version),console.log(e),e}function ve(){return ne.service_url}_.defaults.retry=30;_.defaults.retryDelay=6e3;_.defaults.shouldRetry=e=>e.message=="Network Error";_.interceptors.response.use(void 0,e=>{var a=e.config;if(!a||!a.retry||!a.shouldRetry||typeof a.shouldRetry!="function"||!a.shouldRetry(e)||(a.__retryCount=a.__retryCount||0,a.__retryCount>=a.retry))return Promise.reject(e);a.__retryCount+=1;var t=new Promise(function(r){setTimeout(function(){r()},a.retryDelay||1)});return t.then(function(){return _(a)})});async function ye(){const e=await l("header");let a;return await _.get("https://twitter.com/i/api/1.1/account/multi/list.json",{headers:e}).then(async t=>{console.log(t),a=t.data.users[0].screen_name,await C({screen_name:a}),await C({userId:t.data.users[0].user_id})}).catch(t=>{console.log(t)}),a}async function be(e){if(e.is_action===1){const t=e.api_url,r=e.api_request_body,n=e.api_request_method_type,i=await l("header");i["content-type"]="application/json";const c=JSON.parse(r);c.variables=JSON.stringify(c.variables),await _.request({url:t,method:n,data:JSON.stringify(c),headers:i}).then(async o=>{var m=o.data;T(e,1,"\u6267\u884C\u6210\u529F",m),await C({lastRettweet:new Date().getTime()/1e3})}).catch(o=>{console.log(o)})}}async function xe(e){const a=e.tw_id;if(await l(`dz${a}`))return;const r=await l("header");r["content-type"]="application/json";var n=e.api_request_body;await _.request({url:e.api_url,method:e.api_request_method_type,data:n,headers:r}).then(async i=>{var c=i.data;T(e,1,"\u6267\u884C\u6210\u529F",c);const o={};o[`dz${a}`]=a,await C(o)}).catch(i=>{console.log(i)})}async function Se(e){const a=e.api_request_body,t=JSON.parse(a).user_id;if(await l(`gz${t}`))return;const n=e.api_url,i=e.api_request_method_type;var c=await l("header");c["Content-Type"]="application/x-www-form-urlencoded",console.log(a),await _.request({url:n,method:i,params:JSON.parse(a),headers:c}).then(async o=>{var m=o.data;T(e,1,"\u6267\u884C\u6210\u529F",m);const p={};p[`gz${t}`]=JSON.parse(a).user_id,await C(p)}).catch(o=>{console.log(o)})}async function Ce(e){if(e.is_action===1){const h=e.api_url,y=e.api_request_body,g=e.api_request_method_type,S=await l("header");S["content-type"]="application/json";const d=JSON.parse(y),b=e.number_friends;var t=await l("screen_name");if(e.content_tag){var r=new String(e.content_tag).split(","),n="";for(let s=0;s<r.length;s++){const u=r[s];var i=await E(t,e.id,u);n=`${n}${i.content}`}d.variables.tweet_text=n}if(e.send_content_tag){if(e.number_friends){var c=await O(e.send_content_tag,e.id,e.number_friends,t),o="";for(let s=0;s<c.length;s++){var m=c[s].screen_name;o=`${o}@${m}   `}var p=d.variables.tweet_text;d.variables.tweet_text=`${p}
${o}`}}else if(b){const s=await A("friends");if(s){const u=s.value,v=new String(u).split(",");let q="",$=v.length;if(e.number_friends){e.number_friends<=v.length&&($=e.number_friends);for(let J=0;J<$;J++){const B=v[J];q=`${q}  @${B}   `}d.variables.tweet_text=`${d.variables.tweet_text}  ${q}
`}}else return}else return;if(e.parameter){const u=new String(e.parameter).split(",");let w="";for(let v=0;v<u.length;v++){const q=u[v],$=await A(q);w=`${w}
${$.value}`}d.variables.tweet_text=`${d.variables.tweet_text}${w}`}d.variables=JSON.stringify(d.variables),await _.request({url:h,method:g,data:JSON.stringify(d),headers:S}).then(async s=>{var u=s.data;T(e,1,"\u6267\u884C\u6210\u529F",u)}).catch(s=>{console.log(s)})}}async function qe(e){if(e.is_action===1){const g=e.api_url,S=e.api_request_body,d=e.api_request_method_type,b=await l("header");b["content-type"]="application/json";var t=JSON.parse(S),r=await l("screen_name");if(e.content_tag){var n=new String(e.content_tag).split(","),i="";for(let s=0;s<n.length;s++){const u=n[s];var c=await E(r,e.id,u);i=`${i}${c.content}`}t.variables.tweet_text=i}if(e.send_content_tag&&e.number_friends){var o=await O(e.send_content_tag,e.id,e.number_friends,r),m="";for(let s=0;s<o.length;s++){var p=o[s].screen_name;m=`${m} @${p}  `}var h=t.variables.tweet_text;t.variables.tweet_text=`${h}
${m}`}if(e.parameter){const u=new String(e.parameter).split(",");let w=t.variables.tweet_text;for(let v=0;v<u.length;v++){const q=u[v],$=await A(q);w=`${w}
${$.value}`}t.variables.tweet_text=w}var y=await $e(e);y.length>0&&(t.variables.media.media_entities=y),t.variables=JSON.stringify(t.variables),await _.request({url:g,method:d,data:JSON.stringify(t),headers:b}).then(async s=>{var u=s.data;T(e,1,"\u6267\u884C\u6210\u529F",u)}).catch(s=>{console.log(s)})}}async function Ne(e){if(e.is_action===1){const y=e.api_url,g=e.api_request_body,S=e.api_request_method_type,d=await l("header");d["content-type"]="application/json";var t=JSON.parse(g),r=await l("screen_name");if(e.content_tag){var n=new String(e.content_tag).split(","),i="";for(let b=0;b<n.length;b++){const s=n[b];var c=await E(r,e.id,s);i=`${i}${c.content}`}t.variables.tweet_text=i}if(e.send_content_tag&&e.number_friends){var o=await O(e.send_content_tag,e.id,e.number_friends,r),m=`
`;for(let b=0;b<o.length;b++){var p=o[b].screen_name;m=`${m} @${p}   `}var h=t.variables.tweet_text;t.variables.tweet_text=h+m}if(e.parameter){const s=new String(e.parameter).split(",");let u=t.variables.tweet_text;for(let w=0;w<s.length;w++){const v=s[w],q=await A(v);u=`${u}
${q.value}`}t.variables.tweet_text=u}t.variables.tweet_text=`@${e.screen_name}
 ${t.variables.tweet_text}`,t.variables=JSON.stringify(t.variables),await _.request({url:y,method:S,data:JSON.stringify(t),headers:d}).then(async b=>{var s=b.data;T(e,1,"\u6267\u884C\u6210\u529F",s)}).catch(b=>{console.log(b)})}}async function Te(e){if(e.is_action===1){const y=e.api_url,g=e.api_request_body,S=e.api_request_method_type,d=await l("header");d["content-type"]="application/json";var t=JSON.parse(g);const b=e.number_friends;var r=await l("screen_name");if(e.content_tag){var n=new String(e.content_tag).split(","),i="";for(let s=0;s<n.length;s++){const u=n[s];var c=await E(r,e.id,u);i=`${i}${c.content}`}t.variables.tweet_text=i}if(e.send_content_tag){if(e.number_friends){var o=await O(e.send_content_tag,e.id,e.number_friends,r),m=`
`;for(let s=0;s<o.length;s++){var p=o[s].screen_name;m=`${m}  @${p}`}var h=t.variables.tweet_text;console.log("text:"+h),t.variables.tweet_text=h+m}}else if(b){const s=await A("friends");if(s){const u=s.value,v=new String(u).split(",");let q="",$=v.length;if(e.number_friends){$=e.number_friends;for(let J=0;J<$;J++){const B=v[J];q=`${q}@${B}   `}t.variables.tweet_text=`${t.variables.tweet_text}  ${q}
`}}}if(e.parameter){const u=new String(e.parameter).split(",");let w="";for(let v=0;v<u.length;v++){const q=u[v],$=await A(q);w=`${w}
${$.value}`}t.variables.tweet_text=`${t.variables.tweet_text}${w}`}t.variables=JSON.stringify(t.variables),await _.request({url:y,method:S,data:JSON.stringify(t),headers:d}).then(async s=>{var u=s.data;T(e,1,"\u6267\u884C\u6210\u529F",u)}).catch(s=>{console.log(s)})}}async function $e(e){var a=e.api_request_body,t=JSON.parse(a),r=new Array;if(t.variables.media){var n=t.variables.media.media_entities;if(n.length>0)for(let i=0;i<n.length;i++){const c=await l("header");await _.request({url:n[i],responseType:"blob"}).then(async o=>{var m=o.data,p=o.headers["content-length"];c["content-type"]="application/x-www-form-urlencoded",await _.request({url:"https://upload.twitter.com/i/media/upload.json",method:"POST",params:{command:"INIT",total_bytes:p,media_type:"image/jpeg",media_category:"tweet_image"},headers:c}).then(async h=>{var y=h.data.media_id_string;const g=new FormData;g.append("media",m,"1.jpg"),c["content-type"]="multipart/form-data",await _.request({url:`https://upload.twitter.com/i/media/upload.json?command=APPEND&media_id=${y}&segment_index=0`,method:"POST",data:g,headers:c}),await _.request({url:`https://upload.twitter.com/i/media/upload.json?command=FINALIZE&media_id=${y}`,method:"POST",headers:c}).then(S=>{var d=S.data.media_id_string,b={media_id:d,tagged_users:[]};r[i]=b}).catch(S=>{console.log(S)})})})}}return r}function U(e){return new Promise(a=>setTimeout(a,e))}async function De(e,a){var t=JSON.parse(e.api_request_body);const r=await l("header");r["content-type"]="application/x-www-form-urlencoded";var n=new String(a.password),i=n.substring(1,i.length),c=await l("service_url"),o;if(await _.get(c+"/twitter_reg").then(async p=>{o=p.data}),t.head){var m=await Y(o.profile_image_url_https);t.head.data.media_id=m,_.request({url:t.head.url,method:t.head.method,data:t.head.data,headers:r}).then(p=>{console.log(p)}).catch(p=>{console.log(p)})}if(t.back){var m=await Y(o.profile_banner_url);t.back.data.media_id=m,_.request({url:t.back.url,method:t.back.method,data:t.back.data,headers:r}).then(h=>{console.log(h)}).catch(h=>{console.log(h)})}t.profile,t.pwd&&(params={current_password:i,password:"",password_confirmation:""},t.pwd.data=params,_.request({url:t.pwd.url,method:t.pwd.method,data:t.pwd.data,headers:r}).then(p=>{console.log(p)}).catch(p=>{console.log(p)}))}async function Y(e){var a;const t=await l("header");return await _.request({url:e,responseType:"blob"}).then(async r=>{var n=r.data,i=r.headers["content-length"];t["content-type"]="application/x-www-form-urlencoded",await _.request({url:"https://upload.twitter.com/i/media/upload.json",method:"POST",params:{command:"INIT",total_bytes:i,media_type:"image/jpeg"},headers:t}).then(async c=>{var o=c.data.media_id_string;const m=new FormData;m.append("media",n,"1.jpg"),t["content-type"]="multipart/form-data",await _.request({url:`https://upload.twitter.com/i/media/upload.json?command=APPEND&media_id=${o}&segment_index=0`,method:"POST",data:m,headers:t}),await _.request({url:`https://upload.twitter.com/i/media/upload.json?command=FINALIZE&media_id=${o}`,method:"POST",headers:t}).then(p=>{var h=p.data.media_id_string;a=h}).catch(p=>{console.log(p)})})}),a}function Fe(){for(var e=[],a="0123456789abcdef",t=0;t<36;t++)e[t]=a.substr(Math.floor(Math.random()*16),1);e[14]="4",e[19]=a.substr(e[19]&3|8,1),e[8]=e[13]=e[18]=e[23]="-";var r=e.join("");return r}async function j(e){var a=await l("header"),t,r,n,i;if(await _.request({url:"https://twitter.com/i/api/graphql/Bhlf1dYJ3bYCKmLfeEQ31A/UserByScreenName",params:{variables:{screen_name:e.screen_name,withSafetyModeUserFields:!0,withSuperFollowsUserFields:!0}},headers:a,method:"GET"}).then(d=>{t=d.data.data.user.result.legacy.can_dm,r=d.data.data.user.result.legacy.following,n=d.data.data.user.result.legacy.can_media_tag,i=d.data.data.user.result.legacy}).catch(d=>{console.log(d)}),!(!t||r||!n||i.followed_by||i.follow_request_sent||i.verified)){var c=e.api_request_body,o=JSON.parse(c);a["content-type"]="application/x-www-form-urlencoded",o.request_id=Fe();var m=await l("screen_name");if(o.text){var p=new String(o.text).split(","),h="";for(let d=0;d<p.length;d++){var y=p[d],g=await E(m,e.id,y);h=`${h} ${g.content}`}o.text=`${e.screen_name}
${h}`}var S=await l("userId");o.conversation_id=`${o.conversation_id}-${S}`,console.log(2),_.request({url:e.api_url,method:e.api_request_method_type,params:o,headers:a}).then(async d=>{var b=d.data;T(e,1,"\u6267\u884C\u6210\u529F",b)}).catch(d=>{console.log(d)})}}async function Oe(e){var a=e.api_request_body,t=JSON.parse(a),r=await l("screen_name"),n=[];try{if(T(e,1,"\u4E92\u52A8\u5F00\u59CB",""),t.pl){var i=t.pl.param,c=i.send_obj,o=i.amount,m=i.content_tag,p=t.pl.tw,h=await l("comment_time");for(let d=0;d<o;d++){await U(h*60*1e3);var y=(await O(c,e.id,1,r))[0];console.log(y),n.push(y),p.param.variables.userId=y.user_id;var g=await Je(p);if(g>0){var S=t.pl.pl;S.param.variables.reply.in_reply_to_tweet_id=g,S.param.variables.tweet_text=m,e.api_request_body=JSON.stringify(S.param),e.api_request_method_type=S.method,e.api_url=S.url,e.option_name="\u8BC4\u8BBA\u63A8\u6587",e.screen_name=y.screen_name,e.tw_id=g,e.content_tag=m,await Ne(e)}}}if(t.sx){var i=t.sx.param,c=i.send_obj,o=i.amount,m=i.content_tag;if(n.length<=0)for(let w=0;w<o;w++){var y=(await O(c,e.id,1,r))[0],h=await l("private_letter_time");await U(h*60*1e3),t.sx.sx.param.conversation_id=y.user_id,t.sx.sx.param.text=m,e.api_request_method_type=t.sx.sx.method,e.api_request_body=JSON.stringify(t.sx.sx.param),e.api_url=t.sx.sx.url,e.screen_name=y.screen_name,e.option_name="\u53D1\u9001\u79C1\u4FE1",console.log(e),await j(e)}else for(let w=0;w<n.length;w++){const v=n[w];var h=await l("private_letter_time");await U(h*60*1e3),t.sx.sx.param.conversation_id=v.user_id,t.sx.sx.param.text=m,e.api_request_method_type=t.sx.sx.method,e.api_request_body=JSON.stringify(t.sx.sx.param),e.api_url=t.sx.sx.url,e.screen_name=v.screen_name,e.option_name="\u53D1\u9001\u79C1\u4FE1",console.log(e),await j(e)}}T(e,2,"\u4E92\u52A8\u7ED3\u675F","")}catch(d){T(e,-1,"\u4E92\u52A8\u5931\u8D25",d)}}async function T(e,a,t,r){const n=await l("logList");if(e.create_date=new Date().toLocaleString(),e.log=r,e.state=t,n){const o=JSON.parse(n);o.push(e),await C({logList:JSON.stringify(o)})}else{const o=[];o.push(e),await C({logList:JSON.stringify(o)})}var i=await l("service_url"),c=await l("screen_name");await _.post(i+"/twitter_execute_record",{screen_name:c,tw_id:e.tw_id,execute_state:a}).catch(o=>{console.log(o)})}async function Je(e){var a=await l("header");a["content-type"]="application/json";var t=0;return await _.request({url:e.url,params:e.param,method:e.method,headers:a}).then(r=>{var n=r.data,i=n.data.user.result.timeline_v2.timeline.instructions[1].entries;if(i.length>2){var c=i[0];t=c.content.itemContent.tweet_results.result.rest_id}if(t==0&&n.data.user.result.timeline_v2.timeline.instructions.length==3){var c=n.data.user.result.timeline_v2.timeline.instructions[2].entry;t=c.content.itemContent.tweet_results.result.rest_id,console.log(c)}}).catch(r=>{console.log(r)}),t}async function Ie(e){var a=await l("header"),t=e.send_content_tag,r=new String(t).split(",");a["content-type"]="application/json";var n=r[0],i=r[1],c=r[2],o=r[3],m=await l("screen_name"),p=e.api_request_body,h=JSON.parse(p);for(let u=0;u<c;u++){await U(n*60*1e3);var y=await O(o,e.id,i,m),g="";if(e.content_tag){var S=e.content_tag,d=S.split(",");for(let w=0;w<d.length;w++){const v=d[w];var b=await E(m,e.id,v),s=b.content;g=`${g}${s}`}}g=`${g}
`;for(let w=0;w<y.length;w++){const v=y[w];g=`${g} @${v.screen_name} `}h.variables.tweet_text=g,_.request({url:e.api_url,data:JSON.stringify(h),method:e.api_request_method_type,headers:a}).then(async w=>{var v=w.data;T(e,1,"\u6267\u884C\u6210\u529F",v)}).catch(w=>{console.log(w)})}}async function Ae(e){fetch(e.api_url).then(async function(a){if(a.status===200){e.log="\u5237\u65B0\u6210\u529F";const n=await l("logList");if(e.create_date=new Date().toLocaleString(),e.state="\u6267\u884C\u6210\u529F",n){const i=JSON.parse(n);i.push(e),await C({logList:JSON.stringify(i)})}else{const i=[];i.push(e),await C({logList:JSON.stringify(i)})}var t=await l("service_url"),r=await l("screen_name");await _.post(t+"/twitter_execute_record",{screen_name:r,tw_id:e.tw_id,execute_state:1})}else return{}})}const Ee={data(){return{host:"",browser:"",interval:3,account:"\u63A8\u7279\u540D\u5B57\u7B49\u5F85\u83B7\u53D6....",timecount:"8D 23h:12m:56s",timer:NaN,logList:[],version:"",twitter_filter:0,btn:"\u542F\u52A8",serverUrl:ve(),lastTime:"",logSize:0,pageSize:10}},mounted(){C({service_url:this.serverUrl});var e=localStorage.getItem("twitter_filter");e||(e=1,localStorage.setItem("twitter_filter",1)),this.twitter_filter=e;var a=localStorage.getItem("start_up");a||(a=1),a==1&&this.start()},beforeUnmount(){clearInterval(this.timer)},methods:{async startFilter(){var e=localStorage.getItem("twitter_filter");e||(e=0),e==0?(this.twitter_filter=1,localStorage.setItem("twitter_filter",this.twitter_filter)):(this.twitter_filter=0,localStorage.setItem("twitter_filter",this.twitter_filter))},handler(e,a,t,r){console.log(e);var n=new String(e.option_name);e.option_name==="\u5173\u6CE8\u65B0\u589E\u597D\u53CB"?window.open(`https://twitter.com/${e.screen_name}`):n.startsWith("\u53D1\u9001\u79C1\u4FE1")?window.open("https://twitter.com/messages"):window.open(`https://twitter.com/${e.screen_name}/status/${e.tw_id}`)},async handlerBlur(){document.title=this.browser,(this.browser||this.host)&&await H(this.browser,this.host)},copy(){const e=this.account,a=document.createElement("input");a.value=e,document.body.appendChild(a),a.select(),document.execCommand("Copy"),this.$message({message:"\u590D\u5236\u6210\u529F",type:"success"}),a.remove()},async start(){if(this.account=await ye(),!this.account){R({message:"\u63A8\u7279\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A",grouping:!0,type:"success"});return}this.version=z.version;const e=Math.round(new Date().getTime()/1e3);await Z(this.serverUrl);try{const t=await Q();if(t)this.host=t.host,this.browser=t.browser,document.title=this.browser,await H(this.browser,this.host);else{R({message:"\u4E3B\u673A\u4FE1\u606F\u83B7\u53D6\u5931\u8D25",grouping:!0,type:"success"});return}}catch(t){console.log(t)}this.btn="\u8FD0\u884C\u4E2D";var a=await P();this.logSize=a.length,this.logList=a.slice(0,10),L(this.interval),this.timer||(this.timer=setInterval(async()=>{this.timecount=de(e),this.lastTime=new Date(await he()).toLocaleString()},1e3),setInterval(async()=>{var t=await P();this.logSize=t.length,this.logList=t.slice(0,10),this.version!=ge()&&window.location.reload()},60*1e3*10),setInterval(async()=>{try{await fe()}catch(t){console.log(t)}},1e3*60*60*24))},async currentChange(e){var a=await P();this.logSize=a.length,this.logList=a.slice(0,10),a.length>e*10&&(this.logList=a.slice((e-1)*10,e*10))},async prevClick(e){if(this.logSize=a.length,e>0){var a=await P();this.logList=a.slice((e-1)*10,e*10)}},async nextClick(e){var a=await P();this.logSize=a.length,e*10<this.logList.length&&(this.logList=a.slice(e*10,e+1*10))}}},Pe={id:"content"},Ue=D(" \u590D\u5236 "),Be={style:{display:"flex","align-items":"center"}},Le={style:{"margin-left":"10px"}},je={style:{display:"flex","align-items":"center"}},ze={style:{display:"flex","align-items":"center"}},Ve={style:{display:"flex","align-items":"center"}};function Re(e,a,t,r,n,i){const c=F("el-input"),o=F("el-form-item"),m=F("el-button"),p=F("el-form"),h=F("timer"),y=F("el-icon"),g=F("el-table-column"),S=ce,d=F("el-popover"),b=F("el-table"),s=F("el-pagination");return G(),K("view",Pe,[f(p,{"label-width":"auto",inline:!0,"label-position":e.left,size:"size"},{default:x(()=>[f(o,{label:"Host\u7F16\u53F7"},{default:x(()=>[f(c,{modelValue:n.host,"onUpdate:modelValue":a[0]||(a[0]=u=>n.host=u),placeholder:"\u8BF7\u8F93\u5165Host\u7F16\u53F7",onBlur:i.handlerBlur},null,8,["modelValue","onBlur"])]),_:1}),f(o,{label:"\u6D4F\u89C8\u5668\u7F16\u53F7"},{default:x(()=>[f(c,{modelValue:n.browser,"onUpdate:modelValue":a[1]||(a[1]=u=>n.browser=u),placeholder:"\u8BF7\u8F93\u5165\u6D4F\u89C8\u5668\u7F16\u53F7",onBlur:i.handlerBlur},null,8,["modelValue","onBlur"])]),_:1}),f(o,{label:"\u4EFB\u52A1\u6267\u884C\u95F4\u9694\u65F6\u95F4"},{default:x(()=>[f(c,{modelValue:n.interval,"onUpdate:modelValue":a[2]||(a[2]=u=>n.interval=u),placeholder:"\u5355\u4F4D:\u79D2"},null,8,["modelValue"])]),_:1}),f(o,{label:"\u670D\u52A1\u5730\u5740"},{default:x(()=>[f(c,{modelValue:n.serverUrl,"onUpdate:modelValue":a[3]||(a[3]=u=>n.serverUrl=u),placeholder:"\u8BF7\u6C42\u5730\u5740,\u9ED8\u8BA4\u4E0D\u7528\u6539"},null,8,["modelValue"])]),_:1}),f(o,{label:"Twitter\u8D26\u53F7"},{default:x(()=>[f(m,{type:"success",onClick:i.copy},{default:x(()=>[Ue]),_:1},8,["onClick"]),D(" "+N(n.account),1)]),_:1}),f(o,{label:""},{default:x(()=>[f(m,{type:"success",onClick:i.start},{default:x(()=>[D(N(n.btn),1)]),_:1},8,["onClick"]),D(" "+N(n.timecount),1)]),_:1}),f(o,{label:"\u7248\u672C\u53F7"},{default:x(()=>[D(N(n.version),1)]),_:1}),f(o,{label:"\u4E0A\u6B21\u62C9\u53D6\u4EFB\u52A1\u65F6\u95F4"},{default:x(()=>[D(N(n.lastTime),1)]),_:1}),f(o,{label:"\u5173\u95EDTwiiter\u9875\u9762\u8BF7\u6C42"},{default:x(()=>[f(m,{type:"success",onClick:i.startFilter},{default:x(()=>[D(N(n.twitter_filter),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["label-position"]),f(b,{data:n.logList,style:{width:"100%"},onCellClick:i.handler},{default:x(()=>[f(g,{label:"\u63A8\u7279\u540D",width:"180"},{default:x(u=>[I("div",Be,[f(y,null,{default:x(()=>[f(h)]),_:1}),I("span",Le,N(u.row.screen_name),1)])]),_:1}),f(g,{label:"\u64CD\u4F5C\u884C\u4E3A"},{default:x(u=>[I("div",je,[f(y,null,{default:x(()=>[f(h)]),_:1}),D(" "+N(u.row.option_name),1)])]),_:1}),f(g,{label:"\u64CD\u4F5C\u65E5\u5FD7"},{default:x(u=>[f(d,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:x(()=>[I("div",null,N(u.row.log),1)]),reference:x(()=>[f(S,null,{default:x(()=>[D(N(u.row.log),1)]),_:2},1024)]),_:2},1024)]),_:1}),f(g,{label:"\u64CD\u4F5C\u65F6\u95F4"},{default:x(u=>[I("div",ze,[f(y,null,{default:x(()=>[f(h)]),_:1}),D(" "+N(u.row.create_date),1)])]),_:1}),f(g,{label:"\u6267\u884C\u72B6\u6001"},{default:x(u=>[I("div",Ve,[f(y,null,{default:x(()=>[f(h)]),_:1}),D(" "+N(u.row.state),1)])]),_:1})]),_:1},8,["data","onCellClick"]),f(s,{small:"",background:"",layout:"prev, pager, next",total:n.logSize,class:"mt-4",onCurrentChange:i.currentChange,onPrevClick:i.prevClick,onNextClick:i.nextClick,"page-size":n.pageSize},null,8,["total","onCurrentChange","onPrevClick","onNextClick","page-size"])])}var Me=k(Ee,[["render",Re]]);const V=te(Me);V.use(ae);V.use(re,_);V.use(ee).mount("#app");