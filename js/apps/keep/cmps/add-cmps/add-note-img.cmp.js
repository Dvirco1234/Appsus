// export default {
//   template: `
//     <section class="add-img">
//
//              <input type="file" name="img" @change="uploadImg" />
//              <!-- <input type="file" name="img" accept="image/x-png,image/gif,image/jpeg" /> -->
//     </section>
//       `,
//   data() {
//     return {
//       note: {
//         type: "note-img",
//         info: {
//           url: null,
//           title: "",
//         },
//       },
//     }
//   },
//   methods: {
//     uploadImg(ev) {
//       console.log(ev, this.onImageReady)
//       this.loadImageFromInput(ev, this.onImageReady)
//     },

//     loadImageFromInput(ev, onImageReady) {
//       var reader = new FileReader()
//       reader.onload = function (event) {
//         var img = new Image()
//         img.src = event.target.result
//         img.onload = onImageReady.bind(null, img)
//       }
//       reader.readAsDataURL(ev.target.files[0])
//     },
//     onImageReady(img) {
//       this.note.info.url = img.src
//     },
//   },
//   computed: {},
//   unmounted() {},
// }

// https://images.unsplash.com/photo-1656523916611-770eaee57842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
// thumbnail

import { eventBus } from "../../../../services/eventBus-service.js"

export default {
  template: `
  <div v-if="this.note.info.url == null">
    <label for="note-image"> blabka</label>
      <input id="note-image" type="file" @change=" imgInput" accept="image/*" />
  </div>
  <div
      class="np-image-preview"
      v-if=" this.note.info.url != null &&  this.note.info.url.length != 0">
      <img class="np-preview" :src="this.note.info.url" />
  </div>

    <!-- <div v-if=" this.note.info.url != null &&  this.note.info.url.length != 0 && !isImageUploading">
      <button
        class="np-upload-btn np-upload-btn-cancel"
        v-on:click="clearImage"
      >
        Cancel
      </button> -->
      <button
        class="np-upload-btn np-upload-btn-confirm"
        @click="uploadImage"
      >
        Upload
      </button>
    </div>
    <!-- <div class="np-upload-in-progress" v-if="isImageUploading">
      Please wait while your file is being uploaded ...
    </div> -->
`,
  name: "ImageUploader",
  data() {
    return {
      isImageUploading: false,
      note: {
        type: "note-img",
        info: {
          title: "",
          url: "",
        },
      },
    }
  },
  methods: {
    showImagePreview(event, uploadImage) {
      let reader = new FileReader()
      reader.onload = (e) => {
        var img = new Image()
        img.src = e.target.result
        img.onload = uploadImage.bind(null, img)
      }
      reader.readAsDataURL(event.target.files[0])
    },
    uploadImage(img) {
      this.note.info.url = img.src
      this.isImageUploading = true
    },
    imgInput(ev) {
      this.showImagePreview(ev, this.uploadImage)
    },
  },
}
