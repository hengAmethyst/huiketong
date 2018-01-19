import ApiUrl from "../../../../api-url";
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
      upload() {
        let index = this.data.itemIndex
        wx.chooseImage({
          count: 1,
          sizeType: ['compressed'],//压缩
          success:(res)=>{
            wx.uploadFile({
              url: ApiUrl.file,
              filePath: res.tempFilePaths[0],
              name: "singleImg",//key
              success:(res)=>{
                let data = JSON.parse(res.data);
                let temp = {};
                temp.url = data.data.fullFilename;
                this.data.gData[index].webTemplatePicList.splice(0,1,temp);
                // 提交的时候需要提交原数据
                this.setData({
                  gData:this.data.gData
                })
                var myEventDetail = this.data.gData
                var myEventOption = {}
                this.triggerEvent('update', myEventDetail, myEventOption)
              }
            })
          }
        })
      },
      // 接收子组件的数据
      update(e){
        var myEventDetail = e.detail
        var myEventOption = {}
        this.triggerEvent('update', myEventDetail, myEventOption)
      }
    }
  })
