Component({
    properties: {
        itemData: {
            type: Object,
            value: {}
        }
    },
    data: {
        nodes: ''
    },
    ready() {
        let nodes = this.data.itemData.data.words.replace(/<\s*section[\s>]|<\/\s*section\s*>/g, match => {
            return match.replace('section', 'div')
        });
        this.setData({ nodes });
    }
})