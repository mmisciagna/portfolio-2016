var video = angular.module('video.model', []);


// Video model constructor
video.Model = function() {
  this.videos = [
    {
      id: '0iQQ4iBIOw4',
      iframe:
          '<iframe ' +
              'class="video__iframe"' +
              'src="//www.youtube.com/embed/0iQQ4iBIOw4?autoplay=1' +
                  '&modestbranding=1&rel=0&showinfo=0"' +
              'frameborder="0"' +
              'allowfullscreen>' +
          '</iframe>',
      link: 'https://my-fiber-dot-show.googleplex.com/my-fiber/#/home/pared',
      title: 'My Fiber'
    },
    {
      id: 'lcxHpMJFTOY',
      iframe:
          '<iframe ' +
              'class="video__iframe"' +
              'src="//www.youtube.com/embed/lcxHpMJFTOY?autoplay=1' +
                  '&modestbranding=1&rel=0&showinfo=0"' +
              'frameborder="0"' +
              'allowfullscreen>' +
          '</iframe>',
      link: 'https://fiber-global-nav-dot-show.googleplex.com/' +
            'fiber-global-nav/#/fiber',
      title: 'Fiber Global Nav'
    }
  ];
};


// Returns the videos
video.Model.prototype.getVideos = function() {
  return this.videos;
};

video.service('VideoModel', video.Model);
