(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5411b99f"],{"401b":function(i,a,t){},4511:function(i,a,t){"use strict";t("401b")},"8fc1":function(i,a,t){"use strict";t("9272")},9272:function(i,a,t){},d504:function(i,a,t){"use strict";t.r(a);var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",{staticClass:"mapcontainer",attrs:{id:"centerDiv"}},[t("Map",{attrs:{url:i.configUrl,widgetUrl:i.widgetUrl},on:{onload:i.onMapload}})],1)},n=[],r=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",{class:["mars3d-container",i.customClass,{"mars3d-container-compare-rh":i.compare}],attrs:{id:"mars3d-container"+i.mapKey}})},o=[],s=t("5530"),d=t("a026"),l=window.mars3d;d["a"].prototype.mars3d=window.mars3d,d["a"].prototype.Cesium=l.Cesium;var c={name:"mars3dViewer",props:{url:String,widgetUrl:String,mapKey:{type:String,default:""},options:Object,compare:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},customClass:{type:String,default:""}},mounted:function(){var i=this;this.appendToBody&&document.body.appendChild(this.$el),this.mapKey?this.initMars3d(this.options):l.Resource.fetchJson({url:this.url}).then((function(a){i.initMars3d(a.map3d)}))},destroy:function(){this["map".concat(this.mapKey)].destroy(),delete this["map".concat(this.mapKey)]},methods:{initMars3d:function(i){var a=this;if(!this["map".concat(this.mapKey)]){var t=Object(s["a"])(Object(s["a"])({},i),this.options),e=new l.Map("mars3d-container".concat(this.mapKey),t);this["map".concat(this.mapKey)]=e,console.log(">>>>> 地图创建成功 >>>>",e),l.Resource.fetchJson({url:this.widgetUrl}).then((function(i){a.initStaticWidget(e,i)})),this.$emit("onload",e)}},initStaticWidget:function(i,a){l.widget.init(i,a,window.basePathUrl||"/")}}},p=c,h=(t("4511"),t("2877")),m=Object(h["a"])(p,r,o,!1,null,null,null),u=m.exports,f={name:"Index",components:{Map:u},data:function(){var i=window.basePathUrl||"";return{configUrl:i+"config/config.json",widgetUrl:i+"config/widget.json"}},methods:{onMapload:function(i){var a=this;i.flyHome({duration:0}),i.openFlyAnimation({callback:function(){}});var t=new this.mars3d.layer.GraphicLayer;i.addLayer(t),t.on(this.mars3d.EventType.click,(function(i){console.log("监听layer，单击了矢量对象",i)})),t.on(this.mars3d.EventType.mouseOver,(function(i){console.log("监听layer，鼠标移入了矢量对象",i)})),t.on(this.mars3d.EventType.mouseOut,(function(i){console.log("监听layer，鼠标移出了矢量对象",i)})),t.bindPopup("我是layer上绑定的Popup",{anchor:[0,-10]}),t.bindContextMenu([{text:"删除对象",iconCls:"fa fa-trash-o",callback:function(i){var a=i.graphic;a&&t.removeGraphic(a)}}]);var e=new mars3d.layer.GraphicLayer;i.addLayer(e);for(var n=0;n<20;n++){var r=new mars3d.graphic.ModelEntity({style:{url:"//data.mars3d.cn/gltf/mars/qiche.gltf",scale:1,minimumPixelSize:50,label:{text:"皖A000"+n,font_size:16,color:"#ffffff",outline:!0,outlineColor:"#000000",pixelOffsetY:-20,distanceDisplayCondition:!0,distanceDisplayCondition_far:5e4,distanceDisplayCondition_near:0}}});e.addGraphic(r)}e.eachGraphic((function(i){i.addDynamicPosition(a.randomPoint())})),e.eachGraphic((function(i){i.addDynamicPosition(a.randomPoint(),20)})),setInterval((function(){e.eachGraphic((function(i){i.addDynamicPosition(a.randomPoint(),20)}))}),2e4),this.addSaomiao(t),this.addweiqiang(t)},randomPoint:function(){var i=haoutil.math.random(120939.9,121875.712)/1e3,a=haoutil.math.random(31.462645*1e3,30764.256)/1e3;return this.Cesium.Cartesian3.fromDegrees(i,a,30)},addSaomiao:function(i){var a=Math.random(),t=new this.mars3d.graphic.CircleEntity({position:Cesium.Cartesian3.fromDegrees(121.469501,31.2301,27.88),style:{radius:5e4,material:mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.CircleScan,{image:"img/textures/circleScan.png",color:"#7FFF00"}),stRotation:new Cesium.CallbackProperty((function(i){return a-=.1,a}),!1),classificationType:Cesium.ClassificationType.BOTH,clampToGround:!0}});i.addGraphic(t)},addweiqiang:function(i){var a=new this.mars3d.graphic.DiffuseWall({position:new mars3d.LatLngPoint(121.469501,31.2301,44.3),style:{diffHeight:1e5,radius:1e5,color:"#ff0000",speed:10}});i.addGraphic(a)},addGraphic_e01:function(i){var a=new this.mars3d.graphic.LabelEntity({position:new this.mars3d.LatLngPoint(116.1,31,1e3),style:{text:"Mars3D平台",font_size:25,font_family:"楷体",color:"#003da6",outline:!0,outlineColor:"#bfbfbf",outlineWidth:2,horizontalOrigin:this.Cesium.HorizontalOrigin.CENTER,verticalOrigin:this.Cesium.VerticalOrigin.BOTTOM,visibleDepth:!1}});i.addGraphic(a)},addGraphic_e02:function(i){var a=new this.mars3d.graphic.PointEntity({position:[116.2,31,1e3],style:{color:"#ff0000",pixelSize:10,outline:!0,outlineColor:"#ffffff",outlineWidth:2}});i.addGraphic(a)},addGraphic_e03:function(i){var a=new this.mars3d.graphic.BillboardEntity({name:"贴地图标",position:[116.3,31,1e3],style:{image:"http://mars3d.cn/example/img/marker/mark2.png",scale:1,horizontalOrigin:this.Cesium.HorizontalOrigin.CENTER,verticalOrigin:this.Cesium.VerticalOrigin.BOTTOM,clampToGround:!0}});i.addGraphic(a)},addGraphic_e04:function(i){var a=new this.mars3d.graphic.PlaneEntity({position:new this.mars3d.LatLngPoint(116.4,31,1e3),style:{plane:new this.Cesium.Plane(this.Cesium.Cartesian3.UNIT_Z,0),dimensions:new this.Cesium.Cartesian2(4e3,4e3),material:this.mars3d.MaterialUtil.createMaterialProperty(this.mars3d.MaterialType.Image,{image:"http://mars3d.cn/example/img/textures/movingRiver.png",transparent:!0})}});i.addGraphic(a)},addGraphic_e05:function(i){var a=new this.mars3d.graphic.BoxEntity({position:new this.mars3d.LatLngPoint(116.5,31,1e3),style:{dimensions:new this.Cesium.Cartesian3(2e3,2e3,2e3),fill:!0,color:"#00ffff",opacity:.9,heading:45,roll:45,pitch:0}});i.addGraphic(a)},addGraphic_e06:function(i){var a=new this.mars3d.graphic.CircleEntity({position:[116.1,30.9,1e3],style:{radius:1800,color:"#00ff00",opacity:.3,outline:!0,outlineWidth:3,outlineColor:"#ffffff",clampToGround:!0},popup:"直接传参的popup"});i.addGraphic(a)},addGraphic_e07:function(i){var a=new this.mars3d.graphic.CylinderEntity({position:[116.2,30.9,1e3],style:{length:3e3,topRadius:0,bottomRadius:1300,color:"#00FFFF",opacity:.7},popup:"直接传参的popup"});i.addGraphic(a)},addGraphic_e08:function(i){var a=new this.mars3d.graphic.EllipsoidEntity({position:new this.mars3d.LatLngPoint(116.3,30.9,1e3),style:{radii:new this.Cesium.Cartesian3(1500,1500,1500),material:this.Cesium.Color.RED.withAlpha(.5),outline:!0,outlineColor:this.Cesium.Color.WHITE.withAlpha(.3)}});i.addGraphic(a)},addGraphic_e09:function(i){var a=new this.mars3d.graphic.ModelEntity({name:"消防员",position:[116.4,30.9,1e3],style:{url:"http://data.mars3d.cn/gltf/mars/firedrill/xiaofangyuan-run.gltf",scale:16,minimumPixelSize:100}});i.addGraphic(a)},addGraphic_e10:function(i){var a=new this.mars3d.graphic.PolylineEntity({positions:[[116.5,30.9,1e3],[116.52,30.91,1e3],[116.53,30.89,1e3]],style:{width:5,color:"#3388ff"}});i.addGraphic(a)},addGraphic_e11:function(i){var a=new this.mars3d.graphic.PolylineVolumeEntity({positions:[[116.1,30.8,1e3],[116.12,30.81,1e3],[116.13,30.79,1e3]],style:{shape:"pipeline",radius:80,color:"#3388ff",opacity:.9}});i.addGraphic(a)},addGraphic_e12:function(i){var a=new this.mars3d.graphic.CorridorEntity({positions:[[116.2,30.8,1e3],[116.22,30.81,1e3],[116.23,30.79,1e3],[116.247328,30.806077,610.41]],style:{width:500,color:"#3388ff"}});i.addGraphic(a)},addGraphic_e13:function(i){var a=new this.mars3d.graphic.WallEntity({positions:[[116.3,30.8,1e3],[116.31,30.81,1e3],[116.334639,30.800735,721.39],[116.32,30.79,1e3]],style:{closure:!0,diffHeight:500,material:this.mars3d.MaterialUtil.createMaterialProperty(this.mars3d.MaterialType.LineFlow,{image:"http://mars3d.cn/example/img/textures/fence.png",color:"#00ff00",speed:10,axisY:!0})}});i.addGraphic(a)},addGraphic_e14:function(i){var a=new this.mars3d.graphic.RectangleEntity({positions:[[116.383144,30.819978,444.42],[116.42216,30.793431,1048.07]],style:{color:"#3388ff",opacity:.5,outline:!0,outlineWidth:3,outlineColor:"#ffffff"}});i.addGraphic(a)},addGraphic_e15:function(i){var a=new this.mars3d.graphic.PolygonEntity({positions:[[116.510278,30.834372,567.29],[116.530085,30.809331,448.31],[116.507367,30.788551,98.21],[116.472468,30.823091,677.39]],style:{material:this.mars3d.MaterialUtil.createMaterialProperty(this.mars3d.MaterialType.Water,{normalMap:"http://mars3d.cn/example/img/textures/waterNormals.jpg",frequency:8e3,animationSpeed:.02,amplitude:5,specularIntensity:.8,baseWaterColor:"#006ab4",blendColor:"#006ab4"})}});i.addGraphic(a)}}},y=f,g=(t("8fc1"),Object(h["a"])(y,e,n,!1,null,null,null));a["default"]=g.exports}}]);