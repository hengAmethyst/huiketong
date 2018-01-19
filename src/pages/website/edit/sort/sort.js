/**
 * 用来上下排序和删除的组件
 */
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
    },
    /**
     * 组件的方法列表
     */
    methods: {
      down(){
        // 交换顺序
        let index = this.data.itemIndex
        // 判断,如果下面还有组件,就可以向下移动
        if(index<this.data.gData.length-1){
          let temp = this.data.gData[index]
          this.data.gData.splice(index,1)
          this.data.gData.splice(index+1, 0, temp)
          this.setData({
            gData: this.data.gData
          })
          this.uploadData()
        }
      },
      up(){
        // 交换顺序
        let index = this.data.itemIndex
        // 判断,如果上面还有组件,就可以向上移动
        if(this.data.gData[index-1]){
          let temp = this.data.gData[index]
          this.data.gData.splice(index,1)
          this.data.gData.splice(index-1, 0, temp)
          this.setData({
            gData: this.data.gData
          })
          this.uploadData()
        }
      },
      del(){
        let index = this.data.itemIndex
        this.data.gData.splice(index,1)
        this.uploadData()
      },
      uploadData(){
        var myEventDetail = this.data.gData 
        var myEventOption = {}
        this.triggerEvent('update', myEventDetail, myEventOption)
      }
    }
  })
