# task-gulp

タスクランナーです。  
プロジェクト内に`package.json`と`gulpfile.js`を置いて  
`npm install`すれば使える筈です。  

## gulpのインストール

node.jsが必要です。  
gulpはグローバルとプロジェクト内に両方インストールしないと動きません。  


グローバルにインストール  
```npm install -g gulp```

プロジェクトのディレクトリに移動してインストール  
```npm install --save-dev gulp```

## package.jsonからプラグインをインストールする
以下のコマンドからpackage.jsonのdependencies  
に記述されているプラグインがインストールされます。  
```npm install```

## Task
### gulpfile.jsにあるタスク一覧です。

#### sassWatch
sass -w

#### compassWatch
compass -w

#### sass
sassでコンパイル  
autoprefixerでベンダープレフィックスを自動追加削除

#### compass
compassでsassをコンパイル  
autoprefixerでベンダープレフィックスを自動追加削除

#### minifycss
cssファイルを圧縮します。  
圧縮したファイルはcss-minディレクトリに入ります。

#### imagemin
画像を圧縮します。
圧縮したファイルはimgディレクトリに入ります。
※つまりオリジナルは無くなります。

#### default
autoprefixerでベンダープレフィックスを自動追加削除  
compassでsassをコンパイル  
cssファイルを圧縮

