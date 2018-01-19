Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  data: {
    layout: ''
  },
  ready() {
    let width;
    let height;
    let lo = this.data.itemData.layout + "";
    if (lo === "1") {
      width = "750rpx";
      height = "750rpx";
    } else if (lo === "2") {
      width = "750rpx";
      height = "375rpx";
    } else if (lo === "3") {
      width = "375rpx";
      height = "750rpx";
    } else if (lo === "4") {
      width = "750rpx";
      height = "187rpx";
    } else if (lo === "5") {
      width = "375rpx";
      height = "375rpx";
    } else if (lo === "6") {
      width = "375rpx";
      height = "187rpx";
    } else if (lo === "7") {
      width = "187rpx";
      height = "375rpx";
    } else if (lo === "8") {
      width = "187rpx";
      height = "187rpx";
    }

    console.log(width, height);
    let border = this.data.itemData.border ? "1px dashed #fff" : "none";
    let float = this.data.itemData.align + "" === '1' ? "left" : "right";
    this.setData({
      layout: `
          width:${width};
          height:${height};
          border:${border};
          padding-top:${this.data.itemData.padding_top}px;
          padding-right:${this.data.itemData.padding_right}px;
          padding-bottom:${this.data.itemData.padding_bottom}px;
          padding-left:${this.data.itemData.padding_left}px;
          background-color:${this.data.itemData.bgColor};
      `
    })
  }
})
