// js中还专门提供了一块能力，用于和html中的元素进行交互

// 1. 监听翻译按钮的点击事件
let translateBtn = document.getElementById('translateBtn');
translateBtn.addEventListener('click', function () {
    // 先获取用户输入的文本和翻译目标语言
    let inputText = document.getElementById('input').value;
    let targetLang = document.getElementById('tgtLang').value;
    console.log(inputText, targetLang);
    document.getElementById('output').textContent = '翻译中...';

    // 将 inputText 传给ollama里面的 deepseek-r1（如何用代码链接ollama）
    // 在js中发送http请求给 http://localhost:11434/api/chat
    fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'deepseek-r1:1.5b',
            messages: [
                { role: 'system', content: `你是一个专业的翻译，擅长将一种语言翻译成${targetLang}，只返回最简单的翻译结果，不带任何解释，也不要带换行符` },
                { role: 'user', content: inputText }
            ],
            stream: false  // 是否开启流式输出
        })
    })
        .then(res => res.json())  // 将响应体转换为json格式
        .then((data) => {
            console.log(data.message.content);
            // 将译文显示在页面上
            // 清除data.message.content 中的换行符
            data.message.content = data.message.content.replace(/\n/g, '');
            document.getElementById('output').textContent = data.message.content;
        })

});




// function foo() {}
// var foo = function(a) {}
// let foo = (a) => {}