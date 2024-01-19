// import database
const db = require("../config/database");
// membuat class News
class News {
  static all() {
      return new Promise((resolve, reject) => {
          // lakukan query ke db untuk ambil data
          const sql = "SELECT * FROM News";
          db.query(sql, (err, results) => {
              resolve(results);
          });
      });
   }
  
   static find (id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE id = ?";
        db.query(sql, id, (err, results) => {
            const news = results;
            resolve(news);
        });
    });
  }

  static async create(data) {
      const id = await new Promise((resolve, reject) => {

      const sql = "INSERT INTO news SET ?";
        db.query(sql, data, (err, results) => {
          resolve(results.insertId);
        });
    });
    
    const news = await this.find(id);
    return news; 
    }

   static async update(id, data) {
    // update data
    await new Promise((resolve, reject) => {
        // query untuk update data
        const sql = "UPDATE News SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
            resolve(results);
        });
    });

    // select data by id
    const News = await this.find(id);
    return News;
  }

  static async delete(id) {
    // query delete
    return new Promise((resolve, reject) => {
        // query sql
        const sql = "DELETE FROM News WHERE id = ?";
        db.query(sql, id, (err, results) => {
            resolve(results);
        });
    });
  }
  
  static async show(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM News WHERE id = ${id} `;
        db.query(sql, (err, results) => {
            resolve(results);
        });
    });
  }

  static search (title) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE title = ?";
        db.query(sql, title, (err, results) => {
            const news = results;
            resolve(news);
        });
    });
  }

  static sport() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE category = 'sport'";
        db.query(sql, (err, results) => {
            const news = results;
            resolve(news);
        });
    });
  }

  static finance() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE category = 'finance'";
        db.query(sql, (err, results) => {
            const news = results;
            resolve(news);
        });
    });
  }

  static automotive() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE category = 'automotive'";
        db.query(sql, (err, results) => {
            const news = results;
            resolve(news);
        });
    });
  }
}


// export class News
module.exports = News;
