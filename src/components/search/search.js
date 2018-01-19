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
                        margin-left:${data.padding_left}rpx;
                        margin-right:${data.padding_right}rpx;
                        font-size:${data.height}rpx;
                    `
        this.data.itemData.nowSty = nowSty
        this.data.itemData.searchImg = '/img/icon_search.png'
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
  