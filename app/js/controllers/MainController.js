module.exports = function($scope) {
    var imgDir = "assets/images/",
        imgParentDir = "../assets/images/";

    $scope.currentVideo = [];

    $scope.playVideo = function() {
        $scope.currentVideo.push({
            src: "https://www.youtube.com/embed/WspeHC7eoOI"});
    };

    $scope.stopVideo = function(event) {
        $scope.currentVideo.pop();
    };

    $scope.stopProp = function(event) {
        event.stopPropagation();
        event.preventDefault();
    };

    $scope.mainFocus = {
        image: imgDir + "main-focus-bg.png",
        callToAction: "assets/icons/play-icon.png"
    };

    $scope.titleImage = imgDir + "page-title.png";
    $scope.featureTitleImage = imgDir + "feature-title-image.png";

    $scope.subTitle = "In the not-too-distant future, next Sunday, \
        AD There was a man. There were some puppets. It was amazing \
        These are the experiments of the SOL";

    $scope.featured = {
        title: "Look what we found...",
        list: [
            {
                title: "Season 0 \nKTMA",
                image: imgParentDir + "exhibit-1.jpg",
                video: "https://www.youtube.com/embed/WspeHC7eoOI"
            },
            {
                title: "Comedy Central The Golden Years",
                image: imgParentDir + "exhibit-2.jpg",
                video: "https://www.youtube.com/embed/WspeHC7eoOI"
            },
            {
                title: "Sci-Fi, Crow's Voice, & Ran Chips",
                image: imgParentDir + "exhibit-3.jpg",
                video: "https://www.youtube.com/embed/WspeHC7eoOI"
            }
        ]
    };

    $scope.socialLinks = [
        {icon: "assets/icons/facebook.svg", link: "https://www.facebook.com"},
        {icon: "assets/icons/twitter.svg", link: "https://twitter.com"},
        {icon: "assets/icons/google-plus.svg", link: "https://plus.google.com"},
        {icon: "assets/icons/pinterest.svg", link: "https://www.pinterest.com"}
    ];

    $scope.info = [
        {icon: "facebook", text: "Help", link: "help"},
        {text: "Privacy & Terms", link: "link"},
        {text: "English", link: "link"}
    ];

    $scope.followUsOn = [
        {icon: "google+", text: "Help", link: "help"},
        {text: "blogger", link: "link"},
        {text: "twitter", link: "link"},
        {text: "youtube", link: "link"}
    ];

    $scope.footer = {
        left: [ {
            link:"http://rga.com",
            text: "Help" },  {
            link:"http://rga.com",
            text: "Privacy & Terms" },  {
            link:"http://rga.com",
            text: "English" }],
        right: [ {
            link:"http://rga.com",
            text: "follow us on" },  {
            link:"http://rga.com",
            text: "g+" },  {
            link:"http://rga.com",
            text: "B" },{
            link:"http://rga.com",
            text: "t" },{
            link:"http://rga.com",
            text: "yt" }],
    };


}
