/*
      js语言自身只有字符串数据类型，没有二进制数据类型

      buffer类， 该类用来创建一个专门存放二进制数据的缓存区

      一个buffer类似于一个整数数组，但它对应v8堆内存之外的一块原始内存，
      原始数据储存在buffer类的实例中

      创建buffer类  new Buffer(10)长度
                        new Buffer([....])数组
                        new Buffer('.....')字符串

      写入缓冲区:  buf.write(string,[offset],[length],[encoding])
      string 写入缓冲区的字符串
      offset 缓冲区开始写入的索引值，默认为0
      length 写入的字节数，默认为buffer.length
      encoding 编码格式，默认为utf-8

      返回  实际写入的大小，buffer空间不足，只会写入部分字符串


      从缓冲区读取数据：buf.toString([encoding],[start],[end])
      encoding 使用的编码，默认为'utf-8';
      start 指定开始读取的索引位置，默认为0
      end 结束位置，默认为缓冲区的末尾；

      返回  解码缓冲区数据并使用指定的编码返回字符串


      将buffer转换为JSON对象：
          buf.toJSON(buf);  返回JSON对象

      缓冲区合并：
          Buffer.concat(list,[totalLength]);
          list 用于合并的buffer对象数组列表；
          total 指定合并后Buffer对象的总长度。

        返回 一个或多个Buffer合并后的新Buffer对象。

      缓冲区比较：
          buf.compare(otherBuffer);
          otherBuffer  与buf对象比较的另一个Buffer对象

          返回 一个数字，表示buf在otherBuffer之前，之后，或相同

          0相同  -1   1

      拷贝缓冲区：
          buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd]);
          targetBuffer  要拷贝的Buffer对象
          targetStart   默认0，数字
          sourceStart   默认0，数字
          sourceEnd     默认buffer.length，数字
          没有返回值

      缓冲区裁剪：
          buf.slice([start],[end]);
          start 默认0，数字
          end  默认buffer.length，数字
          返回一个新的缓冲区，他和旧的缓冲区指向同一块内存，但是从索引start到end的位置剪切
*/

var buf = new Buffer('www');
// var len = buf.write('www.haha.com');
// console.log(buf.toString())

//
// for(var i=0;i<26;i++){
//   buf[i] = i+97;
// }
// console.log(buf.toString('utf-8',0,5));

// var json = buf.toJSON(buf);
// console.log(json);

// var buf1 = new Buffer('hahaha');
// var buf2 = new Buffer('heiheihei');
// var buf3 = Buffer.concat([buf1,buf2]);
// console.log(buf3.toString());


var buf1 = new Buffer('hahaha');
var buf2 = new Buffer('1111111111111');
buf1.copy(buf2);
console.log(buf2.toString());
// var buf3 = new Buffer('h');
// var num = buf1.compare(buf3);
// console.log(num);
