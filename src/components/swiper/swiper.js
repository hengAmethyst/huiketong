Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  data: {
    swiperStyle: '',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorActiveColor: '#000000'
  },
  ready() {
    this.setData({
      swiperStyle: `
          background-color:${this.data.itemData.bgColor};
          height:${this.data.itemData.height*2}rpx;
      `,
      indicatorActiveColor: this.data.itemData.color
    })
  }
})
