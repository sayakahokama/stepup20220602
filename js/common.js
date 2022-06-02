$(function(){//jQueryのお約束

    // $("どこが").on("どうされた時",関数を実行(){
    //   実行したいプログラム
    //   実行したいプログラム
    //   実行したいプログラム

    // })
    // submitボタンがクリックされた時   
    // コンソールにhello worldを出力して

    // $("#submit_btn").on("click",function(e){
    //     e.preventDefault();
    //     let post_code = $("#post_code").val();
    //     console.log(post_code)
    //   })

    //   function zipCloud(){
    //       let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=9012405";

    //       fetch(url)//URLにリクエストを送る
    //       //結果を解析していくよ
    //       ,then(response => response.json())
    //       .then((data)=>{
    //           if(!data.results){
    //               render_html(date.message);
    //           }else{
    //               console.log(data);
    //           }
    //       })



    //   }

    //   zipCloud();
    // 入力フォームからユーザーが入力した郵便番号を受け取る
// 受け取った郵便番号をAPIのURLの後ろにつける
// 完成したURLでアクセスする（リクエストを送る）
// 結果を解析（データを取得）
// 取得したデータを加工してサイトに表示


$(function(){ //jQueryのお約束

    $("#submit_btn").on("click",function(e){
        e.preventDefault();
        let post_code = $("#post_code").val();
        // console.log(post_code);
        zipCloud(post_code);
    });

    function zipCloud(post_code){
        let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="+post_code;

        fetch(url)//urlにリクエストを送る
        //結果を解析していくよ
        .then(response => response.json())
        .then((data)=>{
            if(!data.results){
                render_html(data.message);
            }else{
                console.log(data);
                let results = data.results;
                let results_data = results["0"];

                let foemat_address =
                results_data.address1+results_data.address2+results_data.address3
                render_html(foemat_address)
            }
        })
        .catch((response)=>{
            console.info(response);
            render_html("エラーが発生しました");
        })
    }

    function render_html(message){
        $("#address p").text(message);
    }
// zipCloud();



}); //jQueryのお約束












});//jQueryのお約束