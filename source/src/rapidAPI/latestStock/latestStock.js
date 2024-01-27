import { getLatesStockPriceAPI } from "../../apiConfig";
export const getLatestStock = {
  method: "GET",
  url: getLatesStockPriceAPI,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_TRADERZ_POINT_API_KEY_RAPIDAPI,
    "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
  },
};
