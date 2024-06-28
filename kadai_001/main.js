//  ①データータイプ文字列の変数を用意
let untyped = '';
// ②入力済みの正タイプの文字列を入れる箱
let typed = '';
// ④スコア数を入れる箱
let score = 0;

// ①HTML要素を取得→定数に代入
const untypedfield = document.getElementById('untyped');
// ②正タイプ処理のため
const typedfield = document.getElementById('typed');
// ②誤タイプ処理のため
const wrap = document.getElementById('wrap');
// ③スタートボタンの実装のため
const start = document.getElementById('start');
// ③timer実装のため
const count = document.getElementById('count');
// ⑤現在の正タイプ数を表示のため
const typeCounter = document.getElementById('typeCounter');

//  ①画面に表示させるテキストの配列
const textLists = [
   'Hello World','This is my App','How are you?',
   'Today is sunny','I love JavaScript!','Good morning',
   'I am Japanese','Let it be','Samurai',
   'Typing Game','Information Technology',
   'I want to be a programmer','What day is today?',
   'I want to build a web app','Nice to meet you',
   'Chrome Firefox Edge Safari','machine learning',
   'Brendan Eich','John Resig','React Vue Angular',
   'Netscape Communications','undefined null NaN',
   'Thank you very much','Google Apple Facebook Amazon',
   'ECMAScript','console.log','for while if switch',
   'var let const','Windows Mac Linux iOS Android',
   'programming'
];
 
 // ①ランダムなテキストを表示
 const createText = () => {
   // 新しくテキストを表示させるためにクリアする
   typed = '';
   typedfield.textContent = typed;

   // Math.random〜で配列のランダムな数字をインスタンス化
   // Math.floorで整数にインスタンス化
   let random = Math.floor(Math.random()* textLists.length);
   // randomでインスタンス化した数値をuntypedに代入
   untyped = textLists[random];
   untypedfield.textContent = untyped;
   };
 
// ②キー入力の判定
//  addEventListenerの情報が'e'に引き渡される
// 通常'e' 'event'という引数で渡される
const keyPress = e => {

   // 誤タイプ処理
   // ブラウザ上で押されたキーが、データー上の文字（一文字目）と合っているか判定する処理
   if (e.key !== untyped.substring(0,1)) {
      wrap.classList.add('mistyped');
      // メソッド'setTimeout'一定時間後に処理を行うメソッド→０、１秒後にclass'mistyped'を'remove'する
      setTimeout(() => {
         wrap.classList.remove('mistyped');
      },100);
      // returnだけ書くと引数をわたすのではなく、keyPressのその後の処理を行わずに終了させる
      return;
   }

   // 正タイプ処理
   // scoreをインクリメント
   score++;
   // typed + untyped.substring
   // untyped.substring(開始インデックス[, 終了インデックス]);
   // substring(0,1)で一つ目の文字をカット
   typed += untyped.substring(0,1);
   // 「終了インデックス」は省略可能で、省略すると開始インデックス以降の文字列をすべて抽出します。
   untyped = untyped.substring(1);
   typedfield.textContent = typed;
   untypedfield.textContent = untyped;
   typeCounter.textContent = score;

   // テキストがなくなったら新しいテキストを表示
   if (untyped === '') {
      createText();
   }
};
 
// タイピングスキルのランクを判定
 const rankCheck = score => {
   // ${変数名}で変数を表示する機能（テンプレートリテラル）
   // return '${score}文字打てました！';

   let text = '';

   if (score < 100) {
      text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
   } else if(score < 200) {
      text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;    
   } else if(score < 300) {
      text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;    
   } else if(score >= 300) {
      text = `あなたのランクはSです。\nおめでとうございます!`;    
   }

   // 生成したメッセージと一緒に文字列を返す
   // 関数内の変数や処理を外に出すときはreturnで戻す
   return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
 };
 
//④ゲームを終了　'timer'→'gameOver'→'rankCheck'→'gameOver'
//メソッド'timer'でtimeが０になると作動
 const gameOver = id => {
   // メソッド'timer'のsetIntervalを止めるメソッド
   clearInterval(id);
   // 'confirm'は引数、この場合'rankCheck'の戻り値`${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`をブラウザ上に表示する
   
   const result = confirm(rankCheck(score));
   // 'confirm'のダイアログでユーザーがokをクリックしたら定数'result’にtrueが戻る。逆もまた然り
   if (result == true) {
      window.location.reload();
   }
 };

 // ③カウントダウンタイマー
 const timer = () => {
   // タイマー部分のHTML要素（p要素）を取得する 
   let time = count.textContent
   // タイマー処理
   const id = setInterval(() => {
      // time = time -1;
      time--;
      count.textContent = time;
      if(time <= 0) {
         gameOver(id);
      }
   }, 1000);

 };
 
//  const timer = () => {
//    const id = setInterval(() => {
//       count--;
//       if(count <= 0) {
//          clearInterval(id);
//       }
//       count.textContent = count;
//    }, 1000);
//  };


//  ③スタートボタンを’click’したらが作動
 start.addEventListener('click', () => {
   timer();
   createText();
   // スタートボタンを’click’したら
   start.style.display = 'none';
   typeCounter.style.display = 'block';
   //  キーを入力したら関数②'keyPress'が作動
   document.addEventListener('keypress', keyPress);
 });

//  デフォの画面
 untypedfield.textContent = 'スタートボタンで開始！'
 
