// 外部データを取得
async function fetchData() {
  console.log('ユーザーデータの取得を開始します。');
  
  try {
    // 1. 外部サービスにリクエストを送り、ユーザーデータを取得する
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // 2. 取得したユーザーデータを JSON 形式に変換する
    const data = await response.json();

    // 3. 件数と各ユーザー名、終了メッセージをコンソールログへ出力する
    console.log('データ取得が完了しました。取得件数：' + data.length);
    console.log('ユーザー一覧：');
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
    console.log('ユーザーデータの取得が終了しました。');

  } catch (error) {
    console.error('エラー発生：', error);
  }
}

// 関数の呼び出し
console.log('fetchData()関数を実行します。');
fetchData();
console.log('fetchData()関数を実行しました。');

// 100ミリ秒ごとにメッセージを表示（非同期処理のタイミング確認用）
let count = 1;
const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count++}`);
  if (count > 10) clearInterval(interval);
}, 100);