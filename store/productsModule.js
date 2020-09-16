import api from '@/services/api/products';
import { buildSuccess, handleError } from '@/utils/utils.js';

const state = () => ({
  products: [],
  total: 0,
});
const actions = {
  list({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.products.length > 0) resolve();
      else {
        api
          .list()
          .then((response) => {
            commit('list', response.data.payload);
            resolve();
          })
          .catch((error) => {
            console.log('se produjo un error');
            handleError(error, commit, reject);
          });
      }
    });
  },
  create({ commit }, data) {
    return new Promise((resolve, reject) => {
      api
        .create(data)
        .then((res) => {
          let data = res.data.payload;
          commit('loadingModule/showLoading', true, { root: true });
          buildSuccess('Registro guardado con éxito', commit, resolve);
          commit('create', data);
          resolve();
        })
        .catch((error) => {
          handleError(error, commit, reject);
        });
    });
  },
  update({ commit }, { id, data }) {
    return new Promise((resolve, reject) => {
      api
        .update(id, data)
        .then((res) => {
          let data = res.data.payload;
          commit('loadingModule/showLoading', true, { root: true });
          buildSuccess('Registro guardado con éxito', commit, resolve);
          commit('update', {
            id,
            data,
          });
          resolve();
        })
        .catch((error) => {
          handleError(error, commit, reject);
        });
    });
  },
  delete({ commit }, id) {
    return new Promise((resolve, reject) => {
      api
        .delete(id)
        .then(() => {
          commit('loadingModule/showLoading', true, { root: true });
          buildSuccess('Registro eliminado con éxito', commit, resolve);
          commit('delete', id);
          resolve();
        })
        .catch((error) => {
          handleError(error, commit, reject);
        });
    });
  },
};
const mutations = {
  list(state, data) {
    state.products = data;
  },
  create(state, data) {
    state.products.push(data);
  },
  update(state, { id, data }) {
    const indexToUpdate = state.products.findIndex(
      (member) => member._id == id,
    );
    state.products.splice(indexToUpdate, 1, {
      ...data,
    });
  },
  delete(state, id) {
    const indexToDelete = state.products.findIndex(
      (member) => member._id == id,
    );
    state.products.splice(indexToDelete, 1);
  },
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
