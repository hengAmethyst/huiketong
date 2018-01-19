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
    width: ''
  },
  ready() {
    let data = this.data.itemData
    if (data.preview.category === 'square') {
      this.setData({
        width: '355rpx'
      })
    } else {
      this.setData({
        width: '730rpx'
      })
    }

  }
})
