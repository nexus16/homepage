# HBLab Home page: http://hblab.vn

## Setting environment
- Nodejs
- Gulp
```
npm install gulp -g
```
- Sass (required `ruby`)
```
gem install sass
```
- Compass (required `ruby`)
```
gem install compass
```
- gulp-compass
```
npm install gulp-compass
```

## Run Project
 - Install lib
```
npm install
bower install
```

- Run project
```
gulp serve
```

- Build project
```actionscript
gulp build
# if errors, add an options `--force`
gulp build --force
```

- Run project with mode production after build
```
gulp serve:dist
```