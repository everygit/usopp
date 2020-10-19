# usopp

[![image](https://img.shields.io/npm/v/usopp.svg)](https://www.npmjs.com/package/usopp)
[![](https://img.shields.io/npm/l/usopp.svg)](https://www.npmjs.com/package/usopp)
[![](https://img.shields.io/github/issues/everygit/usopp)](https://github.com/everygit/usopp/issues)

## Introduction

Tools that can improve the development efficiency of front-end engineers. The current functions are still very simple. For personal use, more people are welcome to join in the development and use.

## Install

```sh
npm install -g usopp
```

## Page

Create a html page template

```sh
usopp page index.html .
```

## Insert

Insert code snippets into the file, alias is `ins`

```sh
usopp insert cookie ./index.js -r 12
```

A code snippet called cookie is inserted in line 12 of the current file

```js
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
```

type | desc
--|--
cookie | Basic cookie operations, including reading, writing and deleting
vue | The basic structure of creating a multi-page vue


## project

Create different projects based on templates

```sh
usopp project simple dianfei ./demo/
```