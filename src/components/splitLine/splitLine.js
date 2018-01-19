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
        nowSty:''
    },
    ready(){
        let data = this.data.itemData
        
        let nowSty = `
                        border-top:${data.height*2}rpx ${data.dashed?'dashed':'solid'} ${data.color};
                        margin-top:${data.padding_top}rpx;
                        margin-bottom:${data.padding_bottom}rpx;
                        width:${(data.width-data.padding_left-data.padding_right)*2}rpx;
                        margin-left:${data.padding_left*2}rpx;
                        margin-right:${data.padding_right*2}rpx;
                    `
        this.data.itemData.nowSty = nowSty
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
  