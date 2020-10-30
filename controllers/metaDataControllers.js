const { showMetaData_v2 } = require("../helpers/id3")

module.exports = {
  getMetaData: async (req, res) => {
    try {
      const path = 'http://localhost:5000/Anh-Con-No-Em-Quang-Dung.mp3';
      const options = {
        keepBackup: false
      };

      const data = await showMetaData_v2(path, options);

      const meta = data.frames.map((value) => {
        return {
          id: value.id,
          title: value.title,
          text: value.value.text
        }
      })

      res.json({
        data: meta
      })
    } catch (err) {

    }
  },

  getFromExcel: async (req, res) => {

  }
}