(function() {
  'use strict';

  angular
      .module('hblab')
      .service('data', data);

  /** @ngInject */
  function data() {
    var dataCustomers = [
      {
        title: "OneofThem INC",
        url: "http://www.oneofthem.jp/",
        img1: "../assets/images/customer/oneofthem.png",
        img2: "../assets/images/customer/oneofthem_on.png"
      },
      {
        title: "Spicemart INC",
        url: "http://corp.spicemart.jp",
        img1: "../assets/images/customer/spicemart.png",
        img2: "../assets/images/customer/spicemart_on.png"
      },
      {
        title: "RJC INC",
        url: "https://www.rjc.co.jp/",
        img1: "../assets/images/customer/rjc.png",
        img2: "../assets/images/customer/rjc_on.png"
      },
      {
        title: "OneofThem INC",
        url: "http://www.oneofthem.jp/",
        img1: "../assets/images/customer/spicemart.png",
        img2: "../assets/images/customer/spicemart_on.png"
      },
      {
        title: "Spicemart INC",
        url: "http://corp.spicemart.jp",
        img1: "../assets/images/customer/spicemart.png",
        img2: "../assets/images/customer/spicemart_on.png"
      },
      {
        title: "RJC INC",
        url: "https://www.rjc.co.jp/",
        img1: "../assets/images/customer/rjc.png",
        img2: "../assets/images/customer/rjc_on.png"
      }
    ];
    var dataComments = [
      {
        content: "HBLabとのお付き合いは1年以上になりますが、常に高いパフォーマンスを発揮してくれるので大変感謝しています。 HBLabのメンバーは、日本でのビジネス経験のあるメンバーで構成されているので、日本語のコミュニケーションに何のハードルも無いのはもちろんのこと、最近では付き合いが長くなったこともあり、ただ要求をこなすだけでなく、積極的にプラスαの提案もしてくれるようになり大変助かっております。 これからもパートナーとして共に成長していけることを願っています。",
        img: "assets/images/team/thang.jpg",
        logo: "assets/images/customer/rjc_on.png",
        user: {
          name: "Yabuuchi",
          bussiness: "Director",
          company: "Spicemart INC"
        }
      },
      {
        content: "HBLab様は、社内メンバーに対して日本語教育や日本の習慣等を熱心に指導しているため、コミュニケーションも円滑に取れ、違和感無く業務を進めています。また、顧客の課題解決に向けた、メンバーの方々の取り組みについては、非常に関心しております。現在は、ラボ型のサービスを受けております。リーダーを中心とした素晴らしいチームワークで総合的な技術力が高いことはもちろん、丁寧でいて迅速にプロジェクトを進めていただけることで信頼性が非常に高いです。今後もお仕事を通してともに成長していけることを確信しております。",
        img: "assets/images/team/thang.jpg",
        logo: "assets/images/customer/rjc_on.png",
        user: {
          name: "Yamaguchi",
          bussiness: "Director",
          company: "Public Kitchen INC"
        }
      }
    ];
    var dataProducts = [
      {
        logo: "assets/images/products/logo_spicemart.png",
        title: "Sp!cemart",
        description: "Lorem ipsum dolor sit amet consectetur",
        background: "assets/images/products/spicemart.png",
        url: "http://spicemart.jp"
      },
      {
        logo: "assets/images/products/logo_lich.png",
        title: "Lịch phụng vụ",
        description: "Lorem ipsum dolor sit amet consectetur",
        background: "assets/images/products/lich.png",
        url: "",
        store: {
          android: "https://play.google.com/store/apps/details?id=vn.gametech.lichphungvu",
          apple: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=961335401"
        }
      },
      {
        logo: "assets/images/products/logo_freakingfuzzy.png",
        title: "Freaking Fuzzy",
        description: "Lorem ipsum dolor sit amet consectetur",
        background: "assets/images/products/freakingfuzzy.png",
        url: "",
        store: {
          android: "https://play.google.com/store/apps/details?id=vn.gametech.lichphungvu",
          apple: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=961335401"
        }
      }
    ];
    var dataServices = [
      {
        title: "Game Develoment",
        description: "We develop Mobile Game using Unity,Cocos, 2d-x, Html5",
        css: "game",
        icon: "assets/images/game.png"
      },
      {
        title: "App Develoment",
        description: "We develop Smartphone Application for ios, android, windowphone",
        css: "app",
        icon: "assets/images/app.png"
      },
      {
        title: "Web Develoment",
        description: "We develop Website from design to hosting",
        css: "web",
        icon: "assets/images/web.png"
      }
    ];
    
    var dataMembers = [
      {
        name: "",
        position: "",
        img1: "",
        img2: ""
      }
    ];

    this.getComments = getComments;
    this.getCustomers = getCustomers;
    this.getProducts = getProducts;
    this.getServices = getServices;
    this.getMembers = getMembers();

    function getComments() {
      return dataComments;
    }

    function getCustomers() {
      return dataCustomers;
    }

    function getProducts() {
      return dataProducts;
    }

    function getServices() {
      return dataServices;
    }

    function getMembers() {
      return dataMembers;
    }
  }

})();
