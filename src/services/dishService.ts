import axios from "axios";

export const dishService = {
  query,
};
const API_URL = "http://localhost:2718/api/v1/dish";

async function query() {
  try {
    let res = await axios.get(API_URL);
    let dishes = res.data;
    return dishes;
  } catch (err) {
    console.log(err);
  }
}


