(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[14],{"9pre":function(e,t,a){a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r}));const i=5,s="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},Lic6:function(e,t,a){a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return d}));var i=a("7w6Q"),s=a("Xy1J");const r=["isCellular","videoUrl","sessionMark"];let n={},l="";const o=e=>{const{browserName:t,browserVersion:a,country:i,isAuthenticated:s,isBot:r,isSocialBot:o,view:h="unknown",viewParameter:d="unknown"}=e;l=(o?"socialBot":r&&"bot")||"nonbot";const c=(e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";default:return"OTHER"}})(i);n={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:s,region:c,view:h,viewParameter:d}};function h(e,t,a={}){const s=t?"hls":"nonHls",r={...a,...n},o=`web.video.${s}.${l}.${e}`;i.a.increment(o,1,r)}function d(e,t,a={}){const o=t?"hls":"nonHls",h=e.sessionMark===s.f?"sessionStart":"sessionEnd",d={...a,...n};if(Object.entries(e).forEach(([t,a])=>{const s=`web.video.${o}.${l}.${h}.${t}`,n=parseInt(a,10),c="number"==typeof n?n:-1;var u;if(!r.includes(t))if(t.includes("fatalError")&&!0===a){const{errorCode:t,errorName:a,errorReason:r}=e;i.a.increment(s,1,{errorCode:t,errorName:a,errorReason:r,...d})}else if(t.includes("Width")||t.includes("Height")){const e=(u=c)<0?"negative":0===u?"zero":u<200?"xs":u<400?"s":u<600?"m":u<800?"l":u<1e3?"xl":u<1200?"xxl":"over1200";i.a.increment(s,1,{dimensionBucket:e,...d})}else if("numberOfStalls"===t){let e=a;c>1e3?e="over1000":c>10?e="over10":c<0&&(e="negative"),i.a.increment(s,1,{numberOfStalls:e,...d})}else"screenPixelRatio"===t?i.a.increment(s,1,{screenPixelRatio:a||-1,...d}):c>=0?(0===c&&i.a.increment(s+".zero",1,d),i.a.timing(s,c,1),i.a.timing(s+"_with_tags",c,1,d)):c<0&&i.a.increment(s+".negative",1,d)}),e.sessionMark!==s.f){const{rebufferRate:t,startupLatencyMs:a,startupVariantWidth:s,startupPlayerWidth:r}=e,n=`web.video.${o}.${l}.${h}`;if(s&&r){const e=1.5*s>2*r;i.a.increment(`${n}.upscaled.${e?"good":"bad"}`,1,d)}"number"==typeof a&&i.a.increment(`${n}.startupLatency.${a<500?"good":"bad"}`,1,d),"number"==typeof t&&i.a.increment(`${n}.rebufferRate.${t<.01?"good":"bad"}`,1,d)}}},Xy1J:function(e,t,a){a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"g",(function(){return h})),a.d(t,"d",(function(){return d})),a.d(t,"i",(function(){return c})),a.d(t,"h",(function(){return u}));var i=a("7Cbv");const s=1,r=2,n=1e3,l=1e3,o=1e3,h=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,SEEKING:3,STALLING:4,FAILED:5,ENDED:6}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+Object(i.a)()}function u(){return Object(i.a)()}},aFfM:function(e,t,a){var i=a("q1tI"),s=a("ulZh"),r=a.n(s),n=a("v/Q4"),l=a("U4JR"),o=a("QAzJ"),h=a("pLLR"),d=a("n6mq"),c=a("Lic6"),u=a("Xy1J"),m=a("nKUr");function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class y extends i.PureComponent{constructor(...e){super(...e),p(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:u.g.LOADING}),p(this,"firstFragBuffered",!1),p(this,"hasPlaybackStarted",!1),p(this,"hasVideoSessionStarted",!1),p(this,"hasVideoSessionEnded",!1),p(this,"hls",null),p(this,"fragStartupTime",{}),p(this,"lastLevelSwitchKbps",null),p(this,"lastStallTime",null),p(this,"logSessionStartOnNextPlay",!1),p(this,"playerId",""),p(this,"videoSessionId",""),p(this,"videoVisibleTime",null),p(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numStalls:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?this.props.src:this.props.src[0].src,totalStallDurationMs:0,videoCreatedTime:null}),p(this,"initializeHls",()=>{this.destroyHls();const{src:e,hlsConfig:t}=this.props,a=new r.a(t);a.loadSource(e),this.videoPlayerRef&&a.attachMedia(this.videoPlayerRef.video),a.on(r.a.Events.FRAG_BUFFERED,this.handleHlsFragBuffered),a.on(r.a.Events.FRAG_CHANGED,this.handleHlsFragChanged),a.on(r.a.Events.FRAG_LOADING,this.handleHlsFragLoading),a.on(r.a.Events.FRAG_LOADED,this.handleHlsFragLoaded),a.on(r.a.Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0})}),a.on(r.a.Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),a.on(r.a.Events.ERROR,this.handleHlsError),this.hls=a}),p(this,"destroyHls",()=>{const{hls:e}=this;e&&e.destroy()}),p(this,"addSegment",e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url];let n=-1;r&&r.startLoadTime&&r.endLoadTime&&(n=r.endLoadTime-r.startLoadTime);const l={indicatedKbps:s.bitrate/u.a,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/u.a||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:n,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(l)}}),p(this,"initializeSegments",e=>{const{segments:t}=this.playbackPerformance;if(!t.length)if(this.hls&&this.videoPlayerRef&&this.videoPlayerRef.video&&e){if(!t.length&&"number"==typeof e.level){const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls.levels,s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url];let n=-1;r&&r.startLoadTime&&r.endLoadTime&&(n=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/u.a;const l={indicatedKbps:s.bitrate/u.a,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/u.a||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:n,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a.clientWidth,viewportHeight:a.clientHeight,watchedDurationMs:0};t.push(l)}}else Object(c.c)("initializeSegmentsFailed",!0)}),p(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*u.c:null),p(this,"handleCanPlayVideo",e=>{const{onReady:t,playing:a}=this.props,{canPlayVideo:i}=this.state;Object(c.c)("handleCanPlayVideo",!0,{firstCanPlayEvent:!i,playing:a}),i||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),t&&t(e)}),p(this,"handleEnded",e=>{const{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(u.e,{initiator:"videoEnded",loop:t}),this.setState({playbackState:u.g.ENDED}),a&&a(e)}),p(this,"handleHlsError",(e,t)=>{var a,i;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){var s,n,l,o;this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;const e={errorName:t.type,errorReason:t.details,errorMessage:(null===(s=t.err)||void 0===s||null===(n=s.message)||void 0===n?void 0:n.slice(0,100))||"unknown",errorResponse:(null===(l=t.response)||void 0===l||null===(o=l.text)||void 0===o?void 0:o.slice(0,100))||"unknown"};if(Object(c.c)("fatalError",!0,e),this.props.enableErrorRecovery)switch(t.type){case r.a.ErrorTypes.NETWORK_ERROR:null===(a=this.hls)||void 0===a||a.startLoad();break;case r.a.ErrorTypes.MEDIA_ERROR:null===(i=this.hls)||void 0===i||i.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:u.g.FAILED})}),p(this,"handleHlsFragBuffered",(e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)}),p(this,"handleHlsFragChanged",(e,t)=>{this.addSegment(t.frag)}),p(this,"handleHlsFragLoading",(e,t)=>{var a;const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})}),p(this,"handleHlsFragLoaded",(e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/u.b);const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)}),p(this,"handleHlsLevelSwitched",()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/u.a)}),p(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date}),p(this,"handlePlaying",()=>{this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.setState({playbackState:u.g.PLAYING})}),p(this,"handlePause",()=>{this.state.playbackState!==u.g.STALLING&&this.state.playbackState!==u.g.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.updateStallDuration()),this.setState({playbackState:u.g.PAUSED})}),p(this,"handleSeeking",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==u.g.ENDED&&this.setState({playbackState:u.g.SEEKING})}),p(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==u.g.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numStalls+=1),this.setState({playbackState:u.g.STALLING})}),p(this,"handleTimeUpdate",e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===u.g.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())}),p(this,"resetPlaybackMetrics",()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numStalls=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]}),p(this,"setLastSegmentStartPlayTime",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())}),p(this,"setLastSegmentPlaybackStartDate",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())}),p(this,"setPlaybackStartTime",()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)}),p(this,"setVideoPlayerRef",e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("pause",this.handlePause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),p(this,"updateStallDuration",()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)}),p(this,"updateWatchDurationForCurrentSegment",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){const e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),p(this,"logPlaybackPerformance",(e,t)=>{const{contextLogData:a={},userId:i}=this.props,{is_closeup_video:s=!1}=a,{canPlayTime:r,detailedErrors:n,downloadedKiloBytes:o,errorCode:h,errorName:d,errorReason:m,hasFatalError:p,playbackStartTimestamp:y,segments:b,srcString:S,loadStartTime:f,numStalls:g}=this.playbackPerformance,P=this.videoPlayerRef&&this.videoPlayerRef.video,v=e===u.f,E=v&&!this.hasVideoSessionStarted,k=!v&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&P&&(E||k)){var D;let E=-1;r&&f&&(E=r>f?r-f:0);let k=-1;r&&this.videoVisibleTime&&(k=r>this.videoVisibleTime?r-this.videoVisibleTime:0);const T={averageVideoKbps:-1,detailedErrors:n,downloadedKiloBytes:o,isCellular:!1,errorCode:h,errorName:d,errorReason:m,fatalError:p,nativeVideoDurationMs:P.duration*u.c||-1,numberOfStalls:g,overallWatchedDurationMs:-1,rebufferRate:-1,playbackStartTimestamp:y||-1,segments:[],sessionMark:e,screenPixelRatio:null!==(D=window)&&void 0!==D&&D.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:P.clientWidth,startupPlayerHeight:P.clientHeight,startupTimeMs:E,startupLatencyMs:k,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:P.videoWidth,startupVariantHeight:P.videoHeight,videoUrl:S};if(v)this.videoSessionId=Object(u.i)(i),this.playerId=this.playerId||Object(u.h)();else if(b.length>0){const e=this.hls.levels,t=b[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=b.reduce((t,a)=>{if(a&&"number"==typeof a.level&&e&&e.length>0){return t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/u.c}return t},0),i=b.reduce((e,t)=>e+(t.watchedDurationMs||0),0);let s=null,r=0,n=0;do{r+=b[n].watchedDurationMs,s=s||b[n].level,n+=1}while(n<b.length&&b[n].level===s);T.startupVariantKbps=t.indicatedKbps,T.startupVariantWatchedDurationMs=r,T.startupVariantWidth=t.sourceWidth,T.startupVariantHeight=t.sourceHeight,T.startupPlayerWidth=t.viewportWidth,T.startupPlayerHeight=t.viewportHeight,T.overallWatchedDurationMs=i,i>0?(T.averageVideoKbps=a/(i/u.c),T.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(T.averageVideoKbps=0,T.rebufferRate=0),T.segments=b}Object(c.a)(T,!0),Object(l.b)(3606,{...a,is_closeup_video:s,playback_session_id:this.videoSessionId,eventData:{videoPerformanceData:T}}),v?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),Object(c.c)(v?"sessionStart":"sessionEnd",!0,t)}})}componentDidMount(){const{playing:e}=this.props;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),Object(c.c)("videoMounted",!0),e&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(u.f,{initiator:"mount"}))}componentDidUpdate(e){const{playing:t,src:a,visible:i}=this.props;var s,r;(typeof(s=e.src)!=typeof(r=a)||(Array.isArray(r)?s.length!==r.length||r.some((e,t)=>!Array.isArray(s)||e.type!==s[t].type||e.src!==s[t].src):r!==s))&&this.initializeHls(),e.visible&&!1===i&&(this.logSessionStartOnNextPlay=!1,this.logPlaybackPerformance(u.e,{initiator:"update"})),!1===e.visible&&!0===i&&(this.videoVisibleTime=this.videoVisibleTime||new Date,t?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(u.f,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),t&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(u.f,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){const{loop:e}=this.props;this.logPlaybackPerformance(u.e,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityUnmuteLabel:r,aspectRatio:n,captions:l,controls:o,loop:h,loopOveride:c,onDurationChange:u,onFullscreenChange:p,onLoadedChange:y,onPause:b,onPlay:S,onPlayheadDown:f,onPlayheadUp:g,onSeek:P,onVolumeChange:v,playbackRate:E,playing:k,playsInline:D,poster:T,preload:w,src:L,volume:R}=this.props,{canPlayVideo:V,isManifestParsed:O}=this.state;return Object(m.jsx)(d.jb,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityUnmuteLabel:r,aspectRatio:n,captions:l,controls:o,loop:void 0===c?h:c,onDurationChange:u,onEnded:this.handleEnded,onFullscreenChange:p,onLoadStart:this.handleLoadStart,onLoadedChange:y,onPause:b,onPlay:S,onPlaying:this.handlePlaying,onPlayheadDown:f,onPlayheadUp:g,onReady:this.handleCanPlayVideo,onSeek:P,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:v,onWaiting:this.handleStalled,playbackRate:E,playing:O&&V&&k,playsInline:D,poster:T,preload:w,ref:this.setVideoPlayerRef,src:L,volume:R})}}t.a=Object(i.memo)((function(e){const t=Object(o.a)("web_hls_error_recovery")().anyEnabled,{country:a,isAuthenticated:i,isBot:s,isSocialBot:r,unauthId:l,userAgent:d}=Object(h.d)(),{browserName:u,browserVersion:p}=d,{contextLogData:b={}}=e,{view:S,viewParameter:f}=b,g=Object(n.a)(),P={browserName:u,browserVersion:p,country:a,isAuthenticated:i,isBot:s,isSocialBot:r,view:S,viewParameter:f};return Object(c.b)(P),Object(m.jsx)(y,{...e,userId:g.id||l,enableErrorRecovery:t})}))}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/14-2d15d75a02d6345efcd9.mjs.map