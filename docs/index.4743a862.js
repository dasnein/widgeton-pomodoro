(o=l||(l={})).Settings="settings",o.State="state",(a=h||(h={})).Start="button-start",a.Stop="button-stop",a.Settings="button-settings",a.Reset="button-reset",(d=g||(g={})).TimeOperation="time-operation",d.TimeRemains="time-remains",d.HeaderRoundCurrent="header-round-current",d.HeaderRoundsTotal="header-rounds-total",(u=m||(m={})).Colored="timer-logo-colored",u.Colorless="timer-logo-colorless";const t={START:document.getElementById("button-start"),STOP:document.getElementById("button-stop"),SETTINGS:document.getElementById("button-settings"),RESET:document.getElementById("button-reset")},e={TIME_OPERATION:document.getElementById("time-operation"),TIME_REMAINS:document.getElementById("time-remains"),HEADER_ROUND_CURRENT:document.getElementById("header-round-current"),HEADER_ROUNDS_TOTAL:document.getElementById("header-rounds-total")},n={LOGO_COLORED:document.getElementById("timer-logo-colored"),LOGO_COLORLESS:document.getElementById("timer-logo-colorless")},s={focusPeriod:15e5,shortBreakPeriod:3e5,longBreakPeriod:9e5,rounds:4},i={round:0,running:!1,breakRunning:!1,timeLeft:15e5};(c=_||(_={})).Start="start",c.Stop="stop",c.NextRound="next-round",c.Reset="reset",(R||(R={})).Hidden="hidden";const r=new class{constructor(){this._eventObject={},this._callbackId=0}dispatch(t,...e){let n=this._eventObject[t];if(!n)return console.warn(t+" not found!");for(let t in n)n[t](...e),"d"===t[0]&&delete n[t]}on(t,e){this._eventObject[t]||(this._eventObject[t]={});let n=this._callbackId++;return this._eventObject[t][n]=e,{unSubscribe:()=>{delete this._eventObject[t][n],0===Object.keys(this._eventObject[t]).length&&delete this._eventObject[t]}}}off(t){if(!t){this._eventObject={};return}delete this._eventObject[t]}};var o,a,d,u,c,l,h,g,m,_,R,T=()=>JSON.parse(localStorage.getItem(l.Settings)||"{}"),E=()=>JSON.parse(localStorage.getItem(l.State)||"{}");const O=new class{constructor(){this._init()}_init(){this._loadSettings(),this._loadState()}_loadSettings(){let t=T();this._settings={...s,...t}}_loadState(){let t=E();this._state={...i,timeLeft:this._settings.focusPeriod,...t}}startTimer(){this._state.running=!0,this.state.round=this.state.round||1,this.reduceTimer()}stopTimer(){this._state.running=!1}reduceTimer(){if(this.state.round>0&&(this._state.timeLeft=this._state.timeLeft-1e3),this._state.timeLeft<0)return r.dispatch(_.NextRound);this._state.running&&setTimeout(this.reduceTimer.bind(this),1e3)}resetTimer(){this._init()}restartTimer(){this._loadState(),this.startTimer()}startBreak(){this._state.breakRunning=!0,this._state.timeLeft=this.state.round===this.settings.rounds?this.settings.longBreakPeriod:this.settings.shortBreakPeriod,this.reduceTimer()}startNextRound(){this._state.breakRunning=!1,this._state.round+=1,this._state.timeLeft=this.settings.focusPeriod,this.reduceTimer()}get settings(){return this._settings}get state(){return this._state}},S={RELAX:"Отдыхаем",WORK:"Работаем"},L=t=>t.toString().padStart(2,"0");function b(){O.state.running?(t.START?.classList.add(R.Hidden),t.STOP?.classList.remove(R.Hidden)):(t.START?.classList.remove(R.Hidden),t.STOP?.classList.add(R.Hidden)),function(){let t=O.state.breakRunning?S.RELAX:S.WORK,n=O.state.timeLeft,s=Math.floor(n/1e3/60),i=`${L(s)}:${L((n-6e4*s)/1e3)}`;e.TIME_OPERATION&&(e.TIME_OPERATION.innerHTML=t),e.TIME_REMAINS&&(e.TIME_REMAINS.innerHTML=i)}(),function(){let t=O.state.round===O.settings.rounds,e=O.state.breakRunning?t?O.settings.longBreakPeriod:O.settings.shortBreakPeriod:O.settings.focusPeriod,s=100-Math.floor(100*O.state.timeLeft/e);n.LOGO_COLORED&&(n.LOGO_COLORED.style.height=`${s}%`)}(),e.HEADER_ROUND_CURRENT&&(e.HEADER_ROUND_CURRENT.innerHTML=O.state.round.toString()),e.HEADER_ROUNDS_TOTAL&&(e.HEADER_ROUNDS_TOTAL.innerHTML=O.settings.rounds.toString()),O.state.running&&window.requestAnimationFrame(b)}t.START?.addEventListener("click",()=>{r.dispatch(_.Start)}),t.STOP?.addEventListener("click",()=>{r.dispatch(_.Stop)}),t.RESET?.addEventListener("click",()=>{r.dispatch(_.Reset)}),r.on(_.Start,function(){O.startTimer(),b()}),r.on(_.Stop,function(){O.stopTimer(),b()}),r.on(_.NextRound,function(){if(O.state.round>=O.settings.rounds&&O.state.breakRunning)return O.restartTimer();O.state.breakRunning?O.startNextRound():O.startBreak()}),r.on(_.Reset,function(){O.resetTimer(),b()}),b();
//# sourceMappingURL=index.4743a862.js.map