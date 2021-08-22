module.exports = {
  lintOnSave: false,
  // publicPath: "/",
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-confirm-dialog-fork/" : "/",
};
