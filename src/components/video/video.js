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
        
        // let data = 
        // {
            
        //     "width":200,
        //     "height":300,
        //     "padding_top":0,
        //     "padding_right":0,
        //     "padding_bottom":0,
        //     "padding_left":0,
        //     "src":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        //     "controls":true,
        //     "autoplay":true,
        //     "loop":true,
        //     "muted":false,
        //     "type":"video",
        //     "bgColor":"",
        //     "id":1514960607350,
        //     "data":{

        //     }
        // }
        let nowSty = `
                        width:${(data.width-data.padding_left-data.padding_right)*2}rpx;
                        height:${(data.width-data.padding_left-data.padding_right)*2*212/375}rpx;
                        margin-left:${data.padding_left*2}rpx;
                        margin-right:${data.padding_right*2}rpx;
                        margin-top:${data.padding_top*2}rpx;
                        margin-bottom:${data.padding_bottom*2}rpx;
                    `
        this.data.itemData.nowSty = nowSty
        let boxHeight = `${data.height*2}rpx`
        this.data.itemData.boxHeight = boxHeight
        this.setData({
           itemData: this.data.itemData
        })
    }
    ,
    /**
     * 组件的方法列表
     */
    methods: {
  
    }
  })
  