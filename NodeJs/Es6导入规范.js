//node.js不支持es6的import  ，需要使用babel
import { sub, sum } from "./Es6导出规范.js";
console.log(sub(2, 3));

import es from "./Es6导出规范.js";
console.log(es.sub(2, 4));