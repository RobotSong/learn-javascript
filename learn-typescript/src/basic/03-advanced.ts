// 类型保护
// 1. TypeScript 能够在特定的区块中保证变量属于某种确定的类型
// 2. 可以在此区块中放心地引用此类型的属性, 或者调用此类型的方法
enum Type {
    Strong,
    Week
}

class Java {
    helloJava() {
        console.log('Hello Java!');
    }
    java: any;
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript!');
    }
    javascript: any;
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
    let lang = type == Type.Strong ? new Java() : new JavaScript();
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    // 使用 类型断言
    // if ((lang as Java ).helloJava) {
    //     (lang as Java).helloJava();
    // }
    // else {
    //     (lang as JavaScript).helloJavaScript();
    // }
    // 类型保护: 1. 使用 instanceof 关键字
    // if ( lang instanceof Java ) {
    //     lang.helloJava();
    // }  
    // else {
    //     lang.helloJavaScript();
    // }
    // 类型保护: 2. 使用 in 关键字
    // if ('java' in lang) {
    //     lang.helloJava();
    // }
    // else {
    //     lang.helloJavaScript();
    // }
    // 类型保护: 3. typeof 关键字
    if (typeof x === 'string') {
        x.length;
    } else {
        x.toFixed();
    }

    return lang;
}

getLanguage(Type.Strong, '2');