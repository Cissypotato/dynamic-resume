
// // The code snippet you want to highlight, as a string
// var code = "var data = 1;";

// // Returns a highlighted HTML string
// var html = 




!function(){


    function writeCode(prefix,code,fn){
        let domCode=document.querySelector('#code')
        domCode.innerHTML=prefix||''
        let n=0
        let timer=setInterval(()=>{
            n++
            domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
            styleTag.innerHTML=prefix+code.substring(0,n)
            domCode.scrollTop=10000//或者domCode.scrollHeight
            if(n>code.length){
                window.clearInterval(timer)
                fn.call()
            }
            
        },100)  
    }


    var result=`
    /*
    *面试官你好，我是Cissy
    *我将以动画的形式介绍我自己
    *只用文字介绍太单调了
    *我就用代码来介绍吧
    *首先，准备一些样式
    */
    *{transition:all 1s;}
    html{background:rgb(222,222,222);font-size:16px;}
    #code{border:1px solid red;padding:16px;}

    /*我需要一点代码高亮*/
    .token.selector{color: #690;}
    .token.property{color: #905;}
    .token.function{color: #DD4A68;}

    /*加点3D效果*/
    #code{transform:rotate(360deg);}

    /*不玩了，我来介绍一下我自己吧*/
    /*我需要一张白纸*/
    #code{position:fixed;left:0;width:50%;height:100%;}
    #paper{position:fixed;right:0;width:50%;height:100%;background:#ddd;
        diplay:flex;justify-content:center;align-items:center;padding:16px;}
    #paper .content{background:#fff;width:100%;height:100%}
    `
    var result2=`
    #paper{}
    /*
    *接下来把markdown变成HTML
    */
    /*
    *接下来给HTML加样式
    */
    /*
    *这就是我会动的简历
    *谢谢观看
    */
    `
    var md=`
    #自我介绍

    我叫Cissy
    1995年4月出生
    毕业于四川农业大学
    自学前端半年

    #技能介绍

    熟悉JavaScript，CSS，HTML，JQuery

    #项目介绍

    1、xxxx轮播
    2、xxx画板
    3、

    #联系方式

    QQ 11234567789
    MB 138980848909


      `
    var code=document.querySelector('#code')
    var styleTag=document.querySelector('#styleTag')
    
    writeCode('',result,()=>{//writeCode异步函数
        console.log(3)
        createPaper(()=>{//createPaper同步函数
            writeCode(result,result2,()=>{
                writeMarkdown(md)
            })
        })
    });
    console.log('1')
    
    function writeMarkdown(markdown,fn){
        let domPaper=document.querySelector('#paper>.content')
        let n=0
        let timer=setInterval(()=>{
            n++
            domPaper.innerHTML=markdown.substring(0,n)
            domPaper.scrollTop=domPaper.scrollHeight
            if(n>markdown.length){
                window.clearInterval(timer)
                fn.call()
            }
            
        },10)  

    }
    function createPaper(fn){
        var paper=document.createElement('div')
        paper.id='paper'
        document.body.appendChild(paper)
        var content=document.createElement('pre')
        content.className='content'
        paper.appendChild(content)
        fn.call()
    }
    
    
}.call()

