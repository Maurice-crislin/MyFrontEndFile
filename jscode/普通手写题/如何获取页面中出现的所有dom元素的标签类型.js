const all = Array.from(document.querySelectorAll('*'));
console.log(Object.prototype.toString.call(document.querySelectorAll('*')));//[object NodeList]
const toolObj={};

const resTag=[];

all.forEach((item)=>{
    if(!toolObj.hasOwnProperty([item.tagName])){
        toolObj[item.tagName] = true;
        resTag.push(item.tagName);
    }
})
console.log(resTag);
//['HTML', 'HEAD', 'META', 'TITLE', 'LINK', 'SCRIPT', 'STYLE', 'BODY', 'DIV', 'HEADER', 'NAV', 'A', 'IMG', 'UL', 'LI', 'INPUT', 'SPAN', 'I', 'svg', 'g', 'rect', 'path', 'SUP', 'defs', 'linearGradient', 'stop', 'use', 'H1', 'H2', 'P', 'TABLE', 'TBODY', 'TR', 'TD', 'CODE', 'H4', 'math', 'semantics', 'mrow', 'mi', 'mo', 'annotation', 'BUTTON', 'BR', 'TEXTAREA', 'LABEL', 'FOOTER']