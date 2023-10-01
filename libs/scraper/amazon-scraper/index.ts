// "use server";

import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractDescription, extractPrice } from "../utils";
// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer");

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  //   curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_19631e48-zone-unblocker:yzq9dmvo2k1e -k https://lumtest.com/myip.json

  // BrightData proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Fetch the product page

    await page.goto(url);
    await page.waitForSelector("#productTitle"); // Adjust the selector as needed

    // Get the HTML content of the page
    const pageContent = await page.content();

    // Use Cheerio to parse the HTML
    const $ = cheerio.load(pageContent);

    // Extract product information
    const productTitle = $("#productTitle").text().trim();

    // const response = await axios.get(url, options);
    // const $ = cheerio.load(response.data);

    // Extract the product title
    // const title = $("#productTitle").text().trim();
    // const currentPrice = extractPrice(
    //   $(".priceToPay span.a-price-whole"),
    //   $(".a.size.base.a-color-price"),
    //   $(".a-button-selected .a-color-base")
    // );

    // const originalPrice = extractPrice(
    //   $("#priceblock_ourprice"),
    //   $(".a-price.a-text-price span.a-offscreen"),
    //   $("#listPrice"),
    //   $("#priceblock_dealprice"),
    //   $(".a-size-base.a-color-price")
    // );

    // const outOfStock =
    //   $("#availability span").text().trim().toLowerCase() ===
    //   "currently unavailable";

    // const images =
    //   $("#imgBlkFront").attr("data-a-dynamic-image") ||
    //   $("#landingImage").attr("data-a-dynamic-image") ||
    //   "{}";

    // const imageUrls = Object.keys(JSON.parse(images));

    // const currency = extractCurrency($(".a-price-symbol"));
    // const discountRate = $(".savingsPercentage").text().replace(/[-%]/g, "");

    // const description = extractDescription($);

    // Construct data object with scraped information
    const data = {
      url,
      //   currency: currency || "$",
      //   image: imageUrls[0],
      // title,
      //   currentPrice: Number(currentPrice) || Number(originalPrice),
      //   originalPrice: Number(originalPrice) || Number(currentPrice),
      //   priceHistory: [],
      //   discountRate: Number(discountRate),
      //   category: "category",
      //   reviewsCount: 100,
      //   stars: 4.5,
      //   isOutOfStock: outOfStock,
      //   description,
      //   lowestPrice: Number(currentPrice) || Number(originalPrice),
      //   highestPrice: Number(originalPrice) || Number(currentPrice),
      //   averagePrice: Number(currentPrice) || Number(originalPrice),
    };

    console.log(data);

    return data;
  } catch (error: any) {
    console.log(error);
  }
}
