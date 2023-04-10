---
title: StringUtils 字符串
---

::: info
Since：<badge text="0.0.1" vertical="middle"></badge>

作者：小何同学
:::

### StringUtils.isEmpty

<badge text="0.0.1" vertical="middle"></badge> 是否为空字符串

#### 参数

- `[str]` (string)：字符串

- `[trim=false]` (boolean)：是否 `String#trim()`

#### 返回

`boolean`：是否为空字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "";
const str3 = " ";
const str4 = "some string";

StringUtils.isEmpty(str1);
// => true

StringUtils.isEmpty(str2);
// => true

StringUtils.isEmpty(str3, true);
// => true

StringUtils.isEmpty(str4);
// => false
```
:::

### StringUtils.isNotEmpty

<badge text="0.0.1" vertical="middle"></badge> 是否为非空字符串

#### 参数

- `[str]` (string)：字符串

- `[trim=false]` (boolean)：是否 `String#trim()`

#### 返回

`boolean`：是否为非空字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "";
const str3 = " ";
const str4 = "some string";

StringUtils.isNotEmpty(str1);
// => false

StringUtils.isNotEmpty(str2);
// => false

StringUtils.isNotEmpty(str3, true);
// => false

StringUtils.isNotEmpty(str4);
// => true
```
:::

### StringUtils.split

<badge text="0.0.1" vertical="middle"></badge> 分割字符串

该方法与 `String#split` 差别是当 `str` 为 `null` 或者 `""` 时的返回值为 `[]`，并且可选择是否先去除首尾的分隔符再进行分割

#### 参数

- `[str]` (string)：待分割字符串

- `[separator=","]` (string)：分隔符

- `[options]` ([IStringUtilsSplitOptions](#istringutilssplitoptions))：配置项

#### 类型

##### IStringUtilsSplitOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|removeLeadingSeparator|是否移除开头的分隔符|boolean|-|`true`|
|removeTrailingSeparator|是否移除结尾的分隔符|boolean|-|`true`|

#### 返回

`string[]`：字符串分割结果数组

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "";
const str3 = "some,string";
const str4 = ";some;string;";

StringUtils.split(str1);
// => []

StringUtils.split(str2);
// => []

StringUtils.split(str3);
// => ["some", "string"]

StringUtils.split(str4, ";");
// => ["some", "string"]
// 字符串首尾的分隔符被去掉了，如果使用String#split的返回值为 ["", "some", "string", ""]
```
:::

### StringUtils.underline2hump

<badge text="0.0.1" vertical="middle"></badge> 下划线风格转驼峰风格字符串

#### 参数

- `[str]` (string)：下划线风格字符串

#### 返回

`string | null`：驼峰风格字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "some_string";

StringUtils.underline2hump(str1);
// => null

StringUtils.underline2hump(str2);
// => "someString"
```
:::

### StringUtils.hump2underline

<badge text="0.0.1" vertical="middle"></badge> 驼峰风格转下划线风格字符串

#### 参数

- `[str]` (string)：驼峰风格字符串

#### 返回

`string | null`：下划线风格字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "someString";

StringUtils.hump2underline(str1);
// => null

StringUtils.hump2underline(str2);
// => "some_string"
```
:::

### StringUtils.number2chinese

<badge text="0.0.4" vertical="middle"></badge> 阿拉伯数字转为中文数字

#### 参数

- `[num]` (number)：阿拉伯数字

#### 返回

`string`：中文数字

::: details 使用示例（点击展开查看）
```javascript
StringUtils.number2chinese(123);
// => 一百二十三
```
:::

### StringUtils.convertUrl

<badge text="0.0.6" vertical="middle"></badge> 转换Url相对路径

#### 参数

- `[value]` (string)：Url地址

- `[options]` ([IStringUtilsConvertUrlOptions](#istringutilsconverturloptions))：配置项

#### 类型

##### IStringUtilsConvertUrlOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|base|Url基地址|string|-|`StringUtils.ConvertUrlBase`|
|prefix|Url额外前缀|string / null|-|-|

#### 返回

`string | null`：转换后的Url地址

#### 配置

- `StringUtils.ConvertUrlBase=""` (string)：默认Url基地址

- `StringUtils.ConvertUrlStartsExcludes=["http","ws","udp","tcp"]` (string[])：例外的Url前缀

::: details 使用示例（点击展开查看）
```javascript
const url1 = null;
const url2 = "/someurl";
const url3 = "someurl";
const url4 = "https://someurl";

StringUtils.convertUrl(url1);
// => null

StringUtils.convertUrl(url2);
// => "#Url基地址/someurl"

StringUtils.convertUrl(url3);
// => "#Url基地址/someurl"
// 自动添加了斜杠

StringUtils.convertUrl(url4);
// => "https://someurl"
// 如果源路径带有协议头或者开头部分与base相同，则原样返回
```
:::

### StringUtils.uuid

<badge text="0.0.6" vertical="middle"></badge> 生成uuid

若未指定长度会生成rfc4122标准的uuid，否则只是生成随机字符串

#### 参数

- `[length]` (number)：生成uuid的长度

- `[options]` ([IStringUtilsUuidOptions](#istringutilsuuidoptions))：配置项

#### 类型

##### IStringUtilsUuidOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|radix|生成uuid的基数|number / null|-|-|
|characters|参与生成uuid的字符|string|-|`0~9A~Za~z`|

#### 返回

`string`：生成的uuid

::: details 使用示例（点击展开查看）
```javascript
StringUtils.uuid();
// => "3D617847-76B7-41A2-AFF9-59947C2ED853"

StringUtils.uuid(10);
// => "YETA5lGLyG"
```
:::

### StringUtils.formatFileSize

<badge text="0.0.6" vertical="middle"></badge> 格式化文件大小

#### 参数

- `[bit=0]` (number)：文件大小（单位：b）

- `[options]` ([IStringUtilsFormatFileSizeOptions](#istringutilsformatfilesizeoptions))：配置项

##### IStringUtilsFormatFileSizeOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|lowercase|单位是否小写|boolean|-|`true`|
|digits|小数位数|number / null|-|-|

#### 返回

`string`：格式化结果

::: details 使用示例（点击展开查看）
```javascript
StringUtils.formatFileSize(10000);
// => "9.765625kb"

StringUtils.formatFileSize(10000, {lowercase: false});
// => "9.765625KB"

StringUtils.formatFileSize(10000, {digits: 2});
// => "9.77kb"

StringUtils.formatFileSize(10000, {lowercase: false, digits: 2});
// => "9.77KB"
```
:::