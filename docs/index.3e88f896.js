!function(){(u=_||(_={})).Settings="settings",u.State="state",(l=p||(p={})).Timer="view-timer",l.Settings="view-settings",(c=B||(B={})).Start="button-start",c.Stop="button-stop",c.SettingsShow="button-settings-show",c.SettingsClose="button-settings-close",c.Reset="button-reset",(S=I||(I={})).TimeOperation="time-operation",S.TimeRemains="time-remains",S.HeaderRoundCurrent="header-round-current",S.HeaderRoundsTotal="header-rounds-total",(m=k||(k={})).Colored="timer-logo-colored",m.Colorless="timer-logo-colorless",(h=L||(L={})).LongBreak="audio-long-break",h.ShortBreak="audio-short-break",h.Work="audio-work",(E=b||(b={})).FocusPeriod="settings-value-focus-period",E.LongBreakPeriod="settings-value-long-break-period",E.Rounds="settings-value-rounds",E.ShortBreakPeriod="settings-value-short-break-period",(R=f||(f={})).FocusPeriod="settings-slider-focus-period",R.LongBreakPeriod="settings-slider-long-break-period",R.Rounds="settings-slider-rounds",R.ShortBreakPeriod="settings-slider-short-break-period",R.TimerImage="timer-image",(T=v||(v={})).Ru="ru",T.En="en";let t={RESET:document.getElementById("button-reset"),SETTINGS_CLOSE:document.getElementById("button-settings-close"),SETTINGS_SHOW:document.getElementById("button-settings-show"),START:document.getElementById("button-start"),STOP:document.getElementById("button-stop")},e={HEADER_ROUND_CURRENT:document.getElementById("header-round-current"),HEADER_ROUNDS_TOTAL:document.getElementById("header-rounds-total"),TIME_OPERATION:document.getElementById("time-operation"),TIME_REMAINS:document.getElementById("time-remains")},s={LOGO_COLORED:document.getElementById("timer-logo-colored"),LOGO_COLORLESS:document.getElementById("timer-logo-colorless")},n={LONG_BREAK:document.getElementById("audio-long-break"),SHORT_BREAK:document.getElementById("audio-short-break"),WORK:document.getElementById("audio-work")},i={SETTINGS:document.getElementById("view-settings"),TIMER:document.getElementById("view-timer")},r={FOCUS:document.getElementById("settings-value-focus-period"),LONG_BREAK:document.getElementById("settings-value-short-break-period"),ROUNDS:document.getElementById("settings-value-rounds"),SHORT_BREAK:document.getElementById("settings-value-long-break-period")},o={FOCUS:document.getElementById("settings-slider-focus-period"),LONG_BREAK:document.getElementById("settings-slider-short-break-period"),ROUNDS:document.getElementById("settings-slider-rounds"),SHORT_BREAK:document.getElementById("settings-slider-long-break-period")},d={focusPeriod:15e5,shortBreakPeriod:3e5,longBreakPeriod:9e5,rounds:4,timerImage:"en"},a={round:0,running:!1,breakRunning:!1,timeLeft:15e5,showSettings:!1};(O=N||(N={})).Start="start",O.Stop="stop",O.NextRound="next-round",O.Reset="reset",O.SettingsShow="settings-show",O.SettingsClose="settings-close",O.SettingsUpdated="settings-updated",(y||(y={})).Hidden="hidden";let g=new class{constructor(){this._eventObject={},this._callbackId=0}dispatch(t,...e){let s=this._eventObject[t];if(!s)return console.warn(t+" not found!");for(let t in s)s[t](...e),"d"===t[0]&&delete s[t]}on(t,e){this._eventObject[t]||(this._eventObject[t]={});let s=this._callbackId++;return this._eventObject[t][s]=e,{unSubscribe:()=>{delete this._eventObject[t][s],0===Object.keys(this._eventObject[t]).length&&delete this._eventObject[t]}}}off(t){if(!t){this._eventObject={};return}delete this._eventObject[t]}};var u,l,c,S,m,h,E,R,T,O,_,p,B,I,k,L,b,f,v,N,y,A=()=>JSON.parse(localStorage.getItem(_.Settings)||"{}"),P=t=>localStorage.setItem(_.Settings,JSON.stringify(t)),U=()=>JSON.parse(localStorage.getItem(_.State)||"{}");let H=new class{constructor(){this._init()}_init(){this._loadSettings(),this._loadState()}_loadSettings(){let t=A();this._settings={...d,...t}}_loadState(){let t=U();this._state={...a,timeLeft:this._settings.focusPeriod,...t}}startTimer(){this._state.running=!0,this.state.round=this.state.round||1,this.reduceTimer()}stopTimer(){this._state.running=!1}reduceTimer(){if(this.state.round>0&&(this._state.timeLeft=this._state.timeLeft-1e3),this._state.timeLeft<0)return g.dispatch(N.NextRound);this._state.running&&setTimeout(this.reduceTimer.bind(this),1e3)}resetTimer(){this._init()}restartTimer(){this._loadState(),this.startTimer()}startBreak(){this._state.breakRunning=!0,this._state.timeLeft=this.state.round===this.settings.rounds?this.settings.longBreakPeriod:this.settings.shortBreakPeriod,this.reduceTimer()}startNextRound(){this._state.breakRunning=!1,this._state.round+=1,this._state.timeLeft=this.settings.focusPeriod,this.reduceTimer()}toggleSettings(t){this._state.showSettings=void 0===t?!this.state.showSettings:t}updateSettings(t){this._settings={...this.settings,...t}}get settings(){return this._settings}get state(){return this._state}},w={RELAX:"Отдыхаем",WORK:"Работаем"},C=t=>t.toString().padStart(2,"0"),D=(t,e)=>t&&(t.innerHTML=e.toString()),K=(t,e)=>t&&"value"in t&&(t.value=e.toString()),G=(t,e,s)=>t&&"style"in t&&(t.style[e]=s.toString());function M(t){let e=Math.floor(t/1e3/60);return`${C(e)}:${C((t-6e4*e)/1e3)}`}function j(){H.state.running?(t.START?.classList.add(y.Hidden),t.STOP?.classList.remove(y.Hidden)):(t.START?.classList.remove(y.Hidden),t.STOP?.classList.add(y.Hidden)),function(){let t=H.state.breakRunning?w.RELAX:w.WORK;D(e.TIME_OPERATION,t),D(e.TIME_REMAINS,M(H.state.timeLeft))}(),function(){let t=H.state.round===H.settings.rounds,e=H.state.breakRunning?t?H.settings.longBreakPeriod:H.settings.shortBreakPeriod:H.settings.focusPeriod,n=100-Math.floor(100*H.state.timeLeft/e);G(s.LOGO_COLORED,"height",`${n}%`),i.TIMER&&(i.TIMER.dataset.timerImage=H.settings.timerImage)}(),e.HEADER_ROUND_CURRENT&&(e.HEADER_ROUND_CURRENT.innerHTML=H.state.round.toString()),e.HEADER_ROUNDS_TOTAL&&(e.HEADER_ROUNDS_TOTAL.innerHTML=H.settings.rounds.toString()),H.state.running&&window.requestAnimationFrame(j)}let F="visible";function W(){H.state.showSettings?i.SETTINGS?.classList.add(F):i.SETTINGS?.classList.remove(F),D(r.ROUNDS,H.settings.rounds),K(o.ROUNDS,H.settings.rounds),D(r.SHORT_BREAK,M(H.settings.shortBreakPeriod)),K(o.SHORT_BREAK,H.settings.shortBreakPeriod/60/1e3),D(r.LONG_BREAK,M(H.settings.longBreakPeriod)),K(o.LONG_BREAK,H.settings.longBreakPeriod/60/1e3),D(r.FOCUS,M(H.settings.focusPeriod)),K(o.FOCUS,H.settings.focusPeriod/60/1e3);let t=document.querySelector(`[name="${f.TimerImage}"][value="${H.settings.timerImage}"]`);t&&"checked"in t&&(t.checked=!0)}let x=t=>{t&&"play"in t&&"function"==typeof t.play&&t.play()},$={play(){H.state.breakRunning?H.state.round===H.settings.rounds?x(n.LONG_BREAK):x(n.SHORT_BREAK):x(n.WORK)}};t.START?.addEventListener("click",()=>{g.dispatch(N.Start)}),t.STOP?.addEventListener("click",()=>{g.dispatch(N.Stop)}),t.RESET?.addEventListener("click",()=>{g.dispatch(N.Reset)}),t.SETTINGS_SHOW?.addEventListener("click",()=>{g.dispatch(N.SettingsShow)}),t.SETTINGS_CLOSE?.addEventListener("click",()=>{g.dispatch(N.SettingsClose)}),o.ROUNDS?.addEventListener("input",t=>{let e=Number(t.target.value);H.updateSettings({rounds:e}),g.dispatch(N.SettingsUpdated)}),o.SHORT_BREAK?.addEventListener("input",t=>{let e=Number(t.target.value);H.updateSettings({shortBreakPeriod:60*e*1e3}),g.dispatch(N.SettingsUpdated)}),o.LONG_BREAK?.addEventListener("input",t=>{let e=Number(t.target.value);H.updateSettings({longBreakPeriod:60*e*1e3}),g.dispatch(N.SettingsUpdated)}),o.FOCUS?.addEventListener("input",t=>{let e=Number(t.target.value);H.updateSettings({focusPeriod:60*e*1e3}),g.dispatch(N.SettingsUpdated)}),document.querySelectorAll(`[name="${f.TimerImage}"]`).forEach(t=>{t.addEventListener("change",t=>{let e=t.target.value;H.updateSettings({timerImage:e}),g.dispatch(N.SettingsUpdated)})}),g.on(N.Start,function(){0===H.state.round&&$.play(),H.startTimer(),j()}),g.on(N.Stop,function(){H.stopTimer(),j()}),g.on(N.NextRound,function(){H.state.round>=H.settings.rounds&&H.state.breakRunning?H.restartTimer():H.state.breakRunning?H.startNextRound():H.startBreak(),$.play()}),g.on(N.Reset,function(){H.resetTimer(),j()}),g.on(N.SettingsShow,function(){H.toggleSettings(!0),W()}),g.on(N.SettingsClose,function(){H.toggleSettings(!1),W()}),g.on(N.SettingsUpdated,function(){let{showSettings:t}=H.state;P(H.settings),H.resetTimer(),H.toggleSettings(t),j()}),j(),W()}();
//# sourceMappingURL=index.3e88f896.js.map
