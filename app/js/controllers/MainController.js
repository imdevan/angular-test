module.exports = function($scope) {
    $scope.subTitle = "In the not-too-distant future, next Sunday, \
        AD There was a man. There were some puppets. It was amazing \
        These are the experiments of the SOL";

    $scope.featured = {
        title: "Look what we found...",
        list: [
            {
                title: "Season 0 \nKTMA",
                image: "exhibit-1.jpg"
            },
            {
                title: "Comedy Central The Golden Years",
                image: "exhibit-2.jpg"
            },
            {
                title: "Sci-Fi, Crow's Voice, & Ran Chips",
                image: "exhibit-3.jpg"
            }
        ]
    };

    $scope.social = [
        {icon: "facebook", link: "link"},
        {icon: "twitter", link: "link"},
        {icon: "google+", link: "link"},
        {icon: "pintrest", link: "link"}
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
}
