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
  
   static create(News) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Nesw SET ?";
        db.query(sql, News, (err, results) => {
            resolve(this.show(results.insertId));
        });
    });
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




}


// export class News
module.exports = News;
