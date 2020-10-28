// export const state = () => ({
//          list: [{ name: "bhaskar", branch: "backend" }],
//        });
  
//   export const mutations = {
//     STORE_JOB_IDS(state, job_ids) {
//       state.job_ids = job_ids;
//     },
//   };

  // export const actions = {
  //   storeJobIds({ commit }, job_ids) {
  //     commit("STORE_JOB_IDS", job_ids);
  //   },
  // };
  
  // export const getters = {
  //          getJobIds(state) {
  //            return state.job_ids;
  //          },
  //        };
import Vuex from 'vuex'
  import state from "./state";
  import actions from "./actions";
  import mutations from "./mutations";
  import getters from "./getters";



  export default {
    state,
    actions,
    mutations,
    getters,
  };