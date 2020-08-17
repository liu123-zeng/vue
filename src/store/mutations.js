let mutations = {
  imt(state, payload) {//state == state.js
    console.log('mutations', state, payload);
    console.log('+');
    state.count += payload.payload
  },
  dmt(state, payload) {//state == state.js
    // console.log('mutations', state, payload);
    // console.log('mutations');
    state.count -= payload
  }
};

export default mutations;