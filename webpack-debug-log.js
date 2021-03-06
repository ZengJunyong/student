var config = {
    build: {
        env: {NODE_ENV: '"production"'},
        index: '/Users/junyong/elance/student/dist/index.html',
        assetsRoot: '/Users/junyong/elance/student/dist',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {NODE_ENV: '"development"'},
        port: 8080,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
}

var webpackConfigDev = {
    "entry": {"app": ["./build/dev-client", "./src/main.js"]},
    "output": {
        "path": "/Users/junyong/elance/student/dist",
        "publicPath": "/",
        "filename": "[name].js",
        "libraryTarget": "var",
        "sourceMapFilename": "[file].map[query]",
        "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
        "hotUpdateMainFilename": "[hash].hot-update.json",
        "crossOriginLoading": false,
        "hashFunction": "md5",
        "hashDigest": "hex",
        "hashDigestLength": 20,
        "sourcePrefix": "\t",
        "devtoolLineToLine": false
    },
    "resolve": {
        "extensions": ["", ".js", ".vue", ".json"],
        "fallback": ["/Users/junyong/elance/student/node_modules"],
        "alias": {
            "vue$": "vue/dist/vue.common.js",
            "src": "/Users/junyong/elance/student/src",
            "assets": "/Users/junyong/elance/student/src/assets",
            "components": "/Users/junyong/elance/student/src/components"
        },
        "fastUnsafe": [],
        "packageAlias": "browser",
        "modulesDirectories": ["web_modules", "node_modules"],
        "packageMains": ["webpack", "browser", "web", "browserify", ["jam", "main"], "main"]
    },
    "resolveLoader": {
        "fallback": ["/Users/junyong/elance/student/node_modules"],
        "fastUnsafe": [],
        "alias": {},
        "modulesDirectories": ["web_loaders", "web_modules", "node_loaders", "node_modules"],
        "packageMains": ["webpackLoader", "webLoader", "loader", "main"],
        "extensions": ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"],
        "moduleTemplates": ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
    },
    "module": {
        "loaders": [{"test": {}, "loader": "vue-style-loader!css-loader"}, {
            "test": {},
            "loader": "vue-style-loader!css-loader"
        }, {"test": {}, "loader": "vue-style-loader!css-loader!less-loader"}, {
            "test": {},
            "loader": "vue-style-loader!css-loader!sass-loader?indentedSyntax"
        }, {"test": {}, "loader": "vue-style-loader!css-loader!sass-loader"}, {
            "test": {},
            "loader": "vue-style-loader!css-loader!stylus-loader"
        }, {"test": {}, "loader": "vue-style-loader!css-loader!stylus-loader"}, {
            "test": {},
            "loader": "vue"
        }, {
            "test": {},
            "loader": "babel",
            "include": ["/Users/junyong/elance/student/src"],
            "exclude": {}
        }, {"test": {}, "loader": "json"}, {
            "test": {},
            "loader": "url",
            "query": {"limit": 10000, "name": "static/img/[name].[hash:7].[ext]"}
        }, {"test": {}, "loader": "url", "query": {"limit": 10000, "name": "static/fonts/[name].[hash:7].[ext]"}}],
        "unknownContextRequest": ".",
        "unknownContextRecursive": true,
        "unknownContextRegExp": {},
        "unknownContextCritical": true,
        "exprContextRequest": ".",
        "exprContextRegExp": {},
        "exprContextRecursive": true,
        "exprContextCritical": true,
        "wrappedContextRegExp": {},
        "wrappedContextRecursive": true,
        "wrappedContextCritical": false
    },
    "vue": {
        "loaders": {
            "css": "vue-style-loader!css-loader",
            "postcss": "vue-style-loader!css-loader",
            "less": "vue-style-loader!css-loader!less-loader",
            "sass": "vue-style-loader!css-loader!sass-loader?indentedSyntax",
            "scss": "vue-style-loader!css-loader!sass-loader",
            "stylus": "vue-style-loader!css-loader!stylus-loader",
            "styl": "vue-style-loader!css-loader!stylus-loader"
        }, "postcss": [null]
    },
    "devtool": "#eval-source-map",
    "plugins": [{"definitions": {"process.env": {"NODE_ENV": "\"development\""}}}, {}, {}, {}, {
        "options": {
            "template": "html-webpack-plugin/lib/loader.js!/Users/junyong/elance/student/index.html",
            "filename": "index.html",
            "hash": false,
            "inject": true,
            "compile": true,
            "favicon": false,
            "minify": false,
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "title": "Webpack App",
            "xhtml": false
        }
    }, {
        "compilationSuccessInfo": {},
        "shouldClearConsole": true,
        "formatters": [null, null],
        "transformers": [null, null, null]
    }],
    "debug": false,
    "cache": true,
    "context": "/Users/junyong/elance/student",
    "target": "web",
    "node": {
        "console": false,
        "process": true,
        "global": true,
        "setImmediate": true,
        "__filename": "mock",
        "__dirname": "mock"
    },
    "optimize": {"occurenceOrderPreferEntry": true}
}

var webpackConfigProduction = {
    "entry": {"app": "./src/main.js"},
    "output": {
        "path": "/Users/junyong/elance/student/dist",
        "publicPath": "/",
        "filename": "static/js/[name].[chunkhash].js",
        "chunkFilename": "static/js/[id].[chunkhash].js"
    },
    "resolve": {
        "extensions": ["", ".js", ".vue", ".json"],
        "fallback": ["/Users/junyong/elance/student/node_modules"],
        "alias": {
            "vue$": "vue/dist/vue.common.js",
            "src": "/Users/junyong/elance/student/src",
            "assets": "/Users/junyong/elance/student/src/assets",
            "components": "/Users/junyong/elance/student/src/components"
        }
    },
    "resolveLoader": {"fallback": ["/Users/junyong/elance/student/node_modules"]},
    "module": {
        "loaders": [{
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap"
        }, {
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap"
        }, {
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!less-loader?sourceMap"
        }, {
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap"
        }, {
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap"
        }, {
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap"
        }, {
            "test": {},
            "loader": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap"
        }, {"test": {}, "loader": "vue"}, {
            "test": {},
            "loader": "babel",
            "include": ["/Users/junyong/elance/student/src"],
            "exclude": {}
        }, {"test": {}, "loader": "json"}, {
            "test": {},
            "loader": "url",
            "query": {"limit": 10000, "name": "static/img/[name].[hash:7].[ext]"}
        }, {"test": {}, "loader": "url", "query": {"limit": 10000, "name": "static/fonts/[name].[hash:7].[ext]"}}]
    },
    "vue": {
        "loaders": {
            "css": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap",
            "postcss": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap",
            "less": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!less-loader?sourceMap",
            "sass": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap",
            "scss": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap",
            "stylus": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap",
            "styl": "/Users/junyong/elance/student/node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"extract\":true,\"remove\":true}!vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap"
        }, "postcss": [null]
    },
    "devtool": "#source-map",
    "plugins": [{"definitions": {"process.env": {"NODE_ENV": "\"production\""}}}, {"options": {"compress": {"warnings": false}}}, {}, {
        "filename": "static/css/[name].[contenthash].css",
        "options": {},
        "id": 1
    }, {
        "options": {
            "template": "index.html",
            "filename": "/Users/junyong/elance/student/dist/index.html",
            "hash": false,
            "inject": true,
            "compile": true,
            "favicon": false,
            "minify": {"removeComments": true, "collapseWhitespace": true, "removeAttributeQuotes": true},
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "title": "Webpack App",
            "xhtml": false,
            "chunksSortMode": "dependency"
        }
    }, {
        "chunkNames": "vendor",
        "ident": "/Users/junyong/elance/student/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js0"
    }, {
        "chunkNames": "manifest",
        "selectedChunks": ["vendor"],
        "ident": "/Users/junyong/elance/student/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js1"
    }]
}