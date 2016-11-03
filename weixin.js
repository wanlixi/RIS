// 预加载完毕
// 微信共享组件

// 初始化WeixinApi，等待分享
WeixinApi.ready(function(Api) {

    // 微信分享的数据
    var wxData = {
        "appId": "", // 服务号可以填写appId
        "imgUrl" : 'http://ellemen.sinaapp.com/img/5.jpg',
        "link" : 'http://ellemen.sinaapp.com/index.html',
        "desc" : '男人们，护肤品真的不能省！但有这15件就够了',
        "title" : "《ELLEMEN睿士》年度理容大奖揭晓，15件权威单品为你保住青春。"
    };
 var wxCallbacks = {
        // 分享操作开始之前
        ready : function() {
        
        },
        // 分享被用户自动取消
        cancel : function(resp) {
         
        },
        // 分享失败了
        fail : function(resp) {
         
        },
        // 分享成功
        confirm : function(resp) {
            
            $.get("statistics.php",{act:"1"});
        },
        // 整个分享过程结束
        all : function(resp,shareTo) {
          // 显示失败
            //guest=true;
        }
    };
   
    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    Api.shareToFriend(wxData, wxCallbacks);

    // 点击分享到朋友圈，会执行下面这个代码
    Api.shareToTimeline(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    Api.shareToWeibo(wxData, wxCallbacks);

    // iOS上，可以直接调用这个API进行分享，一句话搞定
    Api.generalShare(wxData,wxCallbacks);
});
