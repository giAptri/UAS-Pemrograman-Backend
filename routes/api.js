// import NewsController
const NewsController = require("../controllers/NewsController.js");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello News API Express");
});

// Membuat routing news
router.get('/news', NewsController.index);
router.post('/News', NewsController.store);
router.put('/News/:id', NewsController.update);
router.delete('/News/:id', NewsController.destroy);
router.get('/News/:id', NewsController.show);
router.get('/News/search/:title', NewsController.search);
router.get('/News/category/sport', NewsController.sport);
router.get('/News/category/finance', NewsController.finance);
router.get('/News/category/automotive', NewsController.automotive);
// export router
module.exports = router;
