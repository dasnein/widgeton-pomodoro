!function(){(r=u||(u={})).Settings="settings",r.State="state",(a=m||(m={})).Start="button-start",a.Stop="button-stop",a.Settings="button-settings",(d=g||(g={})).TimeOperation="time-operation",d.TimeRemains="time-remains",d.HeaderRoundCurrent="header-round-current",d.HeaderRoundsTotal="header-rounds-total",(l=O||(O={})).Colored="timer-logo-colored",l.Colorless="timer-logo-colorless";let t={START:document.getElementById("button-start"),STOP:document.getElementById("button-stop"),SETTINGS:document.getElementById("button-settings")},e={TIME_OPERATION:document.getElementById("time-operation"),TIME_REMAINS:document.getElementById("time-remains"),HEADER_ROUND_CURRENT:document.getElementById("header-round-current"),HEADER_ROUNDS_TOTAL:document.getElementById("header-rounds-total")},n={LOGO_COLORED:document.getElementById("timer-logo-colored"),LOGO_COLORLESS:document.getElementById("timer-logo-colorless")},s={focusPeriod:15e5,shortBreakPeriod:3e5,longBreakPeriod:9e5,rounds:4},i={round:0,running:!1,breakRunning:!1,timeLeft:15e5};(c=h||(h={})).Start="start",c.Stop="stop",(_||(_={})).Hidden="hidden";let o=new class{constructor(){this._eventObject={},this._callbackId=0}dispatch(t,...e){let n=this._eventObject[t];if(!n)return console.warn(t+" not found!");for(let t in n)n[t](...e),"d"===t[0]&&delete n[t]}on(t,e){this._eventObject[t]||(this._eventObject[t]={});let n=this._callbackId++;return this._eventObject[t][n]=e,{unSubscribe:()=>{delete this._eventObject[t][n],0===Object.keys(this._eventObject[t]).length&&delete this._eventObject[t]}}}off(t){if(!t){this._eventObject={};return}delete this._eventObject[t]}};var r,a,d,l,c,u,m,g,O,h,_,S=()=>JSON.parse(localStorage.getItem(u.Settings)||"{}"),T=()=>JSON.parse(localStorage.getItem(u.State)||"{}");let E=new class{constructor(){this._loadSettings(),this._loadState()}_loadSettings(){let t=S();this._settings={...s,...t},console.log(this._settings)}_loadState(){let t=T();this._state={...i,timeLeft:this._settings.focusPeriod,...t}}startTimer(){this._state.running=!0,this.reduceTimer()}stopTimer(){this._state.running=!1}reduceTimer(){this._state.timeLeft=this._state.timeLeft-1e3,this._state.running&&setTimeout(this.reduceTimer.bind(this),1e3)}get settings(){return this._settings}get state(){return this._state}},R={RELAX:"Отдыхаем",WORK:"Работаем"},I=t=>t.toString().padStart(2,"0");function L(){E.state.running?(t.START?.classList.add(_.Hidden),t.STOP?.classList.remove(_.Hidden)):(t.START?.classList.remove(_.Hidden),t.STOP?.classList.add(_.Hidden)),function(){let t=E.state.breakRunning?R.RELAX:R.WORK,n=E.state.timeLeft,s=Math.floor(n/1e3/60),i=`${I(s)}:${I((n-6e4*s)/1e3)}`;e.TIME_OPERATION&&(e.TIME_OPERATION.innerHTML=t),e.TIME_REMAINS&&(e.TIME_REMAINS.innerHTML=i)}(),function(){let t=100-Math.floor(100*E.state.timeLeft/E.settings.focusPeriod);n.LOGO_COLORED&&(n.LOGO_COLORED.style.height=`${t}%`)}(),E.state.running&&window.requestAnimationFrame(L)}t.START?.addEventListener("click",()=>{o.dispatch(h.Start)}),t.STOP?.addEventListener("click",()=>{o.dispatch(h.Stop)}),o.on(h.Start,function(){E.startTimer(),L()}),o.on(h.Stop,function(){E.stopTimer(),L()}),L()}();
//# sourceMappingURL=index.83eadbda.js.map