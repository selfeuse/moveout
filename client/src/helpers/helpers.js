import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'https://selfeuse-moveout.herokuapp.com/furniture';
//const baseURL = 'http://localhost:5000/furniture'

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getfurniture: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getfurnitures: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deletefurniture: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createfurniture: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updatefurniture: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};