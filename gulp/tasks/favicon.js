export const favicon = () => {
  return app.gulp
    .src(app.path.src.favicon)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.favicon))
    .pipe(app.plugins.browsersync.stream());
};
