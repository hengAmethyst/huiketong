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
                        color:${data.fontColor};
                        background:${data.bgColor};
                    `
        this.data.itemData.nowSty = nowSty
        this.data.itemData.img = '/img/icon_weixin.png'
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
  