var ids = {
  facebook: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  google: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
  }
};

module.exports = ids;
