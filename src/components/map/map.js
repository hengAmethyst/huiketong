// pages/website/custom/1.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemData: Object
    },
  
    /**
     * 组件的初始数据
     */
    data: {
        
    },
    ready(){
        let data = this.data.itemData
        let nowSty = `
                        width:${data.width*2}rpx;
                        height:${data.height*2}rpx;
                        padding-top:${data.padding_top*2}rpx;
                        padding-bottom:${data.padding_bottom*2}rpx;
                        padding-left:${data.padding_left*2}rpx;
                        padding-right:${data.padding_right*2}rpx;
                      `
        this.data.itemData.nowSty = nowSty
        let tempArry = this.data.itemData.lnglat.split(',')
        this.data.itemData.local = {longitude:tempArry[0],latitude:tempArry[1]}
        this.data.itemData.data.scale = 14
        // makers
        this.data.itemData.data.markers = 
        [{
            iconPath: "/imgs/icon_map.png",
            id: 0,
            latitude: tempArry[0],
            longitude: tempArry[1],
            width: 40,
            height: 40
        }]

        this.mapCtx = wx.createMapContext('myMap')
        this.setData({
            itemData:  this.data.itemData
        })
    }
    ,
    /**
     * 组件的方法列表
     */
    methods: {
        // 获取当前的经纬坐标
        getCenterLocation(){
            this.mapCtx.getCenterLocation({
                success: function(res){
                    console.log(res)
                    // this.location.longitude = res.longitude
                    // this.location.latitude = res.latitude
                }
            })
        },
        moveToLocation: function () {
            this.mapCtx.moveToLocation()
        },
        controltap(e) {
            if (e.controlId === 1) {
                if(this.data.itemData.data.scale>1){
                    --this.data.itemData.data.scale
                    this.setData({
                        itemData: this.data.itemData
                    })
                }
                else{
                    this.data.itemData.data.scale = 1
                    this.setData({
                        itemData: this.data.itemData
                    })
                }
            } 
            else {
                if(this.data.itemData.data.scale<18){
                    ++this.data.itemData.data.scale
                    this.setData({
                        itemData: this.data.itemData
                    })
                }
                else{
                    this.data.itemData.data.scale = 18
                    this.setData({
                        itemData: this.data.itemData
                    })
                }
                
            }
        }
    }
  })
  