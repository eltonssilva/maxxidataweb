exports.getUser = function (axios, tokenJTW) {
  return new Promise((resolve, reject) => {
 axios({
          method: 'get',
          url: `https://us-central1-maxxidata-9661f.cloudfunctions.net/users`,
          headers: {"Authorization" : `Bearer ${tokenJTW}`},
      }).then(resp => {
        resolve(resp.data);
      }).catch(err => {
        reject(err);
    });
  })
};

exports.putUser = function (axios, tokenJTW, data) {
  return new Promise((resolve, reject) => {
 axios({
          method: 'put',
          url: `https://us-central1-maxxidata-9661f.cloudfunctions.net/users`,
          headers: {"Authorization" : `Bearer ${tokenJTW}`},
          data
      }).then(resp => {
        resolve(resp.data);
      }).catch(err => {
        reject(err);
    });
  })
};

exports.putUserLevel = function (axios, tokenJTW, data) {
  return new Promise((resolve, reject) => {
 axios({
          method: 'put',
          url: `https://us-central1-maxxidata-9661f.cloudfunctions.net/users/level`,
          headers: {"Authorization" : `Bearer ${tokenJTW}`},
          data
      }).then(resp => {
        resolve(resp.data);
      }).catch(err => {
        reject(err);
    });
  })
};