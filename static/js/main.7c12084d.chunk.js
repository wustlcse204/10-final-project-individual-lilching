(this["webpackJsonp10-final-project-individual-lilching"]=this["webpackJsonp10-final-project-individual-lilching"]||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){},18:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var a=s(1),i=s.n(a),n=s(9),c=s.n(n),r=(s(14),s(3)),o=s(4),l=s(2),u=s(6),d=s(5),b=(s(15),s(16),s(8),s(0)),h=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={artistName:t.artistName,artistPlayCount:t.artistPlayCount,artistRanking:t.artistRanking},a.numberWithCommas=a.numberWithCommas.bind(Object(l.a)(a)),a}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"row",id:"artist-div",children:[Object(b.jsx)("div",{className:"col-xl-1 col-lg-1 col-md-1",id:"ranking",children:this.state.artistRanking}),Object(b.jsxs)("div",{className:"col-xl-11 col-lg-11 col-md-11",children:[Object(b.jsx)("p",{id:"artist-name",children:this.state.artistName}),Object(b.jsxs)("p",{id:"playcount",children:["Artist playcount: ",this.numberWithCommas(this.state.artistPlayCount)]})]})]})}},{key:"numberWithCommas",value:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}]),s}(a.Component),m=(s(18),function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={trackName:t.trackName,trackPlayCount:t.trackPlayCount,trackArtist:t.trackArtist,trackRanking:t.trackRanking},a.numberWithCommas=a.numberWithCommas.bind(Object(l.a)(a)),a}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"row",id:"tracks-div",children:[Object(b.jsx)("div",{className:"col-xl-1 col-lg-1 col-md-1",id:"ranking",children:this.state.trackRanking}),Object(b.jsxs)("div",{className:"col-xl-11 col-lg-11 col-md-11",children:[Object(b.jsx)("p",{id:"track-name",children:this.state.trackName}),Object(b.jsxs)("p",{id:"playcount",children:["Track playcount: ",this.numberWithCommas(this.state.trackPlayCount)]})]})]})}},{key:"numberWithCommas",value:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}]),s}(a.Component)),j=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={url:"http://ws.audioscrobbler.com/2.0/",topArtists:[],artistsGrabbed:!1,topTracks:[],tracksGrabbed:!1,currentList:"artists",list:Object(b.jsx)("p",{children:"list"})},a.switchToTracks=a.switchToTracks.bind(Object(l.a)(a)),a.switchToArtists=a.switchToArtists.bind(Object(l.a)(a)),a}return Object(o.a)(s,[{key:"render",value:function(){var t=this,e=this;return console.log(this.state.currentList),void 0===e.state.topArtists.length&&(e.state.artistsGrabbed=!0),void 0===e.state.topTracks.length&&(e.state.tracksGrabbed=!0),"artists"===e.state.currentList?(console.log("artists rendering yuh"),this.state.list=e.state.artistsGrabbed?e.state.topArtists.artists.artist.map((function(t,e){return Object(b.jsx)(h,{id:t.mbid,artistName:t.name,artistPlayCount:t.playcount,artistRanking:e+1},t.mbid)})):Object(b.jsx)("p",{children:"Top artists data being fetched."})):"tracks"===this.state.currentList&&(console.log("tracks rendering yuh"),this.state.list=e.state.tracksGrabbed?this.state.topTracks.tracks.track.map((function(t,e){return Object(b.jsx)(m,{id:t.name,trackName:t.name,trackPlayCount:t.playcount,trackRanking:e+1},t.name)})):Object(b.jsx)("p",{children:"Top tracks data being fetched."})),Object(b.jsxs)("div",{id:"main-container",children:[Object(b.jsx)("p",{id:"heading",className:"row justify-content-center",children:"Last.fm Music Charts"}),Object(b.jsxs)("div",{id:"buttons-div",className:"row justify-content-center",children:[Object(b.jsx)("button",{className:"toggle-button col-md-2 col-4",id:"artist-toggle",onClick:function(e){return t.switchToArtists(e)},children:"Top Artists"}),Object(b.jsx)("button",{className:"toggle-button col-md-2 col-4",id:"track-toggle",onClick:function(e){return t.switchToTracks(e)},children:"Top Tracks"})]}),Object(b.jsx)("div",{id:"list",className:"row justify-content-center",children:this.state.list})]})}},{key:"componentDidMount",value:function(){var t=this;fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=ed5da9b66fbbb3d6781c2dec474a1eb9&format=json&limit=10").then((function(t){return t.json()})).then((function(e){return t.setState({topArtists:e})})),fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ed5da9b66fbbb3d6781c2dec474a1eb9&format=json&limit=10").then((function(t){return t.json()})).then((function(e){return t.setState({topTracks:e})}))}},{key:"switchToTracks",value:function(){this.setState({currentList:"tracks"})}},{key:"switchToArtists",value:function(){this.setState({currentList:"artists"}),console.log("switching to artists")}}]),s}(a.Component),k=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,c=e.getTTFB;s(t),a(t),i(t),n(t),c(t)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.7c12084d.chunk.js.map