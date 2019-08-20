const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
       {
            name: '陪你度过漫长岁月',
            artist: '陈奕迅',
            url: 'http://www.ytmp3.cn/down/33576.mp3',
            cover: '/img/suiyueshentou.png',
           
           
        },
        
        {
            name: '岁月神偷',
            artist: '金岐玟',
            url: 'http://www.ytmp3.cn/down/44537.mp3',
            cover: '/img/suiyueshentou.png',
        },
        
      {
        name: "红玫瑰",
        artist: '陈奕迅',
        url: 'http://www.ytmp3.cn/down/64341.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=559398238b025aafd33279cdc3d6cc59/4a36acaf2edda3ccf85966c308e93901203f9290.jpg',

      },
      
      {
        name: '回答（纯享版）',
        artist: 'Train',
        url: 'http://www.ytmp3.cn/down/73856.mp3',
        cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Train_50_Ways_to_Say_Goodbye.jpg/220px-Train_50_Ways_to_Say_Goodbye.jpg',
      },
      
      {
        name: '天份',
        artist: '薛之谦',
        url: 'http://www.ytmp3.cn/down/56232.mp3',
        cover: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e5df4849be1c8701d6b6b5e01f44f912/e1fe9925bc315c60ff049d4280b1cb134854778e.jpg',
      }
    ]
});
