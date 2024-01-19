// import Model News
const News = require("../models/news.js")
// buat class NewsController
class NewsController {
        async index(req, res) {

          const News = await News.all();

          const data = {
              message: "Menampilkan Berita",
              data: News
          };

          res.status(200).json(data);
      }

      async store(req, res) {
        
        const News = await News.create(req.body);
        const data = {
            message: "Menambahkan Berita",
            data: News,
        };

        res.status(201).json(data);
      }

      async update(req, res) {
      
        const { id } = req.params;

        const students = await News.find(id);

        if (News) {
            // update data
            const NewsUpdated = await News.update(id, req.body);
            const data = {
                message: "Mengupdate Berita",
                data: NewsUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
      }

      async destroy(req, res) {
        const { id } = req.params;

        const News = await News.find(id);

        if (News) {
            // hapus data
            await Student.delete(id);
            const data = {
                message: "Menghapus data berita",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
      }

      async show(req, res) {
      
        const { id } = req.params;

        const News = await News.find(id);

        if (student) {
            const data = {
                message: "Menampilkan detail berita",
                data: News,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

      }





}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;
