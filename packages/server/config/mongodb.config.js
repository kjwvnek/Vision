const config = {
  dbuser: 'admin',
  dbpassword: 'q1w2e3r4',
  get url() {
    let url = 'mongodb://<dbuser>:<dbpassword>@ds211694.mlab.com:11694/vision';
    url = url.replace('<dbuser>', this.dbuser);
    url = url.replace('<dbpassword>', this.dbpassword);
    
    return url;
  }
};

module.exports = config;
