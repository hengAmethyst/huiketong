
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
    },
    ready(){
      
    }
    ,
    /**
     * 组件的方法列表
     */
    methods: {
      // 输入标题
      endInputTitle(e){
        let index = this.data.itemIndex
        this.data.gData[index].title = e.detail.value
        this.setData({
          gData: this.data.gData
        })
        let myEventDetail = this.data.gData
        let myEventOption = {}
        this.triggerEvent('update', myEventDetail, myEventOption)
      },
      // 输入内容
      endInputContent(e){
        let index = this.data.itemIndex
        this.data.gData[index].content = e.detail.value
        this.setData({
          gData: this.data.gData
        })
        let myEventDetail = this.data.gData
        let myEventOption = {} 
        this.triggerEvent('update', myEventDetail, myEventOption)
      },
      // 接收子组件的数据
      update(e){
        var myEventDetail = e.detail
        var myEventOption = {} 
        this.triggerEvent('update', myEventDetail, myEventOption)
      }
    }
  })
