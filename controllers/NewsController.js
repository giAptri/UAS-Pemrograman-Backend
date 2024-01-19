// import Model News
const News = require("../models/News.js")
// buat class NewsController
class NewsController {
        async index(req, res) {

          const news = await News.all();

          const data = {
              message: "Menampilkan Berita",
              data: news
          };

          res.status(200).json(data);
      }

      async store(req, res) {
        
        const news = await News.create(req.body);
        const data = {
            message: "Menambahkan Berita",
            data: news
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

        const news = await News.find(id);

        if (news) {
            // hapus data
            await News.delete(id);
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

        const news = await News.find(id);

        if (news) {
            const data = {
                message: "Menampilkan detail berita",
                data: news,
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

      async search(req, res) {
        const { title } = req.params;
       
        const news = await News.search(title);
        if (news.length > 0) {
          const data = {
            message: "Get Resource By resource title",
            data: news,
          };
          res.status(200).json(data);
        } else {
          const data = {
            message: "Resource not found",
          };
          res.status(404).json(data);
        }
      }

      async sport(req, res) {
        const news = await News.sport();

        if (news.length > 0) {
            const data = {
                message :"Get Resource",
                data : news
            };
            res.status(200).json(data);
        }
        else {
            const data = {
            message : "Data is Empty",
        };
            res.status(200).json(data);
        }
      } 

      async finance(req, res) {
        const news = await News.finance();

        if (news.length > 0) {
            const data = {
                message :"Get Resource",
                data : news
            };
            res.status(200).json(data);
        }
        else {
            const data = {
            message : "Data is Empty",
        };
            res.status(200).json(data);
        }
      } 

      async automotive(req, res) {
        const news = await News.automotive();

        if (news.length > 0) {
            const data = {
                message :"Get Resource",
                data : news
            };
            res.status(200).json(data);
        }
        else {
            const data = {
            message : "Data is Empty",
        };
            res.status(200).json(data);
        }
      } 
}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;
