var ICONS={
 "sun":'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>',
 "moon":'<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
 "trash":'<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
 "download":'<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
 "help":'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
 "sparkles":'<svg viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>',
 "percent":'<svg viewBox="0 0 24 24"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
 "search":'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.7" y2="16.7"/></svg>',
 "x":'<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
 "rows":'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
 "hash":'<svg viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
 "code2":'<svg viewBox="0 0 24 24"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
 "updown":'<svg viewBox="0 0 24 24"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>',
 "upload":'<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
 "copy":'<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
 "keyboard":'<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>',
 "shield":'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
 "heart":'<svg viewBox="0 0 24 24"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/></svg>',
 "zap":'<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
 "lock":'<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
 "check2":'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
 "file-text":'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
 "file-code":'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 13-2 2 2 2"/><path d="m13 13 2 2-2 2"/></svg>'
};
document.querySelectorAll('[data-icon]').forEach(function(el){el.innerHTML=ICONS[el.getAttribute('data-icon')]||'';});

var PRESETS=[
 {id:'bootstrap-card',name:'Bootstrap Card Component',category:'html',
  html:'<div class="card" style="width:18rem;"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>'},
 {id:'semantic-page',name:'Semantic HTML5 Page',category:'html',
  html:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>My Page</title></head><body><header><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li></ul></nav></header><main><article><h1>Article Title</h1><p>Content here.</p></article></main><footer><p>&copy; 2024</p></footer></body></html>'},
 {id:'form-elements',name:'HTML Form Elements',category:'html',
  html:'<form action="/submit" method="post"><div class="form-group"><label for="name">Name:</label><input type="text" id="name" name="name" required></div><div class="form-group"><label for="email">Email:</label><input type="email" id="email" name="email" required></div><button type="submit" class="btn">Submit</button></form>'},
 {id:'minified-html',name:'Minified HTML (for beautify test)',category:'html',
  html:'<!DOCTYPE html><html><head><title>Test</title></head><body><div class="container"><h1>Hello World</h1><p>This is <strong>minified</strong> HTML that needs beautification.</p><ul><li>Item 1</li><li>Item 2</li></ul></div></body></html>'}
];

var state={
 theme:(function(){try{var s=localStorage.getItem('html_formatter_theme');if(s==='dark'||s==='light')return s;return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch(e){return 'light';}})(),
 indent:'2',
 mode:'beautify',
 sortAttrs:false,
 attrPerLine:false,
 preserveComments:true,
 doubleQuotes:true
};

function $(id){return document.getElementById(id);}
function bytes(n){n=Number(n)||0;if(n<1024)return n+' bytes';if(n<1024*1024)return(n/1024).toFixed(1)+' KB';return(n/(1024*1024)).toFixed(2)+' MB';}

function applyTheme(){
 if(state.theme==='dark')document.documentElement.classList.add('dark');
 else document.documentElement.classList.remove('dark');
 var tb=$('themeBtn');if(tb){tb.querySelector('span').textContent=state.theme==='dark'?'Light':'Dark';tb.querySelector('.ic').innerHTML=ICONS[state.theme==='dark'?'sun':'moon'];}
 var mb=$('mThemeBtn');if(mb)mb.querySelector('.ic').innerHTML=ICONS[state.theme==='dark'?'sun':'moon'];
}
function toggleTheme(){state.theme=state.theme==='dark'?'light':'dark';try{localStorage.setItem('html_formatter_theme',state.theme);}catch(e){}applyTheme();}

var VOID_TAGS={area:1,base:1,br:1,col:1,embed:1,hr:1,img:1,input:1,link:1,meta:1,param:1,source:1,track:1,wbr:1};

function parseAttrs(attrStr){
 var attrs=[];
 var re=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
 var m;
 while((m=re.exec(attrStr))){
   var name=m[1];
   var val=m[2]!==undefined?m[2]:(m[3]!==undefined?m[3]:(m[4]!==undefined?m[4]:''));
   var quote= m[2]!==undefined?'"':(m[3]!==undefined?"'":(m[4]!==undefined?'':''));
   attrs.push({name:name,value:val,quote:quote});
 }
 return attrs;
}

function formatAttrs(attrs,opts){
 if(opts.sortAttrs){
   attrs=attrs.slice().sort(function(a,b){return a.name.localeCompare(b.name);});
 }
 var quote=opts.doubleQuotes?'"':"'";
 var parts=attrs.map(function(a){
   if(a.value==='')return a.name;
   var v=a.value;
   if(quote==='"')v=v.replace(/"/g,'&quot;');
   else v=v.replace(/'/g,'&#39;');
   return a.name+'='+quote+v+quote;
 });
 return parts;
}

function beautifyHTML(html,opts){
 var indent=opts.indent==='tab'?'\t':(opts.indent==='4'?'    ':'  ');
 var out='';
 var level=0;
 var pos=0;
 var len=html.length;
 function addLine(text){
   if(out)out+='\n';
   if(text){out+=new Array(level+1).join(indent)+text;}
 }
 while(pos<len){
   if(html[pos]==='<'){
     var end=html.indexOf('>',pos);
     if(end===-1){out+=html.slice(pos);break;}
     var tag=html.slice(pos,end+1);
     if(tag.indexOf('<!--')===0){
       var cEnd=html.indexOf('-->',pos);
       if(cEnd===-1){out+=html.slice(pos);break;}
       var comment=html.slice(pos,cEnd+3);
       if(opts.preserveComments){addLine(comment);}
       pos=cEnd+3;
       continue;
     }
     if(tag.indexOf('<!')===0||tag.indexOf('<?')===0){
       addLine(tag);
       pos=end+1;
       continue;
     }
     var closeTag=tag.indexOf('</')===0;
     var selfClose=tag.indexOf('/>')===tag.length-2;
     var tagMatch=tag.match(/^<\/?\s*([a-zA-Z0-9:-]+)/);
     var tagName=tagMatch?tagMatch[1].toLowerCase():'';
     var attrStr=tag.replace(/^<\/?\s*[a-zA-Z0-9:-]+\s*/,'').replace(/\/?>$/,'').trim();
     var attrs=parseAttrs(attrStr);
     var formattedAttrs=formatAttrs(attrs,opts);
     if(closeTag){
       level=Math.max(0,level-1);
       addLine('</'+tagName+'>');
     }else{
       var openTag='<'+tagName;
       if(formattedAttrs.length){
         if(opts.attrPerLine&&formattedAttrs.length>1){
           openTag+='\n'+new Array(level+2).join(indent)+formattedAttrs.join('\n'+new Array(level+2).join(indent));
           openTag+='\n'+new Array(level+1).join(indent)+(selfClose?'/>':'>');
         }else{
           openTag+=' '+formattedAttrs.join(' ')+(selfClose?'/>':'>');
         }
       }else{
         openTag+=(selfClose?'/>':'>');
       }
       addLine(openTag);
       if(!selfClose&&!VOID_TAGS[tagName])level++;
     }
     pos=end+1;
   }else{
     var next=html.indexOf('<',pos);
     if(next===-1)next=len;
     var text=html.slice(pos,next).replace(/\s+/g,' ').trim();
     if(text){
       var lines=text.split('\n');
       for(var i=0;i<lines.length;i++){
         var t=lines[i].trim();
         if(t)addLine(t);
       }
     }
     pos=next;
   }
 }
 return out;
}

function minifyHTML(html,opts){
 var out='';
 var pos=0;
 var len=html.length;
 while(pos<len){
   if(html[pos]==='<'){
     var end=html.indexOf('>',pos);
     if(end===-1){out+=html.slice(pos);break;}
     var tag=html.slice(pos,end+1);
     if(tag.indexOf('<!--')===0){
       var cEnd=html.indexOf('-->',pos);
       if(cEnd===-1){out+=html.slice(pos);break;}
       if(opts.preserveComments){out+=html.slice(pos,cEnd+3);}
       pos=cEnd+3;
       continue;
     }
     var tagMatch=tag.match(/^<\/?\s*([a-zA-Z0-9:-]+)/);
     var tagName=tagMatch?tagMatch[1].toLowerCase():'';
     var attrStr=tag.replace(/^<\/?\s*[a-zA-Z0-9:-]+\s*/,'').replace(/\/?>$/,'').trim();
     var attrs=parseAttrs(attrStr);
     var formattedAttrs=formatAttrs(attrs,opts);
     var closeTag=tag.indexOf('</')===0;
     var selfClose=tag.indexOf('/>')===tag.length-2;
     if(closeTag){out+='</'+tagName+'>';}
     else{
       var t='<'+tagName;
       if(formattedAttrs.length)t+=' '+formattedAttrs.join(' ');
       t+=selfClose?'/>':'>';
       out+=t;
     }
     pos=end+1;
   }else{
     var next=html.indexOf('<',pos);
     if(next===-1)next=len;
     var text=html.slice(pos,next).replace(/\s+/g,' ');
     out+=text;
     pos=next;
   }
 }
 return out.trim();
}

function formatHTML(html){
 var opts={
   indent:state.indent,
   sortAttrs:state.sortAttrs,
   attrPerLine:state.attrPerLine,
   preserveComments:state.preserveComments,
   doubleQuotes:state.doubleQuotes
 };
 if(!html.trim())return '';
 if(state.mode==='minify')return minifyHTML(html,opts);
 return beautifyHTML(html,opts);
}

function updateStats(){
 var input=$('leftInput').value;
 var output=$('rightOutput').textContent;
 var inputBytes=new Blob([input]).size;
 var outputBytes=new Blob([output]).size;
 $('statInput').textContent=bytes(inputBytes);
 $('statOutput').textContent=bytes(outputBytes);
 var change=inputBytes>0?(((outputBytes-inputBytes)/inputBytes)*100).toFixed(1):0;
 var changeEl=$('statChange');
 changeEl.textContent=(change>=0?'+':'')+change+'%';
 changeEl.parentElement.style.background=change>0?'var(--row-added-bg)':(change<0?'var(--row-deleted-bg)':'var(--match-bg)');
 var lines=output?output.split('\n').length:0;
 $('statLines').textContent=lines+' line'+(lines!==1?'s':'');
 var inLines=input?input.split('\n').length:0;
 $('leftStat').textContent=inLines+' lines • '+input.length+' chars';
 $('rightStat').textContent=lines+' lines • '+output.length+' chars';
}

function runFormat(){
 var input=$('leftInput').value;
 var output=formatHTML(input);
 $('rightOutput').textContent=output;
 updateStats();
}

function copyToClipboard(text){
 if(navigator.clipboard){
   navigator.clipboard.writeText(text).then(function(){showToast('Copied to clipboard!');},function(){fallbackCopy(text);});
 }else{fallbackCopy(text);}
}
function fallbackCopy(text){
 var ta=document.createElement('textarea');
 ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
 document.body.appendChild(ta);ta.select();
 try{document.execCommand('copy');showToast('Copied to clipboard!');}catch(e){showToast('Copy failed');}
 document.body.removeChild(ta);
}

function showToast(msg){
 var t=document.createElement('div');
 t.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:10px 20px;border-radius:8px;z-index:9999;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.2);';
 t.textContent=msg;
 document.body.appendChild(t);
 setTimeout(function(){t.style.opacity='0';t.style.transition='opacity 0.3s';setTimeout(function(){t.remove();},300);},1500);
}

function downloadFile(filename,content){
 var blob=new Blob([content],{type:'text/html'});
 var url=URL.createObjectURL(blob);
 var a=document.createElement('a');
 a.href=url;a.download=filename;
 document.body.appendChild(a);a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
}

function loadPresets(){
 var sel=$('presetSelect');
 PRESETS.forEach(function(p){
   var opt=document.createElement('option');
   opt.value=p.id;opt.textContent=p.name;
   sel.appendChild(opt);
 });
}

function setActive(btns,activeId){
 btns.forEach(function(b){b.classList.toggle('active',b.id===activeId);});
}
function toggleOpt(btn,optKey){
 state[optKey]=!state[optKey];
 btn.classList.toggle('active',state[optKey]);
 runFormat();
}

var lastOutput='';
function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function doSearch(){
 var q=$('searchInput').value;
 var out=$('rightOutput');
 if(!q){out.innerHTML='';out.textContent=lastOutput;$('searchClear').hidden=true;return;}
 $('searchClear').hidden=false;
 var html=lastOutput;
 var idx=0;var result='';var re=new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');
 var m;
 while((m=re.exec(html))){
   result+=escapeHtml(html.slice(idx,m.index));
   result+='<mark style="background:#fbbf24;color:#000">'+escapeHtml(m[0])+'</mark>';
   idx=m.index+m[0].length;
 }
 result+=escapeHtml(html.slice(idx));
 out.innerHTML=result;
}

function openModal(id){$(id).hidden=false;}
function closeModal(id){$(id).hidden=true;}

var SHORTCUTS=[
 {keys:'Alt + C',desc:'Copy formatted output'},
 {keys:'Alt + D',desc:'Download formatted HTML'},
 {keys:'Alt + H',desc:'Open shortcuts help'},
 {keys:'Alt + M',desc:'Toggle Beautify/Minify mode'},
 {keys:'Ctrl/Cmd + S',desc:'Save (triggers download)'}
];
function renderShortcuts(){
 var list=$('scList');
 list.innerHTML=SHORTCUTS.map(function(s){
   return '<div class="sc-row"><span class="sc-keys">'+s.keys+'</span><span class="sc-desc">'+s.desc+'</span></div>';
 }).join('');
}

function switchTab(side){
 $('tabLeft').classList.toggle('active',side==='left');
 $('tabRight').classList.toggle('active',side==='right');
 $('panelLeft').classList.toggle('hide-m',side!=='left');
 $('panelRight').classList.toggle('hide-m',side!=='right');
}

function init(){
 $('year').textContent=new Date().getFullYear();
 applyTheme();
 loadPresets();
 renderShortcuts();
 var leftInput=$('leftInput');
 var debounce;
 leftInput.addEventListener('input',function(){
   clearTimeout(debounce);
   debounce=setTimeout(runFormat,150);
 });
 $('themeBtn').addEventListener('click',toggleTheme);
 $('mThemeBtn').addEventListener('click',toggleTheme);
 $('copyBtn').addEventListener('click',function(){copyToClipboard($('rightOutput').textContent);});
 $('copyOutputBtn').addEventListener('click',function(){copyToClipboard($('rightOutput').textContent);});
 $('clearBtn').addEventListener('click',function(){leftInput.value='';runFormat();});
 $('downloadBtn').addEventListener('click',function(){
   $('outputPreview').textContent=$('rightOutput').textContent.slice(0,500)+($('rightOutput').textContent.length>500?'...':'');
   openModal('exportModal');
 });
 $('downloadOutputBtn').addEventListener('click',function(){downloadFile('formatted.html',$('rightOutput').textContent);});
 $('helpBtn').addEventListener('click',function(){openModal('helpModal');});
 $('tabLeft').addEventListener('click',function(){switchTab('left');});
 $('tabRight').addEventListener('click',function(){switchTab('right');});
 $('indent2').addEventListener('click',function(){state.indent='2';setActive([$('indent2'),$('indent4'),$('indentTab')],'indent2');runFormat();});
 $('indent4').addEventListener('click',function(){state.indent='4';setActive([$('indent2'),$('indent4'),$('indentTab')],'indent4');runFormat();});
 $('indentTab').addEventListener('click',function(){state.indent='tab';setActive([$('indent2'),$('indent4'),$('indentTab')],'indentTab');runFormat();});
 $('modeBeautify').addEventListener('click',function(){state.mode='beautify';setActive([$('modeBeautify'),$('modeMinify')],'modeBeautify');runFormat();});
 $('modeMinify').addEventListener('click',function(){state.mode='minify';setActive([$('modeBeautify'),$('modeMinify')],'modeMinify');runFormat();});
 $('optSortAttrs').addEventListener('click',function(){toggleOpt(this,'sortAttrs');});
 $('optAttrPerLine').addEventListener('click',function(){toggleOpt(this,'attrPerLine');});
 $('optPreserveComments').addEventListener('click',function(){toggleOpt(this,'preserveComments');});
 $('optQuotes').addEventListener('click',function(){toggleOpt(this,'doubleQuotes');});
 $('optPreserveComments').classList.add('active');
 $('optQuotes').classList.add('active');
 $('presetSelect').addEventListener('change',function(){
   var p=PRESETS.find(function(x){return x.id===this.value;},this);
   if(p){leftInput.value=p.html;runFormat();}
 });
 $('searchInput').addEventListener('input',function(){lastOutput=$('rightOutput').textContent;doSearch();});
 $('searchClear').addEventListener('click',function(){$('searchInput').value='';lastOutput=$('rightOutput').textContent;doSearch();});
 document.querySelectorAll('.modal-close,[data-close]').forEach(function(b){
   b.addEventListener('click',function(){closeModal(this.closest('.modal-overlay').id);});
 });
 document.querySelectorAll('.modal-overlay').forEach(function(m){
   m.addEventListener('click',function(e){if(e.target===m)m.hidden=true;});
 });
 $('dlHtml').addEventListener('click',function(){downloadFile('formatted.html',$('rightOutput').textContent);});
 $('dlMin').addEventListener('click',function(){
   var prevMode=state.mode;state.mode='minify';
   var min=formatHTML(leftInput.value);
   state.mode=prevMode;
   downloadFile('minified.html',min);
 });
 $('cpOutput').addEventListener('click',function(){copyToClipboard($('rightOutput').textContent);});
 $('footHelp').addEventListener('click',function(){openModal('helpModal');});
 $('footDownload').addEventListener('click',function(){downloadFile('formatted.html',$('rightOutput').textContent);});
 document.querySelectorAll('[data-up]').forEach(function(b){
   b.addEventListener('click',function(){this.parentElement.querySelector('.file-in').click();});
 });
 document.querySelectorAll('.file-in').forEach(function(f){
   f.addEventListener('change',function(e){
     var file=e.target.files[0];if(!file)return;
     var reader=new FileReader();
     reader.onload=function(ev){leftInput.value=ev.target.result;runFormat();};
     reader.readAsText(file);
   });
 });
 document.querySelectorAll('[data-copy]').forEach(function(b){
   b.addEventListener('click',function(){copyToClipboard(leftInput.value);});
 });
 document.addEventListener('keydown',function(e){
   if(e.altKey&&e.key.toLowerCase()==='c'){e.preventDefault();copyToClipboard($('rightOutput').textContent);}
   else if(e.altKey&&e.key.toLowerCase()==='d'){e.preventDefault();downloadFile('formatted.html',$('rightOutput').textContent);}
   else if(e.altKey&&e.key.toLowerCase()==='h'){e.preventDefault();openModal('helpModal');}
   else if(e.altKey&&e.key.toLowerCase()==='m'){e.preventDefault();state.mode=state.mode==='beautify'?'minify':'beautify';setActive([$('modeBeautify'),$('modeMinify')],state.mode==='beautify'?'modeBeautify':'modeMinify');runFormat();}
   else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();downloadFile('formatted.html',$('rightOutput').textContent);}
 });
 runFormat();
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();