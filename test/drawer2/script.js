
/*===================================
  hamburger Menu
===================================*/
//hmb_menuに#hamburger_menuを代入
let hmb_menu = document.getElementById('hamburger_menu');
//gnavに#gnavを代入
let gnav = document.getElementById('gnav');
//gnavLinksに#gnav aを全て代入
let gnavLinks = document.querySelectorAll('#gnav li');
//htmlScrollにhtmlを代入
let htmlScroll = document.querySelector('html');

//hmb_menuをクリックしたら
hmb_menu.addEventListener('click', () => {
  //hmb_menuのクラスリストに.activeを追加
  hmb_menu.classList.toggle('active');
  //gnavのクラスリストに.openを追加
  gnav.classList.toggle('open');
  //htmlScrollのクラスリストに.scrollPreventを追加
  htmlScroll.classList.toggle('scrollPrevent');
})

//gnavLinksの数だけループ
for (let i = 0; i < gnavLinks.length; i++) {
  //i番目のgnavLinksを変数gnavLinkに代入
  const gnavLink = gnavLinks[i];
  //gnavLinkがクリックされたら
  gnavLink.addEventListener('click', () => {
    //hmb_menuのクラスリストから.activeを削除
    hmb_menu.classList.remove('active');
    //gnabのクラスリストから.openを削除
    gnav.classList.remove('open');
    //もしhtmlScrollのクラスリストに.scrollPreventが含まれていたら
    if(htmlScroll.classList.contains('scrollPrevent')) {
      //htmlScrollのクラスリストから.scrollPreventを削除
      htmlScroll.classList.remove('scrollPrevent')
    }
  })
}









/*===================================
  Scroll Animation
===================================*/


//ターゲットを変数animeTargetsに代入(ここでは3つ)
let animeTargets = document.querySelectorAll('.animate__animated');
// console.log(animeTargets);

window.addEventListener('scroll', () => {
  for (let i = 0; i < animeTargets.length; i++) {
    //ターゲットのTOPの現在の座標（スクロールしていくと0に近づく）
    let animeTarget = animeTargets[i].getBoundingClientRect().top;
    //スクロール中の座標
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    //windowのTOPからのターゲットまでの実際の距離
    let offset = animeTarget + scroll;
    //現在開いているブラウザのドキュメントウィンドウの高さ
    let windowHeight = window.innerHeight;
    //ターゲットのアニメーションの種類をdata-animationから取得して変数animeに代入
    let anime = animeTargets[i].dataset.animation;
    // console.log(anime);
    //スクロールしてターゲットがウィンドウに現れたら
    if(scroll > offset - windowHeight + 200) {
      animeTargets[i].classList.add(anime, 'visi');
    } else {
      animeTargets[i].classList.remove(anime, 'visi');
    }

  }
})

/*===================================
 画像ファイルのアップロード
===================================*/

//idのfileをcaoImgに代入
let capImg = document.getElementById('file');

//capOmgのchange変化をイベントでファイルを選択をキャッチ
capImg.addEventListener('change',(e) => {
  //eオブジェクトの中のターゲットの中のfilesの中の0番目
  //e.targetに格納されている配列形式のfilesオブジェクトの0番目にう選択したファイルを変数fileに代入
  let file =e.target.files[0];

  //FileReaderオブジェクトを作成して、変数flrdに代入
  let flrd = new FileReader();

  //readAsDataURLメソッドに選択したアイルオブジェクトを渡すと
  //resultプロパティにurl形式でデータが入る
  flrd.readAsDataURL(file);

  //flrdで選択したファイルの読み込みが完了したら
  flrd.addEventListener('load',()=> {
    //flrdに代入されたFileReadrオブジェクトのresultのプロパティの値を変数urlに代入
    let url =flrd.result;

    //Imageオブジェクトを作成して、変数imgに代入
    let img = new Image();
    //srcにurlを代入する
    img.src = url;
    
    //#img_wrapperにimgオブジェクト追加
    document.getElementById('img_wrapper').appendChild(img);

  })
})


// window.addEventListener('scroll', () => {
//   let scroll = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(scroll);
// })
