# 类型
1. 原始类型：string number boolean undefined null symbol bigint
2. 引用类型：object array function date

# typeof
1. typeof可准确的判断除了null之外的所有原始类型，它的判断原理是，将变量值转换成二进制，通过判断二进制的前三位是否为0，来判断变量是不是原始类型，如果是原始类型，就返回原始类型的类型，如果是引用类型，就返回object。但是null被转为二进制后是一整串0，所以typeof null返回object。

2. typeof判断引用类型时，返回object，但是function能准确判断。


# instanceof
1. a instanceof b 用于判断a是否隶属于b这种类型（a是否是b的实例对象）。
2. 判断原理：通过判断a的隐式原型是否等于b的显示原型，如果不等，就顺着隐式原型链一直往上找，直到找到null为止，则返回false


# Object.prototype.toString.call(x).slice(8, -1)


# Array.isArray()
 专门用来判断一个值是不是数组类型



 [text](call.js)



