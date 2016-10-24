var video = angular.module('video.model', []);


// Video model constructor
video.Model = function() {
  this.videos = [
    {
      challenges: [
        'For testing, the UX Researcher wanted to adjust the content based on the user so using Firebase to let her do that without my support or getting into the code herself was important. Firebase also allowed for the user to update content (i.e. Network name, password, contact info) in real-time while reflecting the updates on every page of the prototype.',
        'Angular\'s Material grid layout doesn\'t allow the card height to adjust with the content. Using the Masonry JS plugin to allow for dynamic card heights was an easy way to achieve the designer\'s goal while at the same time adding a nice animation when the cards reorganize themselves on window resize.'
      ],
      goal: 'Build a responsive prototype to the designer\'s pixel-perfect design for mobile testing using Material design elements.',
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
      role: '20% UX Engineer',
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
