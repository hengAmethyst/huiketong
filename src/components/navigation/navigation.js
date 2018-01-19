Component({
    properties: {
        itemData: {
            type: Object,
            value: {}
        }
    },
    data: {
        itemList: []
    },
    ready() {
        let itemList = this.data.itemData.data.sort((a, b) => {
            return a.displayorder - b.displayorder;
        });
        this.setData({ itemList });
    }
})