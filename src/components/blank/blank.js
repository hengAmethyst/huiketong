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
        let nowSty =
                        `
                            line-height:${data.height*2}rpx;
                            background:${data.bgColor};
                            height:${data.height*2}rpx;
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
