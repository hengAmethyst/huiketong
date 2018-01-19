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
      itemData:null
    },
    ready(){

    }
    ,
    /**
     * 组件的方法列表
     */
    methods: {
      //选择图片
      chooseImg() {
        let index = this.data.itemIndex
        let that = this;
        wx.chooseImage({
          count: that.data.gData[index].length < 6 ? 6 - that.data.gData[index].length : 0, // 默认9
          success: function(res) {
            let tempFilePaths = res.tempFilePaths;
            let tempData = { nowNum: 0, allNum: tempFilePaths.length };
            that.upload(tempData, that.data.gData[index].webTemplatePicList, tempFilePaths);
          }
        });
      },
      /**
       *多张图片上传函数
       *@picData 图片的序号和长度
       *@itemList 图片列表
       *@filePathList 选择的图片返回的路径
      */
      upload(picData, itemList, filePathList) {
        let that = this;
        wx.uploadFile({
          url: ApiUrl.file, //仅为示例，非真实的接口地址
          filePath: filePathList[picData.nowNum],
          name: "file",
          formData: {
            user: "test"
          },
          success: function(res) {
            let data = JSON.parse(res.data);
            let temp = {};
            temp.url = data.data.fullFilename;
            itemList.push(temp);
            // 提交的时候需要提交原数据
            that.setData({
              gData:that.data.gData,
            })
            let myEventDetail = that.data.gData
            let myEventOption = {}
            that.triggerEvent('update', myEventDetail, myEventOption)
            if (picData.nowNum < picData.allNum - 1) {
              picData.nowNum++;
              that.upload(picData, itemList, filePathList);
            }
          }
        });
      },
      // 删除图片
      delPic(e){
        let index = this.data.itemIndex
        this.data.gData[index].webTemplatePicList.splice(e.currentTarget.dataset.index, 1);
        let myEventDetail = this.data.gData
        let myEventOption = {}
        this.triggerEvent('update', myEventDetail, myEventOption)
        this.setData({
          gData:this.data.gData,
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
