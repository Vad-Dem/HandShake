import fileInclude from "gulp-file-include";
import webpHtml from "gulp-webp-html";
import versionNumber from "gulp-version-number";
import svgInclude from "gulp-embed-svg";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(webpHtml())
    .pipe(fileInclude())
    .pipe(
      svgInclude({
        selectors: ".include-svg",
        root: `${app.path.src.svgInclude}`,
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
