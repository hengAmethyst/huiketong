Component({
    /**
     * 组件的属性列表
     */
    properties: {
      itemIndex:null,
      gData:null
    },

    /**
     * 组件的初始数据
     */
    data: {
      itemData:null
    },
    ready(){
        
        let index = this.data.itemIndex
        let temp = this.data.gData[index]
        this.setData({
          itemData: temp
        })
        if(this.data.itemData.status == 0){
          this.data.itemData.status == false
        }
        else{
          this.data.itemData.status ==  true
        }
        this.setData({
          itemData: this.data.itemData
        })
    }
    ,
    /**
     * 组件的方法列表
     */
    methods: {
      change(e){
        this.data.itemData.status = e.detail.value
        this.setData({
          gData: this.data.gData
        })
      },
      // 接收子组件的数据
      update(e){
        var myEventDetail = e.detail // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        this.triggerEvent('update', myEventDetail, myEventOption)
      }
    }
  })
