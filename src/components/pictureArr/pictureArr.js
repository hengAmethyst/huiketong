Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  data: {
    listStyle: '',
    itemStyle: ''
  },
  ready() {
    let flexDirection =
      (this.data.itemData.flexDirection + "") === "0" ?
      "row" :
      (this.data.itemData.flexDirection + "") === "1" ?
      "row-reverse" :
      (this.data.itemData.flexDirection + "") === "2" ? "column" : "column-reverse";
    let flexWrap =
      this.data.itemData.flexWrap === 0 ?
      "nowrap" :
      this.data.itemData.flexWrap === 1 ? "wrap" : "wrap-reverse";
    let justifyContent =
      this.data.itemData.justifyContent === 0 ?
      "left" :
      this.data.itemData.justifyContent === 1 ? "center" : "right";
    let alignItems =
      this.data.itemData.alignItems === 0 ?
      "flex-start" :
      this.data.itemData.alignItems === 1 ?
      "flex-end" :
      this.data.itemData.alignItems === 2 ?
      "center" :
      this.data.itemData.alignItems === 3 ? "baseline" : "stretch";

    // listStyle
    this.setData({
      listStyle: `
          background-color:${this.data.itemData.bgColor};
          align-items:${alignItems};
          text-align:${justifyContent};
          flex-wrap:${flexWrap};
          flex-direction:${flexDirection};
      `,
      itemStyle: `
          padding-top:${this.data.itemData.padding_top !=='0' ? this.data.itemData.padding_top : 0}px;
          padding-right:${this.data.itemData.padding_right !=='0' ? this.data.itemData.padding_right : 0}px;
          padding-bottom:${this.data.itemData.padding_bottom !=='0' ? this.data.itemData.padding_bottom : 0}px;
          padding-left:${this.data.itemData.padding_left !=='0' ? this.data.itemData.padding_left: 0}px;
          font-size:${this.data.itemData.fontSize *2}rpx;
      `
    });
  }
})
