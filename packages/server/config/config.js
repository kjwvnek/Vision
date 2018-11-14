const config = {
  server: {
    port: 8000
  },
  mongodb: {
    dbuser: 'admin',
    dbpassword: 'netcon1234',
    get url() {
      let url = 'mongodb://<dbuser>:<dbpassword>@ds211440.mlab.com:11440/netcon';
      url = url.replace('<dbuser>', this.dbuser);
      url = url.replace('<dbpassword>', this.dbpassword);
      
      return url;
    }
  }
};

module.exports = config;
