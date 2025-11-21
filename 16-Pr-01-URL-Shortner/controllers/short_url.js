import shortid from "shortid";
import Url from "../models/Url.js";

export const shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();
  const shortUrl = `http://localhost:3000/${shortCode}`;

  // save to database
  const newUrl = new Url({ shortCode, longUrl });
  await newUrl.save();

  res.render("index.ejs", { shortUrl });
};

export const getOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;

  // find on database by shortcode
  const originalUrl = await Url.findOne({ shortCode });
  if (originalUrl) {
    res.redirect(originalUrl.longUrl);
  } else {
    res.json({ message: "Invalid shortCode", success: false });
  }
};
