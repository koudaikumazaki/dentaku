
var app = new Vue({ 
    // index.htmlのどこを対象としてVueを使用するかを定義
    el: '#app',
    data: {
        // v-modelのデフォルト値
        output: '0',
        // 繰り返し処理を行う配列をここに格納
        items: [
            ['7', '8', '9', '/'],
            ['4', '5', '6', '*'],
            ['1', '2', '3', '-'],
            ['0', '.', '+', '=']
        ]
    },
    methods: {
        // index.htmlで記述されているcalcメソッドを書いている。
        calc: function (cmd) {
            // switch文を指定しなかったのは条件に使用する引数が二種類存在していたから。
            if(cmd === '='){
                this.output = eval(this.output)
            }else if(cmd === 'C'){
                this.output = '0'
            }else if(this.output === '0') {
                this.output = cmd
            }else{
                this.output += cmd
            }
        }
    }
    // vuetify: new Vuetify()
})