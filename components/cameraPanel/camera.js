// components/cameraView/camera.js
Component({
  /**
   * Component properties
   */
  properties: {
    picture: {
      type: Object
    }
  },

  ready(){
    console.log(this.data.picList)
  },

  /**
   * Component initial data
   */
  data: {


    cardList: [
      {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      },
    ]
  },

  /**
   * Component methods
   */
  methods: {

  }
})
